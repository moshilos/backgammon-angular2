/**
 * Created by moshi on 5/31/2016.
 */
require('./header.scss');
var ngCore = require('@angular/core');

module.exports = ngCore.Component({
        selector: 'app-header',
        template: require('./header.tpl.html')
    })
    .Class({
        constructor: require('./header.class')
    });