Dish.Views.ShowFeedbackRequestView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['feedback_requests/show']({
      feedbackRequest: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});
