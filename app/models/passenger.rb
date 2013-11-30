# == Schema Information
#
# Table name: passengers
#
#  id             :integer          not null, primary key
#  name           :string(255)
#  contact_number :string(255)
#  nationality    :string(255)
#  meal_pref      :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

class Passenger < ActiveRecord::Base
  has_many :reservations
  has_many :flights, through: :reservations
end
