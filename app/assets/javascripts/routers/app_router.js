Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feedback_requests/:id" : "showFeedbackRequest",
		"messages": "unsolicitedFeedbacksIndex",
		"confidantes": "trustedUsers",
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
		// if (	(Dish.Store.currentUser.get("id") === feedbackRequest.get("requestor_id")) ||
		// 			(Dish.Store.currentUser.get("teams").contains(feedbackRequest.get("team"))	) {




		// } else {
		// 	var errorView = new Dish.Views.ErrorView({
		// 		error: "Unauthorized to see this section"
		// 	});

		// 	that.$content.html(errorView.render.html();
		// }

		var receivedFeedbacks = feedbackRequest.get('solicitedFeedbacks');
		receivedFeedbacks.fetch({
			success: function(){
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

	sentFeedbacks: function() {
		var that = this;

		var unsolicitedFeedbacks = that.user.get("sentUnsolicitedFeedbacks");
		unsolicitedFeedbacks.fetch({
			success: function(){
				var sentFeedbacksView = new Dish.Views.SentFeedbacksView ({
					collection: unsolicitedFeedbacks
				});
				
				that.$content.html(sentFeedbacksView.render().el);

				var victims = that.user.get("victims");
				victims.fetch({
					success: function(){
						var newFeedbackView = new Dish.Views.NewFeedbackView ({
							collection: unsolicitedFeedbacks,
							currentUser: that.user,
							victims: victims
						});

						that.$content.prepend(newFeedbackView.render().el);
					}
				});
			}
		});
	},

	trustedUsers: function(){
		var that = this;

		var confidantes = that.user.get("confidantes");
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