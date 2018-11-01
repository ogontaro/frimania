# frozen_string_literal: true

Types::ItemType = GraphQL::ObjectType.define do
  name 'Item'

  field :id, types.ID, null: false
  field :name, types.String, null: false
  field :url, types.String, null: false
  field :price, types.Int, null: false
end
