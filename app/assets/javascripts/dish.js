window.Dish = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function(args) {
  	args = args || {};
  	_(this).extend(args);

  	Dish.Store.user = new Dish.Models.User(this.userData);
  	Dish.Store.teams = new Dish.Collections.Teams(this.teamsData);
  	Dish.Store.receivedFeedbackRequests = new Dish.Collections.FeedbackRequests(this.receivedFeedbackRequestsData);
  	Dish.Store.sentFeedbackRequests = new Dish.Collections.FeedbackRequests(this.sentFeedbackRequestsData);
    
    this.install_nav_pane();
    Dish.Store.contentRouter = new Dish.Routers.ContentRouter({
      $rootEl: $content,
      user: Dish.Store.user,
      teams: Dish.Store.teams,
      sent_feedback_requests: Dish.Store.sentFeedbackRequests
    });

    Dish.Store.teamsRouter = new Dish.Routers.TeamsRouter(
      $rootEl: $teams,
      teams: Dish.Store.teams
    });
    
    // Dish.Store.AnnouncementsRouter = new Dish.Routers.AnnouncementsRouter($content, announcementsData);
    // Dish.Store.RequestsRouter = new Dish.Routers.RequestsRouter($content, feedbackRequestsData);
    Backbone.history.start();
    alert('Hello from Backbone!');
  },

  install_nav_pane: function() {
    Dish.Store.navPaneView = new Dish.Views.NavPaneView();
    this.$nav.html(Dish.Store.navPaneView.render().el);
  }
};

$(document).ready(function(){
  Dish.initialize({
    $nav : $('#nav-pane'),
    $teams : $('#teams-pane'),
    $content : $('#main-pane'),
    $requests : $('#requests-pane'),

    userData: <%= current_user.to_json.html_safe %>,
    teamsData: <%= current_user.owned_teams.to_json.html_safe %>,
    receivedFeedbackRequestsData: <%= current_user.received_feedback_requests.to_json.html_safe %>,
    sentFeedbackRequestsData: <%= current_user.sent_feedback_requests.to_json.html_safe %>
  });
});
