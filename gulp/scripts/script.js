var elem = document.getElementsByClassName('calculator__display-input--size')[0];

var archive = document.getElementsByClassName('calculator__display-input--shadow')[0];

var hidden = document.getElementsByClassName('calculator__display-input--hidden')[0];

var memory = document.getElementsByClassName('calculator__display-input--memory')[0];

function insert( btn ) {
    var val = elem.value;
        arch = archive.value;

    if (val === '0') {
        val = btn;
    } else {
        val = val + btn; 
    }

    if (arch === '0') {
        arch = btn;
    
    }else {
        arch = arch + btn; 
    }

    if(elem.value != '0' & archive.value == '') {
        val = 0;
        val = val + btn;
    }
    
    elem.value = val;
    
    archive.value = arch;
}


function remove() {
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

function clean() { 
    elem.value = '0';

    archive.value = '';
}

function cleanElement(){  
    elem.value = '0';
}



function add() {
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


function result() {
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



function substract() {
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

function multiply() {
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

function toSplit() {
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

function exponentiation() {
    hidden.value = elem.value;

    archive.value += '^';

    elem.value = '';

    operation = 'n';

}
function change() {
    if(elem.value === elem.value) {
        elem.value = -(elem.value);
    } else {
        elem.value = elem.value;
    }
}
function fraction() {
    archive.value = '1' + '/' + '(' + elem.value + ')'; 

    elem.value = 1 / elem.value;

    var round = +elem.value;
    
    elem.value = round.toFixed(5);
}

function sqrt() {
    archive.value = 'SQRT' + '(' + elem.value + ')';

    elem.value = Math.sqrt(elem.value);

    var round = +elem.value;

    elem.value = round.toFixed(2);

    operation = 'sqrt';
}
function percent() {
    z = archive.value.split(/[\+\*\-\/]/);

    g = archive.value.match(/[\+\*\-\/]/);

    elem.value = z[0] * elem.value / 100;

    archive.value = z[0] + g[0] + elem.value;

    operation = '%';
}

function comma(){
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

function memorySave() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = elem.value;
    }
}

function memoryClean() {
    memory.value = '';
}

function memoryAdd() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +elem.value + +memory.value
    }
}

function memorySub() {
    if (elem.value == '0' || '') {
        memory.value = memory.value;
    } else {
        memory.value = +memory.value  -  +elem.value
    }
}

function memoryRead() {
    if (memory.value == '') {
        elem.value = '0';
    } else {
        elem.value = memory.value;
        archive.value = memory.value;
    }
}