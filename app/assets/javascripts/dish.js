window.Dish = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function(args) {
    args = args || {};
    _(this).extend(args);

    console.log("hello");
    Dish.Store.currentUser = new Dish.Models.User(this.userData);
    var teams = new Dish.Collections.Teams(this.teamsData); 
    var sentFeedbackRequests = new Dish.Collections.FeedbackRequests(this.sentFeedbackRequestsData);
    var receivedFeedbackRequests = new Dish.Collections.FeedbackRequests(this.receivedFeedbackRequestsData);
    
    this.install_nav_pane();

    new Dish.Routers.AppRouter({
      $content: this.$content,
      $teams: this.$teams,
      $requests: this.$requests,
      user: Dish.Store.currentUser,
      teams: teams,
      sentFeedbackRequests: sentFeedbackRequests,
      receivedFeedbackRequests: receivedFeedbackRequests
    });

    Backbone.history.start();
  },

  install_nav_pane: function() {
    var navPaneView = new Dish.Views.NavPaneView();
    this.$nav.html(navPaneView.render().el);
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
