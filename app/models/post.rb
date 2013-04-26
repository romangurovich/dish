class Post < ActiveRecord::Base
  attr_accessible :author_id, :body, :karma

  belongs_to :author, class_name: "User"
  has_many :comments
end
