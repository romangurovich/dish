Dish.Views.SentFeedbacksView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    this.listenTo(this.collection, 'all', this.render);
  },

  render: function() {
    var that = this;

    var sentUnsolicitedFeedbacks = that.collection.sent();
    
    var renderedContent = JST['unsolicited_feedbacks/sent']({
      sentUnsolicitedFeedbacks: sentUnsolicitedFeedbacks
    });

    that.$el.html(renderedContent);
    return that;
  }
});