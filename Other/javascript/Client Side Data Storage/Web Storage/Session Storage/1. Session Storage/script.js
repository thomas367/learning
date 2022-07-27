window.onload = function () {
    // ----- Storing Data -----

    // sessionStorage.setItem(key, value)
    sessionStorage.setItem('i tem K ey', 'it emV al ue');

    // sessionStorage.key = value
    sessionStorage.keyItemInferno = 'value of inferno';

    // sessionStorage[key] = value
    sessionStorage['i tem d d d d K ey'] = 'it emV al ue';

    // ----- Retrieving Data -----

    // sessionStorage.getItem(key)
    console.log(sessionStorage.getItem('keyItemInferno'));
    console.log(sessionStorage.getItem('keyItasdadasdemInferno'));

    // sessionStorage.key
    console.log(sessionStorage.keyItemAlperen);
    console.log(sessionStorage.keyItemAlsdsperen);

    // sessionStorage[key]
    console.log(sessionStorage['i tem d d d d K ey']);
    console.log(sessionStorage['i tem dasdasdasdasa d d d K ey']);

    // ----- Removing Data -----

    // sessionStorage.removeItem(key)
    //sessionStorage.removeItem('i tem d d d d K ey');

    // Clear all data : sessionStorage.clear()
    //sessionStorage.clear();

    // ----- More -----

    // sessionStorage.length

    // sessionStorage.key(index)

    for (var i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i));
    }

    localStorage.inferno = 'localStore';
};
