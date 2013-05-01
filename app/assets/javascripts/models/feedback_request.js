Dish.Models.FeedbackRequest = Backbone.RelationalModel.extend({
  relations: [{
    type: 'HasMany',
    key: 'solicitedFeedbacks',
    relatedModel: 'Dish.Models.SolicitedFeedback',
    collectionType: 'Dish.Collections.SolicitedFeedbacks',
    reverseRelation: {
      key: 'feedbackRequest'
    },
    collectionOptions: function(feedbackRequest) {
      return { feedbackRequestId: feedbackRequest.id };
    }
  }]
});