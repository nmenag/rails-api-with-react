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
end
