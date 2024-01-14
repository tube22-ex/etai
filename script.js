let TIME = 0;

function time(s){
    if(s == 'start'){
        TIME = new Date().getTime();
    }
    if(s == 'end'){
        const returnTime = new Date().getTime() - TIME;
        TIME = 0;
        return returnTime
    }
}

const Wold = [
    ["あ","A"],
    ["か","KA"],
    ["が","GA"],
    ["さ","SA"],
    ["た","TA"],
    ["な","NA"],
    ["は","HA"],
    ["ま","MA"],
    ["や","YA"],
    ["ら","RA"],
    ["わ","WA"],
]


function askQ(){
    const ex = document.getElementById('exText');
    const kana = document.getElementById('kanaText');
    const roma = document.getElementById('romaText');
    ex.innerHTML = '';
    kana.innerHTML = '';
    roma.innerHTML = '';
    const TypeWold = Wold[Math.floor(Math.random() * Wold.length)];
    ex.insertAdjacentHTML('beforeend',`<span>${TypeWold[0]}</span>`);
    kana.insertAdjacentHTML('beforeend',`<span>${TypeWold[0]}</span>`);
    for(let i=0;i<TypeWold[1].length;i++){
        roma.insertAdjacentHTML('beforeend',`<span>${TypeWold[1][i]}</span>`);
    }
}

addEventListener('keydown',keyEvent);
function keyEvent(e){
    if(e.key == 'e'){
        
        console.log(time('end'))
    }else{
        time('start')
        console.log('start')
    }
}

askQ();