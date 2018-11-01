# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # First describe the field signature:
  field :item, ItemType, null: true do
    argument :id, ID, required: true
  end
end
