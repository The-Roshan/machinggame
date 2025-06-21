# 🧠 Memory Matching Game

## Overview
The Memory Matching Game is an engaging, web-based game created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it challenges players to match pairs of cards based on selected image sets and difficulty levels. The game features a clean interface with controls for starting/stopping the game, a timer, move counter, and a leaderboard to track top scores. It is optimized for both desktop and mobile devices, offering a fun and interactive experience to enhance memory skills.

## Features
- **Gameplay** 🎴:
  - Players flip cards to find matching pairs from selected image sets (Animals, Fruits, Shapes).
  - Three difficulty levels (Easy, Medium, Hard) adjust grid size or time constraints.
- **Controls** 🎮:
  - Dropdown menus for selecting difficulty (`difficulty`) and image set (`image-set`).
  - Buttons to start (`start-game`) and stop (`stop-game`) the game.
- **Info Panel** 📊:
  - Displays real-time game stats: time elapsed (`timer`) and number of moves (`moves`).
- **Leaderboard** 🏆:
  - Tracks and displays high scores (`leaderboard`) for competitive play.
- **Responsive Design** 📱:
  - Optimized for various screen sizes using CSS media queries.
- **Visual Design** 🎨:
  - Clean and intuitive layout with styled cards, controls, and info panel (`style.css`).

## Tech Stack
- **HTML5**: Structure of the game, including controls, game board, and leaderboard.
- **CSS3**: Styling for layout, card animations, and responsiveness (`style.css`).
- **JavaScript**: Game logic, including card shuffling, matching, timer, move counting, and leaderboard management (`script.js`).

## Project Structure
```
memory-matching-game/
├── index.html         # Main HTML file
├── style.css         # CSS styles for layout and visuals
├── script.js         # JavaScript for game logic
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with JavaScript support.
- A code editor (e.g., VS Code) for customization.
- Image assets for card sets (Animals, Fruits, Shapes) referenced in `script.js` (ensure they are hosted or included locally).

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/memory-matching-game.git
cd memory-matching-game
```

### 2. Verify Image Assets
- Ensure image assets for the Animals, Fruits, and Shapes sets are available (referenced in `script.js`).
- Place images in a designated folder (e.g., `images/`) or update `script.js` to point to hosted URLs.

### 3. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 4. Customize (Optional)
- Edit `style.css` to modify card designs, animations, or control styles.
- Update `script.js` to enhance gameplay (e.g., add sound effects, new image sets, or time-based scoring).
- Modify `index.html` to add features like a pause button or additional difficulty levels.

## Usage
1. **Select Options** 🎚️: Choose a difficulty (Easy, Medium, Hard) and image set (Animals, Fruits, Shapes) from the dropdowns.
2. **Start Game** 🚀: Click the "Start Game" button to initialize the game board with shuffled cards.
3. **Play** 🎴: Click cards to flip and find matching pairs, tracking moves and time.
4. **Stop Game** 🛑: Click the "Stop Game" button to reset the game.
5. **View Leaderboard** 🏆: Check high scores after completing the game.
6. **Responsive** 📱: Access the game on mobile or desktop for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `style.css`, `script.js`, and any image assets to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/memory-matching-game`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**: The `script.js` file must implement:
  - Card shuffling and grid generation based on difficulty.
  - Matching logic to detect pairs and update moves.
  - Timer for tracking game duration.
  - Leaderboard storage (e.g., using `localStorage`) and display.
  - Game state management (start, stop, reset).
- **Styling**: The `style.css` file should define styles for the game board, cards (e.g., flip animations), controls, and responsive layout.
- **Image Assets**: Ensure image sets are properly referenced in `script.js`. Optimize images for web use to reduce load time.
- **Enhancements**: Consider adding:
  - Sound effects for card flips or matches.
  - Visual feedback for correct/incorrect matches.
  - Custom image set uploads or additional difficulty levels.
  - Animations for leaderboard updates.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Memory matching game by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a fun and challenging memory game.
- Inspired by classic card-matching games with modern web interactivity.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
