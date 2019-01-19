# == Schema Information
#
# Table name: items
#
#  id         :integer          not null, primary key
#  quantity   :integer          default(0), not null
#  product_id :integer
#  invoice_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
