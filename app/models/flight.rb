# == Schema Information
#
# Table name: flights
#
#  id           :integer          not null, primary key
#  call_sign    :string(255)
#  origin       :string(255)
#  destination  :string(255)
#  plane_id     :integer
#  departed     :datetime
#  journey_time :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Flight < ActiveRecord::Base
belongs_to :plane
has_many :reservations
has_many :passengers, through: :reservations
end
