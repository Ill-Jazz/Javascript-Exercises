/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let today = new Date();
    let curHours = today.getHours();
    let curMinutes = today.getMinutes();

    // Als uur kleiner dan 17 dan hello
    // als uur gelijk is aan 17u dan

    if (curHours >= 17 && curMinutes >= 30) {
        changeTag("Good evening")
    } else {
        changeTag("Hello");
    }

    function changeTag(tag) {
        document.getElementById("target").innerHTML = tag;
    }

})();
