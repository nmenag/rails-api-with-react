require 'test_helper'

class InvoicesControllerTest < ActionDispatch::IntegrationTest
  test 'GET#index return invoices of current user' do
    user = users(:user_1)
    get invoices_url, xhr: true, headers: { 'HTTP_AUTHORIZATION': user.auth_token }
    assert_response :success
    body = JSON.parse(response.body)
    assert_not_nil body
    assert_equal user.invoices.size, body.size
  end

  test 'GET#index without credentials return 401 Unauthorized' do
    get invoices_url, xhr: true
    assert_response :unauthorized
  end

  test 'GET#show return an invoice of current user' do
    user = users(:user_1)
    invoice = invoices(:invoice_1)
    get invoice_url(invoice), xhr: true, headers: { 'HTTP_AUTHORIZATION': user.auth_token }
    assert_response :success
    body = JSON.parse(response.body)
    assert_not_nil body
    assert_equal invoice.id, body['id']
  end

  test 'GET#show without credentials return 401 Unauthorized' do
    invoice = invoices(:invoice_1)
    get invoice_url(invoice), xhr: true
    assert_response :unauthorized
  end

  test 'GET#show without record exist return 404 not found' do
    user = users(:user_1)
    get invoice_url(23), xhr: true, headers: { 'HTTP_AUTHORIZATION': user.auth_token }
    assert_response :not_found
  end

  test 'POST#create creates a new invoice' do
    product_1 = products(:product_1)
    product_2 = products(:product_2)
    assert_difference 'Invoice.count', 1, 'Expected to create an invoice' do
      post invoices_url, xhr: true, as: :json, params: {
        invoices: {
          number: 4, invoice_date: Date.today,
          items_attributes: [
            {
              quantity: 1,
              product_id: product_1.id
            },
            {
              quantity: 1,
              product_id: product_2.id
            }
          ]
        }
      }, headers: { 'HTTP_AUTHORIZATION': users(:user_1).auth_token }
    end

    assert_response :success
    body = JSON.parse(response.body)
    assert_equal body['number'], 4
    assert_equal  body['invoice_date'], Date.today.strftime

    invoice = Invoice.last
    assert_equal invoice.items.size, 2
    assert_equal invoice.items.first.product, product_1
    assert_equal invoice.items.second.product, product_2
  end

  test 'POST#create without credentials returns 401 Unauthorized' do
    post invoices_url, xhr: true, as: :json, params: {
      invoices: {  number: 4, invoice_date: Date.today }
    }

    assert_response :unauthorized
  end

  test 'PUT#update update  an invoice' do
    invoice = invoices(:invoice_1)
    user = invoice.user
    put invoice_url(invoice), xhr: true, as: :json, params: {
      invoices: {  number: 5, invoice_date: Date.today + 1.day }
    }, headers: { 'HTTP_AUTHORIZATION': user.auth_token }
    assert_response :success
    body = JSON.parse(response.body)
    assert_equal 5, body['number']
    assert_equal (Date.today + 1.day).strftime, body['invoice_date']
  end

  test 'PUT#update without credentials returns 401 Unauthorized' do
    invoice = invoices(:invoice_1)
    put invoice_url(invoice), xhr: true, as: :json, params: {
      invoices: {  number: 5, invoice_date: Date.today + 1.day }
    }

    assert_response :unauthorized
  end

  test 'DELETE#destroy destroy invoice' do
    invoice = invoices(:invoice_1)
    user = invoice.user
    assert_difference 'Invoice.count', -1, 'Expected to destroy an invoice' do
      delete invoice_url(invoice), xhr: true, headers: {
        'HTTP_AUTHORIZATION': user.auth_token
      }
    end
    assert_response :success
  end

  test 'Delete#destroy invoice without credential return 401 Unauthorized' do
    invoice = invoices(:invoice_1)
    delete invoice_url(invoice), xhr: true
    assert_response :unauthorized
  end
end