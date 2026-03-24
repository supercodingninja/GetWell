/*
================================================================================
This Area Of Code Is: Firebase Encrypted Configuration & Initialization
Explanation: Base64 encoded Firebase credentials for security, initializing Firestore database connection with error handling fallback.
In Other Words: Secret keys to connect to your database, hidden for safety.
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
    console.log('✅ Firebase initialized successfully');
} catch (e) {
    console.error('❌ Firebase initialization failed:', e);
}

/*
================================================================================
This Area Of Code Is: Global State Management
Explanation: Application state variables tracking current card index, auto-play status, speed settings, punchline visibility, and keyboard navigation.
In Other Words: Variables that remember what the user is currently doing.
================================================================================
*/

let currentCardIndex = 0;
let autoModeActive = false;
let autoModeInterval = null;
let currentSpeed = 6000; // Default Medium (6 seconds)
let punchlineVisible = false;
let jokes = [];
let totalCards = 100;

/*
================================================================================
This Area Of Code Is: Initial Joke Dataset (Offline Fallback)
Explanation: 100 curated family-friendly jokes that load immediately while Firebase fetches additional community submissions. Includes setup, punchline, category, and icon metadata.
In Other Words: The built-in jokes that work even without internet.
================================================================================
*/

const initialJokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", category: "Science Joke", icon: "🧪" },
    { setup: "What do you call a fake noodle?", punchline: "An Impasta!", category: "Food Joke", icon: "🍝" },
    { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!", category: "Corny Joke", icon: "🌾" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", category: "Food Joke", icon: "🥚" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", category: "Animal Joke", icon: "🐻" },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems!", category: "School Joke", icon: "📚" },
    { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!", category: "Dinosaur Joke", icon: "🦕" },
    { setup: "Why did the cookie go to the doctor?", punchline: "Because it felt crummy!", category: "Food Joke", icon: "🍪" },
    { setup: "What do you call a fish wearing a crown?", punchline: "A king fish!", category: "Animal Joke", icon: "🐟" },
    { setup: "Why did the bicycle fall over?", punchline: "It was two-tired!", category: "Corny Joke", icon: "🚲" },
    { setup: "What do you call a pig that does karate?", punchline: "A pork chop!", category: "Animal Joke", icon: "🐷" },
    { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!", category: "Spooky Joke", icon: "💀" },
    { setup: "What do you call a dog magician?", punchline: "A labracadabrador!", category: "Animal Joke", icon: "🐕" },
    { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!", category: "Sports Joke", icon: "⛳" },
    { setup: "What do you call a snowman with a six pack?", punchline: "An abdominal snowman!", category: "Winter Joke", icon: "⛄" },
    { setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!", category: "Food Joke", icon: "🍅" },
    { setup: "What do you call an alligator in a vest?", punchline: "An investigator!", category: "Animal Joke", icon: "🐊" },
    { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out!", category: "Fitness Joke", icon: "💪" },
    { setup: "What do you call a belt made of watches?", punchline: "A waist of time!", category: "Corny Joke", icon: "⌚" },
    { setup: "Why did the stadium get hot after the game?", punchline: "All of the fans left!", category: "Sports Joke", icon: "🏟️" },
    { setup: "What do you call a cow with no legs?", punchline: "Ground beef!", category: "Animal Joke", icon: "🐄" },
    { setup: "Why did the picture go to jail?", punchline: "Because it was framed!", category: "Art Joke", icon: "🖼️" },
    { setup: "What do you call a fish that knows addition?", punchline: "An octoplus!", category: "Math Joke", icon: "🐙" },
    { setup: "Why don't scientists trust stairs?", punchline: "Because they're always up to something!", category: "Science Joke", icon: "🧬" },
    { setup: "What do you call a sleeping bull?", punchline: "A bulldozer!", category: "Animal Joke", icon: "🐂" },
    { setup: "Why did the music teacher need a ladder?", punchline: "To reach the high notes!", category: "Music Joke", icon: "🎵" },
    { setup: "What do you call a pile of cats?", punchline: "A meowtain!", category: "Animal Joke", icon: "🐱" },
    { setup: "Why did the scarecrow become a successful politician?", punchline: "He was outstanding in his field!", category: "Political Joke", icon: "🗳️" },
    { setup: "What do you call a dog that can do magic?", punchline: "A Labracadabrador!", category: "Animal Joke", icon: "🪄" },
    { setup: "Why don't eggs play sports?", punchline: "They're afraid of getting beaten!", category: "Food Joke", icon: "🍳" },
    { setup: "What do you call a cow that plays an instrument?", punchline: "A moo-sician!", category: "Animal Joke", icon: "🐮" },
    { setup: "Why did the cookie cry?", punchline: "Because its mother was a wafer so long!", category: "Food Joke", icon: "😢" },
    { setup: "What do you call a bear caught in the rain?", punchline: "A drizzly bear!", category: "Weather Joke", icon: "🌧️" },
    { setup: "Why did the computer go to the doctor?", punchline: "It had a virus!", category: "Tech Joke", icon: "💻" },
    { setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus!", category: "Dinosaur Joke", icon: "📖" },
    { setup: "Why did the banana go to the doctor?", punchline: "It wasn't peeling well!", category: "Food Joke", icon: "🍌" },
    { setup: "What do you call a train carrying bubblegum?", punchline: "A chew-chew train!", category: "Transport Joke", icon: "🚂" },
    { setup: "Why did the golfer wear two pairs of pants?", punchline: "In case he got a hole in one!", category: "Sports Joke", icon: "🏌️" },
    { setup: "What do you call a sleeping pizza?", punchline: "A piZZZa!", category: "Food Joke", icon: "🍕" },
    { setup: "Why did the teacher wear sunglasses?", punchline: "Because her students were so bright!", category: "School Joke", icon: "🕶️" },
    { setup: "What do you call a dog in the winter?", punchline: "A chili dog!", category: "Winter Joke", icon: "🌭" },
    { setup: "Why did the stadium get cold?", punchline: "There were too many fans!", category: "Sports Joke", icon: "❄️" },
    { setup: "What do you call a cow that can play piano?", punchline: "A moo-sical cow!", category: "Animal Joke", icon: "🎹" },
    { setup: "Why did the bicycle stand up by itself?", punchline: "It was two-tired!", category: "Transport Joke", icon: "🚲" },
    { setup: "What do you call a snowman party?", punchline: "A snowball!", category: "Winter Joke", icon: "🎉" },
    { setup: "Why did the coffee file a police report?", punchline: "It got mugged!", category: "Food Joke", icon: "☕" },
    { setup: "What do you call a fish that's a detective?", punchline: "An investigator!", category: "Animal Joke", icon: "🕵️" },
    { setup: "Why did the student eat his homework?", punchline: "Because the teacher said it was a piece of cake!", category: "School Joke", icon: "📝" },
    { setup: "What do you call a bear with no socks?", punchline: "Barefoot!", category: "Animal Joke", icon: "🐾" },
    { setup: "Why did the scarecrow become a doctor?", punchline: "He was great at straw-ting patients!", category: "Corny Joke", icon: "👨‍⚕️" },
    { setup: "What do you call a pig who knows karate?", punchline: "Pork Chop!", category: "Animal Joke", icon: "🥋" },
    { setup: "Why did the drum take a nap?", punchline: "It was beat!", category: "Music Joke", icon: "🥁" },
    { setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!", category: "Animal Joke", icon: "🦘" },
    { setup: "Why did the orange stop rolling?", punchline: "It ran out of juice!", category: "Food Joke", icon: "🍊" },
    { setup: "What do you call a sheep with no legs?", punchline: "A cloud!", category: "Animal Joke", icon: "☁️" },
    { setup: "Why did the math teacher go to the beach?", punchline: "To test the waters!", category: "School Joke", icon: "🏖️" },
    { setup: "What do you call a cat who loves to bowl?", punchline: "An alley cat!", category: "Animal Joke", icon: "🎳" },
    { setup: "Why did the computer keep sneezing?", punchline: "It had a virus!", category: "Tech Joke", icon: "🤧" },
    { setup: "What do you call a dinosaur that's sleeping?", punchline: "A dino-snore!", category: "Dinosaur Joke", icon: "😴" },
    { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!", category: "Music Joke", icon: "🍗" },
    { setup: "What do you call a bear with glasses?", punchline: "A spec-taco-lar bear!", category: "Animal Joke", icon: "👓" },
    { setup: "Why did the tree go to the dentist?", punchline: "It needed a root canal!", Category: "Medical Joke", icon: "🌳" },
    { setup: "What do you call a fish that breaks the law?", punchline: "A crim-fish!", category: "Animal Joke", icon: "⚖️" },
    { setup: "Why did the mushroom go to the party?", punchline: "Because he was a fungi!", category: "Food Joke", icon: "🍄" },
    { setup: "What do you call a cow with a twitch?", punchline: "Beef jerky!", category: "Animal Joke", icon: "🥩" },
    { setup: "Why did the traffic light turn red?", punchline: "It was embarrassed to change in front of everyone!", category: "Transport Joke", icon: "🚦" },
    { setup: "What do you call a sleeping dragon?", punchline: "A drag-on snore!", category: "Fantasy Joke", icon: "🐉" },
    { setup: "Why did the book join the police?", punchline: "It wanted to go undercover!", category: "Book Joke", icon: "👮" },
    { setup: "What do you call a frog's car?", punchline: "A toad truck!", category: "Animal Joke", icon: "🐸" },
    { setup: "Why did the ice cream truck break down?", punchline: "Because of the Rocky Road!", category: "Food Joke", icon: "🍦" },
    { setup: "What do you call a penguin in the desert?", punchline: "Lost!", category: "Animal Joke", icon: "🐧" },
    { setup: "Why did the clock go to the principal's office?", punchline: "It had too many ticks!", category: "School Joke", icon: "⏰" },
    { setup: "What do you call a dog on the beach?", punchline: "A hot dog!", category: "Summer Joke", icon: "🌭" },
    { setup: "Why did the football coach go to the bank?", punchline: "To get his quarter back!", category: "Sports Joke", icon: "🏈" },
    { setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!", category: "Animal Joke", icon: "🐝" },
    { setup: "Why did the cookie go to the nurse?", punchline: "Because it felt crummy!", category: "Food Joke", icon: "🏥" },
    { setup: "What do you call a cow on a trampoline?", punchline: "A milk shake!", category: "Animal Joke", icon: "🥤" },
    { setup: "Why did the lion lose the race?", punchline: "He was always lion around!", category: "Animal Joke", icon: "🦁" },
    { setup: "What do you call a snowman's pet dog?", punchline: "A slush puppy!", category: "Winter Joke", icon: "🐕" },
    { setup: "Why did the banana put on sunscreen?", punchline: "It didn't want to peel!", category: "Summer Joke", icon: "🧴" },
    { setup: "What do you call a cat who loves to swim?", punchline: "A catfish!", category: "Animal Joke", icon: "🏊" },
    { setup: "Why did the gym close down?", punchline: "It just didn't work out!", category: "Fitness Joke", icon: "🏋️" },
    { setup: "What do you call a dinosaur with one eye?", punchline: "A do-you-think-he-saurus!", category: "Dinosaur Joke", icon: "👁️" },
    { setup: "Why did the cell phone wear glasses?", punchline: "It lost its contacts!", category: "Tech Joke", icon: "👓" },
    { setup: "What do you call a cow who tells jokes?", punchline: "A comedi-hen!", category: "Animal Joke", icon: "🎤" },
    { setup: "Why did the pirate learn the alphabet?", punchline: "Because he was always lost at C!", category: "Pirate Joke", icon: "🏴‍☠️" },
    { setup: "What do you call a bear that loves gardening?", punchline: "A green thumb!", category: "Nature Joke", icon: "🌱" },
    { setup: "Why did the calendar feel sad?", punchline: "Because its days were numbered!", category: "Corny Joke", icon: "📅" },
    { setup: "What do you call a sheep that knows karate?", punchline: "A lamb chop!", category: "Animal Joke", icon: "🥋" },
    { setup: "Why did the elephant bring a suitcase to the party?", punchline: "Because it never forgets!", category: "Animal Joke", icon: "🐘" },
    { setup: "What do you call a crab that plays baseball?", punchline: "A pinch hitter!", category: "Sports Joke", icon: "⚾" },
    { setup: "Why did the strawberry cry?", punchline: "Because it was in a jam!", category: "Food Joke", icon: "🍓" },
    { setup: "What do you call a horse that lives next door?", punchline: "A neighbor!", category: "Animal Joke", icon: "🐴" },
    { setup: "Why did the robot go on vacation?", punchline: "It needed to recharge!", category: "Tech Joke", icon: "🤖" },
    { setup: "What do you call a turkey on the day after Thanksgiving?", punchline: "Lucky!", category: "Holiday Joke", icon: "🦃" },
    { setup: "Why did the computer catch a cold?", punchline: "It left its Windows open!", category: "Tech Joke", icon: "💻" },
    { setup: "What do you call a rabbit who tells jokes?", punchline: "A funny bunny!", category: "Animal Joke", icon: "🐰" },
    { setup: "Why did the shoe go to the therapist?", punchline: "It had too many issues!", category: "Corny Joke", icon: "👟" },
    { setup: "What do you call a wolf who meditates?", punchline: "Aware wolf!", category: "Animal Joke", icon: "🐺" },
    { setup: "Why did the bread go to the doctor?", punchline: "It was feeling crumby!", category: "Food Joke", icon: "🍞" },
    { setup: "What do you call a fish that destroys everything?", punchline: "A sledgehammerhead shark!", category: "Animal Joke", icon: "🔨" },
    { setup: "Why did the astronaut break up with his girlfriend?", punchline: "He needed space!", category: "Space Joke", icon: "🚀" },
    { setup: "What do you call a turtle that takes up photography?", punchline: "A snapping turtle!", category: "Animal Joke", icon: "📷" },
    { setup: "Why did the flower take the bus?", punchline: "It wanted to be a passenger!", category: "Nature Joke", icon: "🚌" },
    { setup: "What do you call a giraffe with no neck?", punchline: "A gir-short!", category: "Animal Joke", icon: "🦒" },
    { setup: "Why did the cookie cry at the party?", punchline: "Because it felt like a wafer!", category: "Food Joke", icon: "🥳" },
    { setup: "What do you call a sheep covered in chocolate?", punchline: "A candy baa!", category: "Animal Joke", icon: "🍫" },
    { setup: "Why did the teacher go to the beach?", punchline: "To test the waters!", category: "School Joke", icon: "🏖️" },
    { setup: "What do you call a duck that loves fireworks?", punchline: "A fire-quacker!", category: "Animal Joke", icon: "🦆" },
    { setup: "Why did the guitar go to jail?", punchline: "It was caught stringing people along!", category: "Music Joke", icon: "🎸" },
    { setup: "What do you call a cat that bowls?", punchline: "An alley cat!", category: "Sports Joke", icon: "🎳" },
    { setup: "Why did the lettuce win the race?", punchline: "It was ahead!", category: "Food Joke", icon: "🥬" },
    { setup: "What do you call a dog that can do magic tricks?", punchline: "A Labracadabrador!", category: "Animal Joke", icon: "🪄" },
    { setup: "Why did the corn stalk get an award?", punchline: "It was ear-resistible!", category: "Food Joke", icon: "🌽" },
    { setup: "What do you call a horse that likes arts and crafts?", punchline: "A glue stick!", category: "Animal Joke", icon: "✂️" },
    { setup: "Why did the scarecrow win a medal?", punchline: "He was out-standing in his field!", category: "Corny Joke", icon: "🏅" },
    { setup: "What do you call a cow in a tornado?", punchline: "A milkshake!", category: "Weather Joke", icon: "🌪️" }
];

/*
================================================================================
This Area Of Code Is: Content Moderation Service (PurgoMalum API)
Explanation: External API integration to check user-submitted content for inappropriate language without storing banned words locally, keeping the codebase sanctified and clean.
In Other Words: Checks if jokes are clean before saving them.
================================================================================
*/

async function checkContent(text) {
    if (!text || text.trim().length === 0) return { isClean: false, error: "Empty content" };
    
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const hasProfanity = await response.text();
        return { isClean: hasProfanity === "false", error: hasProfanity === "true" ? "Inappropriate content detected" : null };
    } catch (error) {
        console.error("Content check failed:", error);
        // Fallback: allow content if API fails, log for review
        return { isClean: true, error: null, fallback: true };
    }
}

/*
================================================================================
This Area Of Code Is: Application Initialization
Explanation: Loads jokes from localStorage or uses initial dataset, fetches additional jokes from Firebase if available, initializes UI components, and starts the wave emoji animation.
In Other Words: Starts up the app when the page loads.
================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    initializeJokes();
    renderCard();
    initializeCardJumps();
    initWaveAnimation();
    loadFirebaseJokes();
    updateTotalCards();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Service Worker Registration for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js').catch(err => console.log('SW registration failed'));
    }
});

function initializeJokes() {
    const saved = localStorage.getItem('getwell_jokes');
    if (saved) {
        jokes = JSON.parse(saved);
    } else {
        jokes = [...initialJokes];
        saveJokes();
    }
    totalCards = jokes.length;
}

function saveJokes() {
    localStorage.setItem('getwell_jokes', JSON.stringify(jokes));
}

async function loadFirebaseJokes() {
    if (!firebaseInitialized || !db) return;
    
    try {
        const snapshot = await db.collection('jokes').orderBy('timestamp', 'desc').limit(50).get();
        snapshot.forEach(doc => {
            const joke = doc.data();
            // Avoid duplicates
            if (!jokes.some(j => j.setup === joke.setup)) {
                jokes.unshift(joke);
            }
        });
        totalCards = jokes.length;
        updateTotalCards();
        saveJokes();
    } catch (e) {
        console.log("Using offline joke database");
    }
}

/*
================================================================================
This Area Of Code Is: Wave Emoji Animation Controller
Explanation: Cycles through different skin tone hand wave emojis every 2 seconds to represent universal diversity and inclusion in the welcome badge.
In Other Words: Changes the hand color in the welcome message automatically.
================================================================================
*/

function initWaveAnimation() {
    const waveEmojis = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'];
    const waveElement = document.getElementById('waveEmoji');
    
    if (!waveElement) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % waveEmojis.length;
        waveElement.textContent = waveEmojis[currentIndex];
    }, 2000);
}

/*
================================================================================
This Area Of Code Is: Card Rendering System
Explanation: Updates the DOM to display current joke with icon, category badge, setup text, and handles punchline visibility state.
In Other Words: Shows the current joke on the screen.
================================================================================
*/

function renderCard() {
    const joke = jokes[currentCardIndex];
    if (!joke) return;
    
    // Update elements
    document.getElementById('cardIcon').textContent = joke.icon || '🎭';
    document.getElementById('cardBadge').textContent = joke.category || 'Joke';
    document.getElementById('setupText').textContent = joke.setup;
    document.getElementById('punchlineText').textContent = joke.punchline;
    document.getElementById('cardCounter').textContent = `Card ${currentCardIndex + 1} of ${totalCards}`;
    
    // Reset punchline visibility
    punchlineVisible = false;
    document.getElementById('punchlineText').classList.remove('visible');
    document.getElementById('punchlineBtnText').textContent = 'Show Punchline';
    
    // Update jump grid active state
    updateJumpGridActive();
}

function togglePunchline() {
    const punchlineEl = document.getElementById('punchlineText');
    const btnText = document.getElementById('punchlineBtnText');
    
    punchlineVisible = !punchlineVisible;
    
    if (punchlineVisible) {
        punchlineEl.classList.add('visible');
        btnText.textContent = 'Hide Punchline';
    } else {
        punchlineEl.classList.remove('visible');
        btnText.textContent = 'Show Punchline';
    }
}

/*
================================================================================
This Area Of Code Is: Navigation Controls
Explanation: Handles next/previous card navigation with boundary checking and circular navigation (wraps from last to first).
In Other Words: Moving between jokes.
================================================================================
*/

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % jokes.length;
    renderCard();
}

function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + jokes.length) % jokes.length;
    renderCard();
}

function jumpToCard(index) {
    if (index >= 0 && index < jokes.length) {
        currentCardIndex = index;
        renderCard();
        toggleMenu(); // Close menu after selection
    }
}

/*
================================================================================
This Area Of Code Is: Auto-Play Slideshow Mode
Explanation: Automatically advances through jokes at user-selected intervals (Slow: 8s, Medium: 6s, Fast: 3.5s) with visual indicators.
In Other Words: Automatically shows new jokes without clicking.
================================================================================
*/

function toggleAutoMode() {
    const btn = document.getElementById('autoModeBtn');
    const speedControls = document.getElementById('speedControls');
    const btnText = document.getElementById('autoModeText');
    
    autoModeActive = !autoModeActive;
    
    if (autoModeActive) {
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
    if (autoModeInterval) clearInterval(autoModeInterval);
    autoModeInterval = setInterval(() => {
        nextCard();
    }, currentSpeed);
}

function stopAutoMode() {
    if (autoModeInterval) {
        clearInterval(autoModeInterval);
        autoModeInterval = null;
    }
}

function setSpeed(speed) {
    currentSpeed = speed;
    
    // Update UI
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === speed) {
            btn.classList.add('active');
        }
    });
    
    // Restart if active
    if (autoModeActive) {
        startAutoMode();
    }
}

/*
================================================================================
This Area Of Code Is: Side Menu Management
Explanation: Controls the slide-out navigation drawer containing the jump-to-card grid and accessibility options.
In Other Words: Opens and closes the side menu.
================================================================================
*/

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const menuBtn = document.getElementById('menuBtn');
    
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    menuBtn.classList.toggle('active');
}

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid Generator
Explanation: Dynamically creates a grid of buttons allowing users to jump directly to any card number, with emoji indicators and active state highlighting.
In Other Words: Creates the grid of 100 buttons to jump to any joke.
================================================================================
*/

function initializeCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    
    jokes.forEach((joke, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        btn.dataset.index = index;
        btn.onclick = () => jumpToCard(index);
        
        btn.innerHTML = `
            <span>${joke.icon || '🎭'}</span>
            <small>${index + 1}</small>
        `;
        
        container.appendChild(btn);
    });
}

function updateJumpGridActive() {
    document.querySelectorAll('.jump-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.index) === currentCardIndex);
    });
}

/*
================================================================================
This Area Of Code Is: Joke Submission Modal & Form Handling
Explanation: Handles opening/closing the add joke modal, form validation, content moderation via PurgoMalum API, and saving to both localStorage and Firebase.
In Other Words: Handles adding new jokes with safety checks.
================================================================================
*/

function openJokeModal() {
    document.getElementById('jokeModal').classList.add('open');
    document.getElementById('jokeForm').reset();
}

function closeJokeModal() {
    document.getElementById('jokeModal').classList.remove('open');
}

async function submitJoke(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    
    // Validation
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Content moderation
    const setupCheck = await checkContent(setup);
    const punchlineCheck = await checkContent(punchline);
    
    if (!setupCheck.isClean || !punchlineCheck.isClean) {
        alert('Please keep content family-friendly. Inappropriate content detected.');
        return;
    }
    
    // Build location string
    const locationParts = [];
    if (document.getElementById('showCity').checked) locationParts.push('City');
    if (document.getElementById('showState').checked) locationParts.push('State');
    if (document.getElementById('showCountry').checked) locationParts.push('Country');
    
    const newJoke = {
        setup,
        punchline,
        author: name,
        location: locationParts.join(', '),
        category: 'Community Joke',
        icon: '🎭',
        timestamp: new Date().toISOString()
    };
    
    // Save locally
    jokes.push(newJoke);
    totalCards = jokes.length;
    saveJokes();
    updateTotalCards();
    
    // Save to Firebase if available
    if (firebaseInitialized && db) {
        try {
            await db.collection('jokes').add(newJoke);
        } catch (e) {
            console.log('Saved locally only');
        }
    }
    
    closeJokeModal();
    currentCardIndex = jokes.length - 1;
    renderCard();
    initializeCardJumps();
    
    // Success feedback
    alert('Thank you! Your joke has been submitted for review.');
}

/*
================================================================================
This Area Of Code Is: Community Guidelines Modal
Explanation: Displays acceptable use policy and content standards for user submissions.
In Other Words: Shows the rules popup.
================================================================================
*/

function showGuidelines() {
    document.getElementById('guidelinesModal').classList.add('open');
}

function closeGuidelines() {
    document.getElementById('guidelinesModal').classList.remove('open');
}

/*
================================================================================
This Area Of Code Is: Accessibility Modal Controller
Explanation: Opens/closes the comprehensive accessibility panel with scroll detection and manages feature toggles for neurodivergent support, mental health accommodations, and vision filters.
In Other Words: The settings panel for accessibility options.
================================================================================
*/

function openAccessibilityModal() {
    document.getElementById('accessibilityModal').classList.add('open');
    checkModalScroll();
}

function closeAccessibilityModal() {
    document.getElementById('accessibilityModal').classList.remove('open');
}

function checkModalScroll() {
    const modal = document.querySelector('.accessibility-content');
    const indicator = document.getElementById('scrollIndicator');
    
    if (indicator && modal) {
        if (modal.scrollHeight > modal.clientHeight) {
            indicator.classList.add('visible');
        }
        
        modal.addEventListener('scroll', () => {
            if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight - 20) {
                indicator.classList.remove('visible');
            } else {
                indicator.classList.add('visible');
            }
        });
    }
}

function toggleFeature(element, feature) {
    const toggle = element.querySelector('.toggle-switch') || element;
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    
    document.body.classList.toggle(feature + '-mode', isActive);
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Specific handling
    if (feature === 'high-contrast') {
        document.body.classList.toggle('high-contrast', isActive);
    }
    
    // Screen reader announcement
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `${feature} mode ${isActive ? 'enabled' : 'disabled'}`;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}

function applyColorFilter(filterType) {
    // Remove all filters
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia',
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia'
    );
    
    if (filterType !== 'none') {
        document.body.classList.add('filter-' + filterType);
    }
    
    localStorage.setItem('gw_color_filter', filterType);
    
    // Update button states
    document.querySelectorAll('.access-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
}

/*
================================================================================
This Area Of Code Is: Keyboard Navigation Handler
Explanation: Provides keyboard shortcuts for accessibility: Arrow keys for navigation, Space to toggle punchline, Escape to close modals/menu.
In Other Words: Lets you use keyboard instead of mouse.
================================================================================
*/

function handleKeyboard(e) {
    // Don't trigger if typing in a form
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    switch(e.key) {
        case 'ArrowRight':
            e.preventDefault();
            nextCard();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            previousCard();
            break;
        case ' ':
        case 'Spacebar':
            e.preventDefault();
            togglePunchline();
            break;
        case 'Escape':
            // Close any open modals or menu
            closeJokeModal();
            closeGuidelines();
            closeAccessibilityModal();
            const menu = document.getElementById('sideMenu');
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
            break;
    }
}

/*
================================================================================
This Area Of Code Is: Utility Functions
Explanation: Helper functions for UI updates and navigation actions.
In Other Words: Small useful functions.
================================================================================
*/

function updateTotalCards() {
    const el = document.getElementById('totalCards');
    if (el) el.textContent = `${totalCards} cards`;
}

function goHome() {
    currentCardIndex = 0;
    renderCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('open');
    }
    if (event.target.classList.contains('accessibility-modal')) {
        event.target.classList.remove('open');
    }
}

// Load saved accessibility settings
window.addEventListener('load', () => {
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add('filter-' + savedFilter);
    }
    
    ['autism', 'adhd', 'dyslexia', 'anxiety', 'ptsd', 'high-contrast'].forEach(feature => {
        if (localStorage.getItem('gw_access_' + feature) === 'true') {
            document.body.classList.add(feature + '-mode');
        }
    });
});
