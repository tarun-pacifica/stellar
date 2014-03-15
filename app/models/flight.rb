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
#  seats_free    :integer
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
  attr_accessible  :call_sign, :origin, :destination, :time_departed, :date_departed, :time_arrived, :plane_id, :date_arrived, :seats_free
  belongs_to :plane
  has_many :reservations
  has_many :passengers, through: :reservations

  def reset_seats_freee
    seats_total = self.plane.seats_count
    seats_booked = self.reservations.count
 #    raise self.errors.full_messages.inspect unless self.valid?
   self.update_attribute(:seats_freee, seats_total - seats_booked)

  end


  def date_created_at
    self.created_at.to_date.to_s
  end

  def time_created_at
    self.created_at.strftime("%H-%M-%S")
  end

  def departure_time
    if time_departed
      self.time_departed.strftime("%H-%M-%S")
    end
  end

  def departure_day
    if date_departed
      self.date_departed.to_date.to_s
    end
  end
end





