Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feedback_requests/:id" : "showFeedbackRequest",
		"messages": "unsolicitedFeedbacksIndex"
		// "users": "trustedUsers",
		// "users/:id": "userProfile",
		// "feedbacks": "sentFeedbacks",
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

		var feedbackRequest = that.sentFeedbackRequests.get(id);
		var receivedFeedbacks = feedbackRequest.get('solicitedFeedbacks');
		receivedFeedbacks.fetch({
			success: function(){
				console.log(receivedFeedbacks.models); 

				var showFeedbackRequestView = new Dish.Views.ShowFeedbackRequestView ({
					collection: receivedFeedbacks,
					model: feedbackRequest
				});

				that.$content.html(showFeedbackRequestView.render().el);
			}
		});	
	},

	unsolicitedFeedbacksIndex: function(){
		var that = this;

		var unsolicitedFeedbacks = that.user.get("receivedUnsolicitedFeedbacks");
		unsolicitedFeedbacks.fetch({
			success: function(){
				var unsolicitedFeedbacksView = new Dish.Views.UnsolicitedFeedbacksView ({
					collection: unsolicitedFeedbacks
				});
				that.$content.html(unsolicitedFeedbacksView.render().el);
			}
		});		
	}

});