# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
	u1 = User.create!(username: "roman", email: "roman@example.com", password: "password", nickname: "romes");
	u2 = User.create!(username: "cartman", email: "cartman@example.com", password: "password", nickname: "poof");
	u3 = User.create!(username: "kenny", email: "kenny@example.com", password: "password", nickname: "mute");
	u4 = User.create!(username: "kyle", email: "kyle@example.com", password: "password", nickname: "green");
	u5 = User.create!(username: "stan", email: "stan@example.com", password: "password", nickname: "hat");

	u6 = User.create!(username: "batman", email: "batman@example.com", password: "password", nickname: "bat");
	u7 = User.create!(username: "superman", email: "superman@example.com", password: "password", nickname: "super");
	u8 = User.create!(username: "spiderman", email: "spiderman@example.com", password: "password", nickname: "spider");
	u9 = User.create!(username: "wonderwoman", email: "wonderwoman@example.com", password: "password", nickname: "wonder");

	t1 = u1.owned_teams.create!(name: "School Friends", description: "For questions about mundane stuff");
	t2 = u1.owned_teams.create!(name: "Business Associates", description: "For questions about work");

	t1.members << [u2, u3, u4, u5]
	t2.members << [u6, u7, u8, u9]



	fr1 = u1.sent_feedback_requests.create!(body: "How is my breath?", team_id: t1.id)
	fr2 = u1.sent_feedback_requests.create!(body: "Do I have cooties?", team_id: t1.id)
	fr3 = u1.sent_feedback_requests.create!(body: "Do I write enough specs?", team_id: t2.id)

	uf1 = u1.sent_unsolicited_feedbacks.create!(body: "You're getting big boned", recipient_id: u2.id)
	uf2 = u1.sent_unsolicited_feedbacks.create!(body: "Your house is too cold", recipient_id: u7.id)
	uf3 = u1.sent_unsolicited_feedbacks.create!(body: "Lighten up, Bats", recipient_id: u6.id)

	sf1 = u3.sent_solicited_feedbacks.create!(body: "It stinks. Eat less garlic.", feedback_request_id: 1)
	sf2 = u9.sent_solicited_feedbacks.create!(body: "You should write more specs, and you should use Cucumber.", feedback_request_id: 3)

end