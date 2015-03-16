var express = require('express'),
    app = express();

var fortune = require('./lib/fortune');

// set up handlebars view engine
var handlebars = require('express-handlebars')
                .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use( express.static( __dirname + '/public' ) );

app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') != 'production' &&
			req.query.test === 'true';
	next();
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about', {
		fortune: fortune.getFortune(),
		pageTestScript: '/qa/tests-about.js'
	});
});

// custom 404 page
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') +
    '; press Ctrl-C to terminate.');
});