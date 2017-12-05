'use strict';

// HTML API: Web Storage
// window.localStorage      - stores data with no expiration date
// window.sessionStorage    - stores data for one session (data is lost when the browser tab is closed)

// ---------------------------------------------------------------- [ Check Browser Support ] -----------
if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
  }
  else {
    // Too bad, no localStorage for us
  }

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

// Name/value pairs are always stored as strings. Remember to convert them to another format when needed!

// ---------------------------------------------------------------- [ The localStorage Object ] ---------
// Store
localStorage.setItem("lastname", "Fred"); // params: KEY, VALUE
localStorage.lastname = "Fred";
localStorage["lastname"] = "Fred";
// Retrieve
console.log(localStorage.getItem("lastname"));
console.log(localStorage.lastname);
console.log(localStorage["lastname"]);
// Remove
localStorage.removeItem("lastname");


// ---------------------------------------------------------------- [ The SessionStorage Object ] -------
// The sessionStorage object is equal to the localStorage object, 
// except that it stores the data for only one session. 
// The data is deleted when the user closes the specific browser tab.
// Store
sessionStorage.setItem("lastname", "Fred"); // params: KEY, VALUE
sessionStorage.lastname = "Fred";
// Retrieve
console.log(sessionStorage.getItem("lastname"));
console.log(sessionStorage.lastname);
console.log(sessionStorage["lastname"]);
// Remove
sessionStorage.removeItem("lastname");