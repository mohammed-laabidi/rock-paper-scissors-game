const hand_player = document.getElementById("hand_player")
const hand_comp = document.getElementById("hand_comp")
const res_player = document.getElementById("res_player")
const res_comp = document.getElementById("res_comp")
const hands_choice = document.querySelectorAll(".hand_choice")
const hands = ["paper", "rock", "scissor"]
const CasesWin = {
  paper: "rock",
  rock: "scissor",
  scissor: "paper"
}
function game(id) {

    let playerMove = document.getElementById(id)
    let finished = 0

    hands_choice.forEach(hand => {
        //reset animation
        hand.src = "images/rock_hand.png"
        hand.style.animation = "none";
        hand.offsetWidth; // force reflow
        hand.style.animation = "hand_animation 0.5s 2";


        hand.onanimationend = () => {
          
            finished++

            if (finished === hands_choice.length) {
                hand_player.src = playerMove.src
                let index_hand = Math.floor(Math.random() *  hands.length)
                let compMove = document.getElementById(hands[index_hand])
                hand_comp.src = compMove.src

                resultFinal(id, index_hand)

            }
        }

    })


}

function resultFinal(id, index_hand) {
   if (id === hands[index_hand]) {
    console.log("ta3adol")
} else if (CasesWin[id] === hands[index_hand]) {
    res_player.textContent = +res_player.textContent + 1
} else {
    res_comp.textContent = +res_comp.textContent + 1
}

}