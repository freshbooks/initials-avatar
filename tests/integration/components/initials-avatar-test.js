import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | initials avatar', function(hooks) {
  setupRenderingTest(hooks);

  test('displays initials if no image is given', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{initials-avatar
        id="initials-avatar"
        firstName="Barack"
        lastName="Obama"
      }}
    `);

    assert.dom('#initials-avatar').doesNotHaveAttribute('style');
    assert.dom('#initials-avatar').hasText('BO');
  });

  test('displays image if one is provided', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{initials-avatar
        id="initials-avatar"
        image="http://example.com/potus.jpg"
      }}
    `);

    assert.dom('#initials-avatar').hasAttribute(
      'style',
      'background-image: url(http://example.com/potus.jpg); background-size: cover'
    );
    assert.dom('#initials-avatar').hasText('');
  });

  test('uses color if no image', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{initials-avatar
        id="initials-avatar"
        color="#ffffff"
        firstName="Barack"
        lastName="Obama"
      }}
    `);

    assert.dom('#initials-avatar').hasAttribute('style', 'background-color: #ffffff;');
    assert.dom('#initials-avatar').hasText('BO');
  });

  test('image supercedes color', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{initials-avatar
        id="initials-avatar"
        color="#ffffff"
        image="http://example.com/potus.jpg"
        firstName="Barack"
        lastName="Obama"
      }}
    `);

    assert.dom('#initials-avatar').hasAttribute(
      'style',
      'background-image: url(http://example.com/potus.jpg); background-size: cover'
    );
    assert.dom('#initials-avatar').hasText('');
  });
});
