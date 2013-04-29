class FeedbackRequest < ActiveRecord::Base
  attr_accessible :body, :requestor_id, :team_id

  belongs_to :requestor, class_name: "User"
  belongs_to :team

  has_many :solicited_feedbacks
end
