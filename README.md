<div align="center">

# ⛪ Get Well Church Family
### A Progressive Web App for Sending Love, Laughter & Prayers

[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Security](https://img.shields.io/badge/Security-A+-brightgreen?style=for-the-badge&logo=shield&logoColor=white)](SECURITY.md)

**A secure, offline-capable PWA featuring iOS-style glass morphism design, real-time Firebase backend, and church-appropriate content moderation.**

[View Demo](https://your-project.web.app) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📱 Application Preview

<div align="center">

### Landing Page with Church Interior Video Background
*Cinematic video background with glass-morphism welcome card*

<img src="videos/church-interior-poster.jpg" alt="Landing Page" width="600" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">

### Main Jokes Interface with Community Video
*Translucent glass cards floating over church picnic video*

<img src="public/screenshots/app-preview.jpg" alt="App Interface" width="600" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">

</div>

---

## ✨ Key Features

| Feature | Description | Technology |
|---------|-------------|------------|
| 🎥 **Dual Video Backgrounds** | Cinematic church interior (landing) & community picnic (main) with full viewport coverage | HTML5 Video API |
| 🪟 **iOS Glass Morphism** | Translucent frosted-glass cards with backdrop blur matching iOS 26 design specs | Tailwind CSS + Custom CSS |
| 🔒 **Multi-Layer Security** | Client-side + Firebase Rules + Cloud Functions triple moderation | Firebase Security |
| 📴 **Offline PWA** | Full offline capability with service worker caching | Progressive Web App |
| ⚡ **Real-Time Sync** | Live joke updates across all devices instantly | Cloud Firestore |
| 🛡️ **Content Filtering** | Auto-blocks inappropriate content, enforces real names only | Cloud Functions |
| 🎮 **Auto-Play Mode** | Configurable slideshow with pause/resume functionality | Vanilla JS |
| ♿ **Accessibility** | Full keyboard navigation (Space, Arrows, Escape) | ARIA Standards |

---

## 🗂️ File Structure

getwell-church-pwa/
│
├── 📁 public/                          # Frontend PWA (Deployed to Firebase Hosting)
│   ├── 📄 index.html                   # Main SPA shell with video backgrounds
│   ├── 📄 app.js                       # Application logic & Firebase integration
│   ├── 📄 styles.css                   # Glass morphism & animation styles
│   ├── 📄 manifest.json                # PWA install configuration
│   ├── 📄 sw.js                        # Service Worker for offline support
│   │
│   ├── 📁 videos/                      # Video Assets
│   │   ├── 🎬 church-interior.mp4      # Landing page background (Vecteezy)
│   │   └── 🎬 church-community.mp4     # Jokes page background (Picnic scene)
│   │
│   ├── 📁 icons/                       # PWA Icons
│   │   ├── 🖼️ icon-192x192.png
│   │   └── 🖼️ icon-512x512.png
│   │
│   └── 📁 screenshots/                 # App store screenshots
│       └── 🖼️ app-preview.jpg
│
├── 📁 firebase/                        # Backend Configuration
│   ├── 📄 firestore.rules              # Database security rules
│   │
│   └── 📁 functions/                   # Cloud Functions (Node.js)
│       ├── 📄 index.js                 # Main functions & moderation triggers
│       ├── 📄 moderation.js            # Content validation utilities
│       └── 📄 package.json             # Functions dependencies
│
├── 📄 firebase.json                    # Firebase hosting configuration
├── 📄 tailwind.config.js               # Tailwind customization (glass effects)
├── 📄 package.json                     # Root dependencies & scripts
├── 📄 .firebaserc                      # Firebase project aliases
└── 📄 README.md                        # This file

---

## 🛡️ Security Architecture

┌─────────────────────────────────────────────────────────────┐
│                    CLIENT SIDE (Browser)                     │
│  • Real-time name validation (letters only)                  │
│  • Banned word filtering (RegEx)                            │
│  • XSS Protection (HTML escaping)                           │
└──────────────────────┬──────────────────────────────────────┘
│
┌──────────────────────▼──────────────────────────────────────┐
│                 FIRESTORE SECURITY RULES                     │
│  • Validate data types & lengths                            │
│  • Enforce required fields                                  │
│  • Block unauthorized delete/update                         │
└──────────────────────┬──────────────────────────────────────┘
│
┌──────────────────────▼──────────────────────────────────────┐
│              CLOUD FUNCTIONS (Server-Side)                   │
│  • Secondary content moderation                             │
│  • AI-powered toxicity detection (Perspective API)          │
│  • Auto-delete violations within 2 seconds                  │
│  • Moderation logging for admin review                      │
└─────────────────────────────────────────────────────────────┘
￼
### Content Filters Applied
- ✅ **Real Name Verification** - First names only (no handles like "CoolDude123")
- ✅ **Profanity Blocking** - 50+ word filter list
- ✅ **Political Content** - Blocks election/references (as requested)
- ✅ **LGBTQ Content** - Filters pride parade/references (as requested)
- ✅ **Anti-Religious** - Blocks anti-Christian content
- ✅ **Hate Speech** - Nazi, KKK, white supremacy blocked
- ✅ **Sexual Content** - Pornographic terms blocked
- ✅ **Terrorism/Drugs** - Related keywords blocked

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/getwell-church-pwa.git
cd getwell-church-pwa
2. Install dependencies
npm install
cd firebase/functions && npm install && cd ../..
3. Configure Firebase
￼
4. Add your video files
Place your videos in public/videos/:
 • church-interior.mp4 - Landing page background
 • church-community.mp4 - Main app background
5. Update Firebase Config
Edit public/app.js with your Firebase config:
￼
6. Deploy
￼
Your app is now live at https://your-project.web.app 🎉

￼
📋 PWA Installation
Users can install this app on their home screen:
iOS Safari:
1. Tap Share button
2. Select "Add to Home Screen"
3. Open like a native app
Android Chrome:
1. Tap menu (⋮)
2. Select "Add to Home screen"
3. App installs with splash screen & offline support

￼
🎨 Design System
Glass Morphism Specifications
￼Background: rgba(255, 255, 255, 0.15)
Backdrop Filter: blur(20px)
Border: 1px solid rgba(255, 255, 255, 0.25)
Shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37)

Color Palette
 • Primary Glass: #ffffff (15% opacity)
 • Accent Blue: #3b82f6 (buttons)
 • Success Green: #22c55e (auto-mode)
 • Warning Amber: #eab308 (pause)
 • Church Gold: #ffd700 (accents)

￼
📊 Firebase Free Tier Limits
￼Resource	Limit	Usage Estimate
Firestore Reads	50,000/day	~1,000 users/day
Firestore Writes	20,000/day	~500 submissions/day
Hosting Storage	1 GB	Videos optimized
Functions Calls	125,000/month	Auto-moderation
Bandwidth	10 GB/month	CDN optimized

💡 Tip: Videos are cached locally after first load, minimizing bandwidth usage.

￼
🤝 Contributing
We love contributions! Please ensure:
 • Jokes are family-friendly (4-year-old appropriate)
 • No political or controversial content
 • Follow the existing glass-morphism design
 • Maintain Firebase Security Rules coverage

￼
📄 License
Distributed under the MIT License. See LICENSE for more information.

￼
🙏 Acknowledgments
 • Video Background: Vecteezy Church Stock Videos
 • Icons: Heroicons
 • Fonts: Inter & system fonts
 • Firebase Team for the generous free tier

© 2026 <font color="blue">Get Well</font>. All Rights Reserved.<a href="https://supercodingninja.github.io/ePortfolio/"><font color="orange">𝑇ℎ𝑒 𝑆𝑢𝑝𝑒𝑟 𝐶𝑜𝑑𝑖𝑛𝑔 𝑁𝑖𝑛𝑗𝑎™</font></a">
Made with ❤️ for the Church Community
⬆ Back to Top
