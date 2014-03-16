# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  rows       :integer
#  aisles     :integer
#  seats      :integer
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base
	attr_accessible :name, :rows, :aisles, :seats
	has_many :flights

	# def seats_count
	#  	case aisles
	#  	when 1
	#  		10
	#  		# self.rows*6
	# 	when 2
	# 		20
	#  		# self.rows*10
	# 	when 3
	# 		30
	# 		# self.rows*14
	# 	end
	# self.save
 # 	end
end
