Dish.Views.SentFeedbackRequestsView = Backbone.View.extend({
	initialize: function(args){
		args = args || {};
		_(this).extend(args);
		var that = this;
		that.listenTo(that.collection, 'all', that.render);
	},

	render: function() {
		var that = this;

		var renderedContent = JST['feedback_requests/sent_feedback_requests']({
			sentFeedbackRequests: that.collection
		});

		that.$el.html(renderedContent);
		return that;
	}
});
