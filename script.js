"strict mode";
//////////Element

const musicbtn = document.querySelector(".music");
const sportsbtn = document.querySelector(".sports");
const techbtn = document.querySelector(".tech");
const guessInput = document.querySelector(".guess");
const checkbtn = document.querySelector(".check");
const guesswordCont = document.querySelector(".guessword");
const scoreDIv = document.querySelector(".score");
const hiscore = document.querySelector(".highscore");
const restart = document.querySelector(".restart");
const playtime = document.querySelector(".playtime");
const timer = document.querySelector(".timer");
const correct = document.querySelector(".check-restart");
////////var

let score = 0;
let randomArr;
let shuffledWord;
let timesPlayed = 5;
let highscore = 0;
let timeInt;
//////
hiscore.textContent = `Highscore: ${
  localStorage.getItem("highscore") ? localStorage.getItem("highscore") : 0
}`;

/////////
const check = function (randArr, userG, shuf) {
  if (!userG) {
    scoreDIv.textContent = "Pleae enter a guess ⛔";

    console.log("Input a guess");
  } else if (randArr === userG) {
    console.log("correct");
    score++;
    guesswordCont.textContent = "";
    timesPlayed--;
    clearInterval(timeInt);
    timer.textContent = "00:00";

    scoreDIv.textContent = "Correct ✅";
    console.log(`score ${score}`);
  } else {
    // guesswordCont.textContent =``

    console.log("wrong");
    guesswordCont.textContent = "";
    timesPlayed--;
    scoreDIv.textContent = "Wrong ❌";
    correct.textContent = randomArr;
    clearInterval(timeInt);
    timer.textContent = "00:00";
  }
};

function save_highscore(hS) {
  localStorage.setItem("highscore", hS);
}

const countdown = function () {
  const tick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);

    let sec = String(time % 60).padStart(2, 0);

    timer.textContent = `${min}:${sec}`;
    ///////
    if (time === 0) {
      clearInterval(timeInt);
      scoreDIv.textContent = "Time out⌛";
      randomArr = undefined;
      shuffledWord = undefined;
      guesswordCont.textContent = "";
      timesPlayed--;
      playtime.textContent = `Playtime: ${timesPlayed}`;
    }

    if (timesPlayed === 0) {
      randomArr = undefined;
      shuffledWord = undefined;
      guesswordCont.textContent = "Game over";
      checkbtn.classList.add("not-allowed");
      scoreDIv.textContent = `Score: ${score}`;
    }
    time--;
  };
  let time = 30;

  tick();
  return (timeInt = setInterval(tick, 1000));
};

/////////////

const Music = [
  "beats",
  "dremo",
  "asake",
  "amapiano",
  "davido",
  "burnaboy",
  "legwork",
  "zazuu",
];
// console.log(Music);

const Sports = [
  "offside",
  "foul",
  "handball",
  "travel",
  "dunk",
  "pointers",
  "dive",
  "homerun",
  "penalty",
  "scrimage",
];
// console.log(Sports);

const Tech = [
  "bugs",
  "api",
  "node",
  "server",
  "frontend",
  "flutterwave",
  "algorithm",
  "startup",
  "paystack",
  "python",
];
// console.log(Tech);
// const Shuffle = function (arr) {};

// const categories = [Music, Sports, Tech];
///////////////

musicbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const random = Math.trunc(Math.random() * Music.length);
  console.log(random);
  randomArr = Music[random];

  shuffledWord = randomArr
    .split("")
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffledWord);
  //   console.log(Music[random]);

  guesswordCont.textContent = shuffledWord;
  scoreDIv.textContent = "";
  if (timeInt) clearInterval(timeInt);
  countdown();
});

/////////

// console.log(shuffledWord);
sportsbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const random = Math.trunc(Math.random() * Sports.length);
  console.log(random);
  randomArr = Sports[random];

  shuffledWord = randomArr
    .split("")
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffledWord);
  guesswordCont.textContent = shuffledWord;
  scoreDIv.textContent = "";
  if (timeInt) clearInterval(timeInt);
  countdown();
});

////////

techbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const random = Math.trunc(Math.random() * Tech.length);
  console.log(random);

  randomArr = Tech[random];
  shuffledWord = randomArr
    .split("")
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffledWord);

  //   const html = `
  //         <h3>${shuffledWord}</h3>

  //   `;

  guesswordCont.textContent = shuffledWord;
  scoreDIv.textContent = "";
  if (timeInt) clearInterval(timeInt);
  countdown();
});
////////

checkbtn.addEventListener("click", function (e) {
  e.preventDefault();

  const UserGuess = guessInput.value.toLowerCase();
  check(randomArr, UserGuess, shuffledWord);
  console.log(timesPlayed);

  console.log(UserGuess);
  guessInput.value = "";
  if (timesPlayed === 0) {
    randomArr = undefined;
    shuffledWord = undefined;
    guesswordCont.textContent = "Game over";
    checkbtn.classList.add("not-allowed");
    scoreDIv.textContent = `Score: ${score}`;
  }

  playtime.textContent = `Playtime: ${timesPlayed}`;
});

restart.addEventListener("click", function (e) {
  e.preventDefault();
  if (score > highscore) {
    highscore = score;
    save_highscore(highscore);
    hiscore.textContent = `Highscore: ${highscore}`;
    score = 0;
  }
  checkbtn.classList.remove("not-allowed");
  scoreDIv.textContent = "";
  guesswordCont.textContent = "";
  score = 0;
  timesPlayed = 5;
  playtime.textContent = `Playtime: ${timesPlayed}`;
});
//////////
// console.log(Math.random());

// const shuffle = "timileyin"
//   .split("")
//   .sort(() => {
//     return 0.5 - Math.random();
//   })
//   .join("");
// console.log(shuffle);
// console.log(Window.sessionStorage);
