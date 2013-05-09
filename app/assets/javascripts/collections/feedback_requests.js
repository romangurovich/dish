Dish.Collections.FeedbackRequests = Backbone.Collection.extend({
  
  model: Dish.Models.FeedbackRequest,
  url: "/feedback_requests",

  // comparator: function(feedbackRequest) {
  //   return String.fromCharCode.apply(String,
  //       _.map(feedbackRequest.get("created_at").split(""), function (c) {
  //           return 0xffff - c.charCodeAt();
  //       })
  //   );
  // }

  comparator:  function(a, b) { 
    if (a.get('created_at') > b.get('created_at')) return -1; // before
    if (b.get('created_at') > a.get('created_at')) return 1; // after
    return 0; // equal
  }

  // byCreatedAt: function() {
  //   var sortedCollection = new Dish.Collections.FeedbackRequests(this.models);
  //   sortedCollection.comparator = function(feedbackRequest) {
  //   return String.fromCharCode.apply(String,
  //       _.map(feedbackRequest.get("created_at").split(""), function (c) {
  //           return 0xffff - c.charCodeAt();
  //       })
  //   );

  //   sortedCollection.sort();
  //   return sortedCollection;
  // }

});