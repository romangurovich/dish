Dish.Views.NewFeedbackRequestView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "focus textarea#feedback_request_body": "dropIt",
    "mouseout textarea#feedback_request_body": "reset"
  },

  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['feedback_requests/new']({
      teams: that.teams
    });
    that.$el.html(renderedContent);
    return that;
  },

  dropIt: function(){
    var that = this;
    that.$('textarea#feedback_request_body').text("").addClass("editing");
    
    $('.slider').slideDown();
  },

  reset: function(){
   var that = this;
   if(that.$('textarea#feedback_request_body').val() == ""){
      that.$('textarea#feedback_request_body').text("What's on your mind?").removeClass("editing").blur();
      $('.slider').slideUp();
    }
  },

  submit: function(){
    var that = this;

    var feedbackRequest = new Dish.Models.FeedbackRequest({
      body: that.$("textarea[name=feedback_request\\[body\\]]").val(),
      requestor_id: that.currentUser.get('id'),
      team_id: $("select :selected").val()
    });

    that.collection.add(feedbackRequest);
    feedbackRequest.save();
    that.$('textarea#feedback_request_body').val("");
    that.reset();
    Backbone.history.navigate("#/");
  }
});