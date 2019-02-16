    
function insert(num){
    var elem = document.getElementsByClassName('display__input--size')[0];
    var ins = elem.value
    if(ins==='0'){   
       ins= num;
    }else{
        ins = ins+num 
    }
    elem.value=ins;
}
function remove(){
    var elem = document.getElementsByClassName('display__input--size')[0];
    var value = elem.value;
    var index = value.length-1;
    if(index>0){
        elem.value= value.slice(0,index)
    }else{
        elem.value='0';
    }
}  
function clean(){  
    var elem = document.getElementsByClassName('display__input--size')[0];
    elem.value='0';

}
  