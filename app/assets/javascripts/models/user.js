Dish.Models.User = Backbone.RelationalModel.extend({
	urlRoot: '/users',
	relations: [{
		type: 'HasMany',
		key: 'teams',
		relatedModel: 'Dish.Models.Team',
		collectionType: 'Dish.Collections.Teams'
		// reverseRelation: {
		// 	type: 'HasMany',
		// 	key: 'members',
		// 	collectionType: 'Dish.Collections.Users'
		// }
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
	},
	{
		type: 'HasMany',
		key: 'receivedUnsolicitedFeedbacks',
		relatedModel: 'Dish.Models.UnsolicitedFeedback',
		collectionType: 'Dish.Collections.UnsolicitedFeedbacks',
		reverseRelation: {
			key: 'recipient'
		},
		collectionOptions: function(user) {
      return { userId: user.id };
    }
	},
	{
		type: 'HasMany',
		key: 'sentUnsolicitedFeedbacks',
		relatedModel: 'Dish.Models.UnsolicitedFeedback',
		collectionType: 'Dish.Collections.UnsolicitedFeedbacks',
		reverseRelation: {
			key: 'author'
		},
		collectionOptions: function(user) {
      return { userId: user.id };
    }
	},
	{
		type: 'HasMany',
		key: 'confidantes',
		relatedModel: 'Dish.Models.Confidante',
		collectionType: 'Dish.Collections.Confidantes',
		reverseRelation: {
			key: 'fool'
		},
		collectionOptions: function(user) {
      return { userId: user.id };
    }
	}
	]
});
