  var elem = document.getElementsByClassName('calculator__display-input--size')[0];
function insert(num){
    var ins = elem.value
    if(ins==='0'){   
       ins= num;
    }else{
        ins = ins+num 
    }
    elem.value=ins;
    
}

function remove(){
    var value = elem.value;
    var index = value.length-1;
    if(index>0){
        elem.value= value.slice(0,index)
    }else{
        elem.value='0';
    }
}

function clean(){  
    elem.value='0';

}
function add(){
    var arch = document.getElementsByClassName('calculator__display-input--shadow')[0];
    var ins2 = arch.value;
    console.log(i.setTitle()=ins2);
                                                                                                                                                                                          
}
