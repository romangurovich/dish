Dish.Models.Team = Backbone.RelationalModel.extend({
	relations: [{
		type: 'hasMany',
		key: 'members',
		relatedModel: 'Dish.Models.User',
		reverseRelation: {
			key: 'team'
		}
	}]
});
