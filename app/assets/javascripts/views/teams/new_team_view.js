Dish.Views.NewTeamView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "click button.btn-add-member": "addMember"
  },

  initialize: function(args){
    args = args || {};
    _(this).extend(args);
  },

  render: function() {
    var that = this;

    var renderedContent = JST['teams/new']();

    that.$el.html(renderedContent);
    return that;
  },

  addMember: function() {
    // var that = this;

    // var teamMember = new Dish.Models.TeamMember();
    // that.team.get('members').add(teamMember);

    

    // var confidantes = Dish.Store.currentUser.get('confidantes');

   

    var addTeamMemberView = new Dish.Views.AddTeamMemberView();
    $('.add_members').append(addTeamMemberView.render().$el)

    // that.membersArray.push(addTeamMemberView);

    // $('.buttons').before(addTeamMemberView.render().$el)
  },

  // dropIt: function(){
  //   var that = this;
  //   that.$('textarea#feedback_body').text("").addClass("editing");
    
  //   $('.slider').slideDown();
  // },

  // reset: function(){
  //  var that = this;
  //  if(that.$('textarea#feedback_body').val() === ""){
  //     that.$('textarea#feedback_body').text("Let loose").removeClass("editing").blur();
  //     $('.slider').slideUp();
  //   }
  // },

  submit: function(){
    // var that = this;
    var team = new Dish.Models.Team();
    var teamMembers = that.team.get('members');

    // var team = new Dish.Models.Team({
    //   name: that.$("input[name=team\\[name\\]]").val(),
    //   owner_id: that.currentUser.get('id'),
    //   member_ids: $("select :selected").val()
    // });

    // that.collection.add(team);
    // team.save();
    // Backbone.history.navigate("/#");
  }
});