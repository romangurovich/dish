class SolicitedFeedback < ActiveRecord::Base
  attr_accessible :author_id, :body, :feedback_request_id

  belongs_to :author, class_name: "User"
  belongs_to :feedback_request

  has_many :votes
end
