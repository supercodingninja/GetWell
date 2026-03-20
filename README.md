<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PWA-Installable-blue?style=for-the-badge&logo=pwa" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" />
</p>

<h1 align="center">
  💝 Get Well Card
  <br>
  <sub><sup>A Living, Growing Digital Card for the World</sup></sub>
</h1>

<p align="center">
  <em>"A merry heart doeth good like a medicine" - Proverbs 17:22</em>
</p>

<p align="center">
  <a href="https://supercodingninja.github.io/GetWell/" target="_blank">
    <strong>🌐 Live Site</strong>
  </a> •
  <a href="#features">Features</a> •
  <a href="#accessibility">Accessibility</a> •
  <a href="#how-it-works">How It Works</a>
</p>

---

## 📸 App Showcase

### 🏠 Landing Experience
<p align="center">
  <img src="./screenshots/landing-page.jpg" alt="GetWell Landing Page" width="80%" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />
</p>
<p align="center"><em>Welcome screen with ambient church community video background and multi-language support</em></p>

### 🎴 The Card Experience
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./screenshots/card-dark-12.jpg" alt="Card View - 12 Cards" width="100%" />
        <br>
        <sub>Classic Mode (12 Cards)</sub>
      </td>
      <td align="center">
        <img src="./screenshots/card-dark-100.jpg" alt="Card View - 100 Cards" width="100%" />
        <br>
        <sub>Growing Mode (100+ Cards)</sub>
      </td>
    </tr>
  </table>
</div>

### 🧭 Navigation & Menu
<p align="center">
  <img src="./screenshots/menu-grid.jpg" alt="Menu Navigation" width="60%" style="border-radius: 12px;" />
</p>
<p align="center"><em>Emoji-powered quick navigation to any card in the collection</em></p>

### ♿ Universal Access
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./screenshots/accessibility-full.jpg" alt="Universal Access Panel" width="100%" />
        <br>
        <sub>Comprehensive Accessibility Panel</sub>
      </td>
      <td align="center">
        <img src="./screenshots/color-vision.jpg" alt="Color Vision Settings" width="100%" />
        <br>
        <sub>Color Vision Support</sub>
      </td>
    </tr>
  </table>
</div>

<p align="center"><em>Inclusive design for neurodivergent users, mental health support, and vision accessibility</em></p>

---

## ✨ Features

```text
| Feature | Description |
|---------|-------------|
| 🌍 **Global Reach** | Multi-language support (English, Español, Français, Deutsch, Italiano, Português) |
| 🧠 **Neurodivergent Friendly** | Autism-friendly calm mode, ADHD focus support, dyslexia-friendly fonts |
| 🎯 **Mental Health Aware** | Anxiety relief mode, PTSD support (no flash), bipolar/mania support |
| 👁️ **Vision Accessible** | Screen reader mode, high contrast, 8+ color vision types |
| 🔄 **Continuously Growing** | Firebase Firestore database that expands with each new submission |
| 🛡️ **Content Moderation** | Automatic filtering via PurgoMalum API - keeps content clean without storing banned words |
| 📱 **PWA Ready** | Install to home screen, offline functionality, service worker caching |
| ⌨️ **Keyboard Nav** | Arrow keys, spacebar, escape for full navigation |
| 🎨 **Glass Morphism** | Modern frosted glass UI with video backgrounds |
| 👤 **Personal Touch** | Every message shows author's first name and location |

---

## 🚀 How It Works

1. **Open the Card** → Visit the site and click "Open Card"
2. **Browse Messages** → Navigate through jokes, prayers, and encouragement
3. **Add Your Voice** → Submit your own message with your name and location
4. **Share** → Send the link to anyone who needs encouragement
5. **Grow** → Watch the collection expand as more people contribute worldwide

---

## 🛠️ Technical Stack

- **Frontend:** Vanilla HTML5, CSS3 (Glass Morphism), JavaScript (ES6+)
- **Database:** Firebase Firestore (real-time, continuous growth)
- **Hosting:** GitHub Pages (LivingCard branch)
- **Video Hosting:** GitHub Releases (bypasses 100MB limit)
- **Content Moderation:** PurgoMalum API
- **PWA:** Service Workers, Web Manifest

### Repository Structure

## Repository Structure

```text
/GetWell/
├── 📄 index.html          # Main entry
├── 📜 app.js             # Core logic + Firebase integration
├── 🎨 styles.css         # Glass morphism styling
├── 🛡️ filters.js         # Content moderation
├── 📱 manifest.json      # PWA configuration
├── ⚙️ sw.js              # Service worker
├── 🔥 firebase.json      # Firebase hosting config
├── 📋 firestore.rules    # Database security
├── 🎬 videos/            # Background videos (GitHub Releases)
└── 📸 screenshots/       # App screenshots

---

## ⚡ Setup

### Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Open project **"Growing Get Well Card"**
3. Project Settings → General → Your apps
4. Copy config values into `app.js`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "growing-get-well-card.firebaseapp.com",
    projectId: "growing-get-well-card",
    storageBucket: "growing-get-well-card.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

Note: The app seeds itself with starter content on first launch, then accumulates new submissions over time.
Video URLs
Update these in app.js if you change releases:
 • Landing: Church interior video
 • Main App: Church community picnic video

￼
🌟 Why This Matters
GetWell isn't just another digital card—it's a living testament to global community. When someone in Ohio adds a joke, someone in Turkey can smile at it five minutes later. When a prayer is shared from Brazil, it might reach someone in Japan who needs it most.
Every submission makes the card richer. Every view spreads encouragement. Every share connects hearts across borders.
---

## 📝 License

MIT License © 2026 Frederick Thomas, *The Super Coding Ninja™*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*"A merry heart doeth good like a medicine"* — **Proverbs 17:22 (KJV)**

---

<p align="center">
  <strong>✝️ To God be the glory</strong>
  <br>
  <sub>© 2026 Frederick Thomas, The Super Coding Ninja™</sub>
  <br>
  <sub>Made with ❤️ for the global community</sub>
</p>
