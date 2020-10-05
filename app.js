const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./src/routes/index');

const app = express();

//settings
app.set('view engine','ejs');
app.set('views', 'src/views');
app.set('port',4000);

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});