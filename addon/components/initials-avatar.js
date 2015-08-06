import Ember from 'ember';
const { computed, Handlebars, isPresent, Component } = Ember;

export default Component.extend({
  classNameBindings: [':initialsAvatar', 'avatarColor'],
  attributeBindings: ['style'],

  firstName: '',
  lastName: '',
  company: '',
  image: '',
  colorIndex: 1,
  maxColorIndex: 1,

  hasImage: Ember.computed.notEmpty('image'),

  initials: computed('firstName', 'lastName', 'company', function() {
    const first = this.initial(this.get('firstName'));
    const last = this.initial(this.get('lastName'));
    const company = this.initial(this.get('company'));

    return (first + last) || company;
  }),

  initial(word) {
    return isPresent(word) ? word[0] : "";
  },

  /**
   * Display the image using a background-image inline style
   */
  style: computed('hasImage', function(){
    // Ember complains about htmlSafe strings when a bound style method returns
    // nothing. Returning an empty string turns off the warning but leaves an
    // empty style attribute on the div.
    let style = '';

    if (this.get('hasImage')) {
      var escapedUrl = Handlebars.Utils.escapeExpression(this.get('image'));
      style = `background-image: url(${escapedUrl}); background-size: cover`;
    }

    return Ember.String.htmlSafe(style);
  }),

  avatarColor: computed('maxColors', 'colorIndex', function() {
    var index = this.get('colorIndex');
    index = (index - 1) % this.get('maxColorIndex') + 1;
    return 'avatarColor-' + index;
  })
});
