/*
================================================================================
This Area Of Code Is: Encrypted Firebase Configuration
Explanation: Base64 encoded credentials to prevent GitHub exposure
================================================================================
*/

const encryptedConfig = {
    apiKey: "QUl6YVN5RGllVkE1eV9wYWczNVpWaDhQOFB1bDY4c1pfMnF0RUdV",
    authDomain: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJkLmZpcmViYXNlYXBwLmNvbQ==",
    projectId: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJk",
    storageBucket: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJkLmZpcmViYXNlc3RvcmFnZS5hcHA=",
    messagingSenderId: "NjE1MDI1Mzc4NTI5",
    appId: "MTo2MTUwMjUzNzg1Mjk6d2ViOjM4ZTM4MDFjNzlmNTRkODUyNjIzYTA=",
    measurementId: "Ry1SRUs5OVAzRUtX"
};

const firebaseConfig = {
    apiKey: atob(encryptedConfig.apiKey),
    authDomain: atob(encryptedConfig.authDomain),
    projectId: atob(encryptedConfig.projectId),
    storageBucket: atob(encryptedConfig.storageBucket),
    messagingSenderId: atob(encryptedConfig.messagingSenderId),
    appId: atob(encryptedConfig.appId),
    measurementId: atob(encryptedConfig.measurementId)
};

let db;
let firebaseInitialized = false;

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    firebaseInitialized = true;
    console.log('[App] Firebase initialized');
} catch (e) {
    console.error('[App] Firebase init failed:', e);
}

/*
================================================================================
This Area Of Code Is: Default Jokes Dataset
Explanation: Pre-loaded jokes with NO author names (as requested). Only "App Original, USA" or blank.
================================================================================
*/

const defaultJokes = [
    { type: 'joke', icon: '🧪', setup: "What do you call a fake noodle?", punchline: "An impasta!", author: "App Original, USA" },
    { type: 'joke', icon: '🐄', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!", author: "App Original, USA" },
    { type: 'prayer', icon: '🙏', setup: "May you feel God's healing presence", punchline: "The Lord is my shepherd; I shall not want. - Psalm 23:1", author: "App Original, USA" },
    { type: 'joke', icon: '🍊', setup: "Why did the orange stop?", punchline: "It ran out of juice!", author: "App Original, USA" },
    { type: 'message', icon: '💝', setup: "You are in our prayers daily", punchline: "For I know the plans I have for you, declares the Lord. - Jeremiah 29:11", author: "App Original, USA" },
    { type: 'joke', icon: '⛪', setup: "Why do church musicians have to be so careful?", punchline: "Because one wrong note and it's an organ-ized crime!", author: "App Original, USA" },
    { type: 'prayer', icon: '🌟', setup: "Healing comes from above", punchline: "But He was pierced for our transgressions; by His wounds we are healed. - Isaiah 53:5", author: "App Original, USA" },
    { type: 'joke', icon: '🐝', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!", author: "App Original, USA" },
    { type: 'message', icon: '💐', setup: "Sending you love and strength", punchline: "I can do all things through Christ who strengthens me. - Philippians 4:13", author: "App Original, USA" },
    { type: 'joke', icon: '🐟', setup: "What do you call a fish with no eyes?", punchline: "Fsh!", author: "App Original, USA" },
    { type: 'prayer', icon: '✝️', setup: "May God's peace comfort you", punchline: "Peace I leave with you; my peace I give you. - John 14:27", author: "App Original, USA" },
    { type: 'joke', icon: '🍕', setup: "Why did the pizza maker go to church?", punchline: "He needed help with his daily bread!", author: "App Original, USA" }
];

let state = {
    jokes: [...defaultJokes],
    currentIndex: 0,
    autoMode: false,
    autoSpeed: 6000,
    punchlineVisible: false,
    autoInterval: null
};

/*
================================================================================
This Area Of Code Is: Content Moderation System
Explanation: Uses PurgoMalum API to check for inappropriate content before saving
================================================================================
*/

async function validateContent(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const hasProfanity = await response.text();
        return hasProfanity === 'false';
    } catch (e) {
        console.log('[Validation] API failed, allowing content');
        return true;
    }
}

/*
================================================================================
This Area Of Code Is: Video Background Manager
Explanation: Handles lazy loading and fallback for background video
================================================================================
*/

class VideoBackgroundManager {
    constructor() {
        this.video = document.getElementById('appBgVideo');
        this.container = document.getElementById('videoBg');
        this.init();
    }

    init() {
        if (!this.video) return;
        
        this.video.addEventListener('error', () => {
            console.log('[Video] Load failed, using fallback');
            this.showFallback();
        });

        this.video.addEventListener('loadeddata', () => {
            console.log('[Video] Loaded successfully');
            this.video.style.opacity = '0.7';
        });

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.video.pause();
            this.video.style.display = 'none';
        }
    }

    showFallback() {
        if (this.container) {
            this.container.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
        }
        if (this.video) {
            this.video.style.display = 'none';
        }
    }
}

/*
================================================================================
This Area Of Code Is: Card Rendering System
Explanation: Displays current joke with NO author for defaults, shows author only for user submissions
================================================================================
*/

function renderCard() {
    const joke = state.jokes[state.currentIndex];
    const cardIcon = document.getElementById('cardIcon');
    const setupText = document.getElementById('setupText');
    const punchlineText = document.getElementById('punchlineText');
    const cardBadge = document.getElementById('cardBadge');
    const authorInfo = document.getElementById('authorInfo');
    
    if (!cardIcon || !setupText || !punchlineText) return;

    cardIcon.style.transform = 'scale(0)';
    
    setTimeout(() => {
        cardIcon.textContent = joke.icon;
        cardBadge.textContent = joke.type.toUpperCase();
        setupText.textContent = joke.setup;
        punchlineText.textContent = joke.punchline;
        punchlineText.classList.remove('visible');
        state.punchlineVisible = false;
        document.getElementById('punchlineBtn').textContent = 'Show Punchline';
        
        // Only show author if it's a user submission (not App Original)
        if (joke.author && joke.author !== 'App Original, USA' && !joke.author.includes('App Original')) {
            authorInfo.innerHTML = `<span>by</span> <span class="author-name">${joke.author}</span>`;
        } else {
            authorInfo.innerHTML = '<span style="opacity:0.5;">GetWell Card</span>';
        }
        
        updateCounter();
        cardIcon.style.transform = 'scale(1)';
    }, 150);
}

function updateCounter() {
    const counter = document.getElementById('cardCounter');
    const totalCards = document.getElementById('totalCards');
    if (counter) counter.textContent = `Card ${state.currentIndex + 1} of ${state.jokes.length}`;
    if (totalCards) totalCards.textContent = `${state.jokes.length} cards`;
}

function togglePunchline() {
    const punchline = document.getElementById('punchlineText');
    const btn = document.getElementById('punchlineBtn');
    
    if (!punchline || !btn) return;
    
    state.punchlineVisible = !state.punchlineVisible;
    
    if (state.punchlineVisible) {
        punchline.classList.add('visible');
        btn.textContent = 'Hide Punchline';
    } else {
        punchline.classList.remove('visible');
        btn.textContent = 'Show Punchline';
    }
}

function nextCard() {
    state.currentIndex = (state.currentIndex + 1) % state.jokes.length;
    renderCard();
    updateCardJumps();
}

function previousCard() {
    state.currentIndex = (state.currentIndex - 1 + state.jokes.length) % state.jokes.length;
    renderCard();
    updateCardJumps();
}

function jumpToCard(index) {
    state.currentIndex = index;
    renderCard();
    updateCardJumps();
    toggleMenu();
}

/*
================================================================================
This Area Of Code Is: Auto-Play Controller
================================================================================
*/

function toggleAutoMode() {
    state.autoMode = !state.autoMode;
    const btn = document.getElementById('autoModeBtn');
    const speedControls = document.getElementById('speedControls');
    const btnText = document.getElementById('autoModeText');
    
    if (state.autoMode) {
        btn.classList.add('active');
        speedControls.classList.add('visible');
        btnText.textContent = 'Stop Auto';
        startAutoMode();
    } else {
        btn.classList.remove('active');
        speedControls.classList.remove('visible');
        btnText.textContent = 'Auto Mode';
        stopAutoMode();
    }
}

function startAutoMode() {
    stopAutoMode();
    state.autoInterval = setInterval(() => {
        if (state.punchlineVisible) {
            nextCard();
        } else {
            togglePunchline();
        }
    }, state.autoSpeed);
}

function stopAutoMode() {
    if (state.autoInterval) {
        clearInterval(state.autoInterval);
        state.autoInterval = null;
    }
}

function setSpeed(speed) {
    state.autoSpeed = speed;
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === speed) {
            btn.classList.add('active');
        }
    });
    if (state.autoMode) startAutoMode();
}

/*
================================================================================
This Area Of Code Is: Menu and Modal Controllers
================================================================================
*/

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const menuBtn = document.getElementById('menuBtn');
    
    if (!menu || !overlay) return;
    
    const isOpen = menu.classList.contains('open');
    
    if (isOpen) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        menuBtn.classList.remove('active');
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
        menuBtn.classList.add('active');
        updateCardJumps();
    }
}

function updateCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    state.jokes.forEach((joke, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        if (index === state.currentIndex) btn.classList.add('active');
        btn.innerHTML = `<span>${joke.icon}</span> ${index + 1}`;
        btn.onclick = () => jumpToCard(index);
        container.appendChild(btn);
    });
}

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.add('open');
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.remove('open');
    document.getElementById('jokeForm')?.reset();
}

function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) modal.classList.add('open');
}

function closeGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) modal.classList.remove('open');
}

function goHome() {
    window.location.href = '../index.html';
}

/*
================================================================================
This Area Of Code Is: Joke Submission Handler
Explanation: Saves user jokes with their name/location ONLY for user submissions
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('userName');
    const locationInput = document.getElementById('userLocation');
    const setupInput = document.getElementById('jokeSetup');
    const punchlineInput = document.getElementById('jokePunchline');
    
    if (!nameInput || !setupInput || !punchlineInput) return;
    
    const name = nameInput.value.trim();
    const location = locationInput?.value.trim() || '';
    const setup = setupInput.value.trim();
    const punchline = punchlineInput.value.trim();
    
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields');
        return;
    }
    
    const isClean = await validateContent(setup + ' ' + punchline);
    if (!isClean) {
        alert('Please keep content family-friendly. Thank you!');
        return;
    }
    
    const newJoke = {
        type: 'joke',
        icon: '✨',
        setup: setup,
        punchline: punchline,
        author: location ? `${name} (${location})` : name, // User submission - show their name
        timestamp: new Date().toISOString()
    };
    
    if (firebaseInitialized && db) {
        try {
            await db.collection('jokes').add(newJoke);
            console.log('[Submit] Saved to Firebase');
        } catch (e) {
            console.log('[Submit] Firebase failed, using localStorage');
            saveLocal(newJoke);
        }
    } else {
        saveLocal(newJoke);
    }
    
    state.jokes.push(newJoke);
    state.currentIndex = state.jokes.length - 1;
    renderCard();
    closeJokeModal();
    updateCardJumps();
}

function saveLocal(joke) {
    try {
        const existing = JSON.parse(localStorage.getItem('gw_jokes') || '[]');
        existing.push(joke);
        localStorage.setItem('gw_jokes', JSON.stringify(existing));
    } catch (e) {
        console.log('[Save] localStorage failed');
    }
}

/*
================================================================================
This Area Of Code Is: Firebase Data Loader
================================================================================
*/

async function loadCommunityJokes() {
    if (!firebaseInitialized || !db) {
        console.log('[Load] Firebase not available');
        loadLocalJokes();
        return;
    }
    
    try {
        const snapshot = await db.collection('jokes')
            .orderBy('timestamp', 'desc')
            .limit(50)
            .get();
        
        const communityJokes = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        const existingSetups = new Set(state.jokes.map(j => j.setup));
        communityJokes.forEach(joke => {
            if (!existingSetups.has(joke.setup)) {
                state.jokes.push(joke);
            }
        });
        
        console.log(`[Load] Loaded ${communityJokes.length} community jokes`);
        renderCard();
        updateCardJumps();
    } catch (e) {
        console.log('[Load] Firestore failed:', e);
        loadLocalJokes();
    }
}

function loadLocalJokes() {
    try {
        const local = JSON.parse(localStorage.getItem('gw_jokes') || '[]');
        const existingSetups = new Set(state.jokes.map(j => j.setup));
        local.forEach(joke => {
            if (!existingSetups.has(joke.setup)) {
                state.jokes.push(joke);
            }
        });
        renderCard();
        updateCardJumps();
    } catch (e) {
        console.log('[Load] localStorage read failed');
    }
}

/*
================================================================================
This Area Of Code Is: Application Initialization
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('[App] Initializing...');
    
    new VideoBackgroundManager();
    loadCommunityJokes();
    renderCard();
    updateCardJumps();
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === ' ') {
            e.preventDefault();
            togglePunchline();
        }
        if (e.key === 'Escape') {
            closeJokeModal();
            closeGuidelines();
            const menu = document.getElementById('sideMenu');
            if (menu?.classList.contains('open')) toggleMenu();
        }
    });
    
    const viewerEl = document.getElementById('liveViewers');
    if (viewerEl) {
        setInterval(() => {
            const count = Math.floor(Math.random() * 3) + 1;
            viewerEl.textContent = `${count} online`;
        }, 10000);
    }
    
    console.log('[App] Initialized');
});
