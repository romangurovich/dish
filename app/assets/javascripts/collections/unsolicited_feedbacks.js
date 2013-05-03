Dish.Collections.UnsolicitedFeedbacks = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.userId = options.userId;
  },

  model: Dish.Models.UnsolicitedFeedback,
  url: function (){
    return "/users/" + this.userId + "/unsolicited_feedbacks";
  },

  // sent: function() {
  //   var that = this;
  //   var filteredFeedbacks = this.select(function(feedback) {
  //     return feedback.get(’author_id’) === that.userId;
  //   });
  //   return new Dish.Collections.UnsolicitedFeedbacks(filteredFeedbacks);
  // },

  // received: function() {
  //   var that = this;
  //   var filteredFeedbacks = this.select(function(feedback) {
  //     return feedback.get(’recipient_id’) === that.userId;
  //   });
  //   return new Dish.Collections.UnsolicitedFeedbacks(filteredFeedbacks);
  // }
});