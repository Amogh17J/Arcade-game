# Arcade-game
Term 2 -- EndTerm Project
# Arcade Zone 🕹️

**Live Demo:** [https://amogh17j.github.io/Arcade-game/](https://amogh17j.github.io/Arcade-game/)

## 📝 About The Project
Arcade Zone is a mini-game station I built to practice core JavaScript concepts. The idea was to create a "Single Page Application" feel without actually using frameworks like React. You can pick a game from the main dashboard, play it, and return to the menu without the page ever reloading.

Currently, it features two playable games:
1.  **Brain Quiz:** A trivia game that tracks your score.
2.  **Memory Match:** A card flipping game with a timer and move counter.

## 🎯 Why I Built This
I wanted to challenge myself to build complex logic using **Vanilla JavaScript only**. My main goals were:
* To stop relying on hardcoded HTML and instead generate game elements (like the cards) using JavaScript loops.
* To figure out how to manage "State" (like is the game running? Is the board locked?) without a library.
* To understand how to manipulate the DOM dynamically based on user clicks.

## 🛠️ Tech Stack
* **HTML5**
* **CSS3** (Grid, Flexbox, & 3D Transforms)
* **Vanilla JavaScript** (ES6+)

## 💡 DOM Concepts Applied
This project was a deep dive into the Document Object Model. Here are the specific things I used:

* **`document.createElement`**: Instead of writing 16 divs for the memory cards, I used JS to create them dynamically. This makes it easy to add more cards later.
* **`classList.add/remove`**: Used heavily for the "SPA" navigation (hiding/showing screens) and for the card flip animations.
* **`dataset` Attributes**: I used `data-name` in the HTML to store the identity of the cards, which allows the JS to check if two clicked cards are a match.
* **Event Listeners**: Handling clicks for the game logic. I had to be careful to remove listeners (or lock the board) during animations so users couldn't cheat/break the game.
* **`setInterval` & `setTimeout`**: Used for the game timer and to create a small delay before unmatched cards flip back over.

## 🚀 How to Run It
You can play it directly in your browser using the Live Demo link above.

To run it locally on your machine:
1.  Clone this repo:
    ```bash
    git clone [https://github.com/amogh17j/Arcade-game.git](https://github.com/amogh17j/Arcade-game.git)
    ```
2.  Open `index.html` in Chrome or your preferred browser.

## 🚧 Limitations / Future Improvements
* **No Save Data:** If you refresh the page, your score and move count resets (I plan to add `localStorage` support soon).
* **Hardcoded Questions:** The quiz questions are currently inside the JS file. Ideally, I'd like to fetch these from an API.
* **Responsive Design:** The game works on mobile, but the 3D flip effect can be a bit heavy on older phones.
* **More Games:** The "Snake" and "Tic Tac Toe" cards are currently just placeholders for future updates.
