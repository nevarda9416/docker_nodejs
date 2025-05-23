const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiUsersRouter = require('./routes/api/users');
const cors = require('cors');
const app = express();
const jdRouter = require('./routes/jd');
require('dotenv').config();
// Enable CORS for all routes
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
// Middleware to parse POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Config static folder (CSS, JS, Image, ...)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', apiUsersRouter);
app.use('/jd', jdRouter);
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
module.exports = app;
