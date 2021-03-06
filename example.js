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


      // Insert a task into the collection
      Comments.insert({
        textValue: formTextValue,
        createdAt: new Date(), // current time
      });

      // Clear form
      form.textInput.value = '';
    },
  });


var commentOutputHelperDictionary =  {
  sampleCommentDictionary: function(){
    return {textValue: "Apple", createdAt:"October 2016"};
  }
};


Template.commentOutput.helpers(commentOutputHelperDictionary);

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}