import Ember from 'ember';
export default Ember.Component.extend({
  firstName: '',
  lastName: '',
  company: '',
  colorIndex: 1,
  maxColorIndex: 1,

  firstInitial: function() {
    var first = this.get("firstName").length && this.get("firstName")[0],
      company = this.get("company").length && this.get("company")[0];
    return first || company || "";
  }.property('firstName', 'lastName'),

  lastInitial: function() {
    var last = this.get("lastName").length && this.get("lastName")[0];
    return last || "";
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
