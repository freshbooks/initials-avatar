import Ember from 'ember';
import {test, moduleForComponent} from 'ember-qunit';

moduleForComponent('initials-avatar', 'Unit | Component | initials avatar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('shows first and last name initials', function(assert) {
  var component = this.subject({
    firstName: "Barack",
    lastName: "Obama",
    company: "United States",
    email: "Obama@whitehouse.gov"
  });
  assert.equal(component.get("initials"), "BO");
});

test('shows company if email, first and last name not provided', function(assert) {
  var component = this.subject({
    firstName: "",
    lastName: "",
    company: "United States",
    email: ""
  });
  assert.equal(component.get("initials"), "U");
});

test('shows email if company and first and last name not provided', function(assert) {
  var component = this.subject({
    firstName: "",
    lastName: "",
    company: "",
    email: "Obama@whitehouse.gov"
  });
  assert.equal(component.get("initials"), "O");
});

test('return the default color-1', function(assert) {
  var component = this.subject({});
  assert.equal(component.get("avatarColor"), 'avatarColor-1');
});

test('set the color index', function(assert) {
  var component = this.subject({
    maxColorIndex: 3,
    colorIndex:2
  });
  assert.equal(component.get("avatarColor"), 'avatarColor-2');
});

test('minimum color should be 1', function(assert) {
  var component = this.subject({
    maxColorIndex: 3,
    colorIndex: 6
  });
  assert.equal(component.get("avatarColor"), 'avatarColor-3');
});

test('cycle through available colors', function(assert) {
  var component = this.subject({
    maxColorIndex: 2,
    colorIndex: 3
  });
  assert.equal(component.get("avatarColor"), 'avatarColor-1');
});

test('handle empty first name, last name, company, and email', function(assert) {
  var component = this.subject({
    firstName: "",
    lastName: "",
    company: "",
    email: ""
  });
  assert.equal(component.get("initials"), "");
});

test('handle empty first name with company', function(assert) {
  var component = this.subject({
    firstName: "",
    lastName: "Lasty",
    company: ""
  });
  assert.equal(component.get("initials"), "L");
});

test('displays initials if no image is given', function(assert) {
  assert.expect(2);

  var component = this.subject({
    firstName: "Barack",
    lastName: "Obama",
  });

  var $component = this.append();

  assert.equal($component.attr('style'), undefined);
  assert.equal($component.text().trim(), 'BO');
});

test('displays image if one is provided', function(assert) {
  assert.expect(2);

  var imageUrl = "http://example.com/potus.jpg";

  var component = this.subject({
    image: imageUrl
  });

  var $component = this.append();

  assert.equal($component.attr('style'), 'background-image: url(http://example.com/potus.jpg); background-size: cover');
  assert.equal($component.text().trim(), '');
});
