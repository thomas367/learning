window.onload = function () {
    if (getCookieValue('loggedIn')) {
        console.log('You are logged In');
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'inline-block';
        document.getElementById('user').innerHTML = getCookieValue('loginUsername');

        createCookie('loggedIn', true, 2);
        createCookie('loginUsername', getCookieValue('loginUsername'), 2);

        var visits = +getCookieValue('visits');
        visits++;

        createCookie('visits', visits, 2);

    } else {
        console.log('hello guest');
        document.getElementById('login').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('user').innerHTML = 'Guest!';
    }

    function getCookieValue(cookieKey) {
        var cookiesList = document.cookie.split(';').map(function (cookie) {
            return cookie.trim();
        });

        for (var i = 0; i < cookiesList.length; i++) {
            var cookie = cookiesList[i].split('=');
            var key = cookie[0];
            var value = cookie[1];
            if (key === cookieKey) {
                return value;
            }
        }
        return undefined;
    }

    function createCookie(name, value, day) {
        // Key Value Pairs
        var keyValue = name + '=' + value;

        // Expiration
        var now = new Date();
        now.setTime(now.getTime() + day * 24 * 60 * 60 * 1000);

        var expires = 'expires=' + now.toUTCString();

        // Cookie String
        var cookieStr = keyValue + ';' + expires + ';' + 'path=/';

        // Create cookie
        document.cookie = cookieStr;
    }
};
