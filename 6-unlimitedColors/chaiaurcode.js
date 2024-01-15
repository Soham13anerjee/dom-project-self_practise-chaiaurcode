const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
let colcontext;

const randCol = ()=>{
    let colors = '0123456789ABCDEF';
    let col = '#';
    
    for(let i=0;i<6;i++){
        col += colors[Math.floor(Math.random()*16)];
    }

    return col;
}

function changecolor(){
    if(!colcontext){
        colcontext = setInterval(utilfn,1000);
    }

    function utilfn(){
        document.body.style.backgroundColor = randCol();
        // console.log(colcontext);
    }
}

startbtn.addEventListener('click',changecolor)

function stoprun(){
    clearInterval(colcontext);
    colcontext = null;
}

stopbtn.addEventListener('click',stoprun)