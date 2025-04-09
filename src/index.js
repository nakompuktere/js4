let all_prizes = [];
let button = document.getElementById("button")
let result = document.getElementById("prize__result")


function get_numbers() {
    let prize_number = document.getElementsByClassName("prize__number");
    let prizes = document.getElementsByClassName("prize");
    let min_number = 1;
    let max_number = prize_number.length;
    let random_number = Math.random()*(max_number-min_number)+min_number

    for(let i = 0; i < prize_number.length; i++) {
        prizes[i].classList.remove("active")
    }

    random_number = Math.round(random_number)

    prizes[random_number-1].classList.add("active")

    for(let i = 0; i < prize_number.length; i++) {
        prize = prize_number[i].textContent;
        all_prizes.push(prize);
    }
    console.log(all_prizes);
    result.innerHTML = all_prizes[random_number-1];
}



button.addEventListener("click", get_numbers);