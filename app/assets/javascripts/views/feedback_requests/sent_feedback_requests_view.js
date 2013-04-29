Dish.Views.FeedbackRequestsIndex = Backbone.View.extend({
	initialize: function(args){
		args = args || {}
		_(this).extend(args)
	},

	render: function() {
		var that = this;

		var renderedContent = JST['feedback_requests/sent_feedback_requests']({
			teams: that.collection
		});

		that.$el.html(renderedContent);
		return that;
	}
});
