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
