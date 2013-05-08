Dish.Views.ShowTeamView = Backbone.View.extend({
  initialize: function(args){
    args = args || {};
    _(this).extend(args);
    console.log(args);
  },

  render: function(){
    var that = this;

    var renderedContent = JST["teams/show"]({
      team: that.team,
      members: that.members
    });

    that.$el.html(renderedContent);
    return that;
  }

});