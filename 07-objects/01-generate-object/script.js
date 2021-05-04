/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let me = {
        lastname: "Guedoura",
        firstname: "Ilias",
        age: "31",
        city: "Ape-town",
        countr: "Belgium"
    };

    let button = document.getElementById("run");
    button.addEventListener("click", display);

    function display(){
        console.log(me);
    }

})();
