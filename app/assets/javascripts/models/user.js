Dish.Models.User = Backbone.RelationalModel.extend({
	relations: [{
		type: 'HasMany',
		key: 'teams',
		relatedModel: 'Dish.Models.Membership',
		reverseRelation: {
			key: 'member'
		}
	},
	{
		type: 'HasMany',
		key: 'ownedTeams',
		relatedModel: 'Dish.Models.Team',
		collectionType: 'Dish.Collections.Teams',
		reverseRelation: {
			key: 'owner'
		}
	}]
});
