Dish.Views.SolicitedFeedbacksView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    this.listenTo(this.collection, 'all', this.render);
  },
  
  render: function() {
    var that = this;

    var renderedContent = JST['solicited_feedbacks/index']({
      receivedFeedbacks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});
