Dish.Collections.Confidantes = Backbone.Collection.extend({
  intialize: function(models, options) {
    this.teamId = options.teamId;
  },
  model: Dish.Models.Confidante,
  url: function(){
    return '/teams/' + this.teamId + '/users';
  }
});
