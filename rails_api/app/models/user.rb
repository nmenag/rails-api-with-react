# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           default(""), not null
#  password_digest :string           not null
#  auth_token      :string           default(""), not null
#  role            :integer          default(0), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
end
