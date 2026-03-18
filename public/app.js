// FIREBASE CONFIG - YOUR EXACT VALUES
const firebaseConfig = {
    apiKey: "AIzaSyDieVA5y_pag35ZVh8P8Pul68sZ_2qtEGU",
    authDomain: "growing-get-well-card.firebaseapp.com",
    projectId: "growing-get-well-card",
    storageBucket: "growing-get-well-card.firebasestorage.app",
    messagingSenderId: "615025378529",
    appId: "1:615025378529:web:38e3801c79f54d852623a0",
    measurementId: "G-REK99P3EKW"
};

// Initialize Firebase
let db;
let firebaseInitialized = false;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    firebaseInitialized = true;
    console.log("Firebase initialized");
} catch (e) {
    console.log("Firebase not available");
}

// Initial Cards (Your Original 24 Cards)
let cards = [
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

let currentIndex = 0;
let punchlineVisible = false;
let autoMode = false;
let autoInterval = null;
let autoSpeed = 5000;

// Load user jokes from Firebase
async function loadJokes() {
    if (!firebaseInitialized) return;
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
        updateDisplay();
        populateMenu();
    } catch (e) {
        console.error("Error loading jokes:", e);
    }
}

function updateDisplay() {
    const card = cards[currentIndex];
    document.getElementById('cardTypeBadge').textContent = card.type;
    document.getElementById('cardIcon').textContent = card.icon;
    document.getElementById('cardTitle').textContent = card.title;
    
    const punchlineEl = document.getElementById('cardPunchline');
    punchlineEl.textContent = card.punchline || '';
    punchlineEl.style.opacity = punchlineVisible && card.punchline ? '1' : '0';
    
    document.getElementById('cardNumber').textContent = currentIndex + 1;
    document.getElementById('totalCards').textContent = cards.length;
    
    // Show author if user added
    if (card.isUserAdded) {
        document.getElementById('cardTypeBadge').textContent = `Added by ${card.author} from ${card.location}`;
    }
    
    // Update punchline button
    const btn = document.getElementById('punchlineBtn');
    btn.textContent = punchlineVisible ? 'Hide Punchline' : 'Show Punchline';
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
    const icon = document.getElementById('autoIcon');
    const speedControls = document.getElementById('speedControls');
    
    if (autoMode) {
        btn.classList.add('auto-active');
        icon.className = 'ph ph-pause-circle';
        btn.innerHTML = '<i class="ph ph-pause-circle" id="autoIcon"></i> Stop Auto';
        speedControls.classList.remove('hidden');
        startAuto();
    } else {
        btn.classList.remove('auto-active');
        icon.className = 'ph ph-play-circle';
        btn.innerHTML = '<i class="ph ph-play-circle" id="autoIcon"></i> Auto Mode';
        speedControls.classList.add('hidden');
        clearInterval(autoInterval);
    }
}

function startAuto() {
    clearInterval(autoInterval);
    autoInterval = setInterval(() => {
        nextCard();
        if (cards[currentIndex].punchline) {
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
    document.querySelector(`[data-speed="${ms}"]`).classList.add('active');
    if (autoMode) startAuto();
}

// Menu Functions
function toggleMenu() {
    const drawer = document.getElementById('menuDrawer');
    const backdrop = document.getElementById('menuBackdrop');
    
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

// Joke Modal Functions
function openJokeModal() {
    document.getElementById('jokeModal').classList.add('open');
    // Load draft from LocalStorage
    const draft = JSON.parse(localStorage.getItem('jokeDraft') || '{}');
    if (draft.name) document.getElementById('jokeName').value = draft.name;
    if (draft.location) document.getElementById('jokeLocation').value = draft.location;
    if (draft.setup) document.getElementById('jokeSetup').value = draft.setup;
    if (draft.punchline) document.getElementById('jokePunchline').value = draft.punchline;
}

function closeJokeModal() {
    document.getElementById('jokeModal').classList.remove('open');
}

// Save draft to LocalStorage as user types
document.addEventListener('input', (e) => {
    if (e.target.id && ['jokeName', 'jokeLocation', 'jokeSetup', 'jokePunchline'].includes(e.target.id)) {
        const draft = {
            name: document.getElementById('jokeName').value,
            location: document.getElementById('jokeLocation').value,
            setup: document.getElementById('jokeSetup').value,
            punchline: document.getElementById('jokePunchline').value
        };
        localStorage.setItem('jokeDraft', JSON.stringify(draft));
    }
});

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
    status.classList.remove('hidden');
    status.textContent = 'Checking content...';
    
    const name = document.getElementById('jokeName').value.trim();
    const location = document.getElementById('jokeLocation').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    
    // Client-side filter check
    const isBad = await checkContent(setup + ' ' + punchline + ' ' + name);
    if (isBad) {
        status.textContent = '❌ Content does not meet community guidelines.';
        status.className = 'mt-4 text-center text-sm text-red-600 font-bold';
        return;
    }
    
    if (firebaseInitialized) {
        try {
            await db.collection('jokes').add({
                name, location, setup, punchline,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                approved: true
            });
        } catch (e) {
            console.error("Error saving:", e);
        }
    }
    
    // Add to local cards immediately
    cards.push({
        type: 'joke',
        icon: '😄',
        title: setup,
        punchline: punchline,
        author: name,
        location: location,
        isUserAdded: true
    });
    
    // Clear LocalStorage after successful submit
    localStorage.removeItem('jokeDraft');
    document.getElementById('jokeForm').reset();
    
    status.textContent = '✅ Joke added successfully!';
    status.className = 'mt-4 text-center text-sm text-green-600 font-bold';
    
    setTimeout(() => {
        closeJokeModal();
        populateMenu();
        currentIndex = cards.length - 1;
        updateDisplay();
        status.classList.add('hidden');
    }, 1500);
}

function showGuidelines() {
    document.getElementById('guidelinesModal').classList.add('open');
}

function closeGuidelines() {
    document.getElementById('guidelinesModal').classList.remove('open');
}

// Keyboard controls
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadJokes();
    updateDisplay();
    populateMenu();
});
