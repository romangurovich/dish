class Vote < ActiveRecord::Base
  attr_accessible :comment_id, :positive, :voter_id

  belongs_to :voter, class_name: "User"
  belongs_to :comment
end
