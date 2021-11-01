let btnDebug = document.getElementById("btnDebug");
let lblDebug = document.getElementById("lblDebug");
let txtDebug = document.getElementById("txtDebug");

function debugButtonClicked() {
    let input = "";
    input = txtDebug.value;
    lblDebug.innerText = "You have clicked the button";
    changeLabelText(input);
}

function changeLabelText(text) {
    let labelDisplay = "";
    labelDisplay = "Your input is: " + text;
    lblDebug.innerText = labelDisplay;
}

function buggedClick() {
    let firstNumber = 1;
    let secondNumber = "2";
    let label = document.getElementById(lblBugged);

    let combine = firstNumber + secondNumber;
    label.innerHTML = combine;

// 3. add to function that gets called
//    elseIfLoop();
}

function bugFix(number) {
    return parseInt(number);
}


function elseIfLoop() {
    let forString = "";
    for (let x = 0; x < 10; x++) {
        forString += elseIfValues(x);
    }
}

// 1. Call as is - When do snake game
// elseIfLoop();

// 2. call on document ready - when need to interact
//document.addEventListener("DOMContentLoaded", (event) => {
//  elseIfLoop();
//});

// 4. Not used - delete it

function elseIfValues(value) {
    if (value === 9) {
        return "!";
    } else if (value === 11) {
        return "o";
    }
    else if (value === 5) {
        return "g";
    }
    else if (value === 4) {
        return "g";
    }
    else if (value === 8) {
        return "g";
    }
    else if (value === 1) {
        return "e";
    }
    else if (value === 12) {
        return "z";
    }
    else if (value === 7) {
        return "n";
    }
    else if (value === 0) {
        return "d";
    }
    else if (value === 6) {
        return "i";
    }
    else if (value === 13) {
        return "y";
    }
    else if (value === 1) {
        return "e";
    }
    else if (value === 3) {
        return "u";
    }
    else if (value === 10) {
        return "!";
    }
    else if (value === 2) {
        return "b";
    }
}
