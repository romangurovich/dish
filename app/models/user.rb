class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :remember_token, :username, :nickname, :avatar

  validates :email, :password, :username, presence: true
  validates :email, :username, uniqueness: true
  validates :password, confirmation: true

  has_many :memberships, foreign_key: :member_id
  has_many :teams, through: :memberships
  has_many :received_feedback_requests, through: :teams
  has_many :sent_solicited_feedbacks, foreign_key: :author_id, class_name: "SolicitedFeedback"
  has_many :sent_unsolicited_feedbacks, foreign_key: :author_id, class_name: "UnsolicitedFeedback"
  has_many :victims, through: :teams, source: :owner

  has_many :owned_teams, foreign_key: :owner_id, class_name: "Team"
  has_many :sent_feedback_requests, foreign_key: :requestor_id, class_name: "FeedbackRequest"
  has_many :received_solicited_feedbacks, through: :sent_feedback_requests, source: :solicited_feedbacks
  has_many :received_unsolicited_feedbacks, foreign_key: :recipient_id, class_name: "UnsolicitedFeedback"

  has_many :votes, foreign_key: :voter_id

  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

  def trusted_people
    User.find_by_sql(
      "SELECT users.* FROM users
      JOIN memberships
      ON users.id = memberships.member_id
      JOIN teams
      ON memberships.team_id = teams.id
      WHERE teams.owner_id = ?", self.id)
  end

  def as_json(options = nil)
    super({include: {:victims => {:only => [:id, :username] }}}.merge(options || {}))
  end
end