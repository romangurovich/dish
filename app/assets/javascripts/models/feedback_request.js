Dish.Models.FeedbackRequest = Backbone.RelationalModel.extend({
  relations: [{
    type: 'HasMany',
    key: 'solicitedFeedbacks',
    relatedModel: 'Dish.Models.SolicitedFeedback',
    reverseRelation: {
      key: 'feedbackRequest'
    }
  }]
});