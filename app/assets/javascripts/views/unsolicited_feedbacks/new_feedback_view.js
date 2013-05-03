Dish.Views.NewFeedbackView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "focus textarea#feedback_body": "dropIt",
    "mouseout textarea#feedback_body": "reset"
  },

  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['unsolicited_feedbacks/new']({
      teams: that.teams
    });
    that.$el.html(renderedContent);
    return that;
  },

  dropIt: function(){
    var that = this;
    that.$('textarea#feedback_body').text("").addClass("editing");
    
    $('.slider').slideDown();
  },

  reset: function(){
   var that = this;
   if(that.$('textarea#feedback_body').val() === ""){
      that.$('textarea#feedback_body').text("Let loose").removeClass("editing").blur();
      $('.slider').slideUp();
    }
  },

  submit: function(){
    var that = this;

    var feedback = new Dish.Models.UnsolicitedFeedback({
      body: that.$("textarea[name=feedback\\[body\\]]").val(),
      author_id: that.currentUser.get('id'),
      recipient_id: $("select :selected").val()
    });

    that.collection.add(feedback);
    feedback.save();
    that.$('textarea#feedback_body').val("");
    that.reset();
    Backbone.history.navigate("/#");
  }
});