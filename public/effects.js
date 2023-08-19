console.log('works!');

var butt=document.documentElement;
butt.style.setProperty('--but','none');

let showbut=()=>{
    butt.style.setProperty('--but','block');
}

setTimeout(showbut,1150)

var miss=document.documentElement;
var vis=document.documentElement;

let hide=()=>{
    miss.style.setProperty('--miss','none');
    vis.style.setProperty('--vis','none');
}

hide();

let showmis=()=>{
    miss.style.setProperty('--miss','block');
}

let showvis=()=>{
    vis.style.setProperty('--vis','block');
}

const about=document.getElementById('about_us');

about.addEventListener("mouseover",showmis);
about.addEventListener("mouseover",showvis);
about.addEventListener("mouseout",hide);


var sliders=document.getElementsByClassName('img-slider');
var index=1;

var trans=document.documentElement;


var changeslide;
const intervaltime=2000;

let hideall=()=>{
    // sliders.forEach(slide => {
    //     slide.style.display="none";
    // })
    var i=0;
    while(i<sliders.length){
        sliders[i].style.display="none";
        i++;
    }
}

let nextslide=()=>{
    hideall();
    trans.style.setProperty("--transval","3%");
    if(index==sliders.length){
        index=0;
    }
    sliders[index].style.display="block";
    console.log('next',index)
    index++;

    if(index==sliders.length){
        index=0;
    }
    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}


let prevslide=()=>{
    hideall();
    trans.style.setProperty("--transval","-3%");
    index-=2;
    if(index<=-1){
        index=sliders.length-1;
    }
    sliders[index].style.display="block";
    console.log('prev',index)
    index++;
    

    // if(index==-1){
    //     index=sliders.length-1;
    // }

    clearInterval(changeslide);
    changeslide=setInterval(nextslide,intervaltime);
}

