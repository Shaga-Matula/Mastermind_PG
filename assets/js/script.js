document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    var timerVariable = setInterval(countUpTimer, 1000);
    var totalSeconds = 0;

    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600) / 60);
        var seconds = totalSeconds - (hour * 3600 + minute * 60);
        document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
    }

    let new_game = document.getElementById("new-game");
    new_game.addEventListener("click", function () {
        alert("You Clicked New Game");
    });

    let change_answer = document.getElementById("change-answer");
    change_answer.addEventListener("click", function () {
        alert("You Clicked Change Answer");
    });

    let submit_answer = document.getElementById("submit-answer");
    submit_answer.addEventListener("click", function () {
        alert("You Clicked Submit Answer");
    });

    let c_red = document.getElementById("c-red");
    c_red.addEventListener("click", function () {
        alert("You Clicked Red");
    });

    let c_blue = document.getElementById("c-blue");
    c_blue.addEventListener("click", function () {
        alert("You Clicked Blue");
    });

    let c_green = document.getElementById("c-green");
    c_green.addEventListener("click", function () {
        alert("You Clicked Green");
    });

    let c_yellow = document.getElementById("c-yellow");
    c_yellow.addEventListener("click", function () {
        alert("You Clicked Yellow");
    });

    let c_black = document.getElementById("c-black");
    c_black.addEventListener("click", function () {
        alert("You Clicked Black");
    });

    let c_white = document.getElementById("c-white");
    c_white.addEventListener("click", function () {
        alert("You Clicked White");
    });

});