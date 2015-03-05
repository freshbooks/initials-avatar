# Initials-avatar

An Ember CLI Addon that generates an avatar based on the initials of someone
with a first and last name.

## Usage

Initials-avatar is intended to be a "default" avatar when an actual image is not
present.

If a first and last name are both not present, a single initial for the company
will be displayed:

```hbs
{{initials-avatar
  firstName=userGivenName
  lastName=userFamilyName
  company=userCompany
  image=userProfileImage
}}
```

There are also color classes that you can leverage to control the styling of
your different initials avatars:

```hbs
{{initials-avatar
  firstName=userGivenName
  lastName=userFamilyName
  company=userCompany
  image=userProfileImage
  colorIndex=userid
  maxColorIndex=3 {{!-- you only have 3 color classes defined --}}
}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
