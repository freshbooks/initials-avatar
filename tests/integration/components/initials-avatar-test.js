import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('initials-avatar', 'Integration | Component | initials avatar', {
  integration: true
});

test('displays initials if no image is given', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{initials-avatar
      id="initials-avatar"
      firstName="Barack"
      lastName="Obama"
    }}
  `);

  assert.equal(this.$('#initials-avatar').attr('style'), undefined);
  assert.equal(this.$('#initials-avatar').text().trim(), 'BO');
});

test('displays image if one is provided', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{initials-avatar
      id="initials-avatar"
      image="http://example.com/potus.jpg"
    }}
  `);

  assert.equal(this.$('#initials-avatar').attr('style'), 'background-image: url(http://example.com/potus.jpg); background-size: cover');
  assert.equal(this.$('#initials-avatar').text().trim(), '');
});

test('uses color if no image', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{initials-avatar
      id="initials-avatar"
      color="#ffffff"
      firstName="Barack"
      lastName="Obama"
    }}
  `);

  assert.equal(this.$('#initials-avatar').attr('style'), 'background-color: #ffffff;');
  assert.equal(this.$('#initials-avatar').text().trim(), 'BO');
});

test('image supercedes color', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{initials-avatar
      id="initials-avatar"
      color="#ffffff"
      image="http://example.com/potus.jpg"
      firstName="Barack"
      lastName="Obama"
    }}
  `);

  assert.equal(this.$('#initials-avatar').attr('style'), 'background-image: url(http://example.com/potus.jpg); background-size: cover');
  assert.equal(this.$('#initials-avatar').text().trim(), '');
});