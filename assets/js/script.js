document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // The following picks 4 random colours and places in array comArray ;; 

    const comArray = new Array();
    const computer_list = ["red", "green", "blue", "purple", "white", "yellow"];


    while ((comArray).length < 4) {
        var choice = computer_list[Math.floor(Math.random() * computer_list.length)];
        comArray.push(choice);
    }
    alert("Computer Has Made Its Choice, Please Click To Continue ");

    // Border outline for lines for user clarity
    // Set border for line 1 for initializing game
    var border_color_type = "outset";
    document.getElementById("line-1").style.border = border_color_type;


    //Help file instructions, grab elements to hide when help file is clicked
    const headarea = document.getElementById('headarea')
    const controlarea = document.getElementById('controlarea');
    const docHolder = document.getElementById('mainarea')
    const open_help_file = document.getElementById('open-help-file');
    const close_help_file = document.getElementById('close-help-file');
    const help_file = document.getElementById('help-file');

    //Set default help text to none and hide
    help_file.style.display = "none";
    open_help_file.addEventListener("click", function () {
        help_file.style.display = "";
        controlarea.style.display = "none";
        docHolder.style.display = "none";
        open_help_file.style.display = "none";
        headarea.style.display = "none";
    });
    // Hide or reveal nessasary 
    close_help_file.addEventListener("click", function () {
        docHolder.style.display = "";
        controlarea.style.display = "";
        open_help_file.style.display = "";
        help_file.style.display = "none";
        headarea.style.display = "";
        window.scrollTo(0, 0);
    });
    // This is the var for line numbers or rows LNUMB ///
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
        const val = document.getElementById('c-red').getAttribute('data-value');
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
        const val = document.getElementById('c-blue').getAttribute('data-value');
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
        const val = document.getElementById('c-green').getAttribute('data-value');
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
        const val = document.getElementById('c-yellow').getAttribute('data-value');
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
        const val = document.getElementById('c-purple').getAttribute('data-value');
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("This line is full click Submit");

        }

    });
    // White Choice 
    let c_white = document.getElementById("c-white");
    c_white.addEventListener("click", function () {
        const val = document.getElementById('c-white').getAttribute('data-value');
        const x = 4;
        const y = myArray.length;
        if (y < x) {
            myArray.push(val);
            change_color();
        } else {
            alert("This line is full click Submit");
        }
    });
    //  back_one will delete from the array incrementally and reset circle to blank
    function back_one() {
        if (myArray.length === 0) {
            alert("None correct");
        } else {
            var how_long = myArray.length;
            var oDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).style;
            var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (how_long)).querySelector('.inner-inner-circle').style;
            iDiv.backgroundColor = "black";
            oDiv.backgroundColor = "#432616";
            myArray.pop();
        }
    }
    //  Main engine of the program 
    function submit_btn() {

        const resultArray = Array();
        const tmpArray = Array();
        var i = -1;
        //  Place comArry to new array so can be manipulated 
        while (++i < comArray.length) {
            tmpArray[i] = comArray[i];
        }
        //    Checks array for right plane and colour
        if (myArray.length <= 3) {
            alert("You must pick 4 choices to play");
        } else {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == "done") {
                    console.log();
                } else if (myArray[i] == tmpArray[i]) {
                    if (myArray[i] == "done") {
                        console.log();
                    } else {
                        resultArray.push("white");
                        myArray[i] = ("done");
                        tmpArray[i] = ("done");
                    }
                }
            }
            // Right color wrong place
            for (let i = 0; i < tmpArray.length; i++) {
                if ((myArray.some(r => tmpArray.includes(r))) && (myArray[i] !== "done")) {
                    for (let j = 0; j < tmpArray.length; j++) {
                        if ((myArray[i] == tmpArray[j]) && (myArray[i] !== "done")) {
                            resultArray.push("black");
                            myArray[i] = ("done");
                            tmpArray[j] = ("done");
                        } else {
                            console.log();
                        }
                    }
                }
            }

            // Move the border with the users choice
            function next_line() {
                document.getElementById("line-" + (lNumb)).style.border = "";
                lNumb = lNumb + 1;
                document.getElementById("line-" + (lNumb)).style.border = border_color_type;
            }
            // Check if user array is empty and also if user line 8
            // If so user loses and page reloads
            if (resultArray.length === 0) {
                alert("Sorry no colours matching in this line");
                if (lNumb >= '8') {
                    alert("So Sad You Loose!");
                    alert("The Correct Answer Was = " + (comArray));
                    alert("Resetting the game so you can try again!");
                    location.reload();
                }
                next_line();
                // Clear the myArray for next line
                while (myArray.length > 0) {
                    myArray.pop();
                }
            } else {
                for (let i = 0; i < resultArray.length; i++) {
                    var wht_color = resultArray[i];
                    var placeNo = i + 1;
                    var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".score-" + (placeNo)).style;
                    iDiv.backgroundColor = wht_color;
                    iDiv.height = "12px";
                    iDiv.width = "12px";
                }
           
                //  Check if the user has guessed the correct colors
                const chkWin = Array('white', 'white', 'white', 'white');
                if (chkWin.toString() === resultArray.toString()) {
                    alert("Congratulations You Win: Well Done");
                    alert("Resetting the game so you can win again!");
                    location.reload();
                    windows.location.reload();
                }
                // Check if user array is empty and also if user line 8
                // If so user looses and page reloads
                if (lNumb >= '8') {
                    alert("So Sad You Lose!");
                    alert("The Correct Answer Was = " + (comArray));
                    alert("Resetting the game so you can try again!");
                    location.reload();
                    windows.location.reload();
                }
                //// lNumb + 1 and border delete and move
                function next_line_2() {
                    document.getElementById("line-" + (lNumb)).style.border = "";
                    lNumb = lNumb + 1;
                    document.getElementById("line-" + (lNumb)).style.border = border_color_type;
                }
                next_line_2();
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
            var oDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (circle_num)).style;
            var iDiv = document.querySelector("#line-" + (lNumb)).querySelector(".circle-" + (circle_num)).querySelector('.inner-inner-circle').style;
            oDiv.backgroundColor = item;
            iDiv.backgroundColor = item;
        }
    }
});