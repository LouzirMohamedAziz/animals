var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose')
const url = 'mongodb://localhost/animalsDB'

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var animalsRouter = require('./routes/animals');
//var vetosRouter = require('./routes/vetos');
//var accessoriesRouter = require('./routes/accessories');

var app = express();

// MongoDB Connection 
mongoose.connect(url,{useNewUrlParser:true},{useUnifiedTopology:true})
const con = mongoose.connection
con.on('open',()=>{
  console.log('Connected to your MongoDB')
})
process.on('unhandledRejection', err => {
  throw err;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/user/accessories', accessoriesRouter);
app.use('/animals', animalsRouter)

// HOUNI 7ALEN LMECHEKEL 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3000,()=>{
  console.log('Server connected successfuly !')
})

module.exports = app;
