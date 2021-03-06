// const path = require('path');
// const express = require('express');
// //const session = require('express-session');
// const exphbs = require('express-handlebars');
const routes = require('./controllers');

// const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");


//app.use(express.static(path.join(__dirname, 'public')))

//add secrect-session stuff

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./controllers'));

//turn on db, sync w/sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
});