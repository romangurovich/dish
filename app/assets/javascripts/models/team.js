Dish.Models.Team = Backbone.RelationalModel.extend({
	relations: [{
		type: 'HasMany',
		key: 'members',
		relatedModel: 'Dish.Models.Membership',
		reverseRelation: {
			key: 'team'
		}
	}]
});
