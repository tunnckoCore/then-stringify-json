/*!
 * then-stringify-json <https://github.com/tunnckoCore/then-stringify-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isPromise = require('is-promise')
var thenStringifyJson = require('./index')

test('then-stringify-json:', function () {
  test('should return promise', function (done) {
    var fixture = thenStringifyJson({foo: 'bar'})
    var actual = isPromise(fixture)
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should pass result to .then', function (done) {
    var promise = thenStringifyJson({foo: 'bar'})

    promise
    .then(function (res) {
      test.equal(res, '{"foo":"bar"}')
      done()
    })
    .catch(done)
  })
  test('should catch errors with .catch', function (done) {
    var circular = {name: 'baz'}
    var obj = {foo: [circular, circular, circular]}
    obj.list = [obj, obj, circular, obj]

    var promise = thenStringifyJson(obj)

    promise.catch(function (err) {
      test.ifError(!err)
      test.equal(err.message, 'Converting circular structure to JSON')
      done()
    })
  })
})
