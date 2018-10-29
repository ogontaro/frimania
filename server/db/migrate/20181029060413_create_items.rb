class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.integer :price, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
      t.text :url
      t.text :image_url
      t.integer :state, limit: 1, default: 1

      t.timestamps
    end

    add_index :items, :name
    add_index :items, :url, unique: true
  end
end
