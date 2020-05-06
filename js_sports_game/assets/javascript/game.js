let resetButton = document.querySelector("#reset-button")
let numberOfResets = document.querySelector("#num-resets")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")
let teamOneGoals = document.querySelector("#teamone-numgoals")
let teamOneShotsTaken = document.querySelector("#teamone-numshots")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
let teamTwoShotsTaken = document.querySelector("#teamtwo-numshots")


resetButton.addEventListener("click", function() {
    console.log("RESET button clicked")
    let newResetValue = Number(numberOfResets.innerHTML) + 1;
    numberOfResets.innerHTML = newResetValue
    teamOneGoals.innerHTML = 0
    teamOneShotsTaken.innerHTML = 0 
    teamTwoGoals.innerHTML = 0
    teamTwoShotsTaken.innerHTML = 0
  })


  teamOneShootButton.addEventListener("click", function() {
    console.log("SHOOT button clicked");
    let newteamOneShotsValue = Number(teamOneShotsTaken.innerHTML) + 1;
    teamOneShotsTaken.innerHTML = newteamOneShotsValue
    if (Math.floor(Math.random() * 5) >2){
        let newteamOneGoalsValue = Number(teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = newteamOneGoalsValue
        console.log("newteamOneGoalsValue")}
  })


  teamTwoShootButton.addEventListener("click", function() {
    console.log("SHOOT button clicked");
    let newteamTwoShotsValue = Number(teamTwoShotsTaken.innerHTML) + 1;
    teamTwoShotsTaken.innerHTML = newteamTwoShotsValue
    if (Math.floor(Math.random() * 5) >2){
        let newteamTwoGoalsValue = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = newteamTwoGoalsValue
        console.log("newteamTwoGoalsValue")}
  })




