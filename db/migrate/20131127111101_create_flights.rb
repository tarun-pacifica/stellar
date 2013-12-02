class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :call_sign
      t.string :origin
      t.string :destination
      t.integer :plane_id
      t.date :date_departed
      t.time :time_departed
      t.date :date_arrived
      t.time :time_arrived
      t.timestamps
    end
  end
end
