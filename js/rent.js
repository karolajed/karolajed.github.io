var html_mieszkanie1 = 'Mieszkanie jest wyposażone w meble, różne przedmioty i książki, które pamiętają czasy PRL-U! <br> Przyjedź i poczuj ten klimat, jak mieszkali ludzie w tamtych czasach.<br> Mieszkanie jest trochę dostosowane pod turystów ale generalnie zachowuje klimat jak żyła ówczesna rodzina. Możesz np. zaparzyć kawę w starej kawiarce lub herbatę w czajniczku "Społem", a następnie wypić z filiżanki wyprodukowanej w Czechosłowacji ;)<br> W mieszkaniu w pełni wyposażona kuchnia, łazienka. Mieszkanie jest dwupokojowe z oddzielną kuchnią. Kuchnia w pełni wyposażona: piekarnik, mikrofala, ekspres przelewowy, sztućce, naczynia, czajnik, lodówka, etc.';
var html_mieszkanie2 = 'Jednopokojowe studio, gdzie możesz odpocząć, zostawić bagaże i mieć dostęp do najważniejszych atrakcji Krakowa prawie na wyciągnięcie ręki :) <br> Wszystkie istotne punkty zlokalizowane są bowiem w bliskiej odległości od mieszkania więc możesz do nich spokojnie dojść na piechotę. <br> W najbliższej okolicy mnóstwo, barów, pubów, restauracji. Najlepsze zapiekanki są na Placu Nowym, tuż za rogiem ;) <br> W mieszkaniu znajdują się dwie rozkładane sofy, telewizor, biurko, kuchnia z płytą indukcyjną, czajnikiem, kuchenką mikrofalową, lodówką. W łazience wc oraz wanna, w której można się zrelaksować po dniu pełnym wrażeń podczas zwiedzania Krakowa.';
var html_mieszkanie3 = 'Apartament w doskonalej lokalizacji w centrum Krakowa (Kazimierz), 80m od Synagogi, 900m od Wawelu, 1200m od Rynku, W pieszym zasięgu do wszystkich głównych atrakcji Krakowa. Dobrze skomunikowane z dworcem oraz lotniskiem. <br> To miejsce jest dobre dla: pary, rodziny (z dziećmi) oraz grupy do 4 osób. <br> Mieszkanie składa się z dwóch pokoi: jeden z rozkładaną sofą, drugi z 3 niezależnych łóżek, kuchni wyposażonej w kuchenkę, czajnik, lodówkę i naczynia oraz łazienki z prysznicem.';

$('#mieszkanie1').on('mouseover click', function () {
  $('.rent__col--desc').html('');
  $('.rent__col--desc').html(html_mieszkanie1);
})
$('#mieszkanie2').on('mouseover click', function () {
  $('.rent__col--desc').html('');
  $('.rent__col--desc').html(html_mieszkanie2);
})
$('#mieszkanie3').on('mouseover click', function () {
  $('.rent__col--desc').html('');
  $('.rent__col--desc').html(html_mieszkanie3);
})
