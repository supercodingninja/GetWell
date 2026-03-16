/*
================================================================================
This Area Of Code Is: Main Application JavaScript
Explanation: Controls all interactivity for the Get Well PWA. Manages card 
navigation, Firebase real-time data, auto-play modes, content submission with 
client-side validation, and PWA service worker registration.
In Other Words: The brain that makes buttons work, loads jokes from the 
internet, switches cards automatically, and checks if jokes are clean before 
sending them to the database.
================================================================================
*/

/*
This Area Of Code Is: Firebase Configuration
Explanation: Initializes the connection to Firebase services (Firestore 
database). This config is safe to expose publicly - security is handled by 
Firestore Rules.
In Other Words: The address and password to connect to the Firebase database 
in the cloud.
*/
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // Replace with your Firebase API Key
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

/*
This Area Of Code Is: Global State Variables
Explanation: Variables tracking app state: current card index, reveal status, 
auto mode, pause status, speed settings, timers, and card data array.
In Other Words: The app's memory - remembers which joke is showing, if the 
answer is visible, if auto-play is on, etc.
*/
let currentIndex = 0;
let isRevealed = false;
let autoMode = false;
let isPaused = false;
let currentSpeed = 'slow';
let timers = [];
let cards = [];
let db = null;

/*
This Area Of Code Is: Speed Settings Configuration
Explanation: Defines timing (in milliseconds) for auto-play feature. Slow 
recommended for hospital patients who may read slowly or be on medication.
In Other Words: The timer settings - how long to wait before showing the 
answer and moving to next joke.
*/
const speedSettings = {
    slow: { setup: 8000, punchline: 10000, message: 12000 },
    medium: { setup: 6000, punchline: 8000, message: 10000 },
    fast: { setup: 4000, punchline: 6000, message: 8000 }
};

/*
This Area Of Code Is: Clean Jokes Database (Default)
Explanation: Curated list of 24 church-appropriate jokes, prayers, and messages. 
No offensive content, suitable for all ages. KJV scriptures included.
In Other Words: The starter pack of 24 jokes and Bible verses that load first.
*/
const DEFAULT_JOKES = [
    { id: 1, type: 'message', icon: '⛪', tag: 'Welcome', content: "We miss seeing your smiling face at church! The pews feel emptier without you. Get well soon!" },
    { id: 2, type: 'prayer', icon: '📖', tag: 'Psalm 23:1-3', content: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul." },
    { id: 3, type: 'joke', icon: '🧪', tag: 'Joke', setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { id: 4, type: 'joke', icon: '🍝', tag: 'Joke', setup: "What do you call a fake noodle?", punchline: "An impasta!" },
    { id: 5, type: 'message', icon: '💪', tag: 'Encouragement', content: "Tough times don't last, but tough people do. And you are tougher than you know! We are all praying for your strength." },
    { id: 6, type: 'joke', icon: '🐻', tag: 'Joke', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
    { id: 7, type: 'prayer', icon: '🕊️', tag: 'Jeremiah 29:11', content: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end." },
    { id: 8, type: 'joke', icon: '🐧', tag: 'Joke', setup: "How does a penguin build its house?", punchline: "Igloos it together!" },
    { id: 9, type: 'joke', icon: '🌾', tag: 'Joke', setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { id: 10, type: 'message', icon: '❤️', tag: 'Love', content: "Your church family loves you and is holding you close in prayer. We are saving your seat!" },
    { id: 11, type: 'joke', icon: '🪵', tag: 'Joke', setup: "What's brown and sticky?", punchline: "A stick!" },
    { id: 12, type: 'prayer', icon: '🙏', tag: 'Philippians 4:13', content: "I can do all things through Christ which strengtheneth me." },
    { id: 13, type: 'joke', icon: '☕', tag: 'Joke', setup: "Why did the coffee file a police report?", punchline: "It got mugged!" },
    { id: 14, type: 'joke', icon: '❄️', tag: 'Joke', setup: "Why can't you give Elsa a balloon?", punchline: "Because she will let it go!" },
    { id: 15, type: 'message', icon: '🌟', tag: 'Hope', content: "You are braver than you believe, stronger than you seem, and loved more than you know." },
    { id: 16, type: 'joke', icon: '🧀', tag: 'Joke', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
    { id: 17, type: 'prayer', icon: '✝️', tag: 'Isaiah 41:10', content: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee." },
    { id: 18, type: 'joke', icon: '📚', tag: 'Joke', setup: "Why did the math book look sad?", punchline: "Because it had too many problems!" },
    { id: 19, type: 'joke', icon: '🦕', tag: 'Joke', setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" },
    { id: 20, type: 'message', icon: '🌻', tag: 'Sunshine', content: "Sending you sunshine, prayers, and positive thoughts. May each day bring you closer to full health!" },
    { id: 21, type: 'joke', icon: '🚲', tag: 'Joke', setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
    { id: 22, type: 'prayer', icon: '📖', tag: 'Joshua 1:9', content: "Have not I commanded thee? Be strong and of a good courage; be not afraid: for the Lord thy God is with thee." },
    { id: 23, type: 'joke', icon: '🌊', tag: 'Joke', setup: "What did the ocean say to the shore?", punchline: "Nothing, it just waved!" },
    { id: 24, type: 'message', icon: '🎉', tag: 'Coming Back', content: "The church isn't the same without you! We are saving your seat. Get well soon - we miss you!" }
];

/*
================================================================================
This Area Of Code Is: Initialization Functions
Explanation: Functions that run when the page loads to set up Firebase, 
register the PWA service worker, and load initial data.
================================================================================
*/

/*
This Area Of Code Is: Window Load Event Listener
Explanation: Waits for all HTML to load, then initializes Firebase, loads 
jokes from database (or uses defaults), and registers the Service Worker for 
offline capability.
In Other Words: When the page finishes loading, start the app: connect to 
database, get jokes, and set up offline mode.
*/
window.addEventListener('load', async () => {
    try {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        
        // Enable offline persistence for PWA
        await db.enablePersistence({ synchronizeTabs: true });
        
        // Load jokes from Firebase or use defaults
        await loadJokes();
        
        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js');
        }
    } catch (error) {
        console.error('Initialization error:', error);
        // Fallback to default jokes if Firebase fails
        cards = DEFAULT_JOKES;
        renderCard();
        renderMenu();
    }
});

/*
This Area Of Code Is: Load Jokes Function
Explanation: Fetches jokes from Firebase Firestore in real-time. If no jokes 
exist yet, uploads the default set. Uses onSnapshot for live updates when 
others submit jokes.
In Other Words: Go to the cloud database and get all the jokes. If there 
aren't any, upload the starter pack of 24. Also listen for new jokes added 
by others.
*/
async function loadJokes() {
    db.collection('jokes').orderBy('id').onSnapshot((snapshot) => {
        if (snapshot.empty) {
            // Seed with defaults if empty
            DEFAULT_JOKES.forEach(joke => db.collection('jokes').add(joke));
            cards = DEFAULT_JOKES;
        } else {
            cards = snapshot.docs.map(doc => ({ ...doc.data(), firestoreId: doc.id }));
        }
        renderCard();
        renderMenu();
        updateProgress();
    });
}

/*
================================================================================
This Area Of Code Is: Navigation & View Functions
Explanation: Functions for moving between landing page and app, opening menus, 
and keyboard controls.
================================================================================
*/

/*
This Area Of Code Is: Enter App Function
Explanation: Hides the landing page with church interior video and shows the 
main jokes interface with picnic video background. Smooth fade transition.
In Other Words: Switch from the "We miss you" screen to the jokes screen 
when clicking the Enter button.
*/
function enterApp() {
    const landing = document.getElementById('landingPage');
    const app = document.getElementById('appSection');
    
    landing.style.opacity = '0';
    setTimeout(() => {
        landing.classList.add('hidden');
        app.classList.remove('hidden');
        // Trigger reflow for transition
        void app.offsetWidth;
        app.style.opacity = '1';
    }, 700);
}

/*
This Area Of Code Is: Toggle Menu Function
Explanation: Opens or closes the slide-in navigation menu from the left side. 
Also toggles the dark overlay behind it.
In Other Words: Slide the side menu in or out when clicking the Menu button.
*/
function toggleMenu() {
    const menu = document.getElementById('menuPanel');
    const overlay = document.getElementById('menuOverlay');
    const isOpen = !menu.classList.contains('-translate-x-full');
    
    if (isOpen) {
        menu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
    } else {
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
        renderMenu();
    }
}

/*
================================================================================
This Area Of Code Is: Card Rendering Functions
Explanation: Functions that draw the joke cards on screen with glass morphism 
styling and handle the punchline reveal animations.
================================================================================
*/

/*
This Area Of Code Is: Render Card Function
Explanation: Creates the HTML for the current card (joke, prayer, or message) 
with appropriate styling. Handles the glass card structure, emoji icons, and 
text content.
In Other Words: Draw the current joke card on the screen with the frosted 
glass look and emoji.
*/
function renderCard() {
    const stack = document.getElementById('cardStack');
    if (!cards.length) return;
    
    const card = cards[currentIndex];
    const cardEl = document.createElement('div');
    cardEl.className = `flash-card card-${card.type} active`;
    cardEl.id = 'currentCard';
    
    let content = `
        <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider text-gray-600">
            ${card.tag}
        </div>
        <div class="text-5xl mb-4 drop-shadow-sm">${card.icon}</div>
    `;
    
    if (card.type === 'joke') {
        content += `
            <div class="setup text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-2">
                ${escapeHtml(card.setup)}
            </div>
            <div class="punchline ${isRevealed ? 'opacity-100 translate-y-0' : ''}" id="punchline">
                ${escapeHtml(card.punchline)}
            </div>
        `;
        document.getElementById('revealBtn').classList.remove('hidden');
        document.getElementById('revealBtn').textContent = isRevealed ? 'Hide Punchline' : 'Show Punchline';
    } else {
        content += `
            <div class="content text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                ${escapeHtml(card.content)}
            </div>
        `;
        document.getElementById('revealBtn').classList.add('hidden');
    }
    
    stack.innerHTML = '';
    stack.appendChild(cardEl);
    cardEl.innerHTML = content;
    
    // Show submit section on last card
    const submitSection = document.getElementById('submitSection');
    if (currentIndex === cards.length - 1) {
        submitSection.classList.remove('hidden');
        setTimeout(() => submitSection.classList.remove('opacity-0', 'translate-y-4'), 100);
    } else {
        submitSection.classList.add('hidden', 'opacity-0', 'translate-y-4');
    }
    
    updateProgress();
}

/*
This Area Of Code Is: Update Progress Function
Explanation: Updates the "Card X of Y" text at the bottom.
In Other Words: Update the counter showing which card number we're on.
*/
function updateProgress() {
    document.getElementById('progress').textContent = `Card ${currentIndex + 1} of ${cards.length}`;
}

/*
This Area Of Code Is: Toggle Punchline Function
Explanation: Shows or hides the joke answer. If in auto-mode, manages the 
timer to advance to next card after showing punchline.
In Other Words: Flip the card to show the answer, or hide it.
*/
function toggleReveal() {
    if (!cards.length || cards[currentIndex].type !== 'joke') return;
    
    isRevealed = !isRevealed;
    const punchline = document.getElementById('punchline');
    const btn = document.getElementById('revealBtn');
    
    if (isRevealed) {
        punchline.classList.add('opacity-100', 'translate-y-0');
        btn.textContent = 'Hide Punchline';
        
        if (autoMode && !isPaused) {
            clearTimers();
            timers.push(setTimeout(() => nextCard(), speedSettings[currentSpeed].punchline));
        }
    } else {
        punchline.classList.remove('opacity-100', 'translate-y-0');
        btn.textContent = 'Show Punchline';
    }
}

/*
This Area Of Code Is: Next Card Function
Explanation: Advances to the next card with animation. Resets reveal state. 
Stops if at end.
In Other Words: Go to the next joke.
*/
function nextCard() {
    if (currentIndex < cards.length - 1) {
        const currentCard = document.getElementById('currentCard');
        if (currentCard) {
            currentCard.classList.remove('active');
            currentCard.classList.add('prev');
        }
        
        currentIndex++;
        isRevealed = false;
        
        setTimeout(() => {
            renderCard();
            if (autoMode && !isPaused) scheduleAuto();
        }, 300);
    } else if (autoMode) {
        stopAuto();
        alert('All done! Hope these brought a smile to your face. 🙏');
    }
}

/*
================================================================================
This Area Of Code Is: Auto Mode Functions
Explanation: Automatic slideshow functionality with adjustable speeds.
================================================================================
*/

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('hidden');
}

function setSpeed(speed) {
    currentSpeed = speed;
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('speed' + speed.charAt(0).toUpperCase() + speed.slice(1)).classList.add('selected');
}

function startAuto() {
    autoMode = true;
    isPaused = false;
    document.getElementById('settingsPanel').classList.add('hidden');
    document.getElementById('autoBtn').classList.add('hidden');
    document.getElementById('pauseBtn').classList.remove('hidden');
    scheduleAuto();
}

function stopAuto() {
    autoMode = false;
    isPaused = false;
    clearTimers();
    document.getElementById('autoBtn').classList.remove('hidden');
    document.getElementById('pauseBtn').classList.add('hidden');
}

function togglePause() {
    if (!autoMode) return;
    isPaused = !isPaused;
    const btn = document.getElementById('pauseBtn');
    
    if (isPaused) {
        clearTimers();
        btn.textContent = '▶ Resume';
        btn.classList.remove('ios-btn-warning');
        btn.classList.add('ios-btn-success');
    } else {
        btn.textContent = '⏸ Pause';
        btn.classList.add('ios-btn-warning');
        btn.classList.remove('ios-btn-success');
        scheduleAuto();
    }
}

function scheduleAuto() {
    if (!autoMode || isPaused) return;
    clearTimers();
    
    const card = cards[currentIndex];
    const settings = speedSettings[currentSpeed];
    
    if (card.type === 'joke' && !isRevealed) {
        timers.push(setTimeout(() => {
            toggleReveal();
        }, settings.setup));
    } else {
        timers.push(setTimeout(() => nextCard(), card.type === 'joke' ? settings.punchline : settings.message));
    }
}

function clearTimers() {
    timers.forEach(t => clearTimeout(t));
    timers = [];
}

/*
================================================================================
This Area Of Code Is: Menu Rendering
Explanation: Populates the slide-in menu with all available cards.
================================================================================
*/
function renderMenu() {
    const list = document.getElementById('menuList');
    if (!list) return;
    
    list.innerHTML = '';
    cards.forEach((card, idx) => {
        const item = document.createElement('div');
        item.className = `menu-item ${idx === currentIndex ? 'current' : ''}`;
        item.onclick = () => {
            currentIndex = idx;
            isRevealed = false;
            renderCard();
            toggleMenu();
            if (autoMode && !isPaused) scheduleAuto();
        };
        
        const preview = card.type === 'joke' ? card.setup : card.content.substring(0, 30) + '...';
        item.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ${idx + 1}
            </div>
            <div class="flex-1 min-w-0">
                <div class="text-white/60 text-xs uppercase tracking-wider mb-0.5">${card.tag}</div>
                <div class="text-white text-sm truncate">${preview}</div>
            </div>
            <div class="text-2xl flex-shrink-0">${card.icon}</div>
        `;
        list.appendChild(item);
    });
}

/*
================================================================================
This Area Of Code Is: Content Moderation & Submission
Explanation: Validates and submits jokes to Firebase. Checks for real names, 
no profanity, no inappropriate content, and proper formatting.
================================================================================
*/

/*
This Area Of Code Is: Banned Words & Patterns
Explanation: Lists of words and patterns that are not allowed in submissions. 
Includes profanity, sexual terms, political terms, hate speech, and non-name 
patterns (numbers, symbols). Protected against LGBTQ content, pornography, 
terrorism, anti-government content as requested.
In Other Words: The list of bad words and topics that are blocked to keep 
the app safe for church.
*/
const BANNED_WORDS = [
    // Profanity (covered broadly by categories)
    'fuck', 'shit', 'damn', 'ass', 'bitch', 'hell', 'crap', 'piss',
    // Sexual content
    'sex', 'porn', 'naked', 'nude', 'boobs', 'dick', 'penis', 'vagina', 'pussy',
    // LGBTQ references (as requested to filter)
    'gay', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'lgbt', 'pride parade',
    // Political (as requested)
    'trump', 'biden', 'obama', 'republican', 'democrat', 'maga', 'antifa', 'liberal', 'conservative', 'election',
    // Hate/Terrorism
    'nazi', 'kkk', 'white supremacy', 'terrorist', 'bomb', 'kill', 'hate', 'racist',
    // Anti-religious
    'atheist', 'god is dead', 'anti-christ', 'satanic',
    // Drugs
    'drug', 'cocaine', 'heroin', 'weed', 'marijuana',
    // Invalid name patterns
    'admin', 'user', 'test', 'anonymous', 'god', 'jesus', 'pastor'
];

/*
This Area Of Code Is: Real Name Validation Pattern
Explanation: Regular expression requiring only alphabetic characters (A-Z, a-z), 
no numbers, no symbols, no spaces (first name only), 2-15 characters length.
In Other Words: Rules for names: letters only, no numbers or symbols, just 
first name.
*/
const NAME_PATTERN = /^[A-Za-z]{2,15}$/;

/*
This Area Of Code Is: Validate Name Function
Explanation: Checks if the submitted name is a real first name (letters only, 
not in banned list, not obscene).
In Other Words: Check if the name is a real first name like "John" not 
something rude or fake like "BoatyMcBoat" or "Sexy123".
*/
function validateName(name) {
    if (!name) return { valid: false, message: 'Please enter your first name' };
    if (!NAME_PATTERN.test(name)) return { valid: false, message: 'First name only (letters, no spaces or numbers)' };
    
    const lowerName = name.toLowerCase();
    if (BANNED_WORDS.some(word => lowerName.includes(word))) {
        return { valid: false, message: 'Please use your real first name' };
    }
    
    return { valid: true };
}

/*
This Area Of Code Is: Validate Joke Content Function
Explanation: Checks joke text for banned words, inappropriate content, length 
limits, and church appropriateness. Returns validation result with specific 
error message if failed.
In Other Words: Read through the joke and make sure it's clean, not too long, 
and appropriate for church before allowing it.
*/
function validateJoke(setup, punchline) {
    if (!setup || !punchline) {
        return { valid: false, message: 'Please fill out both question and answer' };
    }
    if (setup.length > 150 || punchline.length > 150) {
        return { valid: false, message: 'Joke too long (max 150 characters)' };
    }
    
    const fullText = (setup + ' ' + punchline).toLowerCase();
    
    // Check for banned words
    for (const word of BANNED_WORDS) {
        if (fullText.includes(word)) {
            return { valid: false, message: 'Content does not meet community guidelines. Please keep it clean and church-appropriate.' };
        }
    }
    
    // Check for URLs (prevent links)
    if (fullText.includes('http') || fullText.includes('www.') || fullText.includes('.com')) {
        return { valid: false, message: 'Links not allowed for safety' };
    }
    
    return { valid: true };
}

/*
This Area Of Code Is: Submit Joke Function
Explanation: Main submission handler. Validates name and content client-side, 
then sends to Firebase Firestore. Uses try-catch for error handling. Shows 
success/error messages.
In Other Words: When someone clicks Submit, first check if it's appropriate, 
then save it to the cloud database and show a thank you message.
*/
async function submitJoke() {
    const nameInput = document.getElementById('authorName');
    const setupInput = document.getElementById('jokeSetup');
    const punchlineInput = document.getElementById('jokePunchline');
    const messageDiv = document.getElementById('submitMessage');
    
    const name = nameInput.value.trim();
    const setup = setupInput.value.trim();
    const punchline = punchlineInput.value.trim();
    
    // Validate name
    const nameCheck = validateName(name);
    if (!nameCheck.valid) {
        messageDiv.innerHTML = `<span class="text-red-300">${nameCheck.message}</span>`;
        return;
    }
    
    // Validate content
    const jokeCheck = validateJoke(setup, punchline);
    if (!jokeCheck.valid) {
        messageDiv.innerHTML = `<span class="text-red-300">${jokeCheck.message}</span>`;
        return;
    }
    
    // Submit to Firebase
    try {
        messageDiv.innerHTML = '<span class="text-blue-300">Submitting...</span>';
        
        await db.collection('jokes').add({
            id: Date.now(),
            type: 'joke',
            icon: '🎭',
            tag: 'Community',
            setup: setup,
            punchline: punchline,
            preview: setup,
            author: name,
            source: 'community',
            submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
            approved: true
        });
        
        messageDiv.innerHTML = '<span class="text-green-300">✓ Thank you! Your joke has been added.</span>';
        nameInput.value = '';
        setupInput.value = '';
        punchlineInput.value = '';
        
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 3000);
        
    } catch (error) {
        console.error('Submission error:', error);
        messageDiv.innerHTML = '<span class="text-red-300">Error submitting. Please try again.</span>';
    }
}

/*
This Area Of Code Is: HTML Escape Utility
Explanation: Prevents XSS attacks by converting special characters to HTML 
entities. Critical for security when displaying user-generated content.
In Other Words: Make sure nobody can hack the page by putting code in their 
joke. Turn dangerous characters into safe text.
*/
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/*
This Area Of Code Is: Keyboard Controls
Explanation: Allows navigation with keyboard for accessibility. Space for 
reveal/pause, arrows for navigation, Escape to close menu.
In Other Words: Let people use the keyboard instead of mouse - spacebar to 
show answer, arrow keys to change cards.
*/
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (autoMode) togglePause();
        else if (cards[currentIndex]?.type === 'joke') toggleReveal();
        else nextCard();
    } else if (e.key === 'ArrowRight') {
        if (!autoMode || isPaused) nextCard();
    } else if (e.key === 'ArrowLeft') {
        if ((!autoMode || isPaused) && currentIndex > 0) {
            currentIndex--;
            isRevealed = false;
            renderCard();
        }
    } else if (e.key === 'Escape') {
        const panel = document.getElementById('menuPanel');
        if (!panel.classList.contains('-translate-x-full')) toggleMenu();
    }
});
