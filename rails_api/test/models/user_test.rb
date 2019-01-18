# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           default(""), not null
#  password_digest :string           not null
#  auth_token      :string           default(""), not null
#  role            :integer          default("user"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'valid user' do
    user = users(:user_1)
    assert user.valid?
  end

  test 'invalid without password' do
    user = User.new(email: "test.invalid@test.com")
    refute user.valid?
    assert user.errors[:password].present?
  end

  test 'invalid without email format valid' do
    user = User.new(email: 'John')
    refute user.valid?
    assert user.errors[:email].present?
  end

  test 'valid roles' do
    assert_equal User.roles.keys, %w(user admin)
  end

  test '#invoices' do
    user = users(:user_1)
    invoice = invoices(:invoice_1)
    assert_equal user.invoices.size, 2
  end
end
