var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: './img/mieszkanie2/z1.jpg',
        w: 1000,
        h: 900
    },
    {
        src: './img/mieszkanie2/z2.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie2/z3.jpg',
        w: 900,
        h: 1000
    }, {
        src: './img/mieszkanie2/z4.jpg',
        w: 1200,
        h: 900
    }, {
        src: './img/mieszkanie2/z5.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z6.jpg',
        w: 900,
        h: 1000
    },{
        src: './img/mieszkanie2/z7.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie2/z8.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z9.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie2/z10.jpg',
        w: 1000,
        h: 900
    },{
        src: './img/mieszkanie2/z11.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z12.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z13.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z14.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z15.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z16.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z17.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z18.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z19.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z20.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z21.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z22.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z23.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z24.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z25.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z26.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z27.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z28.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z29.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z30.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z31.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z32.jpg',
        w: 1200,
        h: 900
    },{
        src: './img/mieszkanie2/z33.jpg',
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