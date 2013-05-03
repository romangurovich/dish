Dish.Views.UnsolicitedFeedbacksView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    console.log(this.collection);
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
