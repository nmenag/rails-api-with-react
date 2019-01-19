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
end