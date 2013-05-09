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
  has_many :confidantes, through: :owned_teams, source: :members
  has_many :sent_feedback_requests, foreign_key: :requestor_id, class_name: "FeedbackRequest"
  has_many :received_solicited_feedbacks, through: :sent_feedback_requests, source: :solicited_feedbacks
  has_many :received_unsolicited_feedbacks, foreign_key: :recipient_id, class_name: "UnsolicitedFeedback"

  has_many :votes, foreign_key: :voter_id

  has_attached_file :avatar,
  :styles => { :small => "100x100#", :thumb => "50x50#" },
  :default_url => 'https://s3-us-west-1.amazonaws.com/dish-images/missing_:style.png',
  :path => "users/:id/avatar/:style.:extension"


  def avatar_url
    avatar.url(:small)
  end

  def as_json(options = nil)
    super({include: {
      :victims => {
        :only => [:id, :username]
      },
      :teams => {
        :only => [:id]
      },
      :confidantes => {
        :only => [:id, :username],
        :methods => [:avatar_url]
      }
    }}.merge(options || {}))
  end
end