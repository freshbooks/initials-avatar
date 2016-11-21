import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('initials-avatar', 'Unit | Component | initials avatar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('initial should always be uppercase', function(assert) {
  let component = this.subject();
  assert.equal(component.initial('barack'), 'B');
});


test('shows first and last name initials', function(assert) {
  let component = this.subject({
    firstName: 'Barack',
    lastName: 'Obama',
    company: 'United States',
    email: 'obama@whitehouse.gov'
  });
  assert.equal(component.get('initials'), 'BO');
});

test('shows company if email, first and last name not provided', function(assert) {
  let component = this.subject({
    firstName: '',
    lastName: '',
    company: 'United States',
    email: ''
  });
  assert.equal(component.get('initials'), 'U');
});

test('shows email if company and first and last name not provided', function(assert) {
  let component = this.subject({
    firstName: '',
    lastName: '',
    company: '',
    email: 'obama@whitehouse.gov'
  });
  assert.equal(component.get('initials'), 'O');
});

test('shows company if email is provided but first and last name are not', function(assert) {
  let component = this.subject({
    firstName: '',
    lastName: '',
    company: 'United States',
    email: 'obama@whitehouse.gov'
  });
  assert.equal(component.get('initials'), 'U');
});

test('return the default color-1', function(assert) {
  let component = this.subject({});
  assert.equal(component.get('avatarColor'), 'avatarColor-1');
});

test('set the color index', function(assert) {
  let component = this.subject({
    maxColorIndex: 3,
    colorIndex:2
  });
  assert.equal(component.get('avatarColor'), 'avatarColor-2');
});

test('minimum color should be 1', function(assert) {
  let component = this.subject({
    maxColorIndex: 3,
    colorIndex: 6
  });
  assert.equal(component.get('avatarColor'), 'avatarColor-3');
});

test('cycle through available colors', function(assert) {
  let component = this.subject({
    maxColorIndex: 2,
    colorIndex: 3
  });
  assert.equal(component.get('avatarColor'), 'avatarColor-1');
});

test('handle empty first name, last name, company, and email', function(assert) {
  let component = this.subject({
    firstName: '',
    lastName: '',
    company: '',
    email: ''
  });
  assert.equal(component.get('initials'), '');
});

test('handle empty first name with company', function(assert) {
  let component = this.subject({
    firstName: '',
    lastName: 'Lasty',
    company: ''
  });
  assert.equal(component.get('initials'), 'L');
});

