Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feedback_requests/:id" : "showFeedbackRequest",
		"messages": "unsolicitedFeedbacksIndex",
		"confidantes": "trustedUsers",
		"teams": "teams",
		"feedbacks": "sentFeedbacks",
		"teams/new": "newTeam",
		"teams/:id": "showTeam"
		// "users/:id": "userProfile",
	},

	initialize: function(args) {
		args = args || {};
		_(this).extend(args);
	},

	index: function(){
		var that = this;

		var sentFeedbackRequestsView = new Dish.Views.SentFeedbackRequestsView ({
			collection: that.sentFeedbackRequests
		});

		var newFeedbackRequestView = new Dish.Views.NewFeedbackRequestView ({
			collection: that.sentFeedbackRequests,
			currentUser: that.user,
			teams: that.teams
		});

		that.$content.html(newFeedbackRequestView.render().el);
		that.$content.append(sentFeedbackRequestsView.render().el);
	},

	showFeedbackRequest: function(id){
		var that = this;

		var feedbackRequest = that.receivedFeedbackRequests.get(id) || that.sentFeedbackRequests.get(id);
		var receivedFeedbacks = feedbackRequest.get('solicitedFeedbacks');
		receivedFeedbacks.fetch({
			success: function(){
				console.log(receivedFeedbacks.models);

				var showFeedbackRequestView = new Dish.Views.ShowFeedbackRequestView ({
					model: feedbackRequest
				});

				var newSolicitedFeedbackView = new Dish.Views.NewSolicitedFeedbackView ({
					model: feedbackRequest,
					collection: receivedFeedbacks
				});

				var solicitedFeedbacksView = new Dish.Views.SolicitedFeedbacksView ({
					collection: receivedFeedbacks
				});

				that.$content.html(showFeedbackRequestView.render().el);
				that.$content.append(newSolicitedFeedbackView.render().el);
				that.$content.append(solicitedFeedbacksView.render().el);
			}
		});	
	},

	unsolicitedFeedbacksIndex: function(){
		var that = this;

		var unsolicitedFeedbacks = that.user.get("receivedUnsolicitedFeedbacks");
		unsolicitedFeedbacks.fetch({
			success: function(){
				var unsolicitedFeedbacksView = new Dish.Views.UnsolicitedFeedbacksView ({
					collection: new Dish.Collections.UnsolicitedFeedbacks(unsolicitedFeedbacks.received())
				});
				that.$content.html(unsolicitedFeedbacksView.render().el);
			}
		});		
	},

	teams: function (){
		var that = this;

		var teamsIndexView = new Dish.Views.TeamsIndexView ({
			collection: that.teams
		});

		that.$content.html(teamsIndexView.render().el);
	},

	sentFeedbacks: function() {
		var that = this;

		var unsolicitedFeedbacks = that.user.get("sentUnsolicitedFeedbacks");
		unsolicitedFeedbacks.fetch({
			success: function(){
				var sentFeedbacksView = new Dish.Views.SentFeedbacksView ({
					collection: unsolicitedFeedbacks,
					sentFeedbacks: new Dish.Collections.UnsolicitedFeedbacks(unsolicitedFeedbacks.sent())
				});
				
				that.$content.html(sentFeedbacksView.render().el);

				var victims = _.uniq(that.user.get("victims"));

				console.log(that.user.get("victims"));

				var newFeedbackView = new Dish.Views.NewFeedbackView ({
					collection: unsolicitedFeedbacks,
					currentUser: that.user,
					victims: victims
				});

				that.$content.prepend(newFeedbackView.render().el);
			}
		});


	},

	trustedUsers: function(){
		var that = this;

		var confidantes = that.user.get("confidantes");
		console.log(confidantes);
		confidantes.fetch({
			success: function(){
				var confidantesIndexView = new Dish.Views.ConfidantesIndexView ({
					collection: confidantes
				});
				that.$content.html(confidantesIndexView.render().el);
			}
		});	
	},

	showTeam: function(id){
		var that = this;

		var team = that.teams.get(id);
		console.log(team);
		var members = team.get("members");

		var showTeamView = new Dish.Views.ShowTeamView({
			team: team,
			members: members
		});

		that.$content.html(showTeamView.render().el);
		// var members = new Dish.Collections.TeamMembers();
		// members.fetch({
		// 	// data : {
  //  //  		member_ids : membersArray // array of the message ids you want to retrieve as models
 	// 	// 	},
		// 	success: function(){
		// 		var showTeamView = new Dish.Views.ShowTeamView({
		// 			team: team,
		// 			members: members
		// 		});

		// 		that.$content.html(showTeamView.render().el);
		// 	}
		// });
	},

	newTeam: function(){
		var that = this;

		var team = new Dish.Models.Team();
		var newTeamView = new Dish.Views.NewTeamView({
			team: team
		});

		that.$content.html(newTeamView.render().el);

	}

});