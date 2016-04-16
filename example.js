Comments = new Mongo.Collection("myComments");


if (Meteor.isClient) {
  // counter starts at 0
  Template.commentInput.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const form = event.target;
      const formTextValue = form.text.value;


      // Insert a task into the collection
      Comments.insert({
        textValue: formTextValue,
        createdAt: new Date(), // current time
      });

      // Clear form
      form.text.value = '';
    },
  });



  // (Single DICTIONARY —> Single Row ) Multiple values in a single row of HTML - use a dictonary + "with"

  // (Multiple layers of values; i.e., Multiple Dictionaries —> Multiple Rows of HTML) ==>  use a Collection + "each

  /*
var commentOutputHelperDictionary = {profile:
                                     {
                                      comment:"Hey! How are you",
                                      name:{first:"yo", last:"duude"}
                                     }
                                    };
*/


var commentOutputHelperDictionary =  {
  firstDictionary: function(){

    return Comments.find();

    //return {textValue: "Apple", createdAt:"October"};
  },
  last:"duude"
};



Template.commentOutput.helpers(commentOutputHelperDictionary);

/*
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
*/

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
