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
    new_game.addEventListener("click", function () {alert("You Clicked New Game");
    });

    let change_answer= document.getElementById("change-answer");
    change_answer.addEventListener("click", function () {alert("You Clicked Change Answer");
    });

    let submit_answer= document.getElementById("submit-answer");
    submit_answer.addEventListener("click", function () {alert("You Clicked Submit Answer");
    });
});