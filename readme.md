# sequential-indexof

Returns the index of the first instance; when called a second time, returns the index of the second instance; and so on. Works with arrays and strings. Packaged as a [Node.js](https://nodejs.org/) module.

## Installation

```bash
npm install sequential-indexof --save
```

## Usage

```javascript
const sequentialIndexOf = require('sequential-indexof')

const array = ['a', 'b', 'a']
const indexOf = sequentialIndexOf(array) // returns a function

indexOf('a') // returns 0, the first index of 'a'
indexOf('a') // returns 2, the second index of 'a'
indexOf('a') // returns -1, since there are no more instances of 'a'

indexOf('b') // returns 1, the first index of 'b'
indexOf('b') // returns -1, since there are no more instances of 'b'

indexOf('c') // returns -1, since there are no instances of 'c'
```
