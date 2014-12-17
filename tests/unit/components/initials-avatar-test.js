import Ember from 'ember';
import {test, moduleForComponent} from 'ember-qunit';

moduleForComponent('initials-avatar', 'Unit test for initials avatar');


test('shows first and last name initials', function() {
    var component = this.subject({
        firstName: "Barack",
        lastName: "Obama",
        company: "United States"
    });
    equal(component.get("firstInitial"), "B");
    equal(component.get("lastInitial"), "O");
});

test('shows company if first and last name not provided', function() {
    var component = this.subject({
        firstName: "",
        lastName: "",
        company: "United States"
    });
    equal(component.get("firstInitial"), "U");
    equal(component.get("lastInitial"), "");
});

test('return the default color-1', function() {
    var component = this.subject({});
    equal(component.get("avatarColor"), 'avatar-color-1');
});

test('set the color index', function() {
    var component = this.subject({
        maxColorIndex: 3,
        colorIndex:2
    });
    equal(component.get("avatarColor"), 'avatar-color-2');
});

test('ccyle through available colors', function() {
    var component = this.subject({
        maxColorIndex: 2,
        colorIndex: 3
    });
    equal(component.get("avatarColor"), 'avatar-color-1');
});
