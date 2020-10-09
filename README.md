# Random Number Guess Game!

<img src="asset/images/responsive.png" style="margin: 0; width: 80%;"><br>

***Preamble***<br>
This game is my second milestone project. It is a number guess game that allows the player to guess numbers<br>
between 0 and 99 to search for a mystery number that is only known to the console. The mystery number is picked<br>
at random by the computer and it can be any number between the range of 0 and 99. It is designed to showcase what I<br>
have learned so far in HTML, CSS and JavaScript.<br>
This game is designed for relaxation as it requires attention even though it is a guessing game, if the player is not attentive,<br> 
there is every chance that he/she may not guess the correct number in several attempts. The game is set to be easy to win<br>
by allowing 10 guess chances. A lower number of guess chances would make the chance of winning limited because lower chances<br> 
means lower opportunity to win, thus discouraging young players.<br> 
This is how the game works:<br>
The game RANDOMLY picks a number between 0 and 99 that is known only to the Console.<br>
The player then has a chance of making 10 guesses to unveil the mystery number.<br>
Each time a guess is made, a message comes up to announce one of the following:<br>
- That's lower! Guess: _ (i.e. number of guesses so far) Remaining: _ (usually 10 minus the number of guesses so far made).<br>
   This allows the player to know he/she must guess a higher figure to get the mystery number.<br>
- That's higher! Guess: _ Remaining: _ (similar to above, it guides the player on what to guess next).<br>
- No more guesses remaining! The number was _. This is an end-of-game message when the player is unable to guess the mystery<br>
   number. The game can be restarted by refreshing the page.<br> 
- Yes, its _! It took you _ guess(es). Again, this is an end-of-game message except that the player has guessed the<br>
   mystery number correctly.<br>    
- The game can be played again by clicking New Game button.<br>

# Table of Contents
1. [User Experience](#user-experience)
2. [Wireframe](#wireframe)
3. [Existing Features](#existing-features) - [Home Page](#home-page)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgment](#acknowledgment)
8. [Disclaimer](#disclaimer)

# User Experience

My main goal is to showcase a part of what I have learned within a short time in JavaScript. I struggled a lot to<br> 
decide on which project to embark upon for this second milestone project as I considered a new website, adding more<br> 
features to my first milestone project, geolocation using International Space Station (ISS) and/or searching for<br> 
facilities such as hotels and accommodation or restaurants or stores using Google and Leaflet APIs and of course games.<br> 
I finally settled for this random-number game targetted at young players to keep them busy. With this game, I was<br> 
able to use the HTML to set the page for the game, use the CSS to style and color the game, and the JavaScript to prepare<br> 
the logic in the game that makes it to set a mystery number, accept guess numbers, compares them with the mystery number<br> 
and returns with a verdict whether the guess number is the same as the mystery number or not. The interesting aspect of<br> 
the game is the selection of the mystery number which is random in all senses.

# Wireframe using Balsamiq
* Sketching
* Drawings
* Features
* Designs

<a href="/workspace/my-second-milestone-project/asset/images/sketch2.png">Sketch</a><br>
<a href="/workspace/my-second-milestone-project/asset/images/wireframe2.png">Wireframe</a>

# Existing Features
There is only 1 key page on this website: * [Home Page](#home-page)

## Home page

The Home page, which is my index.html page is a simple page that contains the following:<br>

1.  the name/heading of the game<br>
2.  a welcome message<br> 
3.  the modal button that displays the instructions for playing the game<br>
4.  the play game area where an input box requests for a number to be guessed and<br> 
    either the enter key of the keyboard or the enter button triggers the result and of course<br>
5.  the modal message which displays the instructions for playing the game. This message box has two<br> 
    closing buttons. One at the top of the message and another one at the bottom of the message,<br> 
    deliberately designed like this to make life easy for the player.

# Technologies Used

The following technologies were used to create the game:

* Gitpod full template - workspace
* Bootstrap 4.4.1 - used to simplify the structure and to make it responsive
* jquery 3.4.1 - used to reference Javascript modal
* Google Fonts - used to style the website fonts
* W3 School
* Balsamiq - the tool used to create the wireframe
* pixabay.com - used to set the background photo
* Am I Responsive? - to produce the README showcase image

# Testing

## Home Page 

The home page otherwise known as the landing page is broken up into four parts. The main _heading_, the _welcome_<br> 
message, the game _instructions_ modal and the _play-game_ aspect. The welcome message and the play-game parts<br> 
are wrapped in divs so they can be placed in jumbotron for calling extra attention to the information therein.<br> 
The jumbotron uses utility classes for typography and spacing to space content out within the larger container.<br> 
The background of the page is styled with light grey color but buttons styled to render different colors upon<br> 
display, hover and when active.<br> 

### Responsiveness testing
This site has met the objective of creating an online presence with minimalistic design and content, but providing enough<br> 
information and platform to enable fast contact.<br>
This site was tested across multiple browsers (Chrome, Safari, Internet Explorer) and on multiple mobile devices<br> 
(iPad Mini, iPad, Sony Xperia) to ensure compatibility and responsiveness and it works nicely across all the devices.<br> 
Chrome developer tools were used to additionally inspect responsiveness for the following devices:
- iPad Pro / iPad / iPad Mini (portrait & landscape);
- iPhone 5/SE (portrait & landscape);
- iPhone 6/7/8 (portrait & landscape);
- iPhone 6/7/8 Plus (portrait & landscape);
- iPhone X (portrait & landscape);
- Android (Pixel 2) (portrait & landscape);
- Moto G4;
- Galaxy S5;
- Surface Duo;
- Galaxy Fold.
All fonts, images and other attributes have been changed accordingly to fit different screen sizes. Media queries have<br>
been used to make them work.


## SPELLING & GRAMMAR

Random Number Guess Game text content and this Readme file has been tested for grammar and spelling mistakes<br> 
through Grammarly.

## The codes has been validated using:

#### W3C Mark-up Validation Service,
#### W3C CSS Validation Service and

## Manual testing

#### Summary:

Hours, days and weeks were spent testing Random Number Game throughout its development, which is a testament to the quality<br>
of the game. The following scenarios were successfully tested:

#### 1. Game behaviour

The game allows only number input as player guess, this is compared with the computer random number which I tagged as<br>
_Mystery Number_ and a report called guessResult is generated in three folds. It is either:<br>
***a   The guess is higher or*** <br>
***b   The guess is lower or*** <br>
***c   The guess is right.*** <br>
These were manually checked to ensure that the codes are working properly.

#### 2. Modal behaviour

This was manually tested to ensure that it renders appropriately. The test reveals that the modal will open but not able<br> 
to close when it is within a container. This was rectified after it was taken out of the container into its separate div<br>
and class of panel.

#### 3.  Input behaviour

The input type is set to number as a requirement. This too was manually tested to ensure that it does not accept letters<br>
and symbols. It renders correctly.

### Peer-code-review
The project was published on Code Institute Slack code-peer-review forum where other students and mentors tested the site,<br> 
reviewed the code and provided a useful feedback that helped to improve the game.

# Deployment 

## Deployment
The site was developed using Gitpod full template-workspace to commit and push to Github.<br> 
GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight<br>
from a repository on GitHub, optionally runs the files through a build process, and publishes a website.<br>
To keep records of different versions of all project files git version control system was used. In order<br> 
to track the changes in the local repository the following steps were taken:
- command `git add 'filename'` - to update what will be committed;
- command `git commit` - to commit the changes.<br>
Using `git push` command allows changes from the local repository to be pushed to GitHub.<br>
This second milestone project is hosted using GitHub pages, deployed directly from the `master` branch.<br>

## The following steps can be taken to access my page from the GitHub repository. 
To deploy this project from GitHub I followed these steps:
1. On GitHub website I logged onto my account and navigated to [my repository] and then to this project <br>
(https://github.com/oakerele-web/my-second-milestone-project);
2. Under my repository name, from the menu at the top, I clicked on **Settings** tab;
3. I scrolled down to the **GitHub Pages** section;
4. Under the source section, click on the dropdown menu and select **Master Branch** as your GitHub Pages publishing<br>
   source;<br>
5. I clicked **Save**.<br>

The deployed site will update automatically upon new commits to the `master` branch. It is important to<br> 
remember that for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.<br>

## To Clone the Repository
In order to clone my GitHub repository to your local one you should follow these steps:
1. On GitHub navigate to [my repository](https://github.com/oakerele-web/my-second-milestone-project);
2. Under the repository name, click **Clone or download**;
3. Copy the clone HTTPS or SSH by clicking on the copy button;
4. Open Git Bash;
5. Change the current working directory to the location where you want the cloned directory to be made;
6. Type `git clone` and then paste the URL you copied earlier on;
7. Lastly press **Enter** and your local clone will be created.<br>

***The URL for this project is as follows:***

https://oakerele-web.github.io/my-second-milestone-project/

# Credits 

## Content 

All the text contents in this project are original because they are written by me.  

## Media 

Resources are used from the Bootstrap website including the styling while the font styling is from Font Awesome website.<br> 
The home page is the only page of this website and the background picture for this page was taken from pixabay.com 

## Acknowledgment 

* I chose this project from a list of other proposed projects by the Institute.<br>
* Special thanks to Maranatha Ilesanmi - my mentor - for his objective view of this Milestone 2 project which he has helped<br> 
  me a lot to review, re-structure and suggested solutions to my pertinent questions.<br> 
* I thank the tutors of the institute for their assistance whenever I run out of clue.  
* I am grateful to all colleagues in Slack community particularly, the peer review section for their objective criticism.<br> 
  thank you all. 
* I also want to acknowledge Rex van der Spuy the author of the textbook - Foundation Game Design (with HTML5 & JavaScript),<br> 
  the textbook that inspired my choice of this project.
* Finally, I thank all the members of staff of the institute especially, the Student Care Unit for their support.   

## Disclaimer 

*The content of this website is for educational purposes only.*
