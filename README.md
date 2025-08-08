# 🦕 Dino Runner - Endless Adventure

A colorful, feature-rich endless runner game inspired by Chrome Dino, built with HTML5 Canvas and JavaScript.

![Game Preview](https://via.placeholder.com/800x400/87CEEB/000000?text=Dino+Runner+Game)

## 🎮 Features

### Core Gameplay
- **Auto-running dinosaur** with smooth animations
- **Jump and duck mechanics** with responsive controls
- **Collision detection** with precise hit-boxes
- **Progressive difficulty** that increases over time
- **Score system** with stage progression every 500 points

### Visual Design
- **Cartoonish dinosaur** with bright green colors and blinking eyes
- **Parallax scrolling backgrounds** with multiple layers for depth
- **Five unique stage themes** with distinct visual styles
- **Colorful obstacles** specific to each stage
- **Smooth animations** and particle effects

### 🌈 Five Unique Stages

| Stage | Name | Theme | Obstacles | Music Style |
|-------|------|-------|-----------|-------------|
| 1 | Sunny Desert | Yellow sand, blue sky, cactus | Cactus, rocks | Cheerful desert melody |
| 2 | Jungle Trail | Dense trees, vines | Logs, vines, trees | Tribal drum beats |
| 3 | Moonlit Night | Dark sky, stars, moon | Crystals, shadows, bats | Mysterious synth music |
| 4 | Snowy Mountains | Ice, snow particles | Icicles, snowballs, ice | Gentle crystalline chimes |
| 5 | Lava Volcano | Red-hot lava, fireballs | Fireballs, lava, volcanoes | Intense rock music |

### 🔊 Audio System
- **Sound effects** for jump, duck, collision, and stage transitions
- **Stage-specific background music** with unique melodies for each theme
- **Synthetic audio generation** using Web Audio API (no external files needed)
- **Audio toggle** with mute/unmute functionality

### 📱 Responsive Design
- **Desktop support** with keyboard controls
- **Mobile support** with touch controls and swipe gestures
- **Responsive layout** that adapts to different screen sizes
- **Touch-friendly UI** with large buttons for mobile

### 🎯 Advanced Features
- **Pause/Resume** functionality
- **Game Over screen** with final score and restart option
- **Share score** functionality (Web Share API + clipboard fallback)
- **Auto-pause** when tab loses focus
- **Performance monitoring** and optimization
- **Debug mode** for development

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation
1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Start playing!** No build process required

### File Structure
```
windsurf-project/
├── index.html          # Main HTML file
├── styles.css          # Responsive CSS styles
├── js/
│   ├── game.js         # Core game engine
│   ├── dino.js         # Dinosaur character class
│   ├── obstacles.js    # Obstacle system
│   ├── stages.js       # Background and stage themes
│   ├── audio.js        # Audio management
│   ├── controls.js     # Input handling
│   └── main.js         # Game initialization
└── README.md           # This file
```

## 🎮 Controls

### Desktop
- **Jump**: `Spacebar`, `↑ Arrow`, or `W`
- **Duck**: `↓ Arrow` or `S` (hold to stay ducked)
- **Pause**: `ESC` or Pause Button
- **Mute**: `M` or Sound Button
- **Start/Restart**: `Enter` or Click Button

### Mobile
- **Jump**: Tap screen or Jump button
- **Duck**: Swipe down or Duck button
- **UI**: Touch buttons for pause, sound, restart

### Mouse (Desktop)
- **Jump**: Click upper half of game area
- **Duck**: Click lower half of game area

## 🏆 Gameplay

### Objective
- **Survive** as long as possible by avoiding obstacles
- **Score points** by staying alive and progressing through stages
- **Reach higher stages** to experience new themes and challenges

### Scoring System
- Points increase continuously based on time survived
- **Stage progression** every 500 points
- **Difficulty increases** with each stage loop
- **Speed multiplier** affects both game speed and scoring

### Stage Progression
1. Complete stages 1-5 in sequence
2. After stage 5, loop back to stage 1 with increased difficulty
3. Each loop increases speed and obstacle frequency
4. Challenge yourself to reach higher loops!

## 🛠️ Technical Features

### Performance Optimizations
- **Efficient rendering** with canvas optimization
- **Object pooling** for obstacles and particles
- **Responsive frame rate** targeting 60 FPS
- **Memory management** with proper cleanup

### Browser Compatibility
- **Modern browsers** with HTML5 Canvas support
- **Web Audio API** for enhanced sound (with fallbacks)
- **Touch events** for mobile devices
- **Responsive design** for all screen sizes

### Accessibility
- **Keyboard navigation** support
- **Visual feedback** for all interactions
- **Clear UI** with high contrast elements
- **Audio cues** for game events

## 🎨 Customization

### Debug Mode (Development)
When running on localhost, debug functions are available:
```javascript
// Skip to specific stage (1-5)
window.debugGame.skipToStage(3);

// Add points to score
window.debugGame.addScore(1000);

// Toggle invincibility
window.debugGame.toggleInvincible();

// Set game speed
window.debugGame.setSpeed(8);
```

### Modifying Stages
Edit `js/stages.js` to customize:
- Stage colors and themes
- Background elements
- Particle effects
- Parallax layers

### Adding New Obstacles
Edit `js/obstacles.js` to add new obstacle types:
- Define dimensions and colors
- Create drawing functions
- Add to stage obstacle lists

## 🐛 Troubleshooting

### Common Issues
1. **Game won't start**: Ensure JavaScript is enabled
2. **No sound**: Check browser audio permissions
3. **Poor performance**: Try closing other browser tabs
4. **Touch not working**: Ensure device supports touch events

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ⚠️ Internet Explorer: Not supported

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute by:
- Reporting bugs
- Suggesting new features
- Adding new stages or obstacles
- Improving performance
- Enhancing accessibility

## 🎉 Enjoy the Game!

Have fun playing Dino Runner! Try to beat your high score and see how far you can progress through the colorful stages. Share your scores with friends and challenge them to beat your record!

---

**Made with ❤️ using HTML5 Canvas and JavaScript**
