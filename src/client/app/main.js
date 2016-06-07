/**
 * Created by moshi on 5/30/2016.
 */
require('./main.scss');
var ngPlatformBrowserDynamic = require('@angular/platform-browser-dynamic');
var ngCore = require('@angular/core');
var appComponent = ngCore.Component({
        selector: 'app',
        template: require('./main.html'),
        directives: [
            require('./components/header'),
            require('./components/footer'),
            require('./components/top-nav-bar'),
            require('./components/board')
        ]
    })
    .Class({
        constructor: function () {
            this.showNavBar = true;
            this.togglenavbar = function(){
                this.showNavBar = !this.showNavBar;
            }
        }
    });

ngPlatformBrowserDynamic.bootstrap(appComponent);
