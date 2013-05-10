Dish.Views.NewTeamView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "click button.btn-add-member": "addMember",
    "blur .add_team_member": "addMemberId"
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

    $('.add_team_member').typeahead({
      name: 'users',
      // prefetch: '../users.json',
      valueKey: 'username',
      // local: [{'username': 'timtrueman', 'id': '1'}, {'username':'JakeHarding', 'id':'2'}],
      local: Dish.Store.allUsers,
      limit: 10,
      template: '<p><img src="{{tiny_url}}"/><strong> {{username}}</strong></p>',
      engine: Hogan
    });

    // that.membersArray.push(addTeamMemberView);
  },

  addMemberId: function(e){

  },

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