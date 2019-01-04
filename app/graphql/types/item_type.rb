module Types
  class ItemType < Types::BaseObject
    name 'Item'

    field :id, ID, null: false
    field :name, String, null: false
    field :price, Integer, null: false
  end
end
