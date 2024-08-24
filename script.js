let gameSeq=[];
let userSq=[];
let btns=['yellow','red','purple','green'];

let start=false;
let level=0;
let high=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(start==false){
        start=true;
        levelup()
    }
})

function levelup(){
    userSq=[]
    level++;
    h2.innerText=`Level ${level}`;

    let randNum=Math.floor(Math.random()*3);
    let randColor=btns[randNum];
    let ranbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(ranbtn);
}

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },300)
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function (){
        btn.classList.remove('userFlash');
    },300)
}


let allbtn=document.querySelectorAll('.btn');

for(btn of allbtn){
    btn.addEventListener('click',btnPress);
}

function checkAns(idx){
    if(userSq[idx] === gameSeq[idx]){
        if(userSq.length == gameSeq.length){
            setTimeout(()=>{
                levelup();
            },1000)
            high++;
        }
        console.log("a")
    }else{
        h2.innerHTML=`Highest score is :<b>${high} </b> <br> Game Over!!! <br> Your Score is : <b>${level}</b> <br> Press any key to Start the Game`; 
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(()=>{
         document.querySelector('body').style.backgroundColor='white';
        },500);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSq.push(userColor);
    checkAns(userSq.length-1);
}

function reset(){
    start=false;
    gameSeq=[];
    userSq=[];
    level=0;
}