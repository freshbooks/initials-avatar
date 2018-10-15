import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | initials avatar', function(hooks) {
  setupTest(hooks);

  test('initial should always be uppercase', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create();
    assert.equal(component.initial('barack'), 'B');
  });


  test('shows first and last name initials', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: 'Barack',
      lastName: 'Obama',
      company: 'United States',
      email: 'obama@whitehouse.gov'
    });
    assert.equal(component.get('initials'), 'BO');
  });

  test('shows company if email, first and last name not provided', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: '',
      lastName: '',
      company: 'United States',
      email: ''
    });
    assert.equal(component.get('initials'), 'U');
  });

  test('shows email if company and first and last name not provided', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: '',
      lastName: '',
      company: '',
      email: 'obama@whitehouse.gov'
    });
    assert.equal(component.get('initials'), 'O');
  });

  test('shows company if email is provided but first and last name are not', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: '',
      lastName: '',
      company: 'United States',
      email: 'obama@whitehouse.gov'
    });
    assert.equal(component.get('initials'), 'U');
  });

  test('return the default color-1', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({});
    assert.equal(component.get('avatarColor'), 'avatarColor-1');
  });

  test('set the color index', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      maxColorIndex: 3,
      colorIndex:2
    });
    assert.equal(component.get('avatarColor'), 'avatarColor-2');
  });

  test('minimum color should be 1', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      maxColorIndex: 3,
      colorIndex: 6
    });
    assert.equal(component.get('avatarColor'), 'avatarColor-3');
  });

  test('cycle through available colors', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      maxColorIndex: 2,
      colorIndex: 3
    });
    assert.equal(component.get('avatarColor'), 'avatarColor-1');
  });

  test('handle empty first name, last name, company, and email', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: '',
      lastName: '',
      company: '',
      email: ''
    });
    assert.equal(component.get('initials'), '');
  });

  test('handle empty first name with company', function(assert) {
    let component = this.owner.factoryFor('component:initials-avatar').create({
      firstName: '',
      lastName: 'Lasty',
      company: ''
    });
    assert.equal(component.get('initials'), 'L');
  });
});

