import Ember from 'ember';
export default Ember.Component.extend({
  firstName: '',
  lastName: '',
  company: '',
  colorIndex: 1,
  maxColorIndex: 1,

  firstInitial: function() {
    return this.get("firstName")[0] || this.get("company")[0];
  }.property('firstName', 'lastName'),

  lastInitial: function() {
    return this.get("lastName")[0] || "";
  }.property('lastName'),

  classNameBindings: [':initialsAvatar', 'avatarColor'],

  avatarColor: function() {
    var index = this.get("colorIndex");
    if (index > this.get("maxColorIndex")) {
      index = index % this.get("maxColorIndex");
    }
    return 'avatarColor-' + index;
  }.property('maxColors', 'colorIndex')
});
