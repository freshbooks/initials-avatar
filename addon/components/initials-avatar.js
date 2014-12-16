import Ember from 'ember';
export default Ember.Component.extend({
  firstName: '',
  lastName: '',
  company: '',
  firstInitial: (function() {
    return this.get("firstName")[0] || this.get("company")[0];
  }).property('firstName', 'lastName'),
  lastInitial: (function() {
    return this.get("lastName")[0] || "";
  }).property('lastName'),
  classNames: 'initials-avatar',
  attributeBindings: ['style'],
  style: (function() {
      var computedColor = (this.get("colorOffset") !== void 0 ? this.get("colors")[this.get("colorOffset") % this.get("colors").length] : "#CCCCCC");
    return "color: " + computedColor + "; border-color:" + computedColor;
  }).property('color-offset'),
  colors: ["#FFCCCC", "#CCFFCC", "#CCCCFF"]
});
