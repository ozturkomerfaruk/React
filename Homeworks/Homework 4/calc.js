var inTheProcress = "0"
var threaded = ""

const numberButtons = document.querySelectorAll(".numButton");
const operandButtons = document.querySelectorAll(".symbolButton");
const clearButton = document.getElementById("clearDisplayView");
const equalBtn = document.getElementById(`equalButton`);

const oldValueText = document.getElementById("oldValue");
const newValueText = document.getElementById("newValue");

class Calculator {
    constructor(oldValue, newValue) {
        this.oldValueText = oldValue;
        this.newValueText = newValue;
        this.clearView();
    }

    addNumberToCalculate(number) {
        this.inTheProcress = this.inTheProcress.toString() + number.toString();
    }

    calculateProcress() {
        let result;
        const oldNum = parseFloat(this.threaded);
        const newNum = parseFloat(this.inTheProcress);

        if (isNaN(oldNum) || isNaN(newNum)) return;
        let compString = oldNum;

        if (this.process === '+') {
            result = oldNum + newNum;
            compString += ' + ';
        } else if (this.process === '-') {
            result = oldNum - newNum;
            compString += ' - ';
        } else if (this.process === '*') {
            result = oldNum * newNum;
            compString += ' * ';
        } else if (this.process === '/') {
            result = oldNum * newNum;
            compString += ' / ';

            if (newNum === 0) {
                alert("It cannot be divided by 0!!")
            }
        } else {
            return;
        }

        compString += newNum + ' = '
        this.threaded = compString;
        this.inTheProcress = result;
        this.process = undefined;
    }

    getDisplayNumber(number) {
        //değişecek
        const temp = number.toString();
        const intDigit = parseFloat(temp);

        let decimalDigits = temp.split(`.`)[1];

        if (decimalDigits != undefined) {
            decimalDigits = decimalDigits.toString()
            if (decimalDigits.length > 4)
                decimalDigits = decimalDigits.substring(0, 4);
        }

        let intDisplay = isNaN(intDigit) ? `` : intDigit.toLocaleString(`en`, { maximumFractionDigits: 0 });
        return (decimalDigits != null) ? `${intDisplay}.${decimalDigits}` : intDisplay;
    }

    updateDisplay() {
        //değişecek
        this.newValueText.innerText = this.getDisplayNumber(this.inTheProcress);
        const op = (this.process != null) ? ` ${this.process}` : ``;
        this.oldValueText.innerText = (this.process != null) ?
            `${this.getDisplayNumber(this.threaded)} ${op}` : this.threaded;
    }

    selectSymbol(operation) {
        if (this.inTheProcress == '') return;
        if (this.threaded != '') this.calculateProcress();

        this.process = operation;
        this.threaded = this.inTheProcress;
        this.inTheProcress = '';
    }

    clearView() {
        this.inTheProcress = "0";
        this.threaded = "";
        this.process = undefined;
    }
}

//isimler değişecek

const calculator = new Calculator(oldValueText, newValueText);

numberButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        calculator.addNumberToCalculate(button.innerText);
        calculator.updateDisplay();
    });
});

operandButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        calculator.selectSymbol(button.innerText);
        calculator.updateDisplay();
    });
});

equalBtn.addEventListener(`click`, () => {
    calculator.calculateProcress();
    calculator.updateDisplay();
});

clearButton.addEventListener(`click`, () => {
    calculator.clearView();
    calculator.updateDisplay();
});

var isDark = false
var sunIcon = document.getElementById("sunIcon")
var moonIcon = document.getElementById("moonIcon")

moonIcon.style.display = "none"
function changeTheme() {
    this.isDark = !this.isDark
    let themeCssEl = document.querySelector('#theme-css')
    if (this.isDark) {
        themeCssEl.setAttribute('href', 'dark.css')
        moonIcon.style.display = 'block'
        sunIcon.style.display = "none"
    } else {
        themeCssEl.setAttribute('href', 'light.css')
        moonIcon.style.display = "none"
        sunIcon.style.display = 'block'
    }
}