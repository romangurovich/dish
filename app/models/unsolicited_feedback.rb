class UnsolicitedFeedback < ActiveRecord::Base
  attr_accessible :author_id, :body, :recipient_id

  validates :body, presence: true
  
  belongs_to :author, class_name: "User"
  belongs_to :recipient, class_name: "User"
end
