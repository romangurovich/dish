class User < ActiveRecord::Base
  attr_accessible :email, :password, :remember_token, :username, :alias

  validates :email, :password, :username, presence: true
  validates :email, :username, uniqueness: true

  has_many :memberships, foreign_key: :member_id
  has_many :teams, through: :memberships

  has_many :owned_teams, foreign_key: :owner_id, class_name: "Team"

  has_many :posts, foreign_key: :author_id
  has_many :comments, foreign_key: :author_id

  has_many :votes, foreign_key: :voter_id
end
