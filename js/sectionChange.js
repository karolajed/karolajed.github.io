var visible = {
    'display': 'block',
    'height': '83vh',
    'max-height': '83vh',
    'min-height': '83vh'
  }, unvisible = {
    'display': 'none',
    'height': '0',
  };

$(document).ready(function () {
  hideAll();
 $('#welcome').css(visible);
})

$('#menu__main').on('click', function () {
  hideAll();
  $('#welcome').css(visible);
})

$('#flats').on('click', function () {
  hideAll();
  $('#rent').css(visible);
})

$('#menu__rent').on('click', function () {
  hideAll();
  $('#rent').css(visible);
})

$('#menu__administration').on('click', function () {
  hideAll();
  $('#administration').css(visible);
})

$('#menu__about').on('click', function () {
  hideAll();
  $('#about').css(visible);
})

$('#menu__contact').on('click', function () {
  hideAll();
  $('#contact').css(visible);
})

function hideAll() {
  $('#welcome').css(unvisible);
  $('#rent').css(unvisible);
  $('#administration').css(unvisible);
  $('#about').css(unvisible);
  $('#contact').css(unvisible);
}
