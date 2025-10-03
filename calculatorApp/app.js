
let input = document.getElementById('inputBox');
let buttons = Array.from(document.querySelectorAll('button'));

let expr = "";


function calculate(expression) {
   
    const safePattern = /^[0-9+\-*/().]+$/;
    if (!safePattern.test(expression)) {
        return "Error"; 
    }

    try {
        //Added "new function()" cause this is just client-side app.
        return new Function("return " + expression)();
    } catch (e) {
        return "Error";
    }
}

// Buttons add click
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent.trim();

        // "=" make calculating
        if (value === "=") {
            expr = calculate(expr).toString();
            input.value = expr;
        }
        // "AC" clear all
        else if (value === "AC") {
            expr = "";
            input.value = "";
        }
        // "DEL" clear last character
        else if (value === "DEL") {
            expr = expr.slice(0, -1); 
            input.value = expr;
        }
        // Numbers and operators buttons  → append to expression
        else {
            expr += value;
            input.value = expr;
        }
    });
});
