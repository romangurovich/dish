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
    return that;
  },

  killMember: function() {
    this.remove();
  }
});