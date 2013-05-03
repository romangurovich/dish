class UnsolicitedFeedback < ActiveRecord::Base
  attr_accessible :author_id, :body, :recipient_id

  validates :body, presence: true
  
  belongs_to :author, class_name: "User"
  belongs_to :recipient, class_name: "User"

  def self.sent_and_received_by_user_id(user_id)
    unsolicited_feedbacks = UnsolicitedFeedback.arel_table
    where(unsolicited_feedbacks[:author_id].eq(user_id).or(unsolicited_feedbacks[:recipient_id].eq(user_id)))
  end

end
