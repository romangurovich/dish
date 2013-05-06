Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feedback_requests/:id" : "showFeedbackRequest",
		"messages": "unsolicitedFeedbacksIndex",
		"confidantes": "trustedUsers",
		"teams": "teams",
		"feedbacks": "sentFeedbacks"
		// "users/:id": "userProfile",
		// "teams/:id": "teamProfile"
	},

	initialize: function(args) {
		args = args || {};
		_(this).extend(args);
	},

	index: function(){
		var that = this;

		var teamsIndexView = new Dish.Views.TeamsIndexView ({
			collection: that.teams
		});

		var sentFeedbackRequestsView = new Dish.Views.SentFeedbackRequestsView ({
			collection: that.sentFeedbackRequests
		});

		var receivedFeedbackRequestsView = new Dish.Views.ReceivedFeedbackRequestsView ({
			collection: that.receivedFeedbackRequests
		});

		var newFeedbackRequestView = new Dish.Views.NewFeedbackRequestView ({
			collection: that.sentFeedbackRequests,
			currentUser: that.user,
			teams: that.teams
		});

	
		that.$teams.html(teamsIndexView.render().el);
		that.$content.html(sentFeedbackRequestsView.render().el);
		that.$content.prepend(newFeedbackRequestView.render().el);
		that.$requests.html(receivedFeedbackRequestsView.render().el);
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


				that.$content.html(solicitedFeedbacksView.render().el);
				that.$content.prepend(newSolicitedFeedbackView.render().el);
				that.$content.prepend(showFeedbackRequestView.render().el);
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
					collection: new Dish.Collections.UnsolicitedFeedbacks(unsolicitedFeedbacks.sent())
				});
				
				that.$content.html(sentFeedbacksView.render().el);

				var victims_array = that.user.get("victims");
				console.log(victims_array);
				var victims = new Dish.Collections.Users().reset(victims_array);

				console.log(that.user.get("victims"));
				console.log(victims);
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


	}

	// trustedUsers: function(){
	// 	var that = this;

	// 	var confidantes = $.getJSON(that.user.get("confidantes");
	// 	unsolicitedFeedbacks.fetch({
	// 		success: function(){
	// 			var unsolicitedFeedbacksView = new Dish.Views.UnsolicitedFeedbacksView ({
	// 				collection: unsolicitedFeedbacks
	// 			});
	// 			that.$content.html(unsolicitedFeedbacksView.render().el);
	// 		}
	// 	});	
	// }

});