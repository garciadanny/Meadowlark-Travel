var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function () {
	setup(function () {
		browser = new Browser();
	});

	test('requesting group rate from hood river page should populate referrer field',
		function(done) {
			var referrer = 'http://localhost:3000/tours/hood-river';
			browser.visit(referrer, function() {
				browser.clickLink('.requestGroupRate', function() {
					assert(browser.field('referrer').value === referrer);
					done();
				});
			});
		}
	);
	test('requesting group rate from oregon cost page should populate referrer field',
		function(done) {
			var referrer = 'http://localhost:3000/tours/oregon-coast';
			browser.visit(referrer, function() {
				browser.clickLink('.requestGroupRate', function() {
					assert(browser.field('referrer').value === referrer);
					done();
				});
			});
		}
	);
	test('visiting group rate page directly should result in empty referrer field',
		function(done) {
			browser.visit('http://localhost:3000/tours/request-group-rate', function() {
				assert(browser.field('referrer').value === '');
				done();
			})
		}
	);
});