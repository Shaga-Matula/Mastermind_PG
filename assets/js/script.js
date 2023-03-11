document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');


    // The following pickes randam colors and place in array comArray ;; 


    const comArray = new Array();
    const computer_list = ["red", "green", "blue", "purple", "white", "yellow"];
    console.log("computer list is " + (computer_list));

    while ((comArray).length < 4) {
        var choice = computer_list[Math.floor(Math.random() * computer_list.length)];
        comArray.push(choice);
    }
    alert("Computer Has Made Its Choice, Please Click To Continue ");

    // border outline for lines for user clarity
    //   Set Border for line choice
    var border_color_type = "outset";
    document.getElementById("line-1").style.border = border_color_type;
    //// 
    // //     open_help_file.addEventListener("click", function () {
    //     alert("You Open Help File");
    //     location.reload();
    // }); holder
    //  Help file Insructions
    // 

    
    const controlarea = document.getElementById('controlarea');
    const docHolder = document.getElementById('mainarea')
    const open_help_file = document.getElementById('open-help-file');
    const close_help_file = document.getElementById('close-help-file');
    const help_file = document.getElementById('help-file');
    
    //  Set default help text to none and hide
    console.log(open_help_file);
    help_file.style.display = "none";

    open_help_file.addEventListener("click", function () {
        alert("You Open Help File");
        help_file.style.display = "";
        controlarea.style.display = "none";
        docHolder.style.display = "none";
        open_help_file.style.display = "none";
        
    });

    close_help_file.addEventListener("click", function () {
        // alert("You Clicked Close Help File");
        docHolder.style.display = "";
        controlarea.style.display = "";
        open_help_file.style.display = "";
        help_file.style.display = "none";
    });
    // // This sets of the timer "CountUpTimer()" 
    // var timerVariable = setInterval(countUpTimer, 1000);
    // var totalSeconds = 0;

    // function countUpTimer() {
    //     ++totalSeconds;
    //     var hour = Math.floor(totalSeconds / 3600);
    //     var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    //     var seconds = totalSeconds - (hour * 3600 + minute * 60);
    //     document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
    // }
    // This is the var for line numbers LNUMB ///
    let lNumb = 1;

    /* /////////////// Listen for Click ///////////// */
    // New Game Button
    let new_game = document.getElementById("new-game");
    new_game.addEventListener("click", function () {
        alert("You Clicked New Game");
        location.reload();
    });

    // Change Answer Button
    let change_answer = document.getElementById("change-answer");
    change_answer.addEventListener("click", function () {
        // alert("You Clicked Change Answer");
        back_one();
    });
    // Submit Button
    let submit_answer = document.getElementById("submit-answer");
    submit_answer.addEventListener("click", function () {
        // alert("You Clicked Submit Answer");
        submit_btn();

    });

    //  //////////// Color Choices ///////////////////

    //  Red Choice
    let c_red = document.getElementById("c-red");
    c_red.addEventListener("click", function () {
        const val = document.getElementById('c-red').getAttribute('value');

        // alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;

        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("You have entered 4 colours, click submit to continue ");

        }

    });

    // Blue choice
    let c_blue = document.getElementById("c-blue");
    c_blue.addEventListener("click", function () {
        const val = document.getElementById('c-blue').getAttribute('value');

        // alert("You Clicked " + val);

        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("You have entered 4 colours, click submit to continue ");

        }

    });

    // Green Choice
    let c_green = document.getElementById("c-green");
    c_green.addEventListener("click", function () {
        const val = document.getElementById('c-green').getAttribute('value');

        // alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("This line is full click Submit");

        }
    });

    // yellow Choice
    let c_yellow = document.getElementById("c-yellow");
    c_yellow.addEventListener("click", function () {
        const val = document.getElementById('c-yellow').getAttribute('value');

        // alert("You Clicked " + val);
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("This line is full click Submit");

        }

    });


    // Black Choice
    const myArray = new Array();
    let c_purple = document.getElementById("c-purple");
    c_purple.addEventListener("click", function () {
        const val = document.getElementById('c-purple').getAttribute('value');
        // alert("You Clicked " + val);

        const x = 4;
        // console.log(myArray.length);
        // console.log(x);
        const y = myArray.length;
        // console.log(y);


        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("This line is full click Submit");
            console_print();
        }
        console_print()
    });




    // Working on loop for array ///

    let c_white = document.getElementById("c-white");
    c_white.addEventListener("click", function () {
        const val = document.getElementById('c-white').getAttribute('value');
        // alert("You Clicked " + val);

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
            alert("This line is full click Submit");
            console_print();
        }
    });


    // back_one wil delete from the array incramently and reset circle
    function back_one() {

        if (myArray.length === 0) {
            alert("None correct");
        } else {
            var how_long = myArray.length;
            // alert("Array Not Empty " + how_long);
            var oDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).style;
            var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).querySelector('.inner-inner-circle').style;
            // alert(".circle-" + (how_long));


            // alert(".circle-" + "Old " + (how_long));
            iDiv.backgroundColor = "black";
            oDiv.backgroundColor = "#432616";
            myArray.pop();
            // alert(".circle-" + "New " + (how_long));

        }
    }




    function submit_btn() {
        console.log(("User Arrray = ") + myArray);
        console.log(("Computer Array = ") + comArray);
        const resultArray = Array();
        const tmpArray = Array();
        var i = -1;
        //    Place comArry to new array so can be manipulated //
        while (++i < comArray.length) {
            tmpArray[i] = comArray[i];
        }
        console.log(tmpArray);

        if (myArray.length <= 3) {
            alert("You must pick 4 choices to play");

        } else {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == "done") {
                    console.log("Array element done = " + (myArray[i]));
                } else if (myArray[i] == tmpArray[i]) {
                    if (myArray[i] == "done") {
                        console.log("Array element done = " + (myArray[i]));
                    } else {
                        resultArray.push("white");
                        console.log("Right place and color before " + (tmpArray[i]) + "+ " + (myArray[i]));

                        myArray[i] = ("done");
                        tmpArray[i] = ("done");
                        console.log("Right place and color after " + (tmpArray[i]) + "+ " + (myArray[i]));

                        console.log("End of loop 1");
                    }
                }

                console.log("This is the myArray = " + (myArray))
                console.log("This is the tmpArray = " + (tmpArray))
                console.log("Final result = " + resultArray);
            }

            for (let i = 0; i < tmpArray.length; i++) {
                if ((myArray.some(r => tmpArray.includes(r))) && (myArray[i] !== "done")) {
                    console.log("Array element NOT done = " + (myArray[i]));
                    for (let j = 0; j < tmpArray.length; j++) {

                        if ((myArray[i] == tmpArray[j]) && (myArray[i] !== "done")) {
                            console.log("Not in place but must match " + (tmpArray[j]) + "+ " + (myArray[i]));
                            console.log("Yes its here = " + (myArray))
                            resultArray.push("black");
                            myArray[i] = ("done");
                            tmpArray[j] = ("done");

                        } else {

                            console.log("Not a match " + (tmpArray[j]) + "+ " + (myArray[i]));
                        }
                    }

                }

            }

            console.log("This is the myArray = " + (myArray))
            console.log("This is the tmpArray = " + (tmpArray))
            console.log("Final result = " + resultArray);



            if (resultArray.length === 0) {
                alert("Sorry no colours matching in this line");
                // alert("Submit lNumbe before lNumb loose" + (lNumb));
                if (lNumb >= '8') {
                    alert("So Sad You Loose!");
                    alert("The Correct Answer Was = " + (comArray));
                    alert("Resetting the game so you can try again!");
                    location.reload();
                }


                function next_line() {
                    document.getElementById("line-" + (lNumb)).style.border = "";
                    lNumb = lNumb + 1;
                    document.getElementById("line-" + (lNumb)).style.border = border_color_type;
                    console.log("Delete border " + (document.getElementById("line-1").style.border));
                    // alert("Submit lNumbe " + (lNumb));
                    // alert("Empting user line Array");
                }


                next_line();


                while (myArray.length > 0) {
                    myArray.pop();
                }


            } else {
                for (let i = 0; i < resultArray.length; i++) {
                    // var how_long = resultArray.length;
                    var wht_color = resultArray[i];
                    var placeNo = i + 1;
                    console.log("placeholder = " + (placeNo));
                    // alert("Array Not Empty " + how_long);

                    var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".score-" + (placeNo)).style;
                    // var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".score-" + (how_long)).style;
                    // alert(".circle-" + (how_long));


                    // alert(".score-" + (placeNo) + " + " + (resultArray[i]));
                    iDiv.backgroundColor = wht_color;
                    iDiv.height = "12px";
                    iDiv.width = "12px";
                    // placeNo = placeNo ++; 
                    // oDiv.backgroundColor = "#432616";
                    // myArray.pop();
                    // // alert(".circle-" + "New " + (how_long));


                }

                const chkWin = Array('white', 'white', 'white', 'white');
                console.log("Is " + (resultArray) + "the same as" + (chkWin));
                console.log(resultArray);
                console.log(chkWin);
                // console.log((resultArray) === (chkWin));

                if (chkWin.toString() === resultArray.toString()) {
                    alert("Congratulations You Win: Well Done");
                    alert("Resetting the game so you can win again!");
                    location.reload();
                    windows.location.reload();
                }


                // alert("Submit lNumbe before lNumb loose" + (lNumb));
                if (lNumb >= '8') {
                    alert("So Sad You Lose!");
                    alert("The Correct Answer Was = " + (comArray));
                    alert("Resetting the game so you can try again!");
                    location.reload();
                    windows.location.reload();
                }
                //// lNumb + 1 and border delete and move
                next_line_2();

                function next_line_2() {
                    document.getElementById("line-" + (lNumb)).style.border = "";
                    lNumb = lNumb + 1;
                    document.getElementById("line-" + (lNumb)).style.border = border_color_type;
                    console.log("Delete border " + (document.getElementById("line-1").style.border));
                    // alert("Submit lNumbe " + (lNumb));
                    // alert("Empting user line Array");
                }


                while (myArray.length > 0) {
                    myArray.pop();
                }




            }

        }
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
        // console.log(("User Arrray = ") + myArray);
        // console.log(("Computer Array = ") + comArray);
    };


});