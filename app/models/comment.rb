class Comment < ActiveRecord::Base
  attr_accessible :author_id, :body, :karma, :post_id

  validates :body, presence: true

  belongs_to :author, class_name: "User"
  belongs_to :post

  has_many :votes
end
