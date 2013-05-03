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
		console.log(this.user);
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

		console.log("moo");

		var unsolicitedFeedbacks = that.user.get("sentUnsolicitedFeedbacks");
		unsolicitedFeedbacks.fetch({
			success: function(){
				var sentFeedbacksView = new Dish.Views.SentFeedbacksView ({
					collection: new Dish.Collections.UnsolicitedFeedbacks(unsolicitedFeedbacks.sent())
				});
				that.$content.html(sentFeedbacksView.render().el);
			}
		});


		// var newFeedbackView = new Dish.Views.NewFeedbackView ({
		// 	collection: sentFeedbacks,
		// 	currentUser: that.user,
		// 	victims: victims
		// });


		// that.$content.prepend(newFeedbackRequestView.render().el);




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