class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :call_sign
      t.string :origin
      t.string :destination
      t.integer :plane_id
      t.datetime :departed
      t.integer :journey_time
      t.timestamps
    end
  end
end
