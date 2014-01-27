# is-disposable-email

  Determine if an email is a [disposable email address](http://en.wikipedia.org/wiki/Disposable_email_address) like `joe@mailinator.com`. You can use it to detect or block disposable accounts in your signup process.

## Example

```js
var disposable = require('is-disposable-email');

disposable('ilya@segment.io'); // false
disposable('mike@gmail.com'); // false
disposable('fake@mailinator.com'); // true
```

## Installation
  
```
$ npm install is-disposable-email
```
```
$ component install ivolo/is-disposable-email
```

## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```