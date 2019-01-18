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

class Product < ApplicationRecord
  has_many :items

  validates :name, :description, presence: :true
  validates :name, uniqueness: true
end
