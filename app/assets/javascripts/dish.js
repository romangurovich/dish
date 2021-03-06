window.Dish = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function(args) {
    args = args || {};
    _(this).extend(args);

    Dish.Store.currentUser = new Dish.Models.User(this.userData);
    this.teams = new Dish.Collections.Teams(this.teamsData); 
    this.sentFeedbackRequests = new Dish.Collections.FeedbackRequests(this.sentFeedbackRequestsData);
    this.receivedFeedbackRequests = new Dish.Collections.FeedbackRequests(this.receivedFeedbackRequestsData);
    Dish.Store.allUsers = new Dish.Collections.Users(this.allUsersData);
    
    this.install_nav_pane();
    this.install_teams_pane();
    this.install_requests_pane();

    new Dish.Routers.AppRouter({
      $content: this.$content,
      $teams: this.$teams,
      $requests: this.$requests,
      user: Dish.Store.currentUser,
      teams: this.teams,
      sentFeedbackRequests: this.sentFeedbackRequests,
      receivedFeedbackRequests: this.receivedFeedbackRequests
    });

    Backbone.history.start();
  },

  install_nav_pane: function() {
    var navPaneView = new Dish.Views.NavPaneView();
    this.$nav.html(navPaneView.render().el);
  },

  install_teams_pane: function() {
    var that = this;

    var teamsIndexView = new Dish.Views.TeamsIndexView ({
      collection: that.teams
    });

    that.$teams.html(teamsIndexView.render().el);
  },

  install_requests_pane: function() {
    var that = this;
    
    var receivedFeedbackRequestsView = new Dish.Views.ReceivedFeedbackRequestsView ({
      collection: that.receivedFeedbackRequests
    });

    that.$requests.html(receivedFeedbackRequestsView.render().el);
  }
};
// $(document).ready(function(){
//   Dish.initialize({
//     $nav : $('#nav-pane'),
//     $teams : $('#teams-pane'),
//     $content : $('#main-pane'),
//     $requests : $('#requests-pane'),

//     userData: <%= current_user.to_json.html_safe %>,
//     teamsData: <%= current_user.owned_teams.to_json.html_safe %>,
//     receivedFeedbackRequestsData: <%= current_user.received_feedback_requests.to_json.html_safe %>,
//     sentFeedbackRequestsData: <%= current_user.sent_feedback_requests.to_json.html_safe %>
//   });
// });
