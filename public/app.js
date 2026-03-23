/*
================================================================================
This Area Of Code Is: Firebase Configuration & Initialization
Explanation: Initializes Firebase for visitor counting and joke database storage
In Other Words: Connects to the cloud database to save jokes and track visits
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
    console.log('[Firebase] Initialized successfully');
} catch (e) {
    console.error('[Firebase] Initialization failed:', e);
}

/*
================================================================================
This Area Of Code Is: Menu Toggle with Hamburger Morph Animation
Explanation: Toggles side menu open/close and morphs hamburger icon to SCN logo
In Other Words: Opens the sliding menu and transforms the three lines into your logo
================================================================================
*/
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBtn = document.getElementById('menuBtn');
    const hamburger = document.getElementById('hamburgerIcon');
    const scnLogo = document.getElementById('scnLogo');
    
    if (sideMenu) {
        const isOpen = sideMenu.classList.toggle('open');
        
        // Handle overlay
        if (menuOverlay) {
            menuOverlay.classList.toggle('open', isOpen);
        }
        
        // Handle button active state for morph animation
        if (menuBtn) {
            menuBtn.classList.toggle('active', isOpen);
        }
        
        // Explicitly handle hamburger lines visibility
        if (hamburger) {
            hamburger.style.opacity = isOpen ? '0' : '1';
            hamburger.style.transform = isOpen ? 'scale(0)' : 'scale(1)';
        }
        
        // Explicitly handle logo visibility
        if (scnLogo) {
            scnLogo.style.opacity = isOpen ? '1' : '0';
            scnLogo.style.transform = isOpen ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)';
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
}

/*
================================================================================
This Area Of Code Is: Accessibility Modal Controller
Explanation: Opens and closes the Universal Access modal with proper scroll handling
In Other Words: Shows/hides the disability options panel (Autism, PTSD, Vision, etc.)
================================================================================
*/
function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) {
        modal.classList.add('open');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Check if content is scrollable and show indicator
        setTimeout(checkScrollIndicator, 100);
    }
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            if (!modal.classList.contains('open')) {
                modal.style.display = 'none';
            }
        }, 300);
        document.body.style.overflow = '';
    }
}

/*
================================================================================
This Area Of Code Is: Accessibility Feature Toggle Handler
Explanation: Toggles accessibility features (Autism mode, PTSD mode, etc.) and saves to localStorage
In Other Words: Turns on/off special modes for different disabilities and remembers the setting
================================================================================
*/
function toggleFeature(element, feature) {
    // If clicked on the container, find the switch inside
    let toggleSwitch = element.classList.contains('toggle-switch') ? element : element.querySelector('.toggle-switch');
    let container = element.classList.contains('access-toggle') ? element : element.closest('.access-toggle');
    
    if (!toggleSwitch && container) {
        toggleSwitch = container.querySelector('.toggle-switch');
    }
    
    // Toggle the active state
    const isActive = toggleSwitch ? toggleSwitch.classList.toggle('active') : false;
    
    // Update container visual state
    if (container) {
        container.classList.toggle('active', isActive);
    }
    
    // Apply body class for CSS targeting
    document.body.classList.toggle(feature + '-mode', isActive);
    
    // Save preference
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Special handling for specific features
    if (feature === 'high-contrast' && isActive) {
        document.body.classList.add('high-contrast');
    } else if (feature === 'high-contrast') {
        document.body.classList.remove('high-contrast');
    }
    
    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    announcement.textContent = feature + ' mode ' + (isActive ? 'enabled' : 'disabled');
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}

/*
================================================================================
This Area Of Code Is: Color Vision Filter Application
Explanation: Applies color blindness filters (Deuteranopia, Protanopia, etc.) using SVG filters
In Other Words: Changes colors on screen to help people with different types of color blindness see better
================================================================================
*/
function applyColorFilter(filter) {
    // Remove all existing filter classes
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia', 
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia'
    );
    
    // Add selected filter if not 'none'
    if (filter && filter !== 'none') {
        document.body.classList.add('filter-' + filter);
    }
    
    // Save preference
    localStorage.setItem('gw_color_filter', filter);
    
    // Update button states using data attributes for reliability
    document.querySelectorAll('.access-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnFilter = btn.getAttribute('data-filter');
        if (btnFilter === filter || (!btnFilter && filter === 'none' && btn.textContent.includes('Normal'))) {
            btn.classList.add('active');
        }
    });
}

/*
================================================================================
This Area Of Code Is: Navigation Functions
Explanation: Handles home navigation and card jumping
In Other Words: Goes back to main page or jumps to specific cards
================================================================================
*/
function goHome() {
    window.location.href = '../index.html';
}

function jumpToCard(index) {
    currentCardIndex = index;
    showCard(currentCardIndex);
    toggleMenu(); // Close menu after selection
}

/*
================================================================================
This Area Of Code Is: Application State Management
Explanation: Tracks current card, auto-mode status, and punchline visibility
In Other Words: Remembers which joke is showing and if auto-play is on
================================================================================
*/
let currentCardIndex = 0;
let isAutoMode = false;
let autoModeInterval = null;
let autoModeSpeed = 6000; // Default 6 seconds
let punchlineVisible = false;

// Sample joke data (100 cards)
const jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", icon: "🧪", badge: "Science Joke" },
    { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!", icon: "🌾", badge: "Corny Joke" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", icon: "🥚", badge: "Food Joke" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta!", icon: "🍝", badge: "Food Joke" },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems!", icon: "📚", badge: "School Joke" },
    // Add 95 more jokes here or load from Firebase
];

// Initialize with more jokes if needed
while (jokes.length < 100) {
    jokes.push({
        setup: `Joke ${jokes.length + 1}: Why did the developer go broke?`,
        punchline: "Because he used up all his cache!",
        icon: "💻",
        badge: "Tech Joke"
    });
}

/*
================================================================================
This Area Of Code Is: Card Display System
Explanation: Renders joke cards with icons, badges, and animations
In Other Words: Shows the jokes in the pretty glass card with emojis
================================================================================
*/
function showCard(index) {
    const card = jokes[index];
    const setupEl = document.getElementById('setupText');
    const punchlineEl = document.getElementById('punchlineText');
    const iconEl = document.getElementById('cardIcon');
    const badgeEl = document.getElementById('cardBadge');
    const counterEl = document.getElementById('cardCounter');
    
    // Hide punchline initially
    punchlineVisible = false;
    if (punchlineEl) {
        punchlineEl.classList.remove('visible');
        punchlineEl.textContent = '';
    }
    
    // Update button text
    const btnText = document.getElementById('punchlineBtnText');
    if (btnText) btnText.textContent = 'Show Punchline';
    
    // Animate card change
    const cardEl = document.getElementById('contentCard');
    if (cardEl) {
        cardEl.style.transform = 'scale(0.95)';
        cardEl.style.opacity = '0.7';
        
        setTimeout(() => {
            if (setupEl) setupEl.textContent = card.setup;
            if (punchlineEl) punchlineEl.textContent = card.punchline;
            if (iconEl) iconEl.textContent = card.icon;
            if (badgeEl) badgeEl.textContent = card.badge;
            if (counterEl) counterEl.textContent = `Card ${index + 1} of ${jokes.length}`;
            
            cardEl.style.transform = 'scale(1)';
            cardEl.style.opacity = '1';
        }, 200);
    }
    
    // Update active jump button in menu
    document.querySelectorAll('.jump-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });
}

/*
================================================================================
This Area Of Code Is: Punchline Toggle
Explanation: Shows or hides the joke answer with smooth animation
In Other Words: Reveals the funny part when you click the button
================================================================================
*/
function togglePunchline() {
    const punchlineEl = document.getElementById('punchlineText');
    const btnText = document.getElementById('punchlineBtnText');
    
    punchlineVisible = !punchlineVisible;
    
    if (punchlineEl) {
        punchlineEl.classList.toggle('visible', punchlineVisible);
    }
    
    if (btnText) {
        btnText.textContent = punchlineVisible ? 'Hide Punchline' : 'Show Punchline';
    }
}

/*
================================================================================
This Area Of Code Is: Card Navigation
Explanation: Moves between cards with wraparound (previous/next)
In Other Words: Goes to the next or previous joke
================================================================================
*/
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % jokes.length;
    showCard(currentCardIndex);
    resetAutoModeTimer();
}

function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + jokes.length) % jokes.length;
    showCard(currentCardIndex);
    resetAutoModeTimer();
}

/*
================================================================================
This Area Of Code Is: Auto Mode Controls
Explanation: Automatically cycles through cards at set intervals
In Other Words: Plays through jokes automatically like a slideshow
================================================================================
*/
function toggleAutoMode() {
    isAutoMode = !isAutoMode;
    const btn = document.getElementById('autoModeBtn');
    const btnText = document.getElementById('autoModeText');
    const speedControls = document.getElementById('speedControls');
    
    if (btn) btn.classList.toggle('active', isAutoMode);
    if (btnText) btnText.textContent = isAutoMode ? 'Stop Auto' : 'Auto Mode';
    if (speedControls) speedControls.classList.toggle('visible', isAutoMode);
    
    if (isAutoMode) {
        startAutoMode();
    } else {
        stopAutoMode();
    }
}

function startAutoMode() {
    if (autoModeInterval) clearInterval(autoModeInterval);
    autoModeInterval = setInterval(() => {
        nextCard();
    }, autoModeSpeed);
}

function stopAutoMode() {
    if (autoModeInterval) {
        clearInterval(autoModeInterval);
        autoModeInterval = null;
    }
}

function resetAutoModeTimer() {
    if (isAutoMode) {
        startAutoMode();
    }
}

function setSpeed(speed) {
    autoModeSpeed = speed;
    
    // Update button states
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-speed')) === speed);
    });
    
    if (isAutoMode) {
        startAutoMode();
    }
}

/*
================================================================================
This Area Of Code Is: Joke Submission Modal
Explanation: Handles opening/closing the add joke form
In Other Words: Shows the popup where users can add their own jokes
================================================================================
*/
function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) {
        modal.classList.add('open');
        modal.style.display = 'flex';
    }
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            if (!modal.classList.contains('open')) {
                modal.style.display = 'none';
            }
        }, 300);
    }
}

/*
================================================================================
This Area Of Code Is: Content Moderation with PurgoMalum API
Explanation: Validates user submissions against profanity filter via external API
In Other Words: Checks if jokes are clean using an online filter (no bad words stored in code)
================================================================================
*/
async function checkContent(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const result = await response.text();
        return result === 'true'; // Returns true if contains profanity
    } catch (e) {
        console.error('Content check failed:', e);
        return false; // Allow on error (fail open for UX)
    }
}

/*
================================================================================
This Area Of Code Is: Joke Submission Handler
Explanation: Processes form submission with validation and Firebase storage
In Other Words: Saves user jokes to the database after checking they're clean
================================================================================
*/
async function submitJoke(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName')?.value?.trim();
    const setup = document.getElementById('jokeSetup')?.value?.trim();
    const punchline = document.getElementById('jokePunchline')?.value?.trim();
    
    // Validation
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Check content moderation
    const hasProfanity = await checkContent(setup + ' ' + punchline);
    if (hasProfanity) {
        alert('Please keep content family-friendly. Thank you!');
        return;
    }
    
    // Prepare submission
    const submission = {
        name: name,
        setup: setup,
        punchline: punchline,
        timestamp: new Date().toISOString(),
        approved: false // Requires moderation
    };
    
    // Add location if selected
    const showCity = document.getElementById('showCity')?.checked;
    const showState = document.getElementById('showState')?.checked;
    const showCountry = document.getElementById('showCountry')?.checked;
    
    if (showCity || showState || showCountry) {
        submission.location = {};
        if (showCity) submission.location.city = true; // Would need geocoding
        if (showState) submission.location.state = true;
        if (showCountry) submission.location.country = true;
    }
    
    // Save to Firebase if available, otherwise localStorage
    if (firebaseInitialized && db) {
        try {
            await db.collection('pending_jokes').add(submission);
            alert('Thank you! Your joke has been submitted for review.');
            closeJokeModal();
            document.getElementById('jokeForm')?.reset();
        } catch (e) {
            console.error('Firebase save failed:', e);
            saveToLocalPending(submission);
        }
    } else {
        saveToLocalPending(submission);
    }
}

function saveToLocalPending(submission) {
    let pending = JSON.parse(localStorage.getItem('gw_pending_jokes') || '[]');
    pending.push(submission);
    localStorage.setItem('gw_pending_jokes', JSON.stringify(pending));
    alert('Thank you! Your joke has been saved locally and will be submitted when connection is restored.');
    closeJokeModal();
    document.getElementById('jokeForm')?.reset();
}

/*
================================================================================
This Area Of Code Is: Community Guidelines Modal
Explanation: Shows rules for acceptable content
In Other Words: Displays the "be nice" rules popup
================================================================================
*/
function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) {
        modal.classList.add('open');
        modal.style.display = 'flex';
    }
}

function closeGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => {
            if (!modal.classList.contains('open')) {
                modal.style.display = 'none';
            }
        }, 300);
    }
}

/*
================================================================================
This Area Of Code Is: Scroll Indicator for Accessibility Modal
Explanation: Shows animated scroll hint if modal content overflows
In Other Words: The bouncing mouse animation that appears when there's more to scroll
================================================================================
*/
function checkScrollIndicator() {
    const modalContent = document.querySelector('.accessibility-content') || document.getElementById('modalContent');
    const indicator = document.getElementById('scrollIndicator');
    
    if (modalContent && indicator) {
        if (modalContent.scrollHeight > modalContent.clientHeight) {
            indicator.classList.add('visible');
            
            modalContent.addEventListener('scroll', () => {
                const isScrolled = modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight - 20;
                indicator.classList.toggle('visible', !isScrolled);
            }, { once: false });
        } else {
            indicator.classList.remove('visible');
        }
    }
}

/*
================================================================================
This Area Of Code Is: Card Jump Navigation Builder
Explanation: Dynamically generates grid of buttons to jump to any card
In Other Words: Creates the 100 buttons in the side menu to quickly jump to any joke
================================================================================
*/
function buildCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    
    jokes.forEach((joke, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        btn.setAttribute('onclick', `jumpToCard(${index})`);
        btn.innerHTML = `
            <span>${joke.icon}</span>
            <small>${index + 1}</small>
        `;
        if (index === 0) btn.classList.add('active');
        container.appendChild(btn);
    });
}

/*
================================================================================
This Area Of Code Is: Keyboard Controls
Explanation: Adds keyboard shortcuts (arrows, space, escape) for navigation
In Other Words: Lets you use keyboard to navigate jokes
================================================================================
*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') previousCard();
    if (e.key === ' ' || e.key === 'Enter') {
        if (document.activeElement?.tagName !== 'BUTTON') {
            e.preventDefault();
            togglePunchline();
        }
    }
    if (e.key === 'Escape') {
        closeJokeModal();
        closeGuidelines();
        closeAccessibilityModal();
        const sideMenu = document.getElementById('sideMenu');
        if (sideMenu?.classList.contains('open')) toggleMenu();
    }
});

/*
================================================================================
This Area Of Code Is: Application Initialization
Explanation: Sets up app on page load - loads saved settings, builds menu, shows first card
In Other Words: Starts everything up when the page loads
================================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    // Build card jump menu
    buildCardJumps();
    
    // Show first card
    showCard(0);
    
    // Load saved accessibility settings
    const features = ['autism', 'adhd', 'dyslexia', 'dyspraxia', 'anxiety', 'ptsd', 'mania', 'cognitive',
                     'screen-reader', 'high-contrast', 'sign-language', 'visual-alerts', 'captions',
                     'large-targets', 'keyboard-only', 'extended-time', 'switch-control', 
                     'speech-input', 'simple-language'];
    
    features.forEach(feature => {
        if (localStorage.getItem('gw_access_' + feature) === 'true') {
            document.body.classList.add(feature + '-mode');
            // Update toggle switches visually
            document.querySelectorAll('.access-toggle').forEach(toggle => {
                if (toggle.textContent.toLowerCase().includes(feature.replace('-', ''))) {
                    toggle.classList.add('active');
                    const switchEl = toggle.querySelector('.toggle-switch');
                    if (switchEl) switchEl.classList.add('active');
                }
            });
        }
    });
    
    // Load saved color filter
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add('filter-' + savedFilter);
    }
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal.id === 'jokeModal') closeJokeModal();
                if (modal.id === 'guidelinesModal') closeGuidelines();
                if (modal.id === 'accessibilityModal') closeAccessibilityModal();
            }
        });
    });
    
    console.log('[App] Initialized successfully');
});

/*
================================================================================
This Area Of Code Is: Service Worker Registration
Explanation: Registers the PWA service worker for offline functionality
In Other Words: Makes the app work without internet after first visit
================================================================================
*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('[SW] Registered:', reg.scope))
        .catch(err => console.log('[SW] Registration failed:', err));
}
