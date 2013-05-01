Dish.Views.ShowFeedbackRequestView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    this.listenTo(this.collection, 'all', this.render);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['feedback_requests/show']({
      feedbackRequest: that.model,
      receivedFeedbacks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});
