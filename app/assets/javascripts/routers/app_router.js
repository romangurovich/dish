Dish.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index"//,
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

	
		that.$teams.html(teamsIndexView.render().el);
		that.$content.html(sentFeedbackRequestsView.render().el);
		that.$requests.html(receivedFeedbackRequestsView.render().el);
	} 

});