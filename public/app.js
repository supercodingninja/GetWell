/*
================================================================================
This Area Of Code Is: Immediate Content Display System
Explanation: I restructured this to display jokes immediately without waiting 
for Firebase, since mobile browsers can be finicky with external connections. 
The local jokes display first, then Firebase adds more in the background if 
available. This ensures users see content within milliseconds, not seconds.
In Other Words: This shows the jokes right away without waiting for internet, 
so you never see "Loading" stuck on the screen.
================================================================================
*/

// IMMEDIATE DISPLAY: Local jokes that work 100% offline
const localJokes = [
    { type: 'joke', icon: '🧪', title: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { type: 'joke', icon: '🍝', title: "What do you call a fake noodle?", punchline: "An impasta!" },
    { type: 'joke', icon: '☕', title: "Why did the coffee file a police report?", punchline: "It got mugged!" },
    { type: 'joke', icon: '🐧', title: "How does a penguin build its house?", punchline: "Igloos it together!" },
    { type: 'joke', icon: '🥚', title: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
    { type: 'joke', icon: '🐻', title: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
    { type: 'joke', icon: '🌾', title: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!" },
    { type: 'joke', icon: '🪵', title: "What's brown and sticky?", punchline: "A stick!" },
    { type: 'joke', icon: '❄️', title: "Why can't you give Elsa a balloon?", punchline: "She'll let it go!" },
    { type: 'joke', icon: '🧀', title: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
    { type: 'joke', icon: '📚', title: "Why did the math book look sad?", punchline: "It had too many problems!" },
    { type: 'joke', icon: '🦕', title: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" },
    { type: 'joke', icon: '🚲', title: "Why did the bicycle fall over?", punchline: "It was two-tired!" },
    { type: 'joke', icon: '🐱', title: "What do you call a pile of cats?", punchline: "A meow-tain!" },
    { type: 'joke', icon: '💀', title: "Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
    { type: 'joke', icon: '🪃', title: "What do you call a boomerang that won't come back?", punchline: "A stick!" },
    { type: 'joke', icon: '🌊', title: "What did the ocean say to the shore?", punchline: "Nothing, it just waved!" },
    { type: 'church', icon: '⛪', title: "The church isn't the same without you. We can't wait to see you back with us!", punchline: "", isOriginal: true },
    { type: 'honor', icon: '🇺🇸', title: "Just like our veterans, you're showing incredible courage. Thank you for your strength.", punchline: "", isOriginal: true },
    { type: 'courage', icon: '🦁', title: "The Lord is with you. Be strong and courageous!", punchline: "", isOriginal: true },
    { type: 'prayer', icon: '✝️', title: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.', punchline: '', isOriginal: true },
    { type: 'encouragement', icon: '💪', title: "Tough times don't last, but tough people do. You are stronger than you know.", punchline: '', isOriginal: true },
    { type: 'encouragement', icon: '🕊️', title: "May the God of hope fill you with all joy and peace as you trust in Him.", punchline: '', isOriginal: true },
    { type: 'encouragement', icon: '🙏', title: "You are braver than you believe, stronger than you seem, and loved more than you know.", punchline: '', isOriginal: true }
];

// State management
let cards = [...localJokes]; // Start with local jokes immediately
let currentIndex = 0;
let punchlineVisible = false;
let autoMode = false;
let autoInterval = null;
let autoSpeed = 5000;
let db = null;
let firebaseInitialized = false;

/*
================================================================================
This Area Of Code Is: Instant Display Function
Explanation: I created this to render the first joke immediately when the page 
loads, replacing the "Loading..." text within the first millisecond. This 
prevents the stuck loading screen issue on mobile browsers.
In Other Words: This puts the first joke on screen instantly so you never see 
"Loading...".
================================================================================
*/
function showFirstJokeImmediately() {
    const card = cards[0];
    const titleEl = document.getElementById('cardTitle');
    const iconEl = document.getElementById('cardIcon');
    const badgeEl = document.getElementById('cardTypeBadge');
    const punchlineEl = document.getElementById('cardPunchline');
    const numberEl = document.getElementById('cardNumber');
    const totalEl = document.getElementById('totalCards');
    
    if (titleEl) titleEl.textContent = card.title;
    if (iconEl) iconEl.textContent = card.icon;
    if (badgeEl) badgeEl.textContent = card.type;
    if (punchlineEl) {
        punchlineEl.textContent = card.punchline || '';
        punchlineEl.style.opacity = '0';
    }
    if (numberEl) numberEl.textContent = '1';
    if (totalEl) totalEl.textContent = cards.length;
}

/*
================================================================================
This Area Of Code Is: Firebase Optional Loader
Explanation: I moved Firebase initialization to a separate non-blocking function. 
If it works, great - we get cloud jokes. If it fails or is slow, the local 
jokes are already displaying and working perfectly. This ensures the app is 
functional regardless of internet quality.
In Other Words: This tries to get internet jokes in the background, but doesn't 
stop the local jokes from working if the internet is bad.
================================================================================
*/
function initFirebase() {
    try {
        const firebaseConfig = {
            apiKey: "AIzaSyDieVA5y_pag35ZVh8P8Pul68sZ_2qtEGU",
            authDomain: "growing-get-well-card.firebaseapp.com",
            projectId: "growing-get-well-card",
            storageBucket: "growing-get-well-card.firebasestorage.app",
            messagingSenderId: "615025378529",
            appId: "1:615025378529:web:38e3801c79f54d852623a0",
            measurementId: "G-REK99P3EKW"
        };
        
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            firebaseInitialized = true;
            console.log("Firebase ready - loading cloud jokes");
            loadCloudJokes();
        }
    } catch (e) {
        console.log("Firebase not available - using local jokes only");
    }
}

/*
================================================================================
This Area Of Code Is: Cloud Jokes Loader
Explanation: This fetches additional jokes from Firebase in the background and 
adds them to the existing local jokes. It doesn't replace the local ones, just 
adds to them. If it fails, the user already has 24 jokes working perfectly.
In Other Words: This gets extra jokes from the internet and adds them to the 
list, but only if it can connect.
================================================================================
*/
async function loadCloudJokes() {
    if (!db) return;
    try {
        const snapshot = await db.collection('jokes').orderBy('timestamp', 'desc').get();
        snapshot.forEach(doc => {
            const data = doc.data();
            cards.push({
                type: 'joke',
                icon: '😄',
                title: data.setup,
                punchline: data.punchline,
                author: data.name,
                location: data.location,
                isUserAdded: true
            });
        });
        // Update display to show new total, but don't change current joke
        updateDisplay();
        populateMenu();
    } catch (e) {
        console.error("Cloud jokes failed:", e);
    }
}

/*
================================================================================
This Area Of Code Is: Main Display Updater
Explanation: I ensured this function safely handles DOM elements by checking 
if they exist before trying to update them. This prevents crashes if the 
HTML structure varies or loads slowly on mobile.
In Other Words: This updates what's on screen, but checks that each piece 
exists first so it doesn't crash if something is missing.
================================================================================
*/
function updateDisplay() {
    if (!cards[currentIndex]) return;
    
    const card = cards[currentIndex];
    const badgeEl = document.getElementById('cardTypeBadge');
    const iconEl = document.getElementById('cardIcon');
    const titleEl = document.getElementById('cardTitle');
    const punchlineEl = document.getElementById('cardPunchline');
    const numberEl = document.getElementById('cardNumber');
    const totalEl = document.getElementById('totalCards');
    const btnEl = document.getElementById('punchlineBtn');
    
    if (badgeEl) {
        if (card.isUserAdded) {
            badgeEl.textContent = `Added by ${card.author} from ${card.location}`;
        } else {
            badgeEl.textContent = card.type;
        }
    }
    
    if (iconEl) iconEl.textContent = card.icon;
    if (titleEl) titleEl.textContent = card.title;
    
    if (punchlineEl) {
        punchlineEl.textContent = card.punchline || '';
        punchlineEl.style.opacity = punchlineVisible && card.punchline ? '1' : '0';
    }
    
    if (numberEl) numberEl.textContent = currentIndex + 1;
    if (totalEl) totalEl.textContent = cards.length;
    if (btnEl) btnEl.textContent = punchlineVisible ? 'Hide Punchline' : 'Show Punchline';
}

function togglePunchline() {
    punchlineVisible = !punchlineVisible;
    updateDisplay();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    punchlineVisible = false;
    updateDisplay();
}

function previousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    punchlineVisible = false;
    updateDisplay();
}

function toggleAuto() {
    autoMode = !autoMode;
    const btn = document.getElementById('autoBtn');
    const speedControls = document.getElementById('speedControls');
    
    if (!btn) return;
    
    if (autoMode) {
        btn.classList.add('auto-active');
        btn.innerHTML = '<i class="ph ph-pause-circle" id="autoIcon"></i> Stop Auto';
        if (speedControls) speedControls.classList.remove('hidden');
        startAuto();
    } else {
        btn.classList.remove('auto-active');
        btn.innerHTML = '<i class="ph ph-play-circle" id="autoIcon"></i> Auto Mode';
        if (speedControls) speedControls.classList.add('hidden');
        clearInterval(autoInterval);
    }
}

function startAuto() {
    clearInterval(autoInterval);
    autoInterval = setInterval(() => {
        nextCard();
        if (cards[currentIndex] && cards[currentIndex].punchline) {
            setTimeout(() => {
                punchlineVisible = true;
                updateDisplay();
            }, 1000);
        }
    }, autoSpeed);
}

function setSpeed(ms) {
    autoSpeed = ms;
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-speed="${ms}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    if (autoMode) startAuto();
}

function toggleMenu() {
    const drawer = document.getElementById('menuDrawer');
    const backdrop = document.getElementById('menuBackdrop');
    
    if (!drawer || !backdrop) return;
    
    if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
    }
}

function populateMenu() {
    const list = document.getElementById('menuCardList');
    if (!list) return;
    
    list.innerHTML = '';
    cards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'glass-button w-full text-left px-3 py-2 rounded-lg text-sm text-white mb-2';
        const label = card.isUserAdded ? `${card.icon} by ${card.author}` : `${card.icon} Card ${index + 1}`;
        btn.textContent = label;
        btn.onclick = () => {
            currentIndex = index;
            punchlineVisible = false;
            updateDisplay();
            toggleMenu();
        };
        list.appendChild(btn);
    });
}

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) {
        modal.classList.add('open');
        // Load draft
        try {
            const draft = JSON.parse(localStorage.getItem('jokeDraft') || '{}');
            if (draft.name) document.getElementById('jokeName').value = draft.name;
            if (draft.location) document.getElementById('jokeLocation').value = draft.location;
            if (draft.setup) document.getElementById('jokeSetup').value = draft.setup;
            if (draft.punchline) document.getElementById('jokePunchline').value = draft.punchline;
        } catch (e) {}
    }
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.remove('open');
}

function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) modal.classList.add('open');
}

function closeGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) modal.classList.remove('open');
}

/*
================================================================================
This Area Of Code Is: Content Safety Checker
Explanation: I kept the PurgoMalum API integration to check jokes for 
inappropriate content before submission. This is a free service that returns 
"true" if profanity is found.
In Other Words: This checks if a joke has bad words before letting people 
post it.
================================================================================
*/
async function checkContent(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const isProfane = await response.text();
        return isProfane === 'true';
    } catch (e) {
        return false;
    }
}

async function submitJoke(e) {
    e.preventDefault();
    const status = document.getElementById('submitStatus');
    if (status) {
        status.classList.remove('hidden');
        status.textContent = 'Checking content...';
    }
    
    const nameEl = document.getElementById('jokeName');
    const locationEl = document.getElementById('jokeLocation');
    const setupEl = document.getElementById('jokeSetup');
    const punchlineEl = document.getElementById('jokePunchline');
    
    if (!nameEl || !locationEl || !setupEl || !punchlineEl) return;
    
    const name = nameEl.value.trim();
    const location = locationEl.value.trim();
    const setup = setupEl.value.trim();
    const punchline = punchlineEl.value.trim();
    
    const isBad = await checkContent(setup + ' ' + punchline + ' ' + name);
    if (isBad) {
        if (status) {
            status.textContent = '❌ Content does not meet community guidelines.';
            status.className = 'mt-4 text-center text-sm text-red-600 font-bold';
        }
        return;
    }
    
    // Save to Firebase if available
    if (firebaseInitialized && db) {
        try {
            await db.collection('jokes').add({
                name, location, setup, punchline,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                approved: true
            });
        } catch (e) {
            console.error("Firebase save failed:", e);
        }
    }
    
    // Add locally immediately
    cards.push({
        type: 'joke',
        icon: '😄',
        title: setup,
        punchline: punchline,
        author: name,
        location: location,
        isUserAdded: true
    });
    
    // Clear draft
    try {
        localStorage.removeItem('jokeDraft');
    } catch (e) {}
    
    document.getElementById('jokeForm').reset();
    
    if (status) {
        status.textContent = '✅ Joke added successfully!';
        status.className = 'mt-4 text-center text-sm text-green-600 font-bold';
    }
    
    setTimeout(() => {
        closeJokeModal();
        populateMenu();
        currentIndex = cards.length - 1;
        updateDisplay();
        if (status) status.classList.add('hidden');
    }, 1500);
}

/*
================================================================================
This Area Of Code Is: Auto-Save Draft Feature
Explanation: I added input listeners to save form data to LocalStorage as the 
user types, so they don't lose their work if they accidentally close the modal.
In Other Words: This secretly saves what you're typing every second so you 
don't lose your joke if you accidentally close the window.
================================================================================
*/
document.addEventListener('input', (e) => {
    if (e.target.id && ['jokeName', 'jokeLocation', 'jokeSetup', 'jokePunchline'].includes(e.target.id)) {
        try {
            const draft = {
                name: document.getElementById('jokeName').value,
                location: document.getElementById('jokeLocation').value,
                setup: document.getElementById('jokeSetup').value,
                punchline: document.getElementById('jokePunchline').value
            };
            localStorage.setItem('jokeDraft', JSON.stringify(draft));
        } catch (e) {}
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') previousCard();
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePunchline();
    }
    if (e.key === 'Escape') {
        closeJokeModal();
        closeGuidelines();
    }
});

/*
================================================================================
This Area Of Code Is: Application Initialization
Explanation: I set up the app to show the first joke immediately (within 
milliseconds of the page loading), then populate the menu, then try to load 
Firebase in the background. This ensures zero wait time for users.
In Other Words: This starts the app the very instant the page opens, showing 
the first joke immediately.
================================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    showFirstJokeImmediately();
    populateMenu();
    initFirebase(); // Try Firebase after content is already showing
});
