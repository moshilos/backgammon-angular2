/**
 * Created by moshi on 5/31/2016.
 */
require('./style.scss');
var ngCore = require('@angular/core');

module.exports = ngCore.Component({
        selector: 'top-nav-bar',
        template: require('./template.html'),
        directives: []
    })
    .Class(require('./class'));