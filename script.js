function mousemove(event,bar){
    x=event.x;
    //document.getElementById("demo").innerHTML=x*0.16;
    var elem=document.getElementById(bar);
    var width=0.25*x;
    if(width>100){
        width=100;
    }
    elem.style.width=width+'%';
    elem.style.backgroundColor="rgb("+2.55*width+",0,0)";
}

function mousemove_1(event,bar){
    x=event.x;
    //document.getElementById("demo").innerHTML=x*0.06;
    var elem=document.getElementById(bar);
    var width=0.06*x;
    if(width>100){
        width=100;
    }
    elem.style.width=width+'%';
    elem.style.backgroundColor="rgb("+2.55*width+",0,0)";
}