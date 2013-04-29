Dish.Views.TeamsIndex = Backbone.View.extend({
	render: function() {
		var that = this;

		var renderedContent = JST['teams/index']({
			teams: that.collection
		});

		that.$el.html(renderedContent);
		return that;
	}
});
