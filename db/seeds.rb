# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

plane_1 = Plane.create(:name => 'Hokker', :rows => '2',:aisles => '1', :seats => '10')
plane_2 = Plane.create(:name => 'A380', :rows => '3', :aisles => '3', :seats => '42' )
plane_3 = Plane.create(:name => 'B747', :rows => '5', :aisles => '2', :seats => '50')

f1 = Flight.create(:call_sign => 'QF232',:origin => 'SYD', :destination => 'JFK',:seats_free => '10', :plane_id => plane_1.id, :departed => DateTime.parse('2:30 PM'), :journey_time => '6.5')
f2 = Flight.create(:call_sign => 'QF56',:origin => 'LHR', :destination => 'HKG',:seats_free => '42', :plane_id => plane_2.id, :departed => DateTime.parse('3:30 PM'), :journey_time => '1.5')

pass_1 = Passenger.create(:name => 'Tarun Mookhey', :contact_number => '0296359694', :nationality => 'australia', :meal_pref => 'vegan')

pass_2 = Passenger.create(:name => 'Tarun Mookhey', :contact_number => '0296359694', :nationality => 'australia', :meal_pref => 'vegan')

r1 = Reservation.create(:flight_id => f1.id, :passenger_id => pass_1.id, :seat_name => '2a')
r2 = Reservation.create(:flight_id => f2.id, :passenger_id => pass_2.id, :seat_name => '1a')