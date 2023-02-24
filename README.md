# Tic-Tac-Toe Project
### GA Project #1

## Description
#### Tic-Tac-Toe is a simple games created with ***HTML***, ***CSS***, and ***Javascript*** technologies. It is a two-player game, played on a 3x3 grid board, where each player places three consecutive symbols, either horizontally, vertically, or diagonally, in order to win the game. 

#### Try it here: [Game](https://feiyifei07.github.io/tic-tac-toe2/)

## Technologies Used:
* HTML
* CSS
* Javascript

## Planning process:

#### To see the full plan: https://www.figma.com/file/CC9zDT5Eo2PWhHRHGWadb3/GA-Project-%231?node-id=0%3A1&t=FtNjLXve11N7TSWT-1

![wireframe](https://user-images.githubusercontent.com/118425964/221032768-443ffbc9-fb98-44fd-bdc0-1a6d8832daaa.png)

## Implementation strategies:
* Created nine boxes, classified with class names of "box".
* When the playey clicks on a box, an event listener is triggered, and the box's content is set to the symbols of either "X" or "O", depending on the current player.
* Initialised multiple variables for both players, a current player, the restart button, a boolean value to track whether the game is over or not, an an info message that displays the current game state. 
* Functions: To switch between players, to check for a draw ad for a winner. A loser is already implied automatically after a winner has been determined, so a function is not needed. An a fuction to handle the players' clicks only inside the game area.
* Added event listeners for the game boxes and the restart button. 

## Personal challenges:
* Adding a line through styling once the winner has a winning combo; it somehow put a line-through horizontally to every symbol. I still haven't figured it out until now, but I plan to change it in the future.
* Connecting the winning combo answers to the checkWinner function. Was stuck for hours trying to figure it out. 
* Changing "X" and "O" into different colors. I still haven't figured it out until now. 

## Areas for improvement:
* Tackle on the [bonus extensions](https://gist.github.com/epoch/4c95d30f97457b51e68c8a48727c6922#bonus-extensions)
* Better time management
* Better variable-naming to create a story
* Cover all possible website screen dimensions

## To be added in the future:
* Scoring system between 2 players
* Button that resets the whole game but stores the scores
* Options to play with AI or another player
* More animations (when clicking buttons, title screen before displaying game board)
* Settings feature: to change background color, customise avatar in the middle of the game, change names, etc)
* Work on website responsiveness

### Resources:
#### Sound effects:
* https://www.soundjay.com/index.html
* https://mixkit.co/free-sound-effects/win/
#### Fonts:
* https://fonts.google.com/
