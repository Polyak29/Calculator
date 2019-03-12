var display = document.querySelector('.calculator__display-input--size');

var archive = document.querySelector('.calculator__display-input--shadow');

var hidden = document.querySelector('.calculator__display-input--hidden');

var hidden2 = document.querySelector('.calculator__display-input--hidden2');

var CurrentNumber = 0;

var newNumber = false;

var pendingOperation = '';

var memory = document.getElementsByClassName('calculator__display-input--memory')[0];

function Calculator() {
    [...document.getElementsByClassName('calculator__keyboard-button--number')].forEach(el =>{
        el.addEventListener('click', this.insert);
    });
    [...document.getElementsByClassName('memory-calculator__operations--size')].forEach(el =>{
        el.addEventListener('click', this.memory);
    });
}

function Keyboard() {
    Calculator.apply(this, arguments);
    [...document.getElementsByClassName('operationButton')].forEach(el =>{
        el.addEventListener('click', this.calculation);
    });

    [...document.getElementsByClassName('cleanButton')].forEach(el =>{
        el.addEventListener('click', this.clean);
    });
    document.getElementById('sqrt').addEventListener('click', this.sqrt);
    document.getElementById('fraction').addEventListener('click', this.fraction);
    document.getElementById('change').addEventListener('click', this.change);
    document.getElementById('percent').addEventListener('click', this.percent);
    document.getElementById('comma').addEventListener('click', this.comma);
}

Keyboard.prototype.__proto__ = Calculator.prototype;

Keyboard.prototype.insert = function(event) {
  var number = event.target.textContent;
  if (newNumber) {
      display.value = number;
      newNumber = false;
  } else {
    if (display.value === '0'){
        display.value = number;
    } else {
      display.value += number;
    }
  }
 
}

Keyboard.prototype.calculation = function(op) {
    var operation = op.target.textContent;
    var localOperation = +display.value;
    var localHidden = +hidden.value;
    var localSign = hidden2.value;
    var localArchive = archive.value.split(/[\+\*\-\/]/);
    var round = 0;
    localArchive[0] = localArchive[0].trim();

    
    if(newNumber && pendingOperation === '=') {
        if(localSign.search(/[\+\*\/\-]/) !== '-1' && operation !== '=') {
            localSign = operation;
            hidden2.value = localSign;
        } else {
        CurrentNumber = eval(CurrentNumber + localSign + localHidden);
        }
    } else if (newNumber && pendingOperation !== '=') {
        display.value = CurrentNumber;
        hidden.value = CurrentNumber;
    }
    else {
        newNumber = true;
        switch(pendingOperation) {
            case '+':
                CurrentNumber = CurrentNumber + +localOperation;
                hidden2.value = pendingOperation;
                hidden.value = localOperation;
            break;
            case '×':
                CurrentNumber = CurrentNumber * +localOperation;
                hidden2.value = '*';
                hidden.value = localOperation;
                break;
            case '÷':
                CurrentNumber = CurrentNumber / +localOperation;
                hidden2.value = '/';
                hidden.value = localOperation;
                break;
            case '-':
                CurrentNumber = CurrentNumber - +localOperation;
                hidden2.value = pendingOperation;
                hidden.value = localOperation;
                break;
            case 'x n':
                CurrentNumber = Math.pow(CurrentNumber, localOperation)
                break;
            case '':
                CurrentNumber = localOperation;
        }
    }
 
    pendingOperation =  operation;
    round = +CurrentNumber;
    display.value = +round.toFixed(2); 
    if (pendingOperation !== '='){
         if (localArchive[0] === display.value || localArchive[localArchive.length - 2] === display.value) {
            archive.value = archive.value;
        } else
        archive.value += localOperation + pendingOperation;
    } else archive.value = '';
}

Keyboard.prototype.clean = function(del) {
    if(del.target.textContent === 'C') {
        display.value = '0';
        archive.value = '';
        hidden.value = '';
        CurrentNumber = 0;
        pendingOperation = '';
    } else if(del.target.textContent === 'CE') {
        display.value = '0';
    } else {
        if(display.value.slice(0, -1) === '') {
            display.value = '0';
        } else
        display.value = display.value.slice(0, -1);
    }
   
}


Keyboard.prototype.change = function() {
    if(display.value > '0') {
        display.value = -display.value;
        hidden.value = display.value;
    } else {
        display.value = -display.value;
        hidden.value = display.value;
    }
}

Keyboard.prototype.fraction = function() {
    var round = 0;

    archive.value = '1' + '/' + '(' + display.value + ')'; 

    display.value = 1 / display.value;

    round = +display.value;
    
    display.value = +round.toFixed(3);
}

Keyboard.prototype.sqrt = function() {
    var round = 0;
    archive.value = 'SQRT' + '(' + display.value + ')';

    display.value = Math.sqrt(display.value);

    round = +display.value;

    display.value = +round.toFixed(2);
}

Keyboard.prototype.percent = function() {
    z = archive.value.split(/[\+\*\-\/]/);

    g = archive.value.match(/[\+\*\-\/]/);

    display.value = z[0] * display.value / 100;

    archive.value = z[0] + g[0] + display.value;
    hidden.value = display.value;
   


}

Keyboard.prototype.comma = function() {
   var localComma = display.value;

   if (newNumber) {
       localComma = '0.'
       newNumber = false;
   } else {
       if ( localComma.indexOf('.') === -1 ) {
           localComma += '.'
       };
   };
   display.value = localComma;
}


function Memory() {
    Calculator.apply(this, arguments);
    document.getElementById('memoryClean').addEventListener('click', this.memoryClean);
    document.getElementById('memoryRead').addEventListener('click', this.memoryRead);
    document.getElementById('memoryAdd').addEventListener('click', this.memoryAdd);
    document.getElementById('memorySub').addEventListener('click', this.memorySub);
    document.getElementById('memorySave').addEventListener('click', this.memorySave);

}

Memory.prototype.__proto__ = Calculator.prototype;

Memory.prototype.memoryClean = function() {
    memory.value = '';
}

Memory.prototype.memoryAdd = function() {
    if (display.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +display.value + +memory.value
    }
}

Memory.prototype.memoryRead = function() {
    if (memory.value == '') {
        display.value = '0';
    } else {
        display.value = memory.value;
    }
}

Memory.prototype.memorySub = function() {
    if (display.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +memory.value  -  +display.value
    }
}

Memory.prototype.memorySave = function() {
    if (display.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = display.value;
    }
}

var calculator = new Calculator();
var keyboard = new Keyboard();
var mem = new Memory();

