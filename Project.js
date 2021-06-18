

function validate (){
    var box1=document.getElementById("name");
    if(box1.value==""){
        document.getElementById("p1").innerHTML="*Name will not be empty*";
        box1.focus;
        box1.style.border="solid 5px red"
        return false;
        
    }
    if(box1.value.length>10){
        document.getElementById("p1").innerHTML="*Name lenght is too large";
        box1.focus;
        box1.style.border="solid 5px red"
        return false;
        
    }

    var box2=document.getElementById("phone");
    if(box2.value==""){
        document.getElementById("p2").innerHTML="*Enter a Valid Number";
        box2.focus;
        box2.style.border="solid 5px red"
        return false;
        
    }
}