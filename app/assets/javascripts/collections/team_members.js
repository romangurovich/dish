Dish.Collections.TeamMembers = Backbone.Collection.extend({
  intialize: function(models, options) {
    this.teamId = options.teamId;
  },
  model: Dish.Models.TeamMember,
  url: function(){
    return '/teams/' + this.teamId + '/users';
  }
});