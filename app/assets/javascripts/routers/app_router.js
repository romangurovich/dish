Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feedback_requests/:id" : "showFeedbackRequest"
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

	showFeedbackRequest: function(){
		
		var feedbackRequest = 
		var showFeedbackRequestView = new Dish.Views.ShowFeedbackRequestView ({
			collection: that.receivedFeedbackRequests
		});
	}

});