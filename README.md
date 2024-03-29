<h1 align="center">Portfolio Project Two - JavaScript</h1>

## Live Site
[Whack A Mole](https://chris-townsend.github.io/project-two/index.html)

#

## Repository
[https://github.com/chris-townsend/project-two](https://github.com/chris-townsend/project-two)

![Am I responsive](./assets/images/readme-images/am-i-responsive.webp)
***

## Contents
- [Objective](#objective)
- [Brief & Target Audience](#brief)
- [User Experience(UX)](#user-experience-ux)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
- [Wireframes](#Wireframes)
- [Features](#Features)
    - [Features Left to Implement](#Future-Features)
    - [Languages Used](#languages-Used)
- [Technologies Used](#programs-frameworks--libraries-used)
- [Testing](#testing)
    - [W3C Validator Results](#homepage)
    - [Google Lighthouse Results](#lighthouse-homepage)
    - [JShint Results](#jshint-homepage)
    - [Testing Stories for UX](#testing-user-stories-from-user-experience-ux-section)
    - [Further Testing](#Further-Testing)
- [Bugs](#Known-Bugs)
- [Deployment](#Deployment)
    - [GitHub Pages](#GitHub-Pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Making a local Clone](#making-a-local-clone)
- [Credits](#Credits)
    - [Content](#Content)
    - [Media](#Media)
    - [Acknowledgements](#acknowledgements)

***

## Objective
#
In this project I intend to make a small game which is easily understood and intuitive to play. It will be based on the classic arcade game Whack-A-Mole where you are given a mallet to hit the moles; as they pop out, you are given a point for each mole hit. I'll be using HTML, CSS and JavaScript to make the game and it's designed to be a fun and entertaining game to help pass time. 

***

## Brief
# 
The game will be designed for a target audience of 8 years +. The game will be easily laid out with an instruction pop up modal on the homepage. The site will have clear images and sounds responsive to actions made by the user. The game music will have an option to play/pause and stop to prevent auto playing and give the user a call of action. The game will be timed and the user will know how much time is remaining from the countdown tab above the game board.  

***

## User Experience (UX)
#

-   ### User Requirements

    - As a first time user, I want to easily understand how to play the game.

    - As a user I want the ability to control any background sounds playing. 

    - As a user I want to be able to see my current score.

    - As a user I want to receive an alert at the end of gameplay with my final score. 

    - As a user I want simple gameplay which is easy to play again.

    - As a frequent user, I want to check to see if there are any new games available to play by clicking on the developers social media icons clearly laid out at the bottom of the contact and Instructions modal. 

    - As a user I want the ability to play the game on multiple devices.
    
     ***

-   ### Design
#
-   #### Colour Scheme
    
     - The colour scheme was picked using coolers. I used these colours because I felt they complimented each other well, It gives the game a fun and cheerful feel and the contrast works well for user reading accessibility. The game buttons on the homepage and game page have been styled using a background linear-gradient to add to the styled effect.

    ![Colour-scheme](./assets/images/readme-images/coolers-colour-scheme.webp)

    ***
    -   #### Typography
    #
    The fonts are imported into the CSS file from *[Google Fonts](https://fonts.google.com/)* 

    - The **Montserrat Alternates** font is the main font used throughout the game with **Sans Serif** as the fallback font in case for any reason the font isn't being imported into the site correctly. **Montserrat Alternates** was chosen because it has clear lettering which allows easy reading accessibility for the user. The buttons on the game page are styled with the **Montserrat Alternates** font and this nicely contrasts with the background colour. 
 
    ![Font Montserrat Alternates](./assets/images/readme-images/font-main-heading.webp)

    ![Font Montserrat Alternates game buttons](./assets/images/readme-images/home-buttons-contact.webp)


    ***
        
*   ### Wireframes
#
When I first designed my wireframes, I wanted to include a high score list. As time caught up on me I decided to change this to a contact form instead. 

-   Desktop Wireframe Home page  -
    ![Desktop Home Wireframe](./assets/images/readme-images/wireframe-homepage-desktop.webp)

-   Desktop Wireframe Game page  - 
    ![Desktop Game page ](./assets/images/readme-images/wireframe-gamepage-desktop.webp)


-   Mobile Wireframe Home page -

     ![Mobile Home Wireframe](./assets/images/readme-images/wireframe-homepage-mobile.webp)

-   Mobile Wireframe Game page -

     ![Mobile Game Wirefame](./assets/images/readme-images/wireframe-gamepage-mobile.webp)



***    

## Features
#

I have used [Responsinator](http://www.responsinator.com/) to check the responsiveness on different devices. The site is responsive on all devices displayed, including iOS devices. 

 - [Responsinator Results](http://www.responsinator.com/?url=https%3A%2F%2Fchris-townsend.github.io%2Fproject-two%2Findex.html)

#

1. <b> Whack A Mole Heading -</b> When you first arrive at the homepage, the main heading "Whack-A-Mole" flashes up and grow on the screen over 2 seconds. This has been accomplished by using *keyframes* with *image-grow*. I have added a suitable image of a man digging a hole under the main heading which also grows on the screen with the heading. The heading and image has been set to grow from a scale of 0.4 to 1.

![Title-grow](./assets/images/readme-images/heading-image-grow.webp)
![Title-full](./assets/images/readme-images/heading-image-full.webp)

2. <b> Homepage game animation -</b> Below my title, I have added an animation of the game. The moles will pop up randomly on the holes, This has been added as a bit of fun and to engage the user. I have created this from using the same JavaScript code as on my game page. At first this was showing quite a lot of errors in the console due to conflicting code trying to run on different pages - please see bugs/fixes.

![Homepage Animation](./assets/images/readme-images/home-animation.webp)

3. <b> Home buttons -</b> Under my animation I have added 3 buttons, Play which directs you to the game page and a Contact and Instructions button which open up as pop-up modals. I have added style to the buttons when hovered over to give feedback to the user that is it interactive. Icons have been added to the Contact and Instructions buttons to give more UX. The icons have been taken from [Font Awesome](https://fontawesome.com/).

![Home Buttons Hover Effect](./assets/images/readme-images/homepage-buttons.webp)

4. <b> Contact Modal -</b>  The contact modal has been styled similar to the instructions modal in terms of style and features. The X to close the modal changes colour on hover to give feedback to the user and also a user can click anywhere outside the modal to close it. 
![Contact pop up modal](./assets/images/readme-images/contact-us-modal.webp)

![Send email button](./assets/images/readme-images/send-email-button.webp)

*On hover of the send-email button, it turns green to give feedback to the user and shows interactivity.*
![Contact form requirements](./assets/images/readme-images/required-form-modal.webp)

The contact form will pop up with a *required* warning box if the form has not been filled out correctly. It requires a name and email address for the form to be accepted.

![Success alert Email sent](./assets/images/readme-images/success-email-sent.webp)

Upon successful completion of the form, the form has been set up to be received via [Email.JS](https://www.emailjs.com/). This was made possible by following the steps below:

 - I first created an account with [Email.JS](https://www.emailjs.com/).

 - Next I set up an email service to link to my Email.js account.

 - Add a new email template and create three Ids which will correspond to your JavaScript function, one for name, email_id and message.

 - Copy the Email.js SDK into the head of your HTML file and add your personal public key to the emailjs.init parameter - It must be placed here to work.

 - Create a JavaScript file and create the function which gets the params from the contact form, add the necessary onclick feature and Id's to the HTML code. 
 ![Email message before send](./assets/images/readme-images/email-js-before.webp)
 ![Confirmed Email](./assets/images/readme-images/email-js.webp)

5. <b> Instructions Modal -</b> When the Instructions button is clicked the Instructions pop-up modal will appear and the background is darkened slightly to cover the homepage. The font used within this modal has been kept as Montserrat Alternates to keep the style consistent through-out. The Instructions have been kept simple so that they are easy to understand. The X to close the Instructions box changes colour on hover to give feedback to the user that it is interactive. It is located in the top right of the box. Another added feature for closing the modal is that a user can click anywhere outside the box to get back onto the homepage. This was implemented for the age demographic of the game; they might not see the X button in the top right corner and it is slightly harder to click on smaller objects with the mallet cursor. 

![Instructions](./assets/images/readme-images/instruction-modal.webp)

6. <b> Social Icons -</b> The social media icons that have been added to the footer of my modals have been made **interactive** by using the *hover*: *transform* function. This just adds a little extra UX  for the user and makes them acknowledge when the icons being hovered over. 

![Social Icons hover Effect](./assets/images/readme-images/hover-social-icon.webp)

7. <b> Audio Buttons -</b> At the bottom of my homepage I have added a footer and within it are my audio buttons. The buttons give the user the option to play/pause and stop the audio. As the buttons are quite small, it's sometimes hard to click on them with the mallet cursor. I have added a pointer cursor so that the user knows when they are hovering over these buttons. The audio is a fun jazz track which was picked to be fairly short, just long enough to read the instructions before clicking onto the game page.  

![Footer music buttons](./assets/images/readme-images/footer-music-button.webp)
![Footer Button css Code ](./assets/images/readme-images/footer-cursor-pointer.webp)


8. <b> Mallet Cursor -</b> For extra customization and interactivity I have added a cartoon mallet as a cursor when using a mouse. The co-ordinates for the cursor have been set using JavaScript and CSS to allow an animation of a whacking hammer when the mouse is clicked.  

![Mallet Cursor](./assets/images/readme-images/mallet-cursor.webp)

9. <b> Game Timer -</b> The Game will start immediately after clicking the Play button on the homepage and the timer will begin counting down from 20 seconds. The timer is displayed as Time Left and is easy to see while playing the game. When the timer reaches 0 an alert will pop up to tell the user the game is over and gives them there personal score. 

![Time Left display](./assets/images/readme-images/time-left.webp)
![Game over alert](./assets/images/readme-images/game-over-alert.webp)

10. <b> Game Scoreboard -</b>  The Scoreboard can easily be seen during gameplay and its displayed as Your Score on the game page. The Scoreboard has been styled in a similar way to the home screen buttons. For every successful hit of a mole the score counter will +1. At the end of the game an alert will pop up with the number of successful moles hits.

![Score board](./assets/images/readme-images/score-board.webp)

11. <b> Home button on game page -</b> On the right-hand side of the game page, at the top, there is a home icon which when clicked will take you back to the homepage. I have added the CSS hover effect to add interactivity and to acknowledge the user when the button is being hovered over. The blue circle icon will hide into the green background and only the white house will be displayed.

![Button to homepage](./assets/images/readme-images/gamepage-home-icon.webp)
![Button to homepage after hover](./assets/images/readme-images/gamepage-home-icon-hover.webp)

12. <b> Mole Favicon -</b> A favicon was generated by uploading a mole image for the logo to [Favicon Generator](https://favicon.io/favicon-converter/). The icon is created and then saved in the game images folder and linked in the head section of the HTML. The favicon was created with the theme of Whack-A-Mole and chosen to be associated with this website as an extra visual support for the user. It should create brand awareness and recognizability for the user and help them find the page quicker and easier.

![Favicon Logo](./assets/images/readme-images/favicon-icon.webp)


 13. <b> Game Sounds -</b> When the mouse is clicked, the user will hear a whack sound. On successful hit of a mole the user will hear a different whack sound. This has been added for extra interactivity and added engagement with the user. I couldn't find a suitable image for when a mole has been hit, so I decided to use sound instead. 

***
## Future Features
#
With more time, I would have liked to of implemented the following ideas:

- Display a high scores list linked to local storage - At first I had my contact modal set up as a high score list but changed it to a contact form due to not having enough information about JSON.stringify and local storage. Below is an image of the original high scores button. 

![Highscore button](./assets/images/readme-images/font-home-button.webp)

- Add objects to increase the difficulty - Add an object such as a rabbit and if that object is hit you minus one point. 

- Add a different mole image to show when a mole has been hit, in case the sound effects don't work on a particular device.


### Languages Used
#

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Programs, Frameworks & Libraries Used
#

- [Balsamiq:](https://balsamiq.com/) Balsamiq was used to create the wireframes during the design process.

- [Pixlr:](https://pixlr.com/x/) Pixlr was used to resize and change the format of my images.

- [Coolors:](https://coolors.co/) Coolors was used to pick a colour scheme and check contrast. 

- [TinyPNG:](https://tinypng.com/) All images within the project have been processed through their free compression tool.

- [Google Fonts:](https://fonts.google.com/) Google fonts were used to import the 'Montserrat Alternates' font into the style.css file.

- [Font Awesome:](https://fontawesome.com/) Font Awesome was used throughout the website to add icons for aesthetic and UX purposes.

- [Google DevTools:](https://developer.chrome.com/docs/devtools/) Once the website was made to a basic deployment level, Google DevTools was used frequently to resize objects within the site, very helpful for making my website responsive.

- [Git:](https://git-scm.com/) Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitHub:](https://github.com/) GitHub is used to store the projects code after being pushed from Git.

- [W3C Markup Validator:](https://validator.w3.org/) This site was used to ensure that my HTML and CSS was error free. I had to push my code to ensure it was updated and then add the URL of the website to the address bar which then checked for errors or warnings.

- [Favicon Generator:](https://favicon.io/favicon-converter/) This was used to create my favicon icon. 

 - [Slack:](https://slack.com/intl/en-gb/) Slack is a online messaging service which allows people to collaborate with their workspaces. Slack was incredibly useful for advice from students and tutors.

 - [YouTube:](https://www.youtube.com/) YouTube is a free video sharing website, it has been very useful for watching videos on basic JavaScript functions and games.

 - [Audio Compressor:](https://www.media.io/audio-compressor.html) Media.io was used to compress my audio files without loosing quality. 

 - [Compressor.io:](https://compressor.io/) This was used to reduce the size and load times of my images. 

 - [JSHint Validator:](https://jshint.com/) Jshint was used to validate my JavaScript code. It showed any warnings and errors within my code. 

## Testing
#

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. The results are shown below:

-   [W3C HTML Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchris-townsend.github.io%2Fproject-two%2Findex.html) Results Homepage

-   [W3C HTML Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchris-townsend.github.io%2Fproject-two%2Fgame.html) Results Gamepage

### Homepage
![W3C HTML Validator Index page](./assets/images/readme-images/w3c-result-homepage.webp)
### Game Page
![W3C HTML Validator Game page](./assets/images/readme-images/w3c-result-gamepage.webp)

-   [W3C CSS Markup Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchris-townsend.github.io%2Fproject-two%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) Results

![W3C CSS Validator Result](./assets/images/readme-images/w3c-css-result.webp)


I have run the website through Google Chrome's Lighthouse audit application and the results are shown below:

- Mobile
### Lighthouse Homepage
![Lighthouse result for mobile homepage](./assets/images/readme-images/homepage-mobile-lighthouse.webp)
###  Lighthouse Game Page
![Lighthouse result for mobile game page](./assets/images/readme-images/gamepage-mobile-lighthouse.webp)


- Desktop
### Homepage
![Lighthouse result for desktop homepage](./assets/images/readme-images/homepage-desktop-lighthouse.webp)
### Game Page
![Lighthouse result for desktop game page](./assets/images/readme-images/gamepage-desktop-lighthouse.webp)

I have run the website through JSHint's audit application and the results are shown below:

### JSHint Homepage
The results for the homepage show no significant errors but emailjs is showing up as a undefined variable. This is part of the emailJS API which is linked in the head of the HTML document. SendMail is showing up as an unused variable but this is being used in the HTML document as an on click. The *stop* unused variable warning which is in fact a function is being used as an on click to stop the music playing on my homepage, All unused variable warnings have been tested to ensure there being used and working correctly. I was getting conflicting errors at first from code being used on different pages. To prevent the errors I made a game.js page to house all the game JavaScript code. The script.js file contains the cursor variable which allows the mallet cursor to work on all pages.
![JSHint Homepage results (home.js)](./assets/images/readme-images/homepage-jshint.webp)


### JSHint Gamepage 
![JSHint Game page results (game.js)](./assets/images/readme-images/gamepage-jshint.webp)

### JSHint script.js
![JSHint script.js results](./assets/images/readme-images/scriptjs-jshint.webp)


### Testing User Stories from User Experience (UX) Section
#
 1. As a first time user, I want to easily understand how to play the game.

**Simple and informative text on the homepage buttons which allows the user to click on the Instructions button and read up on how to play the game.**

![Home Buttons](./assets/images/readme-images/home-buttons-contact.webp)


 2. As a user I want the ability to control any background sounds playing. 

 **At the bottom of the homepage is an option to switch the audio on/off and Pause. When you click play the button switches to Pause and when clicked again, returns to Play**

 ![Music Buttons](./assets/images/readme-images/footer-music-button.webp)

 3. As a user I want to be able to see my current score.

 **The scoreboard can easily be seen during game play at the top of the screen, alongside the time remaining.**

 ![Scoreboard](./assets/images/readme-images/score-board.webp)

 4. As a user I want to receive an alert at the end of gameplay with my final score.

 **A pop up message alerts the user at the end of gameplay to let the user know that the game is over and gives them a final score.**

 ![Game over Popup](./assets/images/readme-images/game-over-alert-close-up.webp)

 5. As a user I want simple gameplay which is easy to play again.

 **The game will restart after clicking ok to the alert after game play. The user has the choice to play again or click the home button to return to the home screen.**

![Ok Game Alert](./assets/images/readme-images/ok-game-over-alert.webp)
 ![Home button](./assets/images/readme-images/gamepage-home-icon.webp)


 6. As a frequent user, I want to learn more about the developer and see if they have added any new content. 

 **At the bottom of each pop up modal for Contact and Instructions are two social media icons, LinkedIn and Github, there is an effect of hover of the buttons to register interactivity with the user.**

![Social Icons on 414px wide](./assets/images/readme-images/social-icons-414px.webp)
 

 7. As a user I want the ability to play the game on multiple devices.

 **The game has been tested on mutiple devices and tested using responsinator and google dev tools to add specific media queries for certain screen sizes.**

 ![Responsinator](./assets/images/readme-images/responsiveness.webp)

 
### Further Testing
#
Throughout building my JavaScript game, I had to do various console.log() tests to ensure my functions and variables were working and linking up correctly. I used the console option within google dev tools to validate the code was working correctly. Below are some screenshots of some tests taken while figuring out some errors within the console.

![Console error](./assets/images/readme-images/console-log-timer.webp)

The above screenshot shows me trying to debug an error I had in the console. It was showing that I had an uncaught type error at my countDown function. I used console.log() to print the timer to ensure this was working. The error was overcome by creating a new JavaScript file to prevent the timer being called on the homepage.

-   The Website was tested on Google Chrome, Internet Explorer and Microsoft Edge.

-   The website was viewed on a variety of devices such as Desktop, Laptop, Oneplus 5t, iPhone SE, iPhone 6-8, iPhone X & Samsung Galaxy S21.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and point out any bugs or problems.

### Known Bugs
#
Throughout the project I encountered a number of bugs, some of which were solved and some not which are stated below:

#### Console Bugs
I had an uncaught ReferenceError for my instructionBtn in the console. *resolved* This was resolved by making a separate JavaScript file for each of my HTML pages to prevent conflicting code. 
![Uncaught ReferenceError](./assets/images/readme-images/console-uncaught-reference-error.webp)

![Uncaught TypeError](./assets/images/readme-images/console-error.webp)

I had a similar error coming up on my homepage with an uncaught TypeError, my homepage was looking for the textContent at countDown which it wasn't able to find because it's on my game page. Various bits of code was added/ removed to try to fix this issue, at first I fixed the problem in the console but later found out it had stopped my count down timer on my game page from working. 

![Console Error fix](./assets/images/readme-images/console-error-fix.webp)
![Console temporary fix](./assets/images/readme-images/console-temporary-fix.webp)

The above piece of code was suggested by a Code Institute tutor, at first it fixed the console.log errors but it stopped my count down timer from working on my game page. I managed to fix this error but then it came up with another similar uncaught TypeError for my music buttons. I realised at this point it was from conflicting code on other pages, I *resolved* this issue by creating a game.js page.

There was a couple of warnings stating that the type attribute was unnecessary for JavaScript resources, these attributes were removed and errors removed as well. 
![W3C HTML validator warning](./assets/images/readme-images/html-validator-warning.webp)


***
## Deployment


### GitHub Pages
#
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
![GitHub Repository](./assets/images/readme-images/locate-github-repositorie.webp)

2. At the top of the Repository, locate the "Settings" Button on the menu.
![Settings Button](./assets/images/readme-images/locate-repositorie-settings.webp)    

3. Select "Pages" from the menu on the left-hand side.

    ![Pages Section](./assets/images/readme-images/menu-pages.webp)

4. Under "Source", click the drop down bar and select "Main Branch" and click save.
![Main Branch](./assets/images/readme-images/source-branch.webp)

5. The page will automatically refresh and will take a short time to publish the page. The page should turn green once the site has been deployed.
![Refresh](./assets/images/readme-images/ready-to-publish-site.webp)

6. Scroll back down through the page to locate the published site [link](https://github.com) in the "GitHub Pages" section.
![Published URL](./assets/images/readme-images/your-site-is-published.webp)

### Forking the GitHub Repository
#

By forking the GitHub Repository you can make a copy of the original repository You can view and/or make changes without affecting the original repository by using the following steps..

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/) you would like to fork.

![GitHub Repository](./assets/images/readme-images/locate-github-repositorie.webp)

2. At the top of the Repository, just above the "Settings" Button on the menu, locate the "Fork" Button and you should now have a copy of the original repository in your account.

![GitHub Fork](./assets/images/readme-images/github-fork.webp)

### Making a Local Clone
#

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
![GitHub Repository](./assets/images/readme-images/locate-github-repositorie.webp)

2. On the repository main page, click the drop down menu called Code.

    ![GitHub Code Drowndown menu](./assets/images/readme-images/github-clone.webp)

3. To clone the repository using HTTPS, copy the link.

    ![GitHub copy URL](./assets/images/readme-images/github-copy-url.webp)

4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.


7. Press Enter. Your local clone will be created.

***
## Credits

### Content
#
Helpful tutorials I used to help me with coding some of the design ideas were:

- [Ania Kubów Whac-a-mole in JavaScript](https://www.youtube.com/watch?v=rJU3tHLgb_c&t=1194s)

- [JavaScript Game Tutorial for Beginners](https://www.youtube.com/watch?v=RTb8icFiSfk&list=RDCMUCEqc149iR-ALYkGM6TG-7vQ&index=16)

- [How to create an animated cursor - help from webanimation](https://webanimation.blog/blog/how-to-create-a-custom-cursor-without-using-canvas)

- [Send Email using JavaScript](https://www.youtube.com/watch?v=x7Ewtay0Q78)

Various resources used to learn were:
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Codecademy](https://www.codecademy.com/)

### Media
#
The Images used on my site have been taken from: 

-  [Clip Art Max](https://www.clipartmax.com/)

-  [Pin Clip Art](https://www.pinclipart.com/)

- [Vecteezy](https://www.vecteezy.com/)

The Sounds used on my site have been taken from:

-  [Free Sounds](https://freesound.org/)


### Acknowledgements
#
-  [W3 Schools How to create a modal](https://www.w3schools.com/howto/howto_css_modals.asp)

-  [JavaScript 30 Day Coding Challenge](https://javascript30.com/)

-  I would like to thank my Mentor Darío Carrasquel for guidance throughout the project.

-  Fatima, Rebecca and Sean at tutor support at Code Institute for their support and helpful ideas. 