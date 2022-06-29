var express = require('express'); // Express web server framework
 const path = require('path');

 var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/api');
app.use(routes);


 const port = process.env.PORT || 8888;

console.log(`Listening on ${port}`);
app.listen(port);