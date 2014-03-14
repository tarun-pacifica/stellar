# == Schema Information
#
# Table name: reservations
#
#  id           :integer          not null, primary key
#  flight_id    :integer
#  passenger_id :integer
#  seat_name    :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Reservation < ActiveRecord::Base
  attr_accessible :flight_id, :passenger_id, :seat_name, :seat_pref
  belongs_to :flight
  belongs_to :passenger

  after_save :update_flight_seats

  def update_flight_seats
    self.flight.reset_seats_free
  end
end
