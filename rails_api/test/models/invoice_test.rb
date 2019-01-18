# == Schema Information
#
# Table name: invoices
#
#  id           :integer          not null, primary key
#  number       :integer          default(0), not null
#  invoice_date :date             not null
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class InvoiceTest < ActiveSupport::TestCase
  test 'valid invoice' do
    invoice = invoices(:invoice_1)
    assert invoice.valid?
  end

  test 'invalid invoice without number' do
    invoice = Invoice.new(invoice_date: Date.today)
    refute invoice.valid?
    assert invoice.errors[:number].present?
  end

  test 'invalid invoice without invoice_date' do
    invoice = Invoice.new(number: 3)
    refute invoice.valid?
    assert invoice.errors[:invoice_date].present?
  end

  test '#user' do
    invoice = invoices(:invoice_1)
    user = users(:user_1)
    assert invoice.user, user
  end

  test 'valid number unique with by user' do
    invoice_1 = invoices(:invoice_1)
    user_1 = users(:user_1)
    invoice_2 = invoices(:invoice_3)
    user_2 = users(:user_2)
    assert invoice_1.valid?
    assert invoice_2.valid?
  end

  test 'invalid number unique with by user' do
    invoice_1 = invoices(:invoice_1)
    user_1 = users(:user_1)
    invoice_2 = invoices(:invoice_3)
    invoice_2.user = user_1
    invoice_2.save
    user_2 = users(:user_2)
    refute invoice_2.valid?
    assert invoice_2.errors[:number].present?
  end
end
