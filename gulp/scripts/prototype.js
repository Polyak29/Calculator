var elem = document.querySelector('.calculator__display-input--size');

var archive = document.querySelector('.calculator__display-input--shadow');

var hidden = document.querySelector('.calculator__display-input--hidden');

var memory = document.getElementsByClassName('calculator__display-input--memory')[0];

function Calculator() {
    [...document.getElementsByClassName('calculator__keyboard-button--number')].forEach(el =>{
        el.addEventListener('click', this.insert);
    });
    [...document.getElementsByClassName('memory-calculator__operations--size')].forEach(el =>{
        el.addEventListener('click', this.insert);
    });
}

function Keyboard() {
    Calculator.apply(this, arguments);
    document.getElementsByName('add')[0].addEventListener('click', this.add);
    document.getElementsByName('percent')[0].addEventListener('click', this.percent);
    document.getElementsByName('sqrt')[0].addEventListener('click', this.sqrt);
    document.getElementsByName('exponentiation')[0].addEventListener('click', this.exponentiation);
    document.getElementsByName('fraction')[0].addEventListener('click', this.fraction);
    document.getElementsByName('cleanElement')[0].addEventListener('click', this.cleanElement);
    document.getElementsByName('clean')[0].addEventListener('click', this.clean);
    document.getElementsByName('remove')[0].addEventListener('click', this.remove);
    document.getElementsByName('toSplit')[0].addEventListener('click', this.toSplit);
    document.getElementsByName('multiply')[0].addEventListener('click', this.multiply);
    document.getElementsByName('change')[0].addEventListener('click', this.change);
    document.getElementsByName('substract')[0].addEventListener('click', this.substract);
    document.getElementsByName('comma')[0].addEventListener('click', this.comma);
    document.getElementsByName('result')[0].addEventListener('click', this.result);

}

Keyboard.prototype.__proto__ = Calculator.prototype;

Keyboard.prototype.insert = function(event) {
    var val = elem.value;
        arch = archive.value;

    if (val === '0') {
        val = event.target.value;
    } else {
        val = val + event.target.value; 
    }

    if (arch === '0') {
        arch = event.target.value;

    }else {
        arch = arch + event.target.value; 
    }

    if(elem.value != '0' & archive.value == '') {
        val = 0;
        val = val + event.target.value;
    }

    elem.value = val;
    

    archive.value = arch;
}

Keyboard.prototype.remove = function() {
    if(archive.value != '') {
        elem.value = elem.value.slice(0, -1);
    } else {
        elem.value = elem.value;
    }

    if(archive.value.search(/[\+\*\÷\-]/) != '-1' ) {
        archive.value = archive.value.slice(0, -1);
    } else {
        archive.value = archive.value;
    }
}

Keyboard.prototype.clean = function() {
    elem.value = '0';

    archive.value = '';
}

Keyboard.prototype.cleanElement = function() {
    elem.value = '0';
}

Keyboard.prototype.add = function() {
    if (elem.value == '') {
        archive.value = archive.value.slice(0, -1) + '+';
        
    } else if (archive.value == '') {
        archive.value = elem.value.replace(/\s+/g, '') + '+';
        elem.value = '';
    } else {
        archive.value = archive.value + '+';
        elem.value = '';
    }
    
    operation = '+';
}

Keyboard.prototype.substract = function() {
    if (elem.value == '') {
        archive.value = archive.value.slice(0, -1) + '-';
    } else if (archive.value == '') {
        archive.value = elem.value.replace(/\s+/g, '') + '-';
        elem.value = '';
    } else {
        archive.value = archive.value + '-';
        elem.value = '';
    }

    operation = '-';
}

Keyboard.prototype.toSplit = function() {
    if (elem.value == '') {
        archive.value = archive.value.slice(0, -1) + '/';
    } else if (archive.value == '') {
        archive.value = elem.value.replace(/\s+/g, '') + '/';
        elem.value = '';
    } else {
        archive.value = archive.value + '/';
        elem.value = '';
    }
    
    operation = '÷';   
}

Keyboard.prototype.multiply = function() {
    if (elem.value == '') {
        archive.value = archive.value.slice(0, -1) + '*';
        
    } else if (archive.value == '') {
        archive.value = elem.value.replace(/\s+/g, '') + '*';
        elem.value = '';
    } else {
        archive.value = archive.value + '*';
        elem.value = '';
    }
    
    operation = '×'; 
}

Keyboard.prototype.exponentiation = function() {
    hidden.value = elem.value;

    archive.value += '^';

    elem.value = '';

    operation = 'n';
}

Keyboard.prototype.change = function() {
    if(elem.value === elem.value) {
        elem.value = -(elem.value);
    } else {
        elem.value = elem.value;
    }
}

Keyboard.prototype.fraction = function() {
    archive.value = '1' + '/' + '(' + elem.value + ')'; 

    elem.value = 1 / elem.value;

    var round = +elem.value;
    
    elem.value = round.toFixed(5);
}

Keyboard.prototype.sqrt = function() {
    archive.value = 'SQRT' + '(' + elem.value + ')';

    elem.value = Math.sqrt(elem.value);

    var round = +elem.value;

    elem.value = round.toFixed(2);

    operation = 'sqrt';
}

Keyboard.prototype.percent = function() {
    z = archive.value.split(/[\+\*\-\/]/);

    g = archive.value.match(/[\+\*\-\/]/);

    elem.value = z[0] * elem.value / 100;

    archive.value = z[0] + g[0] + elem.value;

    operation = '%';
}

Keyboard.prototype.comma = function() {
    if (elem.value === '0') {
        elem.value = '0' + '.';
        archive.value = elem.value;
    } else if (elem.value === '') {
        elem.value = '0' + '.';
        archive.value = archive.value + elem.value;
    } else {
        if (elem.value.search(/\./) != '-1') {
            elem.value = elem.value;
        } else {
            elem.value = elem.value + '.';
            archive.value = archive.value + '.';
        }
    }

     operation = '.';
}

Keyboard.prototype.result = function() {
    switch(operation) {
        case '+':
        case '-':
        case '×':
        case '÷':
        case '.':
        case '%':
            elem.value = eval(archive.value);
            break;
        case 'n':
            elem.value = Math.pow(hidden.value, elem.value);
            break;
        case 'sqrt':
            archive.value = '';
            break;

            
    }
    var round = +elem.value;

    elem.value = +round.toFixed(2); 
            
    elem.value = elem.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    archive.value = '';
    
    if (elem.value == 'undefined') {
        elem.value = '0';
    } else if ( elem.value === 'NaN') {
        elem.value = '0';
    }
}

function Memory() {
    Calculator.apply(this, arguments);
    document.getElementsByName('memoryClean')[0].addEventListener('click', this.memoryClean);
    document.getElementsByName('memoryRead')[0].addEventListener('click', this.memoryRead);
    document.getElementsByName('memoryAdd')[0].addEventListener('click', this.memoryAdd);
    document.getElementsByName('memorySub')[0].addEventListener('click', this.memorySub);
    document.getElementsByName('memorySave')[0].addEventListener('click', this.memorySave);

}

Memory.prototype.__proto__ = Calculator.prototype;

Memory.prototype.memoryClean = function() {
    memory.value = '';
}

Memory.prototype.memoryAdd = function() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +elem.value + +memory.value
    }
}

Memory.prototype.memoryRead = function() {
    if (memory.value == '') {
        elem.value = '0';
    } else {
        elem.value = memory.value;
        archive.value = memory.value;
    }
}

Memory.prototype.memorySub = function() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +memory.value  -  +elem.value
    }
}

Memory.prototype.memorySave = function() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = elem.value;
    }
}

var calculator = new Calculator();
var keyboard = new Keyboard();
var mem = new Memory();

