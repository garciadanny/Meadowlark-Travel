var fortune = require('../lib/fortune.js');
var assert = require('chai').assert;

suite('Fortune cookie tests', function() {
	test('getFortune() should return a fortune', function() {
		assert(typeof fortune.getFortune() === 'string');
	});
});