import Ember from 'ember';
export default Ember.Component.extend({
  firstName: '',
  lastName: '',
  company: '',
  colorIndex: 1,
  maxColorIndex: 1,

  initials: function() {
      var first = this.initial(this.get('firstName')),
          last = this.initial(this.get('lastName')),
          company = this.initial(this.get('company'));
      return (first + last) || company;
  }.property('firstName', 'lastName', 'company'),

  initial: function(word) {
      if (word && word.length) {
          return word[0];
      }
      return "";
  },


  classNameBindings: [':initialsAvatar', 'avatarColor'],

  avatarColor: function() {
    var index = this.get("colorIndex");
    if (index > this.get("maxColorIndex")) {
      index = index % this.get("maxColorIndex");
    }
    return 'avatarColor-' + index;
  }.property('maxColors', 'colorIndex')
});
