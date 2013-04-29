class Team < ActiveRecord::Base
  attr_accessible :description, :karma, :name, :owner_id

  has_many :memberships
  has_many :members, through: :memberships

  has_many :received_feedback_requests, class_name: "FeedbackRequest"

  belongs_to :owner, class_name: "User"
end
