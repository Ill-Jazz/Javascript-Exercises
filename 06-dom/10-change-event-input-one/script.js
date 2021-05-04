/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let targetMax = document.getElementById("pass-one");
    let max = document.createAttribute("maxlength");
    max.value = "10";
    targetMax.setAttributeNode(max);

    let count = document.getElementById("counter");

    targetMax.addEventListener("input", counterStatus)

    function counterStatus() {
        count.innerHTML = ((targetMax.value).length + "/10");
    }


    /*let char = document.getElementById("counter").value;
    let newArrey = [char];

    for (let i=0; i<9,i++) {

    }
*/


})();
