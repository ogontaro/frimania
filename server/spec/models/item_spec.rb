# == Schema Information
#
# Table name: items
#
#  id          :bigint(8)        not null, primary key
#  description :text
#  image_url   :text
#  name        :string
#  price       :integer
#  state       :integer          default(1)
#  url         :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_items_on_name  (name)
#  index_items_on_url   (url) UNIQUE
#

require 'rails_helper'

RSpec.describe Item, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
