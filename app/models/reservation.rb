# == Schema Information
#
# Table name: reservations
#
#  id           :integer          not null, primary key
#  flight_id    :integer
#  passenger_id :integer
#  seat_name    :string(255)
#  seat_pref    :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Reservation < ActiveRecord::Base
  belongs_to :flight
  belongs_to :passenger
end
