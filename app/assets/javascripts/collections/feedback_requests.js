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

  comparator:  function(feedbackRequestA, feedbackRequestB) { 
    return (feedbackRequestA.get('created_at') > feedbackRequestB.get('created_at')) ? -1 : 1;
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