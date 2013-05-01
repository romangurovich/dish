Dish.Views.UnsolicitedFeedbacksView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },
  
  render: function() {
    var that = this;

    var renderedContent = JST['unsolicited_feedbacks/index']({
      receivedFeedbacks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});
