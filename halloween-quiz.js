// Halloween Movies & Books Quiz Game
class HalloweenQuiz {
    constructor() {
        // Audio setup
        this.audioContext = null;
        this.musicPlaying = false;
        this.volume = 0.5;
        this.musicNodes = [];
        this.initAudio();
        this.questions = [
            {
                question: "In which classic Halloween movie does a friendly ghost help a young girl?",
                icon: "👻🎬",
                answers: [
                    "Ghostbusters",
                    "Casper",
                    "The Sixth Sense",
                    "Beetlejuice"
                ],
                correct: 1,
                explanation: "👻 Casper the Friendly Ghost is a beloved Halloween character who befriends a young girl named Kat!"
            },
            {
                question: "What is the name of the hotel in Stephen King's famous horror novel?",
                icon: "🏨📚",
                answers: [
                    "The Stanley Hotel",
                    "The Bates Motel",
                    "The Overlook Hotel",
                    "The Grand Hotel"
                ],
                correct: 2,
                explanation: "📖 The Overlook Hotel is the haunted setting of Stephen King's 'The Shining'!"
            },
            {
                question: "Which Tim Burton movie features Jack Skellington, the Pumpkin King?",
                icon: "🎃🎬",
                answers: [
                    "Corpse Bride",
                    "Beetlejuice",
                    "The Nightmare Before Christmas",
                    "Frankenweenie"
                ],
                correct: 2,
                explanation: "🎃 'The Nightmare Before Christmas' tells the story of Jack Skellington discovering Christmas Town!"
            },
            {
                question: "In the Harry Potter series, what is the name of the Halloween feast at Hogwarts?",
                icon: "🧙📚",
                answers: [
                    "The Great Feast",
                    "The Halloween Banquet",
                    "The Autumn Festival",
                    "The Halloween Feast"
                ],
                correct: 3,
                explanation: "🧙 The Halloween Feast is an important tradition at Hogwarts, though it was interrupted by a troll in the first book!"
            },
            {
                question: "Which classic monster movie features a scientist who creates life from dead body parts?",
                icon: "⚡🎬",
                answers: [
                    "Dracula",
                    "The Mummy",
                    "Frankenstein",
                    "The Wolf Man"
                ],
                correct: 2,
                explanation: "⚡ 'Frankenstein' by Mary Shelley tells the story of Dr. Frankenstein and his creation!"
            },
            {
                question: "What is the name of the clown in Stephen King's 'It'?",
                icon: "🤡📚",
                answers: [
                    "Pennywise",
                    "Bozo",
                    "Twisty",
                    "Krusty"
                ],
                correct: 0,
                explanation: "🤡 Pennywise the Dancing Clown is the terrifying antagonist in Stephen King's 'It'!"
            },
            {
                question: "In which movie do three witches come back to life on Halloween night in Salem?",
                icon: "🧙‍♀️🎬",
                answers: [
                    "The Craft",
                    "Hocus Pocus",
                    "Practical Magic",
                    "The Witches"
                ],
                correct: 1,
                explanation: "🧙‍♀️ 'Hocus Pocus' features the Sanderson Sisters who return on Halloween night!"
            },
            {
                question: "Who wrote the classic Gothic novel 'Dracula'?",
                icon: "🧛📚",
                answers: [
                    "Mary Shelley",
                    "Edgar Allan Poe",
                    "Bram Stoker",
                    "H.P. Lovecraft"
                ],
                correct: 2,
                explanation: "🧛 Bram Stoker wrote 'Dracula' in 1897, creating one of the most famous vampire stories!"
            },
            {
                question: "In 'The Addams Family', what is the name of the disembodied hand?",
                icon: "✋🎬",
                answers: [
                    "Thing",
                    "Hand",
                    "Fingers",
                    "Handy"
                ],
                correct: 0,
                explanation: "✋ Thing is the helpful disembodied hand that lives with The Addams Family!"
            },
            {
                question: "Which R.L. Stine book series became a popular Halloween read for kids?",
                icon: "📚😱",
                answers: [
                    "Scary Stories to Tell in the Dark",
                    "Fear Street",
                    "Goosebumps",
                    "Shivers"
                ],
                correct: 2,
                explanation: "📚 Goosebumps by R.L. Stine became one of the best-selling children's horror book series!"
            },
            {
                question: "What classic Halloween movie features a possessed doll named Chucky?",
                icon: "🪆🎬",
                answers: [
                    "Puppet Master",
                    "Child's Play",
                    "Annabelle",
                    "Dolls"
                ],
                correct: 1,
                explanation: "🪆 'Child's Play' introduced the killer doll Chucky to horror movie fans!"
            },
            {
                question: "In 'Coraline', what does the Other Mother have instead of eyes?",
                icon: "👁️📚",
                answers: [
                    "Black holes",
                    "Buttons",
                    "Mirrors",
                    "Jewels"
                ],
                correct: 1,
                explanation: "🔘 The Other Mother and inhabitants of the Other World have button eyes in Neil Gaiman's 'Coraline'!"
            },
            {
                question: "Which movie features a young boy who can see and talk to dead people?",
                icon: "👻🎬",
                answers: [
                    "The Others",
                    "Casper",
                    "The Sixth Sense",
                    "Paranormal Activity"
                ],
                correct: 2,
                explanation: "👻 'The Sixth Sense' features Cole who famously says 'I see dead people'!"
            },
            {
                question: "Who wrote 'The Legend of Sleepy Hollow'?",
                icon: "🎃📚",
                answers: [
                    "Washington Irving",
                    "Edgar Allan Poe",
                    "Nathaniel Hawthorne",
                    "Mark Twain"
                ],
                correct: 0,
                explanation: "📖 Washington Irving wrote 'The Legend of Sleepy Hollow' featuring the Headless Horseman!"
            },
            {
                question: "In the 'Scream' movies, what is the killer's mask based on?",
                icon: "😱🎬",
                answers: [
                    "The Scream painting",
                    "A Halloween mask",
                    "A ghost face",
                    "All of the above"
                ],
                correct: 0,
                explanation: "🎨 The Ghostface mask is based on Edvard Munch's famous painting 'The Scream'!"
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;
    }

    start() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;
        
        this.showScreen('quiz-screen');
        this.loadQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        this.isAnswered = false;
        const question = this.questions[this.currentQuestionIndex];
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.questions.length;
        document.getElementById('current-score').textContent = this.score;
        
        // Display question icon
        const questionContainer = document.querySelector('.question-container');
        let iconElement = questionContainer.querySelector('.question-icon');
        if (!iconElement) {
            iconElement = document.createElement('div');
            iconElement.className = 'question-icon';
            questionContainer.insertBefore(iconElement, questionContainer.firstChild);
        }
        iconElement.textContent = question.icon;
        // Re-trigger animation
        iconElement.style.animation = 'none';
        setTimeout(() => {
            iconElement.style.animation = 'iconBounce 1s ease-in-out';
        }, 10);
        
        // Display question
        document.getElementById('question-text').textContent = question.question;
        
        // Display answers
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.onclick = () => this.selectAnswer(index);
            answersContainer.appendChild(button);
        });
        
        // Hide feedback
        document.getElementById('feedback-container').style.display = 'none';
    }

    selectAnswer(selectedIndex) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        // Record answer
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: selectedIndex,
            correct: isCorrect
        });
        
        // Update score
        if (isCorrect) {
            this.score++;
            document.getElementById('current-score').textContent = this.score;
        }
        
        // Show feedback on buttons
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach((button, index) => {
            button.classList.add('disabled');
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                button.classList.add('incorrect');
            }
        });
        
        // Show feedback message
        this.showFeedback(isCorrect, question.explanation);
    }

    showFeedback(isCorrect, explanation) {
        const feedbackContainer = document.getElementById('feedback-container');
        const feedbackMessage = document.getElementById('feedback-message');
        
        feedbackMessage.className = 'feedback-message ' + (isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
            feedbackMessage.innerHTML = `
                <div style="font-size: 2em; margin-bottom: 10px;">✅ Correct!</div>
                <div>${explanation}</div>
            `;
        } else {
            feedbackMessage.innerHTML = `
                <div style="font-size: 2em; margin-bottom: 10px;">❌ Incorrect!</div>
                <div>${explanation}</div>
            `;
        }
        
        feedbackContainer.style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    showResults() {
        this.showScreen('results-screen');
        
        const correctCount = this.score;
        const incorrectCount = this.questions.length - this.score;
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        // Update results
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('max-score').textContent = this.questions.length;
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('incorrect-count').textContent = incorrectCount;
        document.getElementById('percentage').textContent = percentage + '%';
        
        // Determine rating and trophy
        let rating = '';
        let funMessage = '';
        let trophy = '';
        
        if (percentage === 100) {
            rating = '🎬 HORROR MOVIE MASTER! 📚';
            funMessage = 'Perfect score! You\'re a true expert on Halloween movies and books! Time to host a spooky movie marathon! 🎃';
            trophy = '🏆👑';
        } else if (percentage >= 80) {
            rating = '👻 SPOOKY SCHOLAR! 🦇';
            funMessage = 'Great job! You really know your scary movies and creepy books! You\'d be awesome on a horror trivia team! 🎉';
            trophy = '🏆🎃';
        } else if (percentage >= 60) {
            rating = '📖 BOOKWORM & MOVIE BUFF! 📽️';
            funMessage = 'Nice work! You know quite a bit about Halloween entertainment! Keep reading and watching! 🕸️';
            trophy = '🥈👻';
        } else if (percentage >= 40) {
            rating = '🎥 HALLOWEEN ENTHUSIAST! 📚';
            funMessage = 'Not bad! You\'re building your spooky knowledge! Time to binge-watch some classics and read more scary stories! 🍬';
            trophy = '🥉🍬';
        } else {
            rating = '🎃 MOVIE NEWBIE! 📖';
            funMessage = 'Keep exploring! There are so many amazing Halloween movies and books to discover! Try again and learn more! 🌙';
            trophy = '📚🎃';
        }
        
        document.getElementById('rating-message').textContent = rating;
        document.getElementById('fun-message').textContent = funMessage;
        document.getElementById('trophy-display').textContent = trophy;
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;
        this.showScreen('start-screen');
    }
    
    // Audio System
    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('🎵 Audio system initialized');
            
            // Setup volume slider
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) {
                volumeSlider.addEventListener('input', (e) => {
                    this.volume = e.target.value / 100;
                    console.log('Volume:', this.volume);
                });
            }
        } catch (e) {
            console.log('Audio not available:', e);
        }
    }
    
    startHalloweenMusic() {
        if (!this.audioContext || this.musicPlaying) return;
        
        // Resume audio context if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        this.musicPlaying = true;
        this.createSpookyMusic();
        
        const musicToggle = document.getElementById('music-toggle');
        if (musicToggle) {
            musicToggle.classList.add('playing');
            musicToggle.textContent = '🎵 Playing...';
        }
        
        console.log('🎃 Halloween music started!');
    }
    
    stopHalloweenMusic() {
        this.musicPlaying = false;
        
        // Stop all music nodes
        this.musicNodes.forEach(node => {
            try {
                if (node.stop) node.stop();
                if (node.disconnect) node.disconnect();
            } catch (e) {}
        });
        this.musicNodes = [];
        
        const musicToggle = document.getElementById('music-toggle');
        if (musicToggle) {
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('muted');
            musicToggle.textContent = '🎵 Paused';
        }
        
        console.log('🎃 Halloween music stopped');
    }
    
    createSpookyMusic() {
        if (!this.audioContext || !this.musicPlaying) return;
        
        // Create a spooky Halloween melody
        const spookyMelody = [
            // Minor scale for spooky effect
            { freq: 220, duration: 0.5 },    // A3
            { freq: 246.94, duration: 0.5 }, // B3
            { freq: 261.63, duration: 0.5 }, // C4
            { freq: 293.66, duration: 0.5 }, // D4
            { freq: 329.63, duration: 1.0 }, // E4
            { freq: 293.66, duration: 0.5 }, // D4
            { freq: 261.63, duration: 0.5 }, // C4
            { freq: 246.94, duration: 1.0 }, // B3
            
            { freq: 220, duration: 0.5 },    // A3
            { freq: 246.94, duration: 0.5 }, // B3
            { freq: 261.63, duration: 0.5 }, // C4
            { freq: 293.66, duration: 0.5 }, // D4
            { freq: 329.63, duration: 1.5 }, // E4
            { freq: 0, duration: 0.5 },      // Rest
        ];
        
        // Spooky bass line
        const bassLine = [
            { freq: 110, duration: 1.0 },    // A2
            { freq: 0, duration: 0.5 },      // Rest
            { freq: 110, duration: 1.0 },    // A2
            { freq: 0, duration: 0.5 },      // Rest
        ];
        
        let melodyTime = 0;
        let bassTime = 0;
        
        const playMelody = () => {
            if (!this.musicPlaying) return;
            
            const note = spookyMelody[melodyTime % spookyMelody.length];
            melodyTime++;
            
            if (note.freq > 0) {
                const osc = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                osc.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                osc.frequency.value = note.freq;
                osc.type = 'triangle'; // Spooky sound
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.15, this.audioContext.currentTime + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.duration);
                
                osc.start(this.audioContext.currentTime);
                osc.stop(this.audioContext.currentTime + note.duration);
                
                this.musicNodes.push(osc);
            }
            
            setTimeout(playMelody, note.duration * 1000);
        };
        
        const playBass = () => {
            if (!this.musicPlaying) return;
            
            const note = bassLine[bassTime % bassLine.length];
            bassTime++;
            
            if (note.freq > 0) {
                const bassOsc = this.audioContext.createOscillator();
                const bassGain = this.audioContext.createGain();
                
                bassOsc.connect(bassGain);
                bassGain.connect(this.audioContext.destination);
                
                bassOsc.frequency.value = note.freq;
                bassOsc.type = 'sine';
                
                bassGain.gain.setValueAtTime(0, this.audioContext.currentTime);
                bassGain.gain.linearRampToValueAtTime(this.volume * 0.25, this.audioContext.currentTime + 0.1);
                bassGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.duration);
                
                bassOsc.start(this.audioContext.currentTime);
                bassOsc.stop(this.audioContext.currentTime + note.duration);
                
                this.musicNodes.push(bassOsc);
            }
            
            setTimeout(playBass, note.duration * 1000);
        };
        
        // Start both melody and bass
        playMelody();
        playBass();
        
        // Add occasional spooky sound effects
        this.addSpookySounds();
    }
    
    addSpookySounds() {
        if (!this.musicPlaying) return;
        
        const randomDelay = 5000 + Math.random() * 10000; // Every 5-15 seconds
        
        setTimeout(() => {
            if (!this.musicPlaying) return;
            
            // Create eerie whistle sound
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.setValueAtTime(800, this.audioContext.currentTime);
            osc.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 1.5);
            
            gain.gain.setValueAtTime(0, this.audioContext.currentTime);
            gain.gain.linearRampToValueAtTime(this.volume * 0.1, this.audioContext.currentTime + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.5);
            
            osc.type = 'sine';
            osc.start(this.audioContext.currentTime);
            osc.stop(this.audioContext.currentTime + 1.5);
            
            this.musicNodes.push(osc);
            
            // Schedule next spooky sound
            this.addSpookySounds();
        }, randomDelay);
    }
}

// Global quiz instance
let quiz = new HalloweenQuiz();

// Global functions for HTML onclick handlers
function startQuiz() {
    quiz.start();
    // Auto-start music when quiz starts
    if (!quiz.musicPlaying) {
        quiz.startHalloweenMusic();
    }
}

function toggleMusic() {
    if (!quiz.audioContext) {
        quiz.initAudio();
    }
    
    if (quiz.musicPlaying) {
        quiz.stopHalloweenMusic();
    } else {
        quiz.startHalloweenMusic();
    }
}

function nextQuestion() {
    quiz.nextQuestion();
}

function restartQuiz() {
    quiz.restart();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎃 Halloween Quiz loaded!');
    // Quiz starts on start screen by default
});

// Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (quiz.currentQuestionIndex < quiz.questions.length && !quiz.isAnswered) {
        // Allow number keys 1-4 to select answers
        const key = parseInt(event.key);
        if (key >= 1 && key <= 4) {
            const buttons = document.querySelectorAll('.answer-btn');
            if (buttons[key - 1]) {
                buttons[key - 1].click();
            }
        }
    }
    
    // Enter key to continue
    if (event.key === 'Enter' && quiz.isAnswered) {
        nextQuestion();
    }
    
    // Escape key to restart (from results screen)
    if (event.key === 'Escape' && document.getElementById('results-screen').classList.contains('active')) {
        restartQuiz();
    }
});

// Add some spooky sound effects (optional - using Web Audio API)
function playCorrectSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Audio not available');
    }
}

function playIncorrectSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.type = 'sawtooth';
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Audio not available');
    }
}

console.log('🎃 Halloween Quiz JavaScript loaded successfully! 🎃');

