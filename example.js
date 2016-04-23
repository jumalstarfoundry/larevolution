Comments = new Mongo.Collection("myComments");


if (Meteor.isClient) {
  // counter starts at 0
  Template.commentInput.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const form = event.target;
      const formTextValue = form.textInput.value;

      Meteor.call('commentInsert', formTextValue);

      // Clear form
      form.textInput.value = '';
    },
  });


var commentOutputHelperDictionary =  {
  sampleCommentDictionary: function(){
    
    return Comments.find();
  }
};


Template.commentOutput.helpers(commentOutputHelperDictionary);

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
   
  });
  
  Meteor.methods({
    commentInsert: function (textVal) {
      // Insert a task into the collection
      Comments.insert({
        textValue: textVal,
        createdAt: new Date(), // current time
      });
    }
});
}
