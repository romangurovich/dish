Dish.Views.ShowTeamView = Backbone.View.extend({
  intialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function(){
    var that = this;

    var renderedContent = JST["teams/show"]({
      team: team,
      members: members
    });

    that.$el.html(renderedContent);
    return that;
  }

});