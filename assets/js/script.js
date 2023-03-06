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
    // This is the var for line numbers LNUMB ///
    let lNumb = 1;

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
        back_one();
    });
    // Submit Button
    let submit_answer = document.getElementById("submit-answer");
    submit_answer.addEventListener("click", function () {
        alert("You Clicked Submit Answer");
        clear_array();
        
    });
    
    //  //////////// Color Choices ///////////////////

    //  Red Choice
    let c_red = document.getElementById("c-red");
    c_red.addEventListener("click", function () {
        const val = document.getElementById('c-red').getAttribute('value');

        alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;

        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
    
        }

    });

    // Blue choice
    let c_blue = document.getElementById("c-blue");
    c_blue.addEventListener("click", function () {
        const val = document.getElementById('c-blue').getAttribute('value');

        alert("You Clicked " + val);

        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
       
        }

    });

    // Green Choice
    let c_green = document.getElementById("c-green");
    c_green.addEventListener("click", function () {
        const val = document.getElementById('c-green').getAttribute('value');

        alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
           
        }
    });

    // yellow Choice
    let c_yellow = document.getElementById("c-yellow");
    c_yellow.addEventListener("click", function () {
        const val = document.getElementById('c-yellow').getAttribute('value');

        alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
          
        }
        
    });


    // Black Choice
    const myArray = new Array();
    let c_purple = document.getElementById("c-purple");
    c_purple.addEventListener("click", function () {
        const val = document.getElementById('c-purple').getAttribute('value');
        alert("You Clicked " + val);

        const x = 4;
        // console.log(myArray.length);
        // console.log(x);
        const y = myArray.length;
        // console.log(y);


        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("Array Full " + val);
            console_print();
        }
        console_print()
    });




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

        if (y < x) {
            myArray.push(val);
            // console_print(x);
            change_color();
        } else {
            alert("Array Full " + val);
            console_print();
        }
    });
   
function back_one(){
    
    if (myArray.length === 0){
        alert("Array Empty");
    }
    else {
        var how_long = myArray.length;
        alert("Array Not Empty " + how_long);
        var oDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).style;
        var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).querySelector('.inner-inner-circle').style;
        alert(".circle-" + (how_long));

        
        alert(".circle-" + "Old " + (how_long));
        iDiv.backgroundColor = "black";
        oDiv.backgroundColor = "#432616";
        myArray.pop();
        alert(".circle-" + "New " + (how_long));
        
    }
 }


function submit_btn() {
    
    lNumb = lNumb + 1;

} 


    // Change color function 
    
    function change_color() {

        for (let i = 0; i < myArray.length; i++) {
            let item = myArray[i];
           
            let circle_num = 1 + (i);

            // console.log("Array is " + myArray[i]);
            // console.log("circle_num is " + circle_num);
            // console.log("I count is is " + i);

            var oDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (circle_num)).style;
            var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (circle_num)).querySelector('.inner-inner-circle').style;
            oDiv.backgroundColor = item;
            iDiv.backgroundColor = item;
            // console.log("#line-" + (lNumb));
            // console.log (".circle-" + (circle_num));
            // console.log(item);
        }
    }


    ///  Log The Array To Console For Test ////
    function console_print() {
        console.log(myArray);

    };


});