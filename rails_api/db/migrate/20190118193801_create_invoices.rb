class CreateInvoices < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.integer :number, null: false, default: 0
      t.date :invoice_date, null: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
