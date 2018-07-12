var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: './img/mieszkanie1/z1.jpg',
        w: 1000,
        h: 900
    },
    {
        src: './img/mieszkanie1/z2.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie1/z3.jpg',
        w: 900,
        h: 1000
    }, {
        src: './img/mieszkanie1/z4.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie1/z5.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z6.jpg',
        w: 900,
        h: 1000
    },{
        src: './img/mieszkanie1/z7.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie1/z8.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z9.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie1/z10.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie1/z11.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z12.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z13.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z14.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z15.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z16.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z17.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z18.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z19.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z20.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z21.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z22.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z23.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z24.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z25.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z26.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z27.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z28.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z29.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z30.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z31.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z32.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie1/z33.jpg',
        w: 1200,
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