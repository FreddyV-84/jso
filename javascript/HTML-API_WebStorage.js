'use strict';

// HTML API: Web Storage
// window.localStorage      - stores data with no expiration date
// window.sessionStorage    - stores data for one session (data is lost when the browser tab is closed)

// ---------------------------------------------------------------- [ Check Browser Support ] -----------
// check browser support for localStorage and sessionStorage
if (typeof (Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
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