Dish.Views.ConfidantesIndexView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },
  
  render: function() {
    var that = this;

    var renderedContent = JST['confidantes/index']({
      confidantes: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});