import Ember from 'ember';
export default Ember.Component.extend({
  firstName: '',
  lastName: '',
  company: '',
  image: '',
  colorIndex: 1,
  maxColorIndex: 1,

  checkImage: function() {
    var self = this;
    $.ajax(self.get('image'), {
      success: function(resp) {
        self.set('hasImage', true);
      },
    });
  },

  hasImage: function() {
    if (!Ember.isEmpty(this.get('image'))){
      this.checkImage();
    }
    return false;
  }.property('image'),

  initials: function() {
      var first = this.initial(this.get('firstName')),
          last = this.initial(this.get('lastName')),
          company = this.initial(this.get('company'));
      return (first + last) || company;
  }.property('firstName', 'lastName', 'company'),

  initial: function(word) {
      return Ember.isPresent(word) ? word[0] : "";
  },


  classNameBindings: [':initialsAvatar', 'avatarColor'],

  avatarColor: function() {
    var index = this.get("colorIndex");
    index = (index - 1) % this.get("maxColorIndex") + 1;
    return 'avatarColor-' + index;
  }.property('maxColors', 'colorIndex')
});
