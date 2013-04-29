Dish.Models.User = Backbone.RelationalModel.extend ({
	relations: [{
		type: 'hasMany',
		key: 'teams',
		relatedModel: 'Dish.Models.Team',
		reverseRelation: {
			key: 'member'
		}
	},
	{
		type: 'hasMany',
		key: 'ownedTeams',
		relatedModel: 'Dish.Models.Team'
		collectionType: 'Dish.Collections.Teams'
	}]
});
