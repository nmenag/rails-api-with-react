require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test 'POST#create: sign in user' do
    user = users(:user_1)
    user.update(password: '12345678')
    previous_token = user.auth_token
    post sessions_url, xhr: true, as: :json, params: {
      session: { email: user.email, password: '12345678' }
    }

    assert_response :success
    assert_not_equal previous_token, user.reload.auth_token
  end

  test 'POST#create:  invalid credentials returns 401 Unauthorized' do
    post sessions_url, xhr: true, as: :json, params: {
      session: { email: 'user_1@test.com', password: 'test1234' }
    }

    assert_response :unauthorized
  end
end
