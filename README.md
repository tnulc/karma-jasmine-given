karma-jasmine-given
==========

Installation
------------

```sh
$ npm install karma-jasmine-given --save-dev
```

Add `jasmine-given` to the `frameworks` key in your Karma configuration, before `jasmine`:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-given', 'jasmine']
  });
}
```

Usage
-----

Given-When-Then DSL is now available in your tests:

```js
describe("assigning stuff to this", function() {
  Given(function() { this.number = 24; });
  Given(function() { this.number++; });
  When(function() { this.number *= 2; });
  Then(function() { return this.number === 50; });
  // or
  Then(function() { expect(this.number).toBe(50) });
});

describe("assigning stuff to variables", function() {
  var subject;
  Given(function() { subject = []; });
  When(function() { subject.push('foo'); });
  Then(function() { return subject.length === 1; });
  // or
  Then(function() { expect(subject.length).toBe(1); });
});
```