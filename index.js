/**
 * Created by moshi on 6/3/2016.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(80, function () {
    console.log('Server started on port 80!');
});