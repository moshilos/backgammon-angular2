/**
 * Created by moshi on 5/31/2016.
 */
var ngCore = require('@angular/core');

module.exports = {
    constructor: [ngCore.ElementRef, function(element){
        this.element = element;
        this.showSearch = true;
        this.toggleSearch = function(){
            this.showSearch = !this.showSearch;
        }
    }],
    ngOnInit: function(){
        // Focus state for append/prepend inputs
        $(this.element.nativeElement).on('focus', '.form-control', function () {
            $(this).closest('.input-group, .form-group').addClass('focus');
        }).on('blur', '.form-control', function () {
            $(this).closest('.input-group, .form-group').removeClass('focus');
        });
    },
    ngOnDestroy: function(){
        $(this.element.nativeElement).off( "focus", "**" );
        $(this.element.nativeElement).off( "blur", "**" );
    },

};