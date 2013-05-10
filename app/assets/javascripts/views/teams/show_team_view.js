Dish.Views.ShowTeamView = Backbone.View.extend({
  events: {
    "click li": "sortByName",
    "dblclick li": "reverseSort"
  },

  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function(){
    var that = this;

    var renderedContent = JST["teams/show"]({
      team: that.team,
      members: that.members
    });

    that.$el.html(renderedContent);
    return that;
  },

  sortByName: function(e){
    e.preventDefault();

    $('.polaroids').isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows',
      getSortData : {
        name : function ( $elem ) {
          return $elem.find('a').attr('title');
        }
      },
      sortBy : 'name',
      sortAscending: true,
      animationEngine : 'best-available'
    });
  },

  reverseSort: function(e){
    e.preventDefault();

    $('.polaroids').isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows',
      getSortData : {
        name : function ( $elem ) {
          return $elem.find('a').attr('title');
        }
      },
      sortBy : 'name',
      sortAscending: false,
      animationEngine : 'best-available'
    });
  }
});