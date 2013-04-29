Dish.Views.TeamsIndexView = Backbone.View.extend({
	initialize: function(args){
		args = args || {}
		_(this).extend(args)
	},
	
	render: function() {
		var that = this;

		var renderedContent = JST['teams/index']({
			teams: that.collection
		});

		that.$el.html(renderedContent);
		return that;
	}
});
