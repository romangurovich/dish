Dish.Routers.ContentRouter = Backbone.Router.extend({
	routes: {
		"": "index"//,
		// "users": "trustedUsers",
		// "users/:id": "userProfile",
		// "feedbacks": "sentFeedbacks",
		// "teams/:id": "teamProfile"
	},

	initialize: function($content, user, teams, sentFeedbackRequests) {
		args = args || {};
		_(this).extend(args);
	},

	index: function(){
		var that = this;

		Dish.Store.sentFeedbackRequestsView = new Dish.Views.SentFeedbackRequestsView ({
			collection: that.sentFeedbackRequests
		});

		that.$rootEl.append(Dish.Store.sentFeedbackRequestsView.render().el);
	} 

});