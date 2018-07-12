var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: './img/mieszkanie3/z1.jpg',
        w: 1000,
        h: 900
    },
    {
        src: './img/mieszkanie3/z2.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie3/z3.jpg',
        w: 900,
        h: 1000
    }, {
        src: './img/mieszkanie3/z4.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie3/z5.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie3/z6.jpg',
        w: 900,
        h: 1000
    },{
        src: './img/mieszkanie3/z7.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie3/z8.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie3/z9.jpg',
        w: 1000,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();