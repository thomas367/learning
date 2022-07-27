window.onload = function () {
    // ----- Storing Data -----

    // localStorage.setItem(key, value)
    localStorage.setItem('i tem K ey', 'it emV al ue');

    // localStorage.key = value
    localStorage.keyItemInferno = 'value of inferno';

    // localStorage[key] = value
    localStorage['i tem d d d d K ey'] = 'it emV al ue';

    // ----- Retrieving Data -----

    // localStorage.getItem(key)
    console.log(localStorage.getItem('keyItemInferno'));
    console.log(localStorage.getItem('keyItasdadasdemInferno'));

    // localStorage.key
    console.log(localStorage.keyItemInferno);
    console.log(localStorage.keyItemInzzzferno);

    // localStorage[key]
    console.log(localStorage['i tem d d d d K ey']);
    console.log(localStorage['i tem dasdasdasdasa d d d K ey']);

    // ----- Removing Data -----

    // localStorage.removeItem(key)
    //localStorage.removeItem('i tem d d d d K ey');

    // Clear all data : localStorage.clear()
    //localStorage.clear();

    // ----- More -----

    // localStorage.length

    // localStorage.key(index)

    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
    }
};
