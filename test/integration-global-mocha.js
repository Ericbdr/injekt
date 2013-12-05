'use strict';

var should  = require('should')
var _       = require('underscore')
var paths   = require('./resources/paths.js');
var pseudo  = require(paths.file_relative.for_test.pseudo)(paths)

describe('injekt:integration:global', function() {

    describe('when instantiating', function() {

        describe('without a closure', function() {

            it('should embed into global', function(done){
                pseudo.topic()
                should.exist(global.Injekt, '`global.Injekt` was not set!');
                should.exist(global.injekt, '`global.injekt` was not set!');
                done()
            })

        })

    })

    describe('when injecting', function() {

        describe('without options', function() {

            it('should embed new instance of itself into injected context', function(done){
                var subject = pseudo.topic({})
                var that = pseudo.inject(subject)();
                _.isObject(that.context('Injekt')).should.be.equal(true, '`Injekt` was not embedded into context!');
                _.isFunction(that.context('injekt')).should.be.equal(true, '`injekt` was not embedded into context!');
                (that.context('Injekt') === global.Injekt).should.be.equal(false, '`Injekt` was not a new instance!');
                (that.context('injekt') === global.injekt).should.be.equal(false, '`injekt` was not a new instance!');
                done()
            })

        })

    })

})