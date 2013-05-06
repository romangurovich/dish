Dish.Views.NewSolicitedFeedbackView = Backbone.View.extend({
  events: {
    "keypress input#new_feedback" : "submit"
  },

  initialize: function(args){
    var args = args || {};
    _(this).extend(args);
  },

  render: function(){
    var that = this;

    var renderedContent = JST["solicited_feedbacks/new"]();

    that.$el.html(renderedContent);
    return that;
  },

  submit: function(e){
    var that = this;
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      var solicitedFeedback = new Dish.Models.SolicitedFeedback({
        body: that.$("input[name=solicited_feedback_body]").val(),
        author_id: Dish.Store.currentUser.get('id'),
        feedback_request_id: that.model.get('id')
      });

      that.collection.add(solicitedFeedback);
      solicitedFeedback.save();
      that.$('input#new_feedback').hide();
      Backbone.history.navigate("/#");
    }
  }

});