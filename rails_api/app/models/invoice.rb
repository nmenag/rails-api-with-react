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

class Invoice < ApplicationRecord
  belongs_to :user
  has_many :items

  validates :number, :invoice_date, presence: true
  validates :number, uniqueness: { scope: :user }
end
