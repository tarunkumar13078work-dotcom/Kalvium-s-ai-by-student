# 🚀 Kalvium's AI Assistant - Setup Guide

## Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation required! This is a pure HTML/CSS/JavaScript application

### Option 1: Run Locally (Recommended)

#### Method A: Using Python (Easiest)
If you have Python installed:

```bash
# Navigate to the kalviums-ai directory
cd kalviums-ai

# Start a local web server (Python 3)
python3 -m http.server 8080

# Or for Python 2
python -m SimpleHTTPServer 8080
```

Then open your browser and go to: `http://localhost:8080/index.html`

#### Method B: Using Node.js
If you have Node.js installed:

```bash
# Install http-server globally (one-time setup)
npm install -g http-server

# Navigate to the kalviums-ai directory
cd kalviums-ai

# Start the server
http-server -p 8080
```

Then open your browser and go to: `http://localhost:8080/index.html`

#### Method C: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Direct File Opening (Limited Functionality)

You can also open the HTML file directly in your browser:
1. Navigate to the `kalviums-ai` folder
2. Double-click `index.html`

**Note:** Some features may not work correctly due to browser security restrictions (CORS). Using a local server (Option 1) is recommended.

### Option 3: Deploy to Web

#### GitHub Pages (Free Hosting)
1. Fork or clone this repository to your GitHub account
2. Go to repository Settings → Pages
3. Select the branch and `/kalviums-ai` folder
4. Your site will be live at `https://yourusername.github.io/repository-name/`

#### Other Hosting Options
- **Netlify**: Drag and drop the `kalviums-ai` folder
- **Vercel**: Connect your GitHub repository
- **Surge.sh**: Run `surge kalviums-ai/`

## 📁 Project Structure

```
Kalvium-s-ai-by-student/
├── kalviums-ai/
│   ├── index.html      # Main HTML file
│   ├── style.css       # All styling and themes
│   ├── script.js       # Application logic
└── README.md           # Project overview
```

## 🎯 How to Use

### First Time Setup
1. Start the application using one of the methods above
2. The welcome screen will guide you

### Features Overview

#### 💬 Chat Interface
- Type your question in the input field at the bottom
- Press Enter or click the send button
- The AI will respond with answers from the knowledge base

#### 📚 FAQ Sidebar
- Browse categories: About College, About Kalvium, Basics of Programming
- Click any category to expand/collapse
- Click any question to send it to the chat

#### 🔍 Search FAQs
- Use the search box at the top of the sidebar
- Type keywords to filter questions
- Matching categories will auto-expand

#### 🌓 Theme Toggle
- Click the moon/sun icon in the top right
- Switch between dark and light themes
- Theme preference is maintained during your session

#### 🎤 Voice Control
- Click the speaker icon to toggle text-to-speech
- When enabled, the AI will read responses aloud
- Works in most modern browsers

#### 🗑️ Clear Chat
- Click the trash icon to clear conversation history
- A confirmation modal will appear
- This cannot be undone

### Keyboard Shortcuts
- **Enter**: Send message
- **Escape**: Close modals

## 🔧 Customization

### Modify Questions and Answers
Edit `script.js` and update the `qaList` object:

```javascript
const qaList = {
    "Your Question?": "Your Answer here.",
    // Add more Q&A pairs
};
```

### Change Colors/Theme
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --bg-primary: #0f0f23;
    /* Modify other colors */
}
```

### Adjust Typing Delay
Edit the configuration in `script.js`:

```javascript
const CONFIG = {
    typingDelay: {
        base: 1000,    // Base delay in ms
        random: 500    // Random variation in ms
    }
};
```

## 🌐 Browser Compatibility

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Limited Support:**
- Internet Explorer (not recommended)
- Older mobile browsers

## 📱 Mobile Usage

The application is fully responsive and works great on mobile devices:
- Swipe or tap the hamburger menu to access FAQs
- Optimized touch targets
- Mobile-friendly keyboard

## 🐛 Troubleshooting

### Icons Not Showing
The application uses Font Awesome icons from a CDN. If icons don't appear:
- Check your internet connection
- Verify you're not blocking CDN resources
- The app will still function without icons

### Voice Not Working
Text-to-speech requires:
- A modern browser with Web Speech API support
- Microphone permissions may be needed
- Check browser settings if voice doesn't work

### Blank Screen
If you see a blank screen:
1. Check the browser console for errors (F12)
2. Make sure you're using a local server (not opening file directly)
3. Try a different browser

### Styling Issues
If colors or layouts look broken:
1. Clear your browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check if CSS file loaded correctly

## 🔐 Security & Privacy

- ✅ No data is sent to external servers
- ✅ No user data is collected or stored
- ✅ All processing happens locally in your browser
- ✅ No cookies or tracking
- ✅ Open source - verify the code yourself

## 📊 Performance

- Fast loading: ~14KB total (unminified)
- Instant responses (no API calls)
- Smooth 60fps animations
- Works offline (after first load)

## 🆘 Getting Help

If you encounter issues:
1. Check this setup guide
2. Review the troubleshooting section
3. Check browser console for error messages
4. Open an issue on GitHub with:
   - Browser version
   - Operating system
   - Description of the problem
   - Console error messages (if any)

## 📝 License

This project is open source. Feel free to use, modify, and distribute.

## 🎉 Enjoy!

You're all set! Start chatting with Kalvium's AI Assistant and explore all the features.

For more information, see the main [README.md](../README.md) and [ANALYSIS.md](../ANALYSIS.md).
