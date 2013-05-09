Dish.Views.AddTeamMemberView = Backbone.View.extend({
  events: {
    "click button.nevermind": "killMember"
  },

  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['teams/add_member']();

    that.$el.html(renderedContent);

    $('.add_team.member').typeahead({
      name: 'users',
      prefetch: '#/users.json',
      limit: 10
    });

    return that;
  },

  killMember: function() {
    this.remove();
  }
});