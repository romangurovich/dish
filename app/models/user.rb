class User < ActiveRecord::Base
  attr_accessible :email, :password, :remember_token, :username, :nickname

  validates :email, :password, :username, presence: true
  validates :email, :username, uniqueness: true

  has_many :memberships, foreign_key: :member_id
  has_many :teams, through: :memberships
  has_many :received_feedback_requests, through: :teams
  has_many :sent_solicited_feedbacks, foreign_key: :author_id, class_name: "SolicitedFeedback"
  has_many :sent_unsolicited_feedbacks, foreign_key: :author_id, class_name: "UnsolicitedFeedback"
  
  has_many :owned_teams, foreign_key: :owner_id, class_name: "Team"
  has_many :sent_feedback_requests, foreign_key: :requestor_id, class_name: "FeedbackRequest"
  has_many :received_solicited_feedbacks, through: :sent_feedback_requests, source: :solicited_feedbacks
  has_many :received_unsolicited_feedbacks, foreign_key: :recipient_id, class_name: "UnsolicitedFeedback"

  has_many :votes, foreign_key: :voter_id
end