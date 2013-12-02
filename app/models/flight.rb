# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  call_sign     :string(255)
#  origin        :string(255)
#  destination   :string(255)
#  plane_id      :integer
#  date_departed :date
#  time_departed :time
#  date_arrived  :date
#  time_arrived  :time
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
attr_accessible  :call_sign, :origin, :destination, :time_departed, :date_departed, :time_arrived, :date_arrived
belongs_to :plane
has_many :reservations
has_many :passengers, through: :reservations
end
