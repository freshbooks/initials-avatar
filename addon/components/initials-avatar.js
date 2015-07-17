import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':initialsAvatar', 'avatarColor'],
  attributeBindings: ['style'],

  firstName: '',
  lastName: '',
  company: '',
  image: '',
  colorIndex: 1,
  maxColorIndex: 1,

  hasImage: Ember.computed.notEmpty('image'),

  initials: Ember.computed('firstName', 'lastName', 'company', function() {
    var first = this.initial(this.get('firstName')),
      last = this.initial(this.get('lastName')),
      company = this.initial(this.get('company'));
    return (first + last) || company;
  }),

  initial: function(word) {
    return Ember.isPresent(word) ? word[0] : "";
  },

  /**
   * Display the image using a background-image inline style
   */
  style: Ember.computed('hasImage', function() {
    if (this.get('hasImage')) {
      var escapedUrl = Ember.Handlebars.Utils.escapeExpression(this.get('image'));
      return Ember.String.htmlSafe(`background-image: url(${escapedUrl}); background-size: cover`);
    }
  }),

  avatarColor: Ember.computed('maxColors', 'colorIndex', function() {
    var index = this.get('colorIndex');
    index = (index - 1) % this.get('maxColorIndex') + 1;
    return 'avatarColor-' + index;
  })
});
