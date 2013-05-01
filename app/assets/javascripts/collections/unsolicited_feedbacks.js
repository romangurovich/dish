Dish.Collections.UnsolicitedFeedbacks = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.userId = options.userId;
  },

  model: Dish.Models.UnsolicitedFeedback,
  url: function (){
    return "/users/" + this.userId + "/unsolicited_feedbacks";
  }

});