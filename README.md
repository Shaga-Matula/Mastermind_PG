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
     <figcaption>How to Play</figcaption>
  </figure>
     


### How to Play 
<hr style="border:1px solid white">

Guess the color of hidden pegs. A deduction game where a player takes turn making a limited number of guesses, using logic to deduce what pegs the computer has hidden.

The Computer player secretly puts four colored pegs in the spaces behind a screen at a hidden place in the program. The player, the code breaker, makes a series of guesses. After each guess, the computer uses smaller pegs to tell the code breaker if their guessed pegs are the right color and in the right place, are the right color but the wrong place, or are the wrong color entirely. The code breaker makes another guess in the next row, building upon information from previous guesses, trying to match the pegs the computer hid at the beginning of the game.
 
 <figure>  
<img style="float: right; margin-right: 50%;" src="assets/images/rightpannel.png" width=80px  height=350px >
<figcaption style="float: right; margin-right: 46%;">Right Pannel Selector</figcaption>
</figure>

 
 
  * How to play Mastermind
       
  * First the user will click OK to close the "Computer is Ready to Play" alert.
  * The user then uses the right hand pannel consisting of 6 colours by clicking any one of the colours. 
  * This will begin to populate the first row of the game.
  * The user can continue making choices or they can use the "Change Answer" button.
  * If the user   
<figure>
     <img src="assets/images/frow.png" width=400px >
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




<br><br><br><br><br><br><br><br><br><br>








<br>
#### Side Navigation Menu Desktop
![Side Navigation Menu](./assets/images/readme/desktop-side-menu.png)
* At the top right of the website, users can find a hamburger menu that is fully responsive in all devices. In this navigation menu users can navigate to the different quizzes and also check the High Scores board.<br>
  
  #### Side Navigation Menu Tablet
![Side Navigation Menu Tablet](./assets/images/readme/tablet-side-menu.png)<br>

  #### Navigation Menu Mobile
![Side Navigation Menu mobile](./assets/images/readme/mobile-side-menu.png)

  #### Navigation Menu Day/Night Mode
![Side Navigation Day/Night Mode](./assets/images/readme/menu-day-night-mode.png)
  * Menu Day/Night Mode. From 8am to 8pm users can access the navigation menu when open in day mode (background-color white), from 8pm to 8am users can access the same menu in night mode (background-color black).

### Quiz Sports

![Quiz Game 1](./assets/images/readme/quiz-page-sports.png)
* All of the game happens in this feature. Here the users will see the questions and they have 4 choices as their answer. The player will choose one and will see if the answer given is right or wrong. 
The topic questions in Quiz 1 are Sports. <br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/game-1.html)

### Quiz History

![Quiz Game 2](./assets/images/readme/quiz-page-history.png)
* This feature has the same purpose as Quiz 1 but here the topic questions are History. <br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/game-2.html)

### Quiz Geography

![Quiz Game 3](./assets/images/readme/quiz-page-geography.png)
* This feature has the same purpose as Quiz 1 and Quiz 2 but here the topic questions are Georaphy. <br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/game-3.html)

### Game End Page

![Game End Page](./assets/images/readme/game-end-page.png)

* Game End feature is the page that users go after a quiz is finished. Here the players can see the last score and save their usernames.<br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/game-end.html)

### Trophy Gold Page

![Trophy Gold Page](./assets/images/readme/trophy-gold-page.png)

* After the user saves the game and if they score 250 they are brought to this feature to receive the gold medal.<br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/trophy-gold.html)

### Trophy Silver Page

![Trophy Silver Page](./assets/images/readme/trophy-silver-page.png)

* After the user saves the game and if they score 225 they are brought to this feature to receive the silver medal.<br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/trophy-silver.html)

### Trophy Bronze Page

![Trophy Bronze Page](./assets/images/readme/trophy-bronze-page.png)

* After the user saves the game and if they score 200 they are brought to this feature to receive the bronze medal.<br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/trophy-bronze.html)

### High Scores Page

![HighScores Page](./assets/images/readme/scores-page.png)

* In the High Scores feature users can check the best scores by the individual players.<br>
[Live Feature Here](https://pedrocristo.github.io/portfolio_project_2/pages/scores.html)

## Future Features
  
### Progress Bar Right/Wrong Answers

* I am planning to add a feature with two progress bars.  One progress bar to show the number of right answers and the other to show the number of wrong answers in the last game played.

## How To Play

#### How to Start 
![How to Start](./assets/images/readme/start-play-game.png)
* The player can choose a quiz to play from the menu or start a random quiz by pressing the button Let's Play in the Homepage.

#### The Game
![How To Play](./assets/images/readme/quiz-page-how-play.png)
* The player has 3 different quizzes in the game. For each quiz the user will see the question on the top center [2] and 4 choices [3] are available.
The player then has to choose one of the choices and if the answer is right will win 25 points. The score will be displayed on the bottom right[5]. 
While the game is going on, users can see the progress bar updating any time they answer a question [1] and the question counter will also update on the bottom left [4] .
On the top right the users can check at any time what quiz they are on [6].

#### Right Answer
![Right Answer](./assets/images/readme/quiz-land-right-answer.png)
* When the user answers the question right the message "Right Answer" will appear on the top center [7] and the background color of their choice answer will turn green [8].

#### Wrong Answer
![Wrong Answer](./assets/images/readme/quiz-land-wrong-answer.png)
* When the user answers the question wrong the message "Wrong Answer" will appear on the top center [9] and the background color of their choice answer will turn red [10].

## Technologies Used

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
* [PIXLR](https://pixlr.com/pt/)
    * PIXLR was used to create, modify and resize all images on this website.
* [Canva](https://www)
   * Canva was used to create wireframe, the 3 background images and also the Favicon.

  
## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

### [W3C Markup Validator](https://validator.w3.org)
* The HTML files were validated through the W3C Validator, presenting no errors.
#### Results:
* [HomePage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Findex.html)
* [Quiz Sports](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Fgame-1.html)
* [Quiz History](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Fgame-2.html)
* [Quiz Geography](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Fgame-3.html)
* [Game End](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Fgame-end.html)
* [Trophy Gold](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Ftrophy-gold.html)
* [Trophy Silver](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Ftrophy-silver.html)
* [Trophy Bronze](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Ftrophy-bronze.html)
* [High Scores](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fpages%2Fscores.html)
  

### [W3C CSS Validator](https://jigsaw.w3.org/css-validator) 
* The CSS files were validated though the Jigsaw W3C Validator, presenting no errors.
#### Results:
* [Main CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fassets%2Fcss%2Fmain.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* [Responsive CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpedrocristo.github.io%2Fportfolio_project_2%2Fassets%2Fcss%2Fresponsive.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### [Jshint](https://jshint.com/)
* All JavaScript files were validated through JSHint, presenting no errors.

![Jshint Result](./assets/images/readme/jshint_result.png)

The testing was done using the Google Chrome Browser. Chrome Developer Tools was used extensively, particularly to check responsiveness on different screen sizes. Testing was also done using Firefox on desktop, and again on Google Chrome and Opera on the Huawei P20.

* Responsive on all device sizes between 320px - 2600px wide

* Devices tested using the Google Developer Tools emulator

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

* Desktop Results:

  ![Lighthouse Destop Result](./assets/images/readme/lighthouse_desktop_result.jpg).

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

