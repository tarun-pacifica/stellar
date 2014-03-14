class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :flight_id
      t.integer :passenger_id
      t.string :seat_name
      t.timestamps
    end
  end
end
