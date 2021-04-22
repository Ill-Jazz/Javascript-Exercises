/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function bio() {
        let age = prompt("How old are you?");
        let gender = prompt("Are you male or female?");
        let town = prompt("In which town do you live?");
        if (age && gender && town) {
            if (confirm("You are " + age + " old." + " You are " + gender + " and " + "you live in " + town + ".")) {
                alert("Ape-town rulez");
            } else {
                bio();
            }
        } else {
            bio();
        }
    }

    bio();
})();
