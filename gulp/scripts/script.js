var elem = document.getElementsByClassName('calculator__display-input--size')[0];

var archive = document.getElementsByClassName('calculator__display-input--shadow')[0];

function insert( btn ) {
    var val = elem.value;

    if (val === '0') {
        val = btn;
    }else {
        val = val + btn; 
    }

    elem.value = val;
}


function remove() {
    var value = elem.value;

    var index = value.length - 1;

    if (index > 0) {
        elem.value = value.slice(0, index);
    } else {
        elem.value = '0';
    }
}

function clean() { 
    elem.value = '0';

    archive.value = '0';
}

function cleanElement(){  
    elem.value = '0';
}



function add() {
    if (elem.value.search(/\D/) != '-1') {
        elem.value = elem.value;
        archive.value = archive.value;
    } 
    else {
        archive.value = elem.value;
    }
    operation = elem.value = '+';

                                                                                                                                                                               
}


function result() {
    var firstNumber = archive.value;

    var secondNumber = elem.value;

    if (secondNumber.search(/\D/) != '-1') {
        secondNumber = secondNumber.slice(1);
    }

    if (operation === '+') {
        sum = (+firstNumber) + (+secondNumber);
        elem.value = sum;
        archive.value = '';
    } else if (operation === '-') {
        elem.value = (+firstNumber) - (+secondNumber);
        archive.value = '';
    } else if (operation === '×') {
        elem.value = (+firstNumber) * (+secondNumber);
        archive.value = '';
    } else if (operation === '÷') {
        elem.value = (+firstNumber) / (+secondNumber);
        archive.value = '';
    } else if (operation === 'n') {
        elem.value = Math.pow(archive.value, elem.value);
    } else if (operation === '%') {
        elem.value = eval(+archive.value + z.input + (archive.value * elem.value / 100));
        archive.value = '';
    }
}

function substract() {
    if (elem.value.search(/\D/) != '-1') {
        archive.value = archive.value;
    } else {
        archive.value = elem.value;
    }

    operation = elem.value = '-';

    archive.value = archive.value;
}

function multiply() {
    if (elem.value.search(/\D/) != '-1') {
    archive.value = archive.value;
    } else {
        archive.value = elem.value;
    }

    operation = elem.value = '×';

    archive.value = archive.value;
}

function toSplit() {
    if (elem.value.search(/\D/) != '-1') {
        archive.value = archive.value;
    }
    else {
        archive.value = elem.value;
    }
    operation = elem.value = '÷';
    archive.value = archive.value;
}

function exponentiation() {
    archive.value = elem.value;
    elem.value = '';
    operation = elem.value = 'n';
    elem.value = elem.value.slice(0,-1);
     
    
}
function change() {
    if(elem.value === elem.value) {
        elem.value = -(elem.value);
    }else {
        elem. value = elem.value;
    }
}
function fraction() {
    archive.value = 'NUMBER ' + elem.value 
    elem.value = 1 / elem.value;
}

function sqrt(){
    elem.value = Math.sqrt(elem.value);
}
function procent() {
    z = elem.value.match(/[\+\×\÷\-]/)    
if( z.input === '+'||'-'||'×'||'÷'){ 
    elem.value = '';

    }
    operation = elem.value = '%';
    elem.value = elem.value.slice(0,-1);
}