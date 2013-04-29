Dish.Routers.TeamsRouter = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	initialize: function($teams, teams) {
		args = args || {};
		_(this).extend(args);
	},

	index: function() {
		var that = this;
		Dish.Store.teamsIndexView = new Dish.Views.TeamsIndexView ({
			collection: teams
		});

		that.$rootEl.html(Dish.Store.teamsIndexView.render().el);
	}
});
