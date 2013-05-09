class Team < ActiveRecord::Base
  attr_accessible :description, :karma, :name, :owner_id

  has_many :memberships
  has_many :members, through: :memberships

  has_many :received_feedback_requests, class_name: "FeedbackRequest"

  belongs_to :owner, class_name: "User"

  def as_json(options = nil)
    super({include: {
      :members => {
        :only => [:id, :username],
        :methods => [:avatar_url]
      }
    }}.merge(options || {}))
  end

end
