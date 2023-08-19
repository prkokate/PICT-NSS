var right=document.getElementsByClassName('rte-head');
var header=document.getElementById('bhumi-header');
var mid=document.getElementById('bhumi-mid');
var disp=document.documentElement;
var bluediv1=document.getElementsByClassName('bluediv');
var para=document.getElementsByClassName('rte-data');

let hideright=()=>{

    disp.style.setProperty('--rigt','none');
}

let hidepara=()=>{

    disp.style.setProperty('--para','none');
}

hidepara();

hideright();

let showrigt=()=>{
disp.style.setProperty('--rigt','block');
header.removeEventListener("mouseover",showrigt);
}



let showpara=()=>{
disp.style.setProperty('--para','block');
header.removeEventListener("mouseover",showpara);
}

header.addEventListener("mouseover",showrigt);
header.addEventListener("mouseover",showpara);
bluediv1[0].addEventListener("mouseover",showrigt);
bluediv1[0].addEventListener("mouseleave",hideright);
bluediv1[0].addEventListener("mouseover",showpara);
bluediv1[0].addEventListener("mouseleave",hidepara);

let hideimg=()=>{
    disp.style.setProperty('--img','none')
}

hideimg();

let showimg=()=>{
    disp.style.setProperty('--img','block');
}

mid.addEventListener("mouseover",showimg);
mid.addEventListener("mouseleave",hideimg);




