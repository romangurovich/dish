Dish.Views.ReceivedFeedbackRequestsView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    this.listenTo(this.collection, 'all', this.render);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['feedback_requests/received_feedback_requests']({
      receivedFeedbackRequests: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});