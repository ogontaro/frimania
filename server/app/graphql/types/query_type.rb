# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :item, !Types::ItemType do
    description 'item'

    resolve ->(_obj, _args, ctx) {
      ctx[:items]
    }
  end
end
