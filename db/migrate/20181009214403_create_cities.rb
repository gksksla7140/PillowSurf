class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.integer :zipcode, null: false
      t.string :state, null: false 
      t.timestamps
    end
  end
end