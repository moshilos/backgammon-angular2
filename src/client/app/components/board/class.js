/**
 * Created by moshi on 5/31/2016.
 */
var ngCore = require('@angular/core');

var ePlayer = {
    Self: 0,
    Opponent: 1
};
var BAR_WIDTH = 50;

module.exports = {
    constructor: [ngCore.ElementRef, function(element){
        this.points = [
            {
                pips: 2,
                player: ePlayer.Opponent
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 5,
                player: ePlayer.Self
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 3,
                player: ePlayer.Self
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 5,
                player: ePlayer.Opponent
            },
            {
                pips: 5,
                player: ePlayer.Self
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 3,
                player: ePlayer.Opponent
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 5,
                player: ePlayer.Opponent
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },
            {
                pips: 0,
                player: null
            },

            {
                pips: 0,
                player: null
            },
            {
                pips: 2,
                player: ePlayer.Self
            }
        ];

        this.updateSize = function(){
            var FULL_HEIGHT_OFFSET = 30;
            var POINTS_HEIGHT_FACTOR = 0.4;
            var POINTS_MAX_HEIGHT = 270;
            var GAP_MAX_HEIGHT = 140;

            var board = $(element.nativeElement);
            board.outerWidth('100%');
            var playground = board.find('.playground');
            var borderWidth = (playground.width() - BAR_WIDTH) / 12 /2;

            //update width
            var elements = $('.triangle-up,.triangle-down');
            elements.css('border-left-width', borderWidth + 'px');
            elements.css('border-right-width', borderWidth + 'px');

            //update height
            var topBoardPart = playground.find('.board-top');

            var playgroundHeight = window.innerHeight - topBoardPart.offset().top - FULL_HEIGHT_OFFSET;
            var pointHeight = _.min([(playgroundHeight * POINTS_HEIGHT_FACTOR), POINTS_MAX_HEIGHT]);
            elements.filter('.triangle-up').css('border-bottom-width', pointHeight + 'px');
            elements.filter('.triangle-down').css('border-top-width', pointHeight + 'px');
            var gapHeight = _.min([playgroundHeight - (pointHeight * 2), GAP_MAX_HEIGHT]);
            playground.find('.gap').css('height', gapHeight);
        };
        Object.defineProperties(this, {
            firstPoints: {
                get: function(){
                    return _.take(this.points, 12);
                }
            },
            lastPoints: {
                get: function(){
                    return _.takeRight(this.points, 12);
                }
            }
        });

    }],

    ngAfterViewChecked: function(){
        this.updateSize();
        $( window ).resize(this.updateSize);
    },
    ngOnDestroy: function(){
    }

};