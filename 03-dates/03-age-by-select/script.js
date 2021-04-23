/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function birthday() {

        let date = new Date();
        //let dateString = date.toUTCString();


        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let birthday = new Date(year, month, day);
        let diff = (date - birthday);
        console.log(birthday);
        console.log(birthday.getTime());
        let age = Math.round(diff / (1000 * 60 * 60 * 24 * 365));


        alert(age);

    }

    let button = document.getElementById("run");
    button.addEventListener("click", birthday);
})();