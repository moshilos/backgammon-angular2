/**
 * Created by moshi on 5/31/2016.
 */
require('./style.scss');
var ngCore = require('@angular/core');

module.exports = ngCore.Component({
        selector: 'app-footer',
        template: require('./template.html')
    })
    .Class({
        constructor: require('./class.js')
    });