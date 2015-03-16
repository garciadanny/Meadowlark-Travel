suite("'About' Page Tests", function() {
	test('page should contain a link to the contact page', function() {
		assert($('a[href="/contact"]').length);
	});
});