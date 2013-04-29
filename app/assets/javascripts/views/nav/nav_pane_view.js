Dish.Views.TeamsIndex = Backbone.View.extend({
	render: function() {
		var that = this;

		var renderedContent = JST['nav/index']();

		that.$el.html(renderedContent);
		return that;
	}
});
