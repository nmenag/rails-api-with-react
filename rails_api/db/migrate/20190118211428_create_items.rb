class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :quantity, null: false, default: 0
      t.references :product, foreign_key: true
      t.references :invoice, foreign_key: true
      t.timestamps
    end
  end
end
