class Vote < ActiveRecord::Base
  attr_accessible :solicited_feedback_id, :positive, :voter_id

  belongs_to :voter, class_name: "User"
  belongs_to :solicited_feedback
end
