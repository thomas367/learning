window.onload = function () {

    // get a cookie
    console.log(getCookieValue('cookie_name100'));
  
    function getCookieValue(cookieKey) {
      // retrieves the list of cookies
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
  };
  