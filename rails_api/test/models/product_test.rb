# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string           default(""), not null
#  description :string           default(""), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  test 'valid product' do
    product = products(:product_1)
    assert product.valid?
  end

  test 'invalid product without name' do
    product = Product.new(description: 'lorem ipsum')
    refute product.valid?
    assert product.errors[:name].present?
  end

  test 'invalid product without description' do
    product = Product.new(name: 'Product 1')
    refute product.valid?
    assert product.errors[:description].present?
  end

  test 'invalid product with duplicate name' do
    product = Product.new(name: 'Product 1', description: 'lorem ipsum')
    refute product.valid?
    assert product.errors[:name].present?
  end
end
