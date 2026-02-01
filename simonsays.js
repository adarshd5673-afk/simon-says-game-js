let gamesq = [];
let usersq = [];
let btns = ["yellow","red","green","purple"];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keydown",function(){
   if(started==false){
    console.log("game started");
    started=true;
    levelup();
   }
});
function btnfalsh(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function levelup(){
    usersq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let randindx = Math.floor(Math.random() * 4);
    let randcolor = btns[randindx];
    let randbtn= document.querySelector(`.${randcolor}`);
    gamesq.push(randcolor);
    console.log(gamesq);
    btnfalsh(randbtn);
}
// function btnpres(){
//     let btn=this;
//     let usercolor = btn.getAttribute("id");
//     usersq.push(usercolor);
//     btnfalsh(btn);
// }

function checkAns(idx){
    if(usersq[idx]==gamesq[idx]){
        if(usersq.length==gamesq.length){
            setTimeout(levelup, 1000);
        }
        console.log("same value");
    }else{
        console.log("gaem over");
        h2.innerText=`Game over. Your socre was ${level}. Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }

}
function btnpres(){
    let btn = this;
    let usercolor = btn.getAttribute("id");

    usersq.push(usercolor);
    console.log("User sequence:", usersq); // 👈 YOU CAN SEE NOW

    btnfalsh(btn);
    checkAns(usersq.length-1);
    // checkAns(usersq.length - 1); // 🔥 MOST IMPORTANT LINE
}

let allbtns=document.querySelectorAll('.btn');
for(let btn of allbtns){
    btn.addEventListener("click",btnpres);
}
function reset(){
    started=false;
    usersq= [];
    gamesq=[];
    level=0;
}