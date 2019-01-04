# frozen_string_literal: true

module Api
  module V1
    class ItemsController < Api::V1::ApplicationController
      def index
        @items = Item.all
      end
    end
  end
end
