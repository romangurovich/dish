Dish.Collections.UnsolicitedFeedbacks = Backbone.Collection.extend({

  model: Dish.Models.UnsolicitedFeedback,
  url: function (){
    // return "/users/" + this.userId + "/unsolicited_feedbacks";
    return "/unsolicited_feedbacks";
  },

  comparator:  function(a, b) { 
    if (a.get('created_at') > b.get('created_at')) return -1; // before
    if (b.get('created_at') > a.get('created_at')) return 1; // after
    return 0; // equal
  },

  sent: function() {
    return  this.filter(function (feedback) {
      return feedback.get('recipient_id') !== Dish.Store.currentUser.get('id');
    });
  },

  received: function() {
    return this.where({recipient_id: Dish.Store.currentUser.get('id')});
  }
});