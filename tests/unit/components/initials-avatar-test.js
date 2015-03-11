import Ember from 'ember';
import {test, moduleForComponent} from 'ember-qunit';

moduleForComponent('initials-avatar', 'Unit test for initials avatar');


test('shows first and last name initials', function() {
  var component = this.subject({
    firstName: "Barack",
    lastName: "Obama",
    company: "United States"
  });
  equal(component.get("initials"), "BO");
});

test('shows company if first and last name not provided', function() {
  var component = this.subject({
    firstName: "",
    lastName: "",
    company: "United States"
  });
  equal(component.get("initials"), "U");
});

test('return the default color-1', function() {
  var component = this.subject({});
  equal(component.get("avatarColor"), 'avatarColor-1');
});

test('set the color index', function() {
  var component = this.subject({
    maxColorIndex: 3,
    colorIndex:2
  });
  equal(component.get("avatarColor"), 'avatarColor-2');
});

test('minimum color should be 1', function() {
  var component = this.subject({
    maxColorIndex: 3,
    colorIndex: 6
  });
  equal(component.get("avatarColor"), 'avatarColor-3');
});

test('cycle through available colors', function() {
  var component = this.subject({
    maxColorIndex: 2,
    colorIndex: 3
  });
  equal(component.get("avatarColor"), 'avatarColor-1');
});

test('handle empty first name, last name and company', function() {
  var component = this.subject({
    firstName: "",
    lastName: "",
    company: ""
  });
  equal(component.get("initials"), "");
});

test('handle empty first name with company', function() {
  var component = this.subject({
    firstName: "",
    lastName: "Lasty",
    company: ""
  });
  equal(component.get("initials"), "L");
});

test('displays initials if no image is given', function() {
  expect(2);

  var component = this.subject({
    firstName: "Barack",
    lastName: "Obama",
  });

  var $component = this.append();

  equal($component.attr('style'), undefined);
  equal($component.text().trim(), 'BO');
});

test('displays image if one is provided', function() {
  expect(2);

  var imageUrl = "http://example.com/potus.jpg";

  var component = this.subject({
    image: imageUrl
  });

  var $component = this.append();

  equal($component.attr('style'), 'background-image: url(http://example.com/potus.jpg); background-size: cover');
  equal($component.text().trim(), '');
});
