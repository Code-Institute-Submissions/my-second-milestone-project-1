***Preamble***<br>
This game is my second milestone project. It is a number guess game that allows the player to guess numbers<br>
between 0 and 99 to search for a mystery number that is only known to the console. The mystery number is picked<br>
at random by the computer and it can be any number between the range of 0 and 99. It is designed to showcase what I<br>
have learned so far in HTML, CSS and JavaScript.<br>
This game is designed for relaxation as it requires attention even though it is a guess game, if the player is not attentive,<br> 
there is every chance that he/she may not guess the correct number in several attempts. The game is set to be easy to win<b>
by allowing 10 guess chances. A lower number of guess chances would make the chance of winning limited because lower chances<br> 
means lower opportunity to win, thus discouraging young players.<br> 
This is how the game works:<br>
The game RANDOMLY picks a number between 0 and 99 that is known only to the Console.<br>
The player then has a chance of making 10 guesses to unveil the mystery number.<br>
Each time a guess is made, a message comes up to announce one of the following:<br>
a) That's lower! Guess: _ (i.e. number of guesses so far) Remaining: _ (usually 10 minus the number of guesses so far made).<br>
This allows the player to know he/she must guess higher figure to get the mystery number.<br>
b) That's higher! Guess: _ Remaining: _ (similar to above, it guides the player on what to guess next).<br>
c) No more guesses remaining! The number was _. This is an end of game message when the player is unable to guess the mystery<br>
   number. The game can be restarted by refreshing the page.<br> 
d) Yes, its _! It took you _ guesses. Again, this is an end of game message except that the player is able to guess the<br>
   mystery number correctly. The game can be played again by refreshing the page.<br>    


# Table of Contents
1. [User Experience](#user-experience)
2. [Wireframe](#wireframe)
3. [Existing Features](#existing-features) - [Home Page](#home-page)
4. [Features to implement](#features-to-implement) 
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgement](#acknowledgement)

# User Experience:

My main goal is to showcase a part of what I have learnt within a short time in JavaScript. I struggled a lot to decide on which project<b> 
to embark upon for this second milestone project as I considered a new website, adding more features to my first milestone project, geolocation<br> 
using International Space Station (ISS) and/or searching for facilities such as hotel and accommodation or restaurants or stores using Google and<br> 
Leaflet APIs and of course games. I finally settled for this random-number game targetted at young players to keep them busy. With this game, I was<br> 
able to use the HTML to set the page for the game, use the CSS to style and color the game and the JavaScript to prepare the logics in the game that<br> 
makes it to set a mystery number, accept guess numbers, compares them with the mystery number and returns with a verdict whether the guess number is<br> 
the same with the mystery number or not. The interesting aspect of the game is the selection of the mystery number which is never the same and totally<br> 
random in all senses.

# Wireframe using Balsamiq:
* Sketching
* Drawings
* Features
* Design with Balsamiq

<a href="/workspace/My-first-milestone-project/master/images/New Wireframe.png">Wireframe</a>

# Existing Features:
There is only 1 key page on this website: * [Home Page](#home-page)

## Home page

The Home page, which is my index.html page is a simple page that shows the following:<br>

a)  	the name/heading of the game<br>
b)	a welcome message<br> 
c)	the modal button that displays the instructions for playing the game<br>
d)	the play game area where an input box requests for a number to be guessed and<br> 
	either the enter key of the key board or the enter button trigers the result and of course<br>
e)	the modal message which displays the instructions for playing the game. This message box has two<br> 
	closing buttons. One at the top of the message and another one at the buttom of the message,<br> 
	deliberately designed like this to make life easy for the player.

# Technologies Used

The following technologies were used to create the game:

* Gitpod full template - workspace
* Bootstrap 4.4.1 - used to simplify the structure and to make it responsive.
* jquery 3.4.1 - used to reference Javascript modal
* Google Fonts - used to style the website fonts.
* W3 School
* Balsamiq - the tool used to create the wireframe.
* UX D editor

# Testing

## Header

The header has a logo on the left-hand side and the menu bar at the right-hand side. The Menu contains the name and<br>  
a Font Awesome icon for each of the features. When a user hovers their mouse over the menu, it hovers up to show the<br> 
exact menu item that is to be opened for emphasis and the background color of ash. This has been manually tested and it<br> 
works all across the web pages. Any of the pages can be seen and navigated from every page. It has been tested and found<br> 
to be responsive. The header acts responsively across all resolutions too.
  
## Home Page 

The home page otherwise known as the landing page contains three sections viz: about us/picture of the front view of Fitness Always<br> 
gym; the opening hours and contact details. The about us is a catching statement about the gymnasium to attract new customers.<br>
It shared the row 50:50 with the front view photo of the gym. Section two is the opening hours of the gymnasium. It shows when the gym<br>
is opened in the morning and closed in the night from Monday to Friday. This was styled to be positioned in the center. Finally, the contact<br> 
session shows how the gym could be contacted either by post, telephone and/or email. The section is colored with gold after the menu<br> 
bar contact-us color and linked with the contact page i.e. when the contact page is clicked from the menu bar, it links a user to this contact<br> 
page and it does not matter which page the user is, once the contact page is clicked, it immediately directs the user to this section. This was<br> 
tested across all the devices and it works fine.

## Facilities Page

This page explains to potential customers what services are available in the gym. At the moment, only six services are available but as time<br> 
goes on, the gym will expand and add other services. The services are styled with Font Awesome Icons by the side of the title of each service.<br>
The test carried out on this page was to navigate to it from another page and it works fine. Also, it works nicely across all the devices: mobile<br> 
phone, iPad and desktop. 

## Gallery Page

When a user navigates to this page, it shows the different pictures of machines and tools available for use in the gymnasium. The pictures are<br> 
nicely padded to differentiate them from one another. It has been tested to show these pictures across all the devices and the page can be navigated<br> 
from other pages.
 
## Contact Us Page

This has been explained vividly in section 3 of the home page. When this page is clicked, it takes the user straight to that section of the home page<br>
and this has been tested and found to be true from all other pages.

## Footer

The footer contains just the social media i.e. Facebook; Linkedin; Instagram; Twitter and YouTube. It is designed to share a<br> 
light green color with the facilities menu and centered. It is also designed to be sticky. The social media are represented by<br> 
Font Awesome Icons which are also styled with hover effect when the mouse goes over the icons. This has been tested across all<br> 
the pages and it holds. 

## SPELLING & GRAMMAR

All Fitness Always Gym text content and this Readme file has been been tested for grammar and spelling mistakes through Grammarly.

## The code has been validated using:

#### W3C Mark-up Validation Service and
#### W3C CSS Validation Service

This site has met the objective of creating an online presence with minimalistic design and content, but providing enough<br> 
information and platform to enable fast contact.<br>
The website has been tested across multiple browsers (Chrome, Safari, Firefox) and different screen sizes<br> 
(Galaxy C5, various iPhones, Huawei, iPad, iPad Pro and laptops) to make sure it is responsive. Bootstrap has been used<br> 
to achieve this.<br>
All fonts, images and other attributes have been changed accordingly to fit different screen sizes. Media queries have<br>
been used to make them work.


# Deployment 

The site was developed using Gitpod full template - workspace to commit and push to GitHub.<br>
GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight<br>
 from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

## The following steps can be taken to access my page from the GitHub repository. 

On Github navigate to my-first-milestone-project<br>
From the menu at the top click on settings<br>
Scroll down to the GitHub pages section<br>
Under Source section click on the dropdown menu and select Master Branch as your GitHub Pages publishing source.<br>
Select save.

## To Clone the Repository
Navigate to the Github remote repository: oakerele-web.github.io<br>
Click 'Clone or Download'.<br>
Copy the clone HTTPS or SSH by clicking on the copy button.<br>
Open Git Bash.<br>
Change the current working directory to the location where you want the cloned directory to be made.<br>
Type git clone, and then paste the URL you copied.<br>
Press Enter. Your local clone will be created.<br>

***The URL for this project is as follows:***

https://oakerele-web.github.io/My-first-milestone-project/


# Credits 

## Content 

All the text contents in  this project are original because they are written by me.  

## Media 

All icons are from the Bootstrap website including the styling while the font styling is from Font Awesome website.<br> 
The Logo was formed and designed by me through Placeit.org using the fake name formed for the gym.<br>
Pictures used in the gallery page and the home page were copied from existing websites of gyms on the internet<br>

## Acknowledgments 

The Codeinstitute Resume project by Matt Rudge is what inspired this project and I chose this project from a list of<br>
other proposed projects by the Institute.<br>
Special thanks to Maranatha Ilesanmi - my course mentor - first for his objective view of the project at the selection<br> 
stage then assisting me with applications for my Wireframe/Mockups and finally this Milestone 1 project which he has helped<br> 
me a lot to review, re-structure and suggested solutions to my pertinent questions. I also thank Claire of the Student Care<br> 
department for her support and understanding when I needed adjustment to my calendar. I am also grateful to all our colleagues<br>
in Slack, thank you all.   

## Disclaimer 

*The content of this website is for educational purposes only.*