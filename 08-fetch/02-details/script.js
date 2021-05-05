/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //declaring and assigning variables
    const target = document.getElementById("target");
    const button = document.getElementById("run");
    const template = document.getElementById("tpl-hero");

    //getting data from the API
    async function getApi() {
        const id = document.getElementById("hero-id").value;
        let response = await fetch(`http://localhost:3000/heroes?id=${id}`);
        let data = await response.json(); // parsing data to json text format
        return data;

    }

    //creating an event for the button
    button.addEventListener("click", afterClick);

    function afterClick() {
        getApi().then(function (result) {
            result = result [0]; //getting the first (and only) element from the data array we've fetched
            let tempCopy = template.content.cloneNode(true); //cloning html
            tempCopy.querySelector(".name").innerHTML = result.name;
            tempCopy.querySelector(".alter-ego").innerHTML = result.alterEgo;
            tempCopy.querySelector(".powers").innerHTML = result.abilities;
            target.appendChild(tempCopy);
        })
    }

})();
