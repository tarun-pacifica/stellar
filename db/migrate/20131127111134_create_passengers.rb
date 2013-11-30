class CreatePassengers < ActiveRecord::Migration
  def change
    create_table :passengers do |t|
      t.string :name
      t.string :contact_number
      t.string :nationality
      t.string :meal_pref
      t.timestamps
    end
  end
end
