# Hotkeys:
- F12 in Chrome opens the console/dev. window. You can also right click an element on a page and use 'Inspect' to open it. Doing so will highlight the element you clicked on.
- Esc while the development window is up opens a mini-console on the bottom of the window.

# Homework Questions
## Notes
The following questions might be answerable by working it out in your head but you should try to use what you learnt in the lesson to debug through the code to get your answers. If necessary, fix the issues that cause errors to continue debugging the next question(s).

Remember, you can call methods by using the console window while debugging!
The homework questions will be about the methods:
- changeLabeltext
- buggedClick
- bugFix
- elseIfLoop
- elseIfValues
## Questions
1. The block of code below (buggedClick function), throws an error/blows up. Why?

2. In the buggedClick function, what is the final value of 'combine'? 
```js
function buggedClick() {
    let firstNumber = 1;
    let secondNumber = "2";
    let label = document.getElementById(lblBugged);

    let combine = firstNumber + secondNumber;
    label.innerHTML = combine;
}
```
3. In the buggedClick function, how would you use the bugFix function to get it to output '3'?
Hint: make sure to debug past secondNumber before using the bugFix function.
```js
function bugFix(number) {
    return parseInt(number);
}

```

4. In the elseIfLoop function below, what would the value 'forString' be?

```js
function elseIfLoop() {
    let forString = "";
    for (let x = 0; x < 10; x++) {
        forString += elseIfValues(x);
    }
}
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
```
5. See the folder named "question5"

6. Complete the excerises here: 
https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html#debugging-practice

