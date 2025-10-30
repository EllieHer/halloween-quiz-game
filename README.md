# 🎃 Halloween Movies & Books Quiz 🎃

A fun, interactive quiz game all about spooky movies and scary literature! Test your knowledge of horror classics, creepy books, and Halloween traditions while enjoying atmospheric music and animated characters.

![Halloween Quiz](https://img.shields.io/badge/Halloween-Quiz-orange?style=for-the-badge&logo=halloween)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Latest-red?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Animated-blue?style=for-the-badge&logo=css3)

## 🎮 Play Now!

**[Click here to play the game!](https://YOUR_USERNAME.github.io/halloween-quiz-game/)**

> Replace `YOUR_USERNAME` with your actual GitHub username after uploading

## ✨ Features

- 🎬 **15 Questions** - Test your knowledge about horror movies and creepy books
- 🎵 **Spooky Music** - Atmospheric Halloween background music with volume control
- 👻 **Animated Characters** - Cute ghost with chains, bouncing pumpkin, and candy corn
- 🎨 **Beautiful Design** - Purple and orange Halloween theme with floating elements
- 📊 **Score Tracking** - Real-time score updates and performance statistics
- 🏆 **Achievement Ratings** - Earn titles based on your performance:
  - 🎬 Horror Movie Master (100%)
  - 👻 Spooky Scholar (80-99%)
  - 📖 Bookworm & Movie Buff (60-79%)
  - 🎥 Halloween Enthusiast (40-59%)
  - 🎃 Movie Newbie (0-39%)
- 🎯 **Instant Feedback** - Get explanations for each answer
- 🎊 **Celebration Effects** - Confetti animation when you complete the quiz
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🎃 Screenshot

![Halloween Quiz Preview](screenshot.png)
> Add a screenshot of your game here after uploading

## 🎬 Movies & Books Covered

### Classic Horror Movies:
- 👻 Casper
- 🎃 The Nightmare Before Christmas
- 🧙‍♀️ Hocus Pocus
- ✋ The Addams Family
- 🪆 Child's Play (Chucky)
- 👁️ The Sixth Sense
- 😱 Scream series
- ⚡ Frankenstein

### Famous Spooky Books:
- 📚 Stephen King's "The Shining"
- 🤡 Stephen King's "It"
- 🧙 Harry Potter series (Halloween Feast)
- 🧛 Bram Stoker's "Dracula"
- 😱 R.L. Stine's "Goosebumps"
- 🔘 Neil Gaiman's "Coraline"
- 🎃 Washington Irving's "The Legend of Sleepy Hollow"

## 🎵 Music Controls

- **🎵 Toggle Button** - Play/pause the spooky Halloween music
- **🔊 Volume Slider** - Adjust music volume (0-100%)
- Music starts automatically when you begin the quiz
- Controls are located in the bottom-right corner

## 🎮 How to Play

1. Click the **"Start Quiz"** button
2. Music will start playing automatically (you can pause it anytime)
3. Read each question carefully
4. Click on your answer choice
5. Get instant feedback with explanations
6. Click **"Next Question"** to continue
7. Complete all 15 questions
8. See your final score, rating, and trophy!
9. Click **"Play Again"** to retry and improve your score

## ⌨️ Keyboard Shortcuts

- **1-4 Keys** - Select answer options during questions
- **Enter** - Move to next question after answering
- **Escape** - Restart quiz from results screen

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic and interactivity
- **Web Audio API** - Procedural music generation (no external audio files!)
- **No dependencies** - Pure vanilla JavaScript, no frameworks needed

## 📁 Project Structure

```
halloween-quiz-game/
│
├── index.html                   # Main game file (homepage)
├── halloween-quiz.css           # All styles and animations
├── halloween-quiz.js            # Game logic and music system
├── HALLOWEEN-QUIZ-README.md     # Detailed documentation
└── README.md                    # This file
```

## 🚀 Local Development

### Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/halloween-quiz-game.git
cd halloween-quiz-game
```

2. **Open in browser**
```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

3. **Or use a local server** (recommended)
```bash
# Python 3
python -m http.server 8000

# Node.js with http-server
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization

Want to customize the quiz? Here's what you can easily change:

### Add More Questions
Edit `halloween-quiz.js` and add to the `questions` array:
```javascript
{
    question: "Your question here?",
    icon: "🎬📚",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0,  // Index of correct answer (0-3)
    explanation: "Your explanation here!"
}
```

### Change Colors
Edit `halloween-quiz.css` to change the theme:
- Background gradient: `background: linear-gradient(135deg, #1a0033 0%, #2d1b4e 50%, #1a0033 100%)`
- Primary color: Orange `#ff8c00`
- Secondary color: Purple `#8a2be2`

### Adjust Music Volume
In `halloween-quiz.js`, change the default volume:
```javascript
this.volume = 0.5;  // 50% volume (0.0 to 1.0)
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Ideas for Contributions:
- Add more questions
- Create different difficulty levels
- Add more music tracks
- Translate to other languages
- Add more Halloween characters/animations
- Create a leaderboard system

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🎃 Perfect For

- 🎉 Halloween parties
- 🏫 Classroom activities
- 👨‍👩‍👧‍👦 Family game night
- 🎬 Movie marathon breaks
- 📚 Book club gatherings
- 🎭 Horror fans and literature lovers
- 🎓 Educational entertainment

## 🐛 Known Issues

Currently no known issues! If you find a bug, please [open an issue](https://github.com/YOUR_USERNAME/halloween-quiz-game/issues).

## 📧 Contact

If you have questions or suggestions, feel free to:
- Open an issue on GitHub
- Contact me at: [your-email@example.com]

## 🌟 Show Your Support

If you enjoyed this quiz game, please consider:
- ⭐ Starring this repository
- 🍴 Forking it to create your own version
- 📢 Sharing it with friends who love Halloween!

## 🙏 Acknowledgments

- Inspired by classic Halloween movies and spooky literature
- Music created using Web Audio API
- Character designs inspired by cute Halloween aesthetics
- Built with ❤️ for horror movie fans and scary book lovers everywhere!

---

<div align="center">

**Made with 🎃 by [Your Name]**

[⬆ Back to Top](#-halloween-movies--books-quiz-)

</div>
