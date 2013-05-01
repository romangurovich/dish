Dish.Collections.SolicitedFeedbacks = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feedbackRequestId = options.feedbackRequestId;
  },
  model: Dish.Models.SolicitedFeedback,
  url: function() {
    return "/feedback_requests/" + this.feedbackRequestId + "/solicited_feedbacks";
  }
});
