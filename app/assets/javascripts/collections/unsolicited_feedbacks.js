Dish.Collections.UnsolicitedFeedbacks = Backbone.Collection.extend({

  model: Dish.Models.UnsolicitedFeedback,
  url: function (){
    // return "/users/" + this.userId + "/unsolicited_feedbacks";
    return "/unsolicited_feedbacks";
  },

  comparator:  function(a, b) { 
    return a.get('created_at') < b.get('created_at');
  },

  sent: function() {
    return this.where({author_id: Dish.Store.currentUser.get('id')});
  },

  received: function() {
    return this.where({recipient_id: Dish.Store.currentUser.get('id')});
  }
});