document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');




    // This sets of the timer "CountUpTimer()" 
    var timerVariable = setInterval(countUpTimer, 1000);
    var totalSeconds = 0;

    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600) / 60);
        var seconds = totalSeconds - (hour * 3600 + minute * 60);
        document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
    }

    /* /////////////// Listen for Click ///////////// */
    // New Game Button
    let new_game = document.getElementById("new-game");
    new_game.addEventListener("click", function () {
        alert("You Clicked New Game");
    });

    // Change Answer Button
    let change_answer = document.getElementById("change-answer");
    change_answer.addEventListener("click", function () {
        alert("You Clicked Change Answer");
    });
    // Submit Button
    let submit_answer = document.getElementById("submit-answer");
    submit_answer.addEventListener("click", function () {
        alert("You Clicked Submit Answer");
    });

    //  //////////// Color Choices ///////////////////
    
    //  Red Choice
    let c_red = document.getElementById("c-red");
    c_red.addEventListener("click", function () {
        alert("You Clicked Red");
    });

    // Blue choice
    let c_blue = document.getElementById("c-blue");
    c_blue.addEventListener("click", function () {
        alert("You Clicked Blue");
    });
    
    // Green Choice
    let c_green = document.getElementById("c-green");
    c_green.addEventListener("click", function () {
        alert("You Clicked Green");
        change_color();
        // alert("You ran Change_color");
    });
    
    // Green Choice
    let c_yellow = document.getElementById("c-yellow");
    c_yellow.addEventListener("click", function () {
        alert("You Clicked Yellow");
    });

    
    // Black Choice
    const myArray = new Array();
    let c_black = document.getElementById("c-black");
    c_black.addEventListener("click", function () {
        const val = document.getElementById('c-black').getAttribute('value');
        alert("You Clicked " + val);
        
        const x = 4;
        console.log(myArray.length);
        console.log(x);
        const y = myArray.length;
        console.log(y);
        
      
        if (y < x ) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
            console_print();
        }
    });


    ///  Log The Array To Console For Test ////
    function console_print() {
        console.log(myArray);
               
    };


   // Working on loop for array ///
    
    let c_white = document.getElementById("c-white");
    c_white.addEventListener("click", function () {
        const val = document.getElementById('c-white').getAttribute('value');
        alert("You Clicked " + val);
        
        const x = 4;
        console.log(myArray.length);
        console.log(x);
        const y = myArray.length;
        console.log(y);
      
        if (y < x ) {
            myArray.push(val);
            // console_print(x);
            change_color();
        } else {
            alert("Array Full " + val);
            console_print();
        }
    });



    function console_print() {
        console.log(myArray);
               
    };


 
     function change_color() {

        item = myArray[0];
        // console.log(item);
        var oDiv = document.querySelector('#line-1').querySelector('.outer-circle').querySelector('.circle-1').style;
        var iDiv = document.querySelector('#line-1').querySelector('.outer-circle').querySelector('.circle-1').querySelector('.inner-inner-circle').style;
        oDiv.backgroundColor = item;
        iDiv.backgroundColor = item;
        // console.log(oDiv);
        // console.log("Done!");
        }

        // .querySelector('#mydiv')
        // .querySelector('.myclass')
        // style).backgroundColor;

    //  document.getElementById("line-1 > .outer-circle").style;
    
 
    
    // $("#content > #price").text();
    // 


});