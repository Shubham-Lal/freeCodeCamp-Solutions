var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {

    suite('Routing Tests', function () {

        suite('GET /api/convert => conversion object', function () {

            test('Convert 10L (valid input)', function (done) {
                chai.request(server)
                    .get('/api/convert')
                    .query({ input: '10L' })
                    .end(function (err, res) {
                        assert.equal(res.status, 200);
                        assert.equal(res.body.initNum, 10);
                        assert.equal(res.body.initUnit, 'L');
                        assert.approximately(res.body.returnNum, 2.64172, 0.1);
                        assert.equal(res.body.returnUnit, 'gal');
                        done();
                    });
            });

            test('Convert 32g (invalid input unit)', function (done) {
                chai.request(server)
                    .get('/api/convert')
                    .query({ input: '32g' })
                    .end(function (err, res) {
                        assert.equal(res.body, 'invalid unit');
                    });
                done()
            });

            test('Convert 3/7.2/4kg (invalid number)', function (done) {
                chai.request(server)
                    .get('/api/convert')
                    .query({ input: '3/7.2/4kg' })
                    .end(function (err, res) {
                        assert.equal(res.body, 'invalid number');
                    });
                done();
            });

            test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function (done) {
                chai.request(server)
                    .get('/api/convert')
                    .query({ input: '3/7.2/4kilomegagram' })
                    .end(function (err, res) {
                        assert.equal(res.body, 'invalid number and unit');
                    });
                done();
            });

            test('Convert kg (no number)', function (done) {
                chai.request(server)
                    .get('/api/convert')
                    .query({ input: 'kg' })
                    .end(function (err, res) {
                        assert.equal(res.body.initNum, 1)
                        assert.equal(res.body.initUnit, 'kg')
                    });
                done();
            });

        });

    });

});