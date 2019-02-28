

class Calculator {
    constructor() {
        
        [...document.getElementsByClassName('calculator__keyboard-button--number')].forEach(el =>{
            el.addEventListener('click', this.insert);
        })
        document.getElementById('add').addEventListener('click', this.add);
        
    
    }
    
}
Calculator.prototype.insert = (event)=> {
    var elem = document.getElementsByClassName('calculator__display-input--size')[0];

    var archive = document.getElementsByClassName('calculator__display-input--shadow')[0];

    var val = elem.value,
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

Calculator.prototype.add = () => {
    var elem = document.getElementsByClassName('calculator__display-input--size')[0];

    var archive = document.getElementsByClassName('calculator__display-input--shadow')[0];

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

var app = new Calculator();

