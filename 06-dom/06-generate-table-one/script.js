/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
/*
    let tbl = document.createElement("table");
    tbl.setAttribute("id", "myTable");

    let x = document.createElement("tr");
    x.setAttribute("id", "myRow");


    let y = document.createElement("td");
    y.setAttribute("id", "myCol")


    for (i=0;i<9;i++) {

    }
*/


    let targetVar = document.getElementById("target");
    let newTable = document.createElement("TABLE");


    for ( let i = 0; i < 10; i++) {
        let newRow = newTable.insertRow(i);
        let newCell = newRow.insertCell(0);
        newCell.innerHTML = "test"

    }
    targetVar.appendChild(newTable);
    console.log(newTable);

})();
