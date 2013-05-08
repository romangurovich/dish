Dish.Models.Team = Backbone.RelationalModel.extend({
	relations: [{
		type: 'HasMany',
		key: 'members',
    relatedModel: 'Dish.Models.TeamMember',
    collectionType: 'Dish.Collections.TeamMembers',
    collectionOptions: function(team) {
      return { teamId: team.id };
    }

		// relatedModel: 'Dish.Models.Membership',
		// reverseRelation: {
		// 	key: 'team'
		// }
	},
  {
    type: 'HasMany',
    key: 'receivedFeedbackRequests',
    relatedModel: 'Dish.Models.FeedbackRequest',
    //collectionType: 'Dish.Collections.FeedbackRequests',
    reverseRelation: {
      key: 'team'
    }
  }
  ]
});
