/*
================================================================================
This Area Of Code Is: Firebase Configuration
Explanation: I initialized Firebase with the provided configuration for Firestore database to store and retrieve user-submitted jokes persistently.
In Other Words: This connects to the cloud database.
================================================================================
*/

const firebaseConfig = {
    apiKey: "AIzaSyDieVA5y_pag35ZVh8P8Pul68sZ_2qtEGU",
    authDomain: "growing-get-well-card.firebaseapp.com",
    projectId: "growing-get-well-card",
    storageBucket: "growing-get-well-card.firebasestorage.app",
    messagingSenderId: "615025378529",
    appId: "1:615025378529:web:38e3801c79f54d852623a0",
    measurementId: "G-REK99P3EKW"
};

// Initialize Firebase safely
let db;
let firebaseInitialized = false;

try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        firebaseInitialized = true;
        console.log('Firebase initialized successfully');
    }
} catch (e) {
    console.log('Firebase init failed:', e);
}

/*
================================================================================
This Area Of Code Is: Content Data
Explanation: I created a diverse array of 24 initial cards including jokes, prayers, Bible verses, and encouragement messages to surprise users with variety.
In Other Words: These are the starting cards that load immediately.
================================================================================
*/

const initialCards = [
    {
        type: 'joke',
        icon: '🧪',
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!",
        author: null
    },
    {
        type: 'prayer',
        icon: '🙏',
        setup: "A Prayer for Healing",
        punchline: "May the Lord bless you and keep you. May His face shine upon you and give you peace. Numbers 6:24-26",
        author: null
    },
    {
        type: 'joke',
        icon: '🐻',
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '💪',
        setup: "You Are Stronger Than You Know",
        punchline: "The same power that raised Christ from the dead is living in you. Romans 8:11",
        author: null
    },
    {
        type: 'joke',
        icon: '🍞',
        setup: "Why don't eggs tell jokes?",
        punchline: "They'd crack each other up!",
        author: null
    },
    {
        type: 'prayer',
        icon: '🕊️',
        setup: "Peace Be With You",
        punchline: "Cast all your anxiety on Him because He cares for you. 1 Peter 5:7",
        author: null
    },
    {
        type: 'joke',
        icon: '🎸',
        setup: "What do you call a bear with no teeth?",
        punchline: "A gummy bear!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '🌟',
        setup: "This Too Shall Pass",
        punchline: "Weeping may stay for the night, but rejoicing comes in the morning. Psalm 30:5",
        author: null
    },
    {
        type: 'joke',
        icon: '🐄',
        setup: "What do you call a cow with no legs?",
        punchline: "Ground beef!",
        author: null
    },
    {
        type: 'prayer',
        icon: '🌈',
        setup: "Hope for Tomorrow",
        punchline: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you. Jeremiah 29:11",
        author: null
    },
    {
        type: 'joke',
        icon: '⏰',
        setup: "Why did the tomato turn red?",
        punchline: "Because it saw the salad dressing!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '❤️',
        setup: "You Are Loved",
        punchline: "I have loved you with an everlasting love. Jeremiah 31:3",
        author: null
    },
    {
        type: 'joke',
        icon: '🐧',
        setup: "What do you call a penguin in the desert?",
        punchline: "Lost!",
        author: null
    },
    {
        type: 'prayer',
        icon: '✝️',
        setup: "Strength in Weakness",
        punchline: "My grace is sufficient for you, for my power is made perfect in weakness. 2 Corinthians 12:9",
        author: null
    },
    {
        type: 'joke',
        icon: '🍕',
        setup: "What's a pizza's favorite movie?",
        punchline: "Pie Hard!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '🦋',
        setup: "New Beginnings",
        punchline: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! 2 Corinthians 5:17",
        author: null
    },
    {
        type: 'joke',
        icon: '🐘',
        setup: "Why don't elephants use computers?",
        punchline: "They're afraid of the mouse!",
        author: null
    },
    {
        type: 'prayer',
        icon: '🕯️',
        setup: "Light in Darkness",
        punchline: "The Lord is my light and my salvation—whom shall I fear? Psalm 27:1",
        author: null
    },
    {
        type: 'joke',
        icon: '📚',
        setup: "Why did the book go to the doctor?",
        punchline: "It had a bad case of the spine!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '🌻',
        setup: "Keep Going",
        punchline: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Galatians 6:9",
        author: null
    },
    {
        type: 'joke',
        icon: '🐱',
        setup: "What do you call a pile of cats?",
        punchline: "A meowtain!",
        author: null
    },
    {
        type: 'prayer',
        icon: '🌊',
        setup: "Peace Like a River",
        punchline: "Peace I leave with you; my peace I give you. John 14:27",
        author: null
    },
    {
        type: 'joke',
        icon: '🎈',
        setup: "Why did the balloon go near the needle?",
        punchline: "It wanted to be a pop star!",
        author: null
    },
    {
        type: 'encouragement',
        icon: '🏔️',
        setup: "Faith Over Fear",
        punchline: "Even though I walk through the darkest valley, I will fear no evil, for you are with me. Psalm 23:4",
        author: null
    }
];

/*
================================================================================
This Area Of Code Is: State Management
Explanation: I initialized application state variables to track current card index, punchline visibility, auto-mode status, and timing preferences.
In Other Words: These variables remember what the user is doing.
================================================================================
*/

let cards = [...initialCards];
let currentIndex = 0;
let punchlineVisible = false;
let autoMode = false;
let autoInterval = null;
let autoSpeed = 6000; // Default Medium (6 seconds)
let punchlineTimer = null;

// Load user cards from localStorage on init
try {
    const savedJokes = JSON.parse(localStorage.getItem('gw_user_jokes') || '[]');
    if (savedJokes.length > 0) {
        cards = [...initialCards, ...savedJokes];
    }
} catch (e) {
    console.log('Could not load saved jokes');
}

/*
================================================================================
This Area Of Code Is: DOM Element References
Explanation: I cached references to DOM elements with null checks to prevent errors if elements are missing.
In Other Words: This grabs all the HTML elements I need to control.
================================================================================
*/

const elements = {
    cardContainer: document.getElementById('cardContainer'),
    contentCard: document.getElementById('contentCard'),
    cardBadge: document.getElementById('cardBadge'),
    cardIcon: document.getElementById('cardIcon'),
    setupText: document.getElementById('setupText'),
    punchlineText: document.getElementById('punchlineText'),
    punchlineBtn: document.getElementById('punchlineBtn'),
    cardCounter: document.getElementById('cardCounter'),
    authorInfo: document.getElementById('authorInfo'),
    autoModeBtn: document.getElementById('autoModeBtn'),
    autoModeText: document.getElementById('autoModeText'),
    speedControls: document.getElementById('speedControls'),
    menuBtn: document.getElementById('menuBtn'),
    sideMenu: document.getElementById('sideMenu'),
    menuOverlay: document.getElementById('menuOverlay'),
    cardJumps: document.getElementById('cardJumps'),
    jokeModal: document.getElementById('jokeModal'),
    guidelinesModal: document.getElementById('guidelinesModal'),
    liveViewers: document.getElementById('liveViewers'),
    totalCards: document.getElementById('totalCards'),
    hamburgerIcon: document.getElementById('hamburgerIcon'),
    scnLogo: document.getElementById('scnLogo')
};

/*
================================================================================
This Area Of Code Is: Initialization
Explanation: I set up the initial app state when the DOM loads, displaying the first card immediately and setting up event listeners.
In Other Words: This starts the app when the page loads.
================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    // Display first card immediately
    showCard(0);
    populateMenu();
    updateStats();
    startViewerCounter();
    
    // Setup keyboard controls
    document.addEventListener('keydown', handleKeyboard);
    
    // Load draft if exists
    loadDraft();
    
    // Setup auto-save
    setupAutoSave();
    
    // Setup video error handling
    const video = document.getElementById('appBgVideo');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video failed, using fallback');
            video.style.display = 'none';
        });
    }
});

/*
================================================================================
This Area Of Code Is: Card Display Functions
Explanation: I created functions to safely update the card display with null checks, animations, and content formatting.
In Other Words: This shows the current joke or message.
================================================================================
*/

function showCard(index) {
    if (!elements.contentCard) return;
    
    // Handle bounds
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    
    currentIndex = index;
    punchlineVisible = false;
    
    const card = cards[index];
    
    // Update content with animation
    elements.contentCard.style.opacity = '0';
    elements.contentCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Set badge and icon
        if (elements.cardBadge) {
            elements.cardBadge.textContent = card.type.toUpperCase();
        }
        if (elements.cardIcon) {
            elements.cardIcon.textContent = card.icon || '📋';
        }
        
        // Set text content
        if (elements.setupText) {
            elements.setupText.textContent = card.setup;
        }
        if (elements.punchlineText) {
            elements.punchlineText.textContent = card.punchline;
            elements.punchlineText.classList.remove('visible');
        }
        
        // Update counter
        if (elements.cardCounter) {
            elements.cardCounter.textContent = `Card ${index + 1} of ${cards.length}`;
        }
        
        // Update author info
        updateAuthorInfo(card);
        
        // Update punchline button
        if (elements.punchlineBtn) {
            elements.punchlineBtn.textContent = 'Show Punchline';
        }
        
        // Fade back in
        elements.contentCard.style.opacity = '1';
        elements.contentCard.style.transform = 'scale(1)';
        
        // Update menu active state
        updateMenuActive();
        
    }, 200);
}

function updateAuthorInfo(card) {
    if (!elements.authorInfo) return;
    
    if (card.author && card.author.name) {
        let locationParts = [];
        if (card.author.showCity && card.author.city) locationParts.push(card.author.city);
        if (card.author.showState && card.author.state) locationParts.push(card.author.state);
        if (card.author.showCountry && card.author.country) locationParts.push(card.author.country);
        
        const location = locationParts.join(', ');
        const flag = getFlagEmoji(location) || '📍';
        
        elements.authorInfo.innerHTML = `
            <span class="author-flag">${flag}</span>
            <span class="author-name">Added by ${card.author.name}${location ? ' from ' + location : ''}</span>
        `;
    } else {
        elements.authorInfo.innerHTML = '';
    }
}

function getFlagEmoji(location) {
    // Simple flag mapping for common countries
    const flags = {
        'usa': '🇺🇸', 'united states': '🇺🇸', 'america': '🇺🇸',
        'uk': '🇬🇧', 'united kingdom': '🇬🇧', 'britain': '🇬🇧',
        'canada': '🇨🇦', 'mexico': '🇲🇽', 'france': '🇫🇷',
        'germany': '🇩🇪', 'italy': '🇮🇹', 'spain': '🇪🇸',
        'brazil': '🇧🇷', 'argentina': '🇦🇷', 'australia': '🇦🇺',
        'japan': '🇯🇵', 'china': '🇨🇳', 'india': '🇮🇳',
        'nigeria': '🇳🇬', 'south africa': '🇿🇦', 'kenya': '🇰🇪',
        'philippines': '🇵🇭', 'south korea': '🇰🇷', 'thailand': '🇹🇭'
    };
    
    const lower = location.toLowerCase();
    for (const [country, flag] of Object.entries(flags)) {
        if (lower.includes(country)) return flag;
    }
    return '🌎';
}

/*
================================================================================
This Area Of Code Is: Navigation Controls
Explanation: I implemented next/previous functions with modulo arithmetic for infinite looping and animation effects.
In Other Words: This handles the Back and Next buttons.
================================================================================
*/

function nextCard() {
    showCard(currentIndex + 1);
    resetAutoTimer();
}

function previousCard() {
    showCard(currentIndex - 1);
    resetAutoTimer();
}

function togglePunchline() {
    if (!elements.punchlineText || !elements.punchlineBtn) return;
    
    punchlineVisible = !punchlineVisible;
    
    if (punchlineVisible) {
        elements.punchlineText.classList.add('visible');
        elements.punchlineBtn.textContent = 'Hide Punchline';
        
        // Auto-hide after delay if auto mode is on
        if (autoMode) {
            clearTimeout(punchlineTimer);
            punchlineTimer = setTimeout(() => {
                if (punchlineVisible) togglePunchline();
            }, Math.min(autoSpeed * 0.4, 3000)); // Show punchline for 40% of interval or max 3s
        }
    } else {
        elements.punchlineText.classList.remove('visible');
        elements.punchlineBtn.textContent = 'Show Punchline';
    }
    
    resetAutoTimer();
}

/*
================================================================================
This Area Of Code Is: Auto Mode System
Explanation: I built an auto-rotation system with three speed settings (3.5s, 6s, 8s) that cycles through cards, shows punchlines automatically, and provides visual feedback.
In Other Words: This makes the cards flip by themselves at chosen speeds.
================================================================================
*/

function toggleAutoMode() {
    autoMode = !autoMode;
    
    if (autoMode) {
        elements.autoModeBtn.classList.add('active');
        elements.autoModeText.textContent = 'Stop Auto';
        elements.speedControls.classList.add('visible');
        startAutoPlay();
    } else {
        elements.autoModeBtn.classList.remove('active');
        elements.autoModeText.textContent = 'Auto Mode';
        elements.speedControls.classList.remove('visible');
        stopAutoPlay();
    }
}

function startAutoPlay() {
    stopAutoPlay(); // Clear any existing
    
    // Show first punchline immediately if hidden
    if (!punchlineVisible) {
        setTimeout(() => togglePunchline(), 1000);
    }
    
    autoInterval = setInterval(() => {
        // Hide current punchline
        if (punchlineVisible) togglePunchline();
        
        // Wait a moment then next card
        setTimeout(() => {
            nextCard();
            // Show punchline after card change
            setTimeout(() => {
                if (!punchlineVisible) togglePunchline();
            }, 1500);
        }, 500);
        
    }, autoSpeed);
}

function stopAutoPlay() {
    if (autoInterval) {
        clearInterval(autoInterval);
        autoInterval = null;
    }
    clearTimeout(punchlineTimer);
}

function setSpeed(ms) {
    autoSpeed = ms;
    
    // Update UI
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === ms) {
            btn.classList.add('active');
        }
    });
    
    // Restart if running
    if (autoMode) {
        startAutoPlay();
    }
}

function resetAutoTimer() {
    if (autoMode) {
        startAutoPlay();
    }
}

/*
================================================================================
This Area Of Code Is: Menu System
Explanation: I created a slide-out side menu with hamburger icon that transforms into the SCN logo when clicked, populated with jump-to-card shortcuts.
In Other Words: This opens the menu and changes ☰ into <SCN/>™.
================================================================================
*/

function toggleMenu() {
    const isOpen = elements.sideMenu.classList.contains('open');
    
    if (isOpen) {
        elements.sideMenu.classList.remove('open');
        elements.menuOverlay.classList.remove('open');
        elements.menuBtn.classList.remove('active');
    } else {
        elements.sideMenu.classList.add('open');
        elements.menuOverlay.classList.add('open');
        elements.menuBtn.classList.add('active');
        populateMenu();
    }
}

function populateMenu() {
    if (!elements.cardJumps) return;
    
    elements.cardJumps.innerHTML = '';
    
    cards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        btn.innerHTML = `${card.icon || '📋'} Card ${index + 1}`;
        btn.onclick = () => {
            showCard(index);
            toggleMenu();
        };
        
        if (index === currentIndex) {
            btn.classList.add('active');
        }
        
        elements.cardJumps.appendChild(btn);
    });
}

function updateMenuActive() {
    document.querySelectorAll('.jump-btn').forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function goHome() {
    window.location.href = '../index.html';
}

/*
================================================================================
This Area Of Code Is: Joke Submission Modal
Explanation: I implemented a modal form for users to submit jokes with name, location (with privacy options), content validation via PurgoMalum API, and Firebase storage.
In Other Words: This opens the form to add new jokes.
================================================================================
*/

function openJokeModal() {
    if (elements.jokeModal) {
        elements.jokeModal.classList.add('open');
        loadDraft();
    }
}

function closeJokeModal() {
    if (elements.jokeModal) {
        elements.jokeModal.classList.remove('open');
    }
}

function showGuidelines() {
    if (elements.guidelinesModal) {
        elements.guidelinesModal.classList.add('open');
    }
}

function closeGuidelines() {
    if (elements.guidelinesModal) {
        elements.guidelinesModal.classList.remove('open');
    }
}

/*
================================================================================
This Area Of Code Is: Content Moderation
Explanation: I integrated the PurgoMalum API to check for profanity before allowing submission, keeping the app clean and safe.
In Other Words: This checks if words are bad before saving.
================================================================================
*/

async function checkContent(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/json?text=${encodeURIComponent(text)}`);
        const data = await response.json();
        return {
            clean: !data.result.includes('*'),
            filtered: data.result
        };
    } catch (e) {
        console.log('Content check failed, allowing:', e);
        return { clean: true, filtered: text };
    }
}

/*
================================================================================
This Area Of Code Is: Form Submission
Explanation: I handle joke form submission with validation, content checking, Firebase storage, local backup, and immediate UI update.
In Other Words: This saves the new joke when Submit is clicked.
================================================================================
*/

async function submitJoke(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName')?.value?.trim();
    const location = document.getElementById('userLocation')?.value?.trim();
    const setup = document.getElementById('jokeSetup')?.value?.trim();
    const punchline = document.getElementById('jokePunchline')?.value?.trim();
    
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Check content
    const setupCheck = await checkContent(setup);
    const punchlineCheck = await checkContent(punchline);
    
    if (!setupCheck.clean || !punchlineCheck.clean) {
        alert('Please keep content family-friendly and clean. Thank you!');
        return;
    }
    
    // Parse location
    const locParts = location.split(',').map(p => p.trim());
    const jokeData = {
        type: 'joke',
        icon: '💬',
        setup: setup,
        punchline: punchline,
        author: {
            name: name,
            city: locParts[0] || '',
            state: locParts[1] || '',
            country: locParts[2] || '',
            showCity: document.getElementById('showCity')?.checked ?? true,
            showState: document.getElementById('showState')?.checked ?? true,
            showCountry: document.getElementById('showCountry')?.checked ?? true
        },
        timestamp: new Date().toISOString()
    };
    
    // Add to local array immediately
    cards.push(jokeData);
    
    // Save to localStorage
    try {
        const userJokes = JSON.parse(localStorage.getItem('gw_user_jokes') || '[]');
        userJokes.push(jokeData);
        localStorage.setItem('gw_user_jokes', JSON.stringify(userJokes));
    } catch (e) {
        console.log('Could not save to localStorage');
    }
    
    // Try Firebase
    if (firebaseInitialized && db) {
        try {
            await db.collection('jokes').add(jokeData);
            console.log('Saved to Firebase');
        } catch (e) {
            console.log('Firebase save failed, kept local:', e);
        }
    }
    
    // Clear draft
    clearDraft();
    
    // Close modal and show new card
    closeJokeModal();
    showCard(cards.length - 1);
    updateStats();
    populateMenu();
    
    // Show success
    setTimeout(() => {
        alert('Thank you for your submission! 🎉');
    }, 300);
}

/*
================================================================================
This Area Of Code Is: Draft Auto-Save
Explanation: I implemented automatic saving of form inputs to localStorage as the user types, restoring them when the modal reopens.
In Other Words: This remembers what you typed if you close the form by accident.
================================================================================
*/

function setupAutoSave() {
    const fields = ['userName', 'userLocation', 'jokeSetup', 'jokePunchline'];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', () => {
                try {
                    const draft = JSON.parse(localStorage.getItem('gw_draft') || '{}');
                    draft[fieldId] = field.value;
                    localStorage.setItem('gw_draft', JSON.stringify(draft));
                } catch (e) {}
            });
        }
    });
}

function loadDraft() {
    try {
        const draft = JSON.parse(localStorage.getItem('gw_draft') || '{}');
        Object.keys(draft).forEach(key => {
            const field = document.getElementById(key);
            if (field && draft[key]) {
                field.value = draft[key];
            }
        });
    } catch (e) {}
}

function clearDraft() {
    try {
        localStorage.removeItem('gw_draft');
        ['userName', 'userLocation', 'jokeSetup', 'jokePunchline'].forEach(id => {
            const field = document.getElementById(id);
            if (field) field.value = '';
        });
    } catch (e) {}
}

/*
================================================================================
This Area Of Code Is: Statistics & Counters
Explanation: I created functions to update viewer counts and card totals with simulated real-time updates.
In Other Words: This updates the "1 online" and "24 cards" numbers.
================================================================================
*/

function updateStats() {
    if (elements.totalCards) {
        elements.totalCards.textContent = `${cards.length} cards`;
    }
}

function startViewerCounter() {
    // Simulate live viewers
    let viewers = 1;
    
    setInterval(() => {
        // Random fluctuation
        const change = Math.random() > 0.5 ? 1 : -1;
        viewers = Math.max(1, viewers + (Math.random() > 0.7 ? change : 0));
        
        if (elements.liveViewers) {
            elements.liveViewers.textContent = `${viewers} online`;
        }
    }, 5000);
}

/*
================================================================================
This Area Of Code Is: Keyboard Controls
Explanation: I added keyboard event listeners for accessibility (arrow keys, space, escape) to navigate the app without touch/mouse.
In Other Words: This lets you use arrow keys to change cards.
================================================================================
*/

function handleKeyboard(e) {
    if (elements.jokeModal?.classList.contains('open')) {
        if (e.key === 'Escape') closeJokeModal();
        return;
    }
    
    switch(e.key) {
        case 'ArrowRight':
            nextCard();
            break;
        case 'ArrowLeft':
            previousCard();
            break;
        case ' ':
        case 'Enter':
            e.preventDefault();
            togglePunchline();
            break;
        case 'Escape':
            if (elements.sideMenu?.classList.contains('open')) {
                toggleMenu();
            }
            break;
    }
}
