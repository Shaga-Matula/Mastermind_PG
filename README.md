![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

![image](https://user-images.githubusercontent.com/120735585/224573045-ca79358f-89c6-484c-ad3a-9b50bda66c17.png)

# MASTERMIND Game Paul Gleeson 5P PP2

# Introduction
Project portfolio 2 for Code Institute Full-stack development program: JavaScript Essentials.

Guess the color of hidden pegs. A deduction game where a player takes turn making a limited number of guesses, using logic to deduce what pegs the computer has hidden.

The Computer player secretly puts four colored pegs in the spaces behind a screen at a hidden place in the program. The player, the code breaker, makes a series of guesses. After each guess, the computer uses smaller pegs to tell the code breaker if their guessed pegs are the right color and in the right place, are the right color but the wrong place, or are the wrong color entirely. The code breaker makes another guess in the next row, building upon information from previous guesses, trying to match the pegs the computer hid at the beginning of the game.

[Live Project Here](https://shaga-matula.github.io/Mastermind_PG/index.html)


## README Table Content

* [Introduction](#introduction)
* [User Experience UX](#user-experience---UX)
* [Design](#Design)
    * [Wireframe](#Wireframe)
    * [Website Structure](#website-structure)
    * [Colour Scheme](#colour-scheme)
    * [Imagery](#Imagery)
    * [Typography](#typography)
    * [interactive Links](#interactive-links) 
  
* [Features](#features)  
    * [Home Page](#home-page) 
    * [Navigation Menu](#navigation-menu)
    * [How To Play](#how-to-play)
* [Future Features](#future-features)
* [How to Play](#how-to-play)
* [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks - Libraries - Programs Used](#frameworks---libraries---programs-used)
* [Testing](#testing)
* [Deployment](#deployment-this-project)
    * [Deployment This Project](#deployment-this-project)
    * [Forking This Project](#forking-this-project)
    * [Cloning This Project](#cloning-this-project)
* [Credits](#credits)
* [Content](#content)

## User Experience - UX

* As a web developer, I want to:
  
  1. Build an online quiz eye catching to the user’s at first sight so they are interested in playing the game.
  2. Make it easy to navigate the game and for users to play.
  3. Make it enjoyable and challenging for the player. 
   
* When a new player joins they should be able to:

  1. Read and understand the instructions Easley.
  2. Navigate with simplicity.
  3. Get feedback from the game to enhance gameplay.
   
* Returning players:

  1. To be eager to beat there highest score.

## Design
<hr style="border:1px solid white">

### Wireframe
This is a mock-up of the intended build. Please note that some features may change during development as the project continues, but the image should be mostly accurate representation on the site.
<br>

<figure>
  <img src="assets/images/mockup.png" width=400>
</figure>

### Website Structure
The game is written on one page, that split into two sections and only one section will be visible at a time. Game section and instructions (How to Play) section. Both are available large screens and small devices.

On small screens the orientation is disabled as the game is not supported on small landscape devices. When a user rotates the screen they will be presented with a clear visual explaining that this is not available and the user is instructed to rotate there device.

<figure>
  <img src="assets/images/rotatenotsup.png" width=400>
</figure>

#### The Game:
* Homepage
<figure>
  <img src="assets/images/homepage.png" width=400>
</figure>

* How to play page<br>



#### Colour Scheme
 <figure>
  <img src="assets/images/colorpallet.png" width=400>
</figure>
 The main colour scheme that was chosen for this project to give a wooden feel (like the old game from the 80's) and is an mixture of brown tones and blue with a black background and white text for the instructions.

 #### Typography
* The two fonts were chosen for the site. Tilt Neon for title the main title and Lucida Sans for white text on a black background. 

font-family: "Tilt Neon", sans-serif;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

      
#### Imagery
* No Imagery was used on this site
  
### Interactive Links  
* Four buttons and six color choice icons are interactive for the user. <br>
    

* How to play button: Brings the user to the help file and hide all other contents. <br>


<figure>  
<img style="float: right; margin-right: 55%;" src="assets/images/rightpannel.png" width=80px  height=350px >
      <figcaption style="float: right; margin-right: 51%;">Right Pannel Selector</figcaption>
     </figure>
  <figure>
     <img src="assets/images/howtplaybtn.png" width=400px >
     <figcaption>How To Play Btn:</figcaption>
  </figure>
 * New Game Button: Reloads the page and asked the user to chose a color, fill line and play.<br>
 * Change Answer Button: Incraments backwards deeleting a colour at a time.<br>
 * Submit Answer Button: Enters the users choice and calculates the result.<br>
   <figure>
    <img src="assets/images/btombutt.png" width=400>
    <figcaption>New Game, Change Answer and Submit Btn:</figcaption>
  </figure>
  * Colour Selection Area: A choice of six colours to make a guess from.<br>

    
<br><br><br><br>
## Features
<hr style="border:1px solid white">

### Home Page 

  <figure>
     <img src="assets/images/fullpage.png" width=500px >
     <figcaption>Home Page</figcaption>
  </figure>

* When the user opens the Homepage they are presented with the full game website and they are instantly greeted and they have access to the game immediately. They are greeted and told that the computer has made a choice and ready to play<br>

<figure>
     <img src="assets/images/homegreet.png" width=100px >
     <figcaption>Greeting</figcaption>
  </figure>

### Navigation Menu
  * The only navagation is to the "How to Play" file and back to the game page. 
  * When the user clicks the "How to Play" button: 
      * They are brought directally to the page and presented with the "How to Play" instructions.
      * They are then given the option to return to the game by clicking return to game.  
      
<figure>
     <img src="assets/images/howtplay.png" width=400px >
     <figcaption></figcaption>
  </figure>
     


### How to Play 
<hr style="border:1px solid white">

Guess the color of hidden pegs. A deduction game where a player takes turn making a limited number of guesses, using logic to deduce what pegs the computer has hidden.

The Computer player secretly puts four colored pegs in the spaces behind a screen at a hidden place in the program. The player, the code breaker, makes a series of guesses. After each guess, the computer uses smaller pegs to tell the code breaker if their guessed pegs are the right color and in the right place, are the right color but the wrong place, or are the wrong color entirely. The code breaker makes another guess in the next row, building upon information from previous guesses, trying to match the pegs the computer hid at the beginning of the game.

 
  * How to play Mastermind
       
  * First the user will click OK to close the "Computer is Ready to Play" alert.
  * The user then uses the right hand pannel consisting of 6 colours by clicking any one of the colours. 
  * This will begin to populate the first row of the game.
  * The user can continue making choices or they can use the "Change Answer" button.
  
<figure>
     <img src="assets/images/frow.png" width=400px >
     <img src="assets/images/rightpannel.png" width=80px  height=350px >
     <figcaption>First Row</figcaption>
  </figure>
                          
  * This will begin to populate the first row of the game.
  * The user can continue making choices or they can use the "Change Answer" button, which Incraments backwards deleting a colour at a time.

<figure>
    <img src="assets/images/btombutt.png" width=400>
    <figcaption>Change Answer</figcaption>
  </figure>

* The user must make four choices or: 
  * The computer will give an "Alert!" saying not enough colours chosen.
  * The computer will give an "Alert!" saying too many choices. 
<figure>
    <img src="assets/images/toomuch.png" width=100>
    <img style="float: right; margin-right: 70%;" src="assets/images/noten.png" width=100px>
    <figcaption style="float: right; margin-right: 69%;">Not enough choice</figcaption>
    <figcaption>Too many choices</figcaption>
  </figure>
 
  * The user then clicks the "Submit" button and the computer will compair the two lines. 
  * The results are indicated by:
    * Computer displays a white peg for every colour chosen that is in the correct place and the correct colour.
    * Computer displays a black peg for every colour chosen that is in not in the correct place but the colour is present in the line.
    * Computer display a message that there are no correct colours in the row. 
<figure>
    <img src="assets/images/scrow2.png" width=250>
    <figcaption>Score results</figcaption>
  </figure>

  <figure>
    <img src="assets/images/alerts.png" width=600>
    <figcaption>Interactive User Alerts</figcaption>
  </figure>

### Win
  * You win the game when you manage to guess <strong> all the colours in the code sequence and when
    they all in the right position.</strong>
### Lose 
  * You lose the game if you use all attempts without guessing the computer choice.
### Reset
  * The computer will then reset the game and start again.

<hr style="border:1px solid white">

# Future Devolopment
  * Timer : Devolopment a timer and display in game to give a sence of urgenccy in the game. 
  * Higest Score : Devolop a higest score method to give the game a more competive edge using time and by line number to produce score.   
  * Sound : Devolop a system wher a beep can indicate choice, chime to win, meme to loose etc.  
  * Sound for visualy impaired : Devolop a clear voice choice "You have chosen red for first position line 1" etc..

### Languages Used 

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [javaScript](https://www.javascript.com/)

### Frameworks - Libraries - Programs Used

* [Google Fonts](https://fonts.google.com/)
   * Google fonts were used to import the 'Roboto' font throughout the style.css.
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome are used as an icons for user UX purposes.
* [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.
* [VSCode](https://code.visualstudio.com/)
    * VSCode was used to create and edit the website.
* [Mobile Simulator](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk)
    * Mobile Simulater was used to test the website on a mobile device.



  
## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

### [W3C Markup Validator](https://validator.w3.org)
* The HTML files were validated through the W3C Validator, presenting no errors.

### [W3C CSS Validator](https://jigsaw.w3.org/css-validator) 
* The CSS files were validated though the Jigsaw W3C Validator, presenting no errors.
#### Results:
* [Main CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fshaga-matula.github.io%2FMastermind_PG%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

* [Main Html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fshaga-matula.github.io%2FMastermind_PG%2F)

<figure>
    <img src="assets/images/testing.png" width=600>
    <figcaption>CSS and HTML Results</figcaption>
  </figure>

### [Jshint](https://jshint.com/)
* All JavaScript files were validated through JSHint, presenting no errors.


<figure>
    <img src="assets/images/jstest.png" width=400>
    <figcaption>JShint Results</figcaption>
  </figure>

# Hardware Testing
  * Chrome desktop and Alienware laptop used for windows testing. Apple testing done on Ipad 6th, generation, iPhone 5, iPhone 6, iPhone X and iPhone 11 and iPhone 12.  
# Virtual Testing
  * Virtual testing was done using the Google Chrome Browser and Chrome Developer used to check responsiveness on different screen sizes. 

  * Responsive on all device sizes between 320px - 2600px wide

    * BlackBerry Z30 (360px x 640px)  
    * BlackBerry PlayBook (600px x 1024px)  
    * Samsung Galaxy Note 3 (360px x 640px) 
    * Samsung Galaxy S3 (360px x 640px) 
    * Samsung Galaxy S8 (360px x 740px)   
    * Samsung Galaxy S9+(320px x 658px) 
    * Samsung Galaxy Tab S4(712px x 1138px) 
    * LG Optimus L70 (384px x 640px)
    * Microsoft Lumia 550 (640px x 360px) 
    * Microsoft Lumia 950 (360px x 640px) 
    * Motorola G4 (360px x 640px)
    * Nexus 4 (384px x 640px) 
    * Nokia Lumia 520 (320px x 533px) 
    * Nokia N9 (480px x 854px) 
    * Pixel 3 (393px x 786px)
    * Apple iPad Mini (468px x 4024)
    * Apple iPhone 4 (320px x 480px)
    * Apple iPhone 5/S (320px 568px)
    * Apple iPhone 6/7/8 (375px x 667px)
    * Apple iPhone 6/7/8 Plus (414px x 736px)
    * Apple iPhone X (375px x 812px)
  
### Lighthouse 

 Lighthouse was used to test Performance, Best Practices, Accessibility and SEO on both Desktop and Mobile devices. 

* Results:
<figure>
    <img src="assets/images/lhousetest.png" width=400>
    <img src="assets/images/lhousetest2.png" width=400>
    <figcaption>Lighthouse Results</figcaption>
  </figure>


* Mobile Results:

  ![Lighthouse Mobile Result](./assets/images/readme/lighthouse_mobile_result.jpg).

  ## Functionality
* All links have been hovered and clicked to ensure accessibility.
* Pages all load correctly on all device screen sizes.
* All social media links work correctly and open a new tab.
* All the buttons are working correctly and bring the users to the function that they were built for.
* The game is working correctly the question comes at the right time and it gives a reply back to the user when answered. 
* The score has no issues and it increases by 25 points any time the user gives a right anwser. 
* The progress bar and question counter have also no issues, the background color increases (from 0% to 100%) and the number of questions also increases any time the user chooses an anwser.

## Bugs 
### Text Overlaping Mobile Devices
![Text Overlaping Mobile Devices](./assets/images/readme/quiz-land-mobile-issue.jpeg)
* I had this issue with my project when I built the layout for the Quiz Page as they are many elements in the same page.<br>

### Fixed Bug
![Fix Bug](./assets/images/readme/quiz-land-bug-mobile-fixed.png)
* I had to add media queries for portrait and landscape to avoid this issue happening.<br>

## Deployment of This Project

The website development was created in the "main" branch. This branch was deployed using GitHub Pages.

* This site was deployed by completing the following steps:

1. Open [GitHub](https://github.com/).
2. Click on the project to be deployed.
3. Navigate to the "Settings".
4. Navigate down to the "GitHub Pages".
5. Click on "Check it out here!".
6. Select the "main" branch and select "Save".
7. The link to the live website was ready on the top.

## Forking This Project
* Fork this project following the steps:

1. Open [GitHub](https://github.com/).
2. Click on the project to be forked.
3. Find the 'Fork' button at the top right of the page.
4. Once you click the button the fork will be in your repository..

## Cloning This Project

* Clone this project following the steps:

1. Open [GitHub](https://github.com/).
2. Click on the project to be cloned.
3. You will be provided with three options to choose from, HTTPS, SSH or GitHub CLI, click the clipboard icon in order to copy the URL.
4. Once you click the button the fork will be in your repository.
5. Open a new terminal.
6. Change the current working directory to the location that you want the cloned directory.
7. Type 'git clone' and paste the URL copied in step 3.
8. Press 'Enter' and the project is cloned.

## Credits

### Information Sources/Resources

* [W3Schools](https://www.w3schools.com/)

* [Stack Overflow](https://stackoverflow.com/)
  
* The JavaScript code for the Fancy Text Animation used in the Homepage was taken from the following tutorial:<br>[Dev ED](https://www.youtube.com/watch?v=GUEB9FogoP8)

## Content

* All the questions provided in the game were taken from 2 online quizzes.
* [Lovatts & Puzzles](https://lovattspuzzles.com/).
* [Britannica Quiz](https://www.britannica.com/).

## Special Thanks

 * Special thanks to my mentor Sandeep Aggarwal, Slack Community, Dave Horrocks and Mairéad Gillic for their assistance throughout this project.

