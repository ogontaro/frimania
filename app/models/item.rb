# frozen_string_literal: true
# == Schema Information
#
# Table name: items
#
#  id          :bigint(8)        not null, primary key
#  description :text(65535)
#  image_url   :text(65535)
#  name        :string(255)
#  price       :integer
#  state       :integer          default(1)
#  url         :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_items_on_name  (name)
#  index_items_on_url   (url) UNIQUE
#

class Item < ApplicationRecord
  validates :name, presence: true, limit: 255
  validates :url, presence: true, uniqueness: true
  validates :price, presence: true

  enum state: { selling: 1, soledout: 2 }
end
