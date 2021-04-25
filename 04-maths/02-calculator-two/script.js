/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function(operation) {
        let op1 = document.getElementById("op-one").value;
        let op2 = document.getElementById("op-two").value;

        switch (operation){
            case "addition":
                alert(Number(op1) + Number(op2));
                break;
            case "substraction":
                alert(Number(op1) - Number(op2));
                break;
            case "multiplication":
                alert(Number(op1) * Number(op2));
                break;
            case "division":
                alert(Number(op1) / Number(op2));
                break;
            default:
                alert("invalid operator");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
