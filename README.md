<img src="structure.jpg" width="300">

### A simple schema/attributes library built on top of modern JavaScript
---

<img src="https://img.shields.io/travis/talyssonoc/structure.svg"> <img src="https://img.shields.io/coveralls/talyssonoc/structure.svg">
---
Structure provides a simple interface which allows you to add schemas to your ES6 classes.

## Getting started 

`npm install structure`

## Usage

```js
import { attributes } from 'structure';

const userAttributes = {
  name: String,
  age: {
    type: Number,
    defaultValue: 18
  },
  birthday: Date
};

class UserClass {
 greet() {
  return `Hello ${this.name}`;
 }
}

const User = attributes(userAttributes)(UserClass);

/* The attributes "wraps" the Class, still providing access to its methods: */

const user = new User({
  name: 'John Foo'
});

user.greet(); // Hello John Foo
```

## Schema Concept

## Coercion

## Validation

## Browser Support
 

