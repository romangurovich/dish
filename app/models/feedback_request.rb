class FeedbackRequest < ActiveRecord::Base
  attr_accessible :body, :requestor_id, :team_id

  belongs_to :requestor, class_name: "User"
  belongs_to :team

  has_many :solicited_feedbacks

  def as_json(options = nil)
    super({include: {
      :requestor => {
        :only => :username 
      }
    }}.merge(options || {}))
  end
end