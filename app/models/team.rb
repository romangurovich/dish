class Team < ActiveRecord::Base
  attr_accessible :description, :karma, :name, :owner_id

  has_many :memberships
  has_many :members, through: :memberships

  belongs_to :owner, class_name "User"
end
