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
	},
	{
		type: 'HasMany',
		key: 'sentFeedbackRequests',
		relatedModel: 'Dish.Models.FeedbackRequest',
		collectionType: 'Dish.Collections.FeedbackRequests',
		reverseRelation: {
			keySource: 'requestor_id',
			key: 'requestor',
			includeInJSON: 'id'
		}
	},
	{
		type: 'HasMany',
		key: 'receivedFeedbackRequests',
		relatedModel: 'Dish.Models.Team',
		reverseRelation: {
			key: 'answerer'
		}
	}
	]
});
