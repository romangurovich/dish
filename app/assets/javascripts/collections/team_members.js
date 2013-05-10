Dish.Collections.TeamMembers = Backbone.Collection.extend({
  intialize: function(models, options) {
    this.teamId = options.teamId;
  },
  model: Dish.Models.TeamMember,
  url: function(){
    return '/teams/' + this.teamId + '/users';
  },

  comparator:  function(a, b) { 
    if (a.get('username') < b.get('username')) return -1; // before
    if (b.get('username') < a.get('username')) return 1; // after
    return 0; // equal
  }
});