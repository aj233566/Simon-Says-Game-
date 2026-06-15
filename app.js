let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function userflash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {

    userSeq = [];
    level = level + 1;

    h2.innerText = "Level " + level;

    let randIndex = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIndex];

    let randbtn = document.querySelector("." + randColor);
    gameSeq.push(randColor);
    console.log("Level:", level);
    console.log("Game Sequence:", gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <span style= "color: red">${level}</span> <br>Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "White";
        }, 150);
        reset();
    }
}

function btnPress() {
    console.log("Clicked:", this.id);

    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function checkAns(idx) {
    console.log("Game Sequence:", gameSeq);
    console.log("Game Length:", gameSeq.length);

    console.log("User Sequence:", userSeq);
    console.log("User Length:", userSeq.length);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
    }
    console.log("Checking Index:", idx);
    console.log("Expected:", gameSeq[idx]);
    console.log("Received:", userSeq[idx]);
}