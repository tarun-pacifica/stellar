# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :integer
#  columns    :integer
#  aisles     :integer
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base

attr_accessible :name, :rows, :aisles
has_many :flights

end
