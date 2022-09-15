
// ? random number

let randomNumber = Math.round(Math.random() * 100);
const input = document.querySelector(".guess-input")
const again = document.querySelector(".again-btn");

console.log(randomNumber)

//? VARİBALES

let score = 10;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore;

  


// ? check button

const check = document.querySelector(".check-btn");
const body = document.querySelector("body")

check.addEventListener("click", () => {
    const guessInput = +document.querySelector(".guess-input").value
    const msg = document.querySelector(".msg")
    if (guessInput == "") {
       msg.innerText="please enter a number"
    }
    else if (randomNumber == guessInput) {
        msg.innerHTML = `Congrats You Win <i class="fa-solid fa-wand-magic-sparkles"></i>` 
        body.style.background = "green"
        document.querySelector(".check-btn").disabled = true;
        if (score >= topScore) {
            localStorage.setItem("topScore", score)

        }
                    document.querySelector(".top-score").textContent =
                      localStorage.getItem("topScore");
                    input.value = "";
        document.querySelector(".secret-number").innerText = randomNumber
    }

    else {
        score--;
        if (score>0) {
      
        guessInput > randomNumber
          ? (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-down"></i>`)
          : (msg.innerHTML = `DECCREASE <i class="fa-solid fa-arrow-up"></i>`);
            input.value = ""
            localStorage.setItem("topScore", score);

        
        }
        else {
            score = 0;
            msg.innerHTML =  ` you loser.. <i class="fa-solid fa-poo"></i>`
            document.querySelector(".check-btn").disabled = true
            document.querySelector(".secret-number").innerText = randomNumber;
            body.style.background ="red"
        }
        document.querySelector(".score").innerText = score
        
    }

  

})

again.addEventListener("click", () => {
    document.querySelector(".secret-number").innerText = "?"
    document.querySelector(".score").innerText = 10
    input.value = ""
    document.querySelector(".msg").innerText = "Starting.."
    body.style.background = "#2d3436";
    randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber)
    document.querySelector(".check-btn").disabled = false;
    document.querySelector(".top-score").textContent =
        localStorage.getItem("topScore");


})

input.addEventListener("keydown", (e) => {
    e.key=="Enter" ? check.click() : null
    
    
})

const myObje = { a: 1, b: 2 }

localStorage.setItem("obj", JSON.stringify(myObje))

const resd = localStorage.getItem("obj");
console.log(typeof resd);