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

class Item < ApplicationRecord
  belongs_to :product
  belongs_to :invoice

  validates :quantity, presence: :true
end
