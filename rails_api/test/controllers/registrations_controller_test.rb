require 'test_helper'

class RegistrationsControllerTest < ActionDispatch::IntegrationTest
  test 'POST#create: creates a new user' do
    assert_difference 'User.count', 1, 'Expected to create a user' do
      post registrations_url, xhr: true, as: :json, params: {
        user: { email: 'new_user@test.com', password: '12345678' }
      }
    end

    user = User.find_by_email('new_user@test.com')

    assert_response :success
    assert_not_nil user
    assert_not_nil user.auth_token
  end

  test 'PUT#update updates user info' do
    user = users(:user_1)
    put registration_url(user.id), xhr: true, as: :json, params: {
      user: { email: 'test_update@test.com' }
    }, headers: {
      'HTTP_AUTHORIZATION': user.auth_token
    }

    assert_response :success
    body = JSON.parse(response.body)
    assert_equal 'test_update@test.com', body['email']
  end
end
