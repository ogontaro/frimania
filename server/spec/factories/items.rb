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

FactoryBot.define do
  factory :item do
    name "商品名"
    description "説明"
    price 1
    url "http://google.co.jp"
    image_url "http://google.co.jp"
    status 1
  end
end
