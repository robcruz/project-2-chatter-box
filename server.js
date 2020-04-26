// Requiring necessary npm packages

const express = require('express');
// eslint-disable-next-line no-undef
const session = require('express-session');
// Requiring passport as we've configured it
const exphbs = require('express-handlebars');
const passport = require('./config/passport');
// Setting up port and requiring models for syncing
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;
// eslint-disable-next-line no-undef
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
// eslint-disable-next-line import/order
const http = require('http').Server(app);
// eslint-disable-next-line import/order
const io = require('socket.io')(http);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'members' }));
app.set('view engine', 'handlebars');

// Requiring our routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app, io);
require('./routes/news-routes')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});
