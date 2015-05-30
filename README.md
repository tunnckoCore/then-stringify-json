# then-stringify-json [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Gracefully stringify JSON using promises - promisified JSON.stringify

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i then-stringify-json --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var JSONStringify = require('then-stringify-json')

JSONStringify({foo: 'bar'})
.then(function (res) {
  console.log(res)
  //=> '{"foo":"bar"}'
})
.catch(console.error)
```


## Related
- [bluebird](https://github.com/petkaantonov/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [make-callback](https://github.com/tunnckoCore/make-callback): Make synchronous function to support callback api
- [promise](https://github.com/then/promise): Bare bones Promises/A+ implementation
- [try-read-json](https://github.com/tunnckoCore/try-read-json): Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse - support optional callback
- [then-parse-json](https://github.com/tunnckoCore/then-parse-json): Gracefully parse JSON using promises - promisified JSON.parse



## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/then-stringify-json/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/then-stringify-json
[npmjs-img]: https://img.shields.io/npm/v/then-stringify-json.svg?label=then-stringify-json

[license-url]: https://github.com/tunnckoCore/then-stringify-json/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/then-stringify-json
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/then-stringify-json.svg

[travis-url]: https://travis-ci.org/tunnckoCore/then-stringify-json
[travis-img]: https://img.shields.io/travis/tunnckoCore/then-stringify-json.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/then-stringify-json
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/then-stringify-json.svg

[david-url]: https://david-dm.org/tunnckoCore/then-stringify-json
[david-img]: https://img.shields.io/david/tunnckoCore/then-stringify-json.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
