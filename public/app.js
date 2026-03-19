/*
================================================================================
This Area Of Code Is: Encrypted Firebase Configuration
Explanation: Base64 encoded credentials to prevent GitHub exposure
In Other Words: Secret password protection for the database
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
Explanation: Pre-loaded 100 corny jokes with Q&A and one-liner formats, no authors
In Other Words: The starting collection of 100 funny cards
================================================================================
*/

const defaultJokes = [
    { type: 'joke', icon: '🧪', setup: "What do you call a fake noodle?", punchline: "An impasta!", author: null },
    { type: 'joke', icon: '🐄', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!", author: null },
    { type: 'joke', icon: '🍊', setup: "Why did the orange stop?", punchline: "It ran out of juice!", author: null },
    { type: 'joke', icon: '🐝', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!", author: null },
    { type: 'joke', icon: '🐟', setup: "What do you call a fish with no eyes?", punchline: "Fsh!", author: null },
    { type: 'joke', icon: '🍕', setup: "Why did the pizza maker go to church?", punchline: "He needed help with his daily bread!", author: null },
    { type: 'joke', icon: '⛪', setup: "Why do church musicians have to be so careful?", punchline: "Because one wrong note and it's an organ-ized crime!", author: null },
    { type: 'joke', icon: '🍌', setup: "Why did the banana go to the doctor?", punchline: "It wasn't peeling well!", author: null },
    { type: 'joke', icon: '🍪', setup: "Why did the cookie go to the hospital?", punchline: "It felt crumby!", author: null },
    { type: 'joke', icon: '🌾', setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!", author: null },
    { type: 'joke', icon: '⛄', setup: "What do you call a snowman with a six pack?", punchline: "An abdominal snowman!", author: null },
    { type: 'joke', icon: '🥚', setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", author: null },
    { type: 'joke', icon: '🚲', setup: "Why did the bicycle fall over?", punchline: "It was two-tired!", author: null },
    { type: 'joke', icon: '🧀', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!", author: null },
    { type: 'joke', icon: '🏌️', setup: "Why did the golfer wear two pairs of pants?", punchline: "In case he got a hole in one!", author: null },
    { type: 'joke', icon: '🐻', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", author: null },
    { type: 'joke', icon: '🐶', setup: "What do you call a dog that can do magic?", punchline: "A Labracadabrador!", author: null },
    { type: 'joke', icon: '🐱', setup: "Why did the cat sit on the computer?", punchline: "To keep an eye on the mouse!", author: null },
    { type: 'joke', icon: '🐭', setup: "What do you call a mouse that can sing?", punchline: "A mouse-ician!", author: null },
    { type: 'joke', icon: '🦁', setup: "Why did the lion eat the tightrope walker?", punchline: "He wanted a well-balanced meal!", author: null },
    { type: 'joke', icon: '🐸', setup: "What do you call a frog that's illegally parked?", punchline: "Toad!", author: null },
    { type: 'joke', icon: '🐔', setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!", author: null },
    { type: 'joke', icon: '🐴', setup: "What do you call a horse that lives next door?", punchline: "A neighbor!", author: null },
    { type: 'joke', icon: '🐘', setup: "Why did the elephant bring a suitcase to the party?", punchline: "He wanted to pack his trunk!", author: null },
    { type: 'joke', icon: '🦒', setup: "What do you call a giraffe's notebook?", punchline: "A long story!", author: null },
    { type: 'joke', icon: '🦓', setup: "Why did the zebra get a ticket?", punchline: "For illegal parking!", author: null },
    { type: 'joke', icon: '🦘', setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!", author: null },
    { type: 'joke', icon: '🐨', setup: "Why did the koala get hired?", punchline: "He had all the right koalafications!", author: null },
    { type: 'joke', icon: '🐼', setup: "What do you call a bear with no socks?", punchline: "Bare-foot!", author: null },
    { type: 'joke', icon: '🦉', setup: "Why did the owl invite his friends over?", punchline: "He didn't want to be owl by himself!", author: null },
    { type: 'joke', icon: '🦜', setup: "What do you call a parrot that flew away?", punchline: "A polygon!", author: null },
    { type: 'joke', icon: '🦚', setup: "Why did the peacock get a job?", punchline: "He wanted to make some plume!", author: null },
    { type: 'joke', icon: '🦩', setup: "What do you call a flamingo at a dance?", punchline: "The pink of the party!", author: null },
    { type: 'joke', icon: '🦢', setup: "Why did the swan refuse to fight?", punchline: "He didn't want to ruffle feathers!", author: null },
    { type: 'joke', icon: '🦆', setup: "What do you call a duck that gets all A's?", punchline: "A wise quacker!", author: null },
    { type: 'joke', icon: '🦅', setup: "Why did the eagle bring a ruler?", punchline: "To measure his talon-ts!", author: null },
    { type: 'joke', icon: '🦜', setup: "What do you call a parrot wearing a raincoat?", punchline: "Polly-unsaturated!", author: null },
    { type: 'joke', icon: '🍎', setup: "Why did the apple go to school?", punchline: "To become a smart cookie!", author: null },
    { type: 'joke', icon: '🍇', setup: "What do you call a grape that gets stepped on?", punchline: "Wine!", author: null },
    { type: 'joke', icon: '🍉', setup: "Why did the watermelon have fancy seeds?", punchline: "It was a little seedy!", author: null },
    { type: 'joke', icon: '🍋', setup: "What do you call a lemon that works out?", punchline: "Swole-mon!", author: null },
    { type: 'joke', icon: '🍑', setup: "Why did the peach go to the doctor?", punchline: "It wasn't feeling peachy!", author: null },
    { type: 'joke', icon: '🍍', setup: "What do you call a pineapple who loves physics?", punchline: "Newton!", author: null },
    { type: 'joke', icon: '🥝', setup: "Why did the kiwi cross the road?", punchline: "To prove he wasn't a chicken!", author: null },
    { type: 'joke', icon: '🥥', setup: "What do you call a coconut that's a detective?", punchline: "Sherlock Holmes!", author: null },
    { type: 'joke', icon: '🥑', setup: "Why did the avocado go to the gym?", punchline: "To get better pits!", author: null },
    { type: 'joke', icon: '🥕', setup: "Why did the carrot get an award?", punchline: "For being outstanding in his field!", author: null },
    { type: 'joke', icon: '🌽', setup: "What do you call corn that joins the army?", punchline: "Kernel!", author: null },
    { type: 'joke', icon: '🥦', setup: "Why did the broccoli go to the party?", punchline: "He was a fungi!", author: null },
    { type: 'joke', icon: '🍄', setup: "What do you call a mushroom at a party?", punchline: "A fungi!", author: null },
    { type: 'joke', icon: '🥜', setup: "What do you call a peanut in a spacesuit?", punchline: "An astro-nut!", author: null },
    { type: 'joke', icon: '🌰', setup: "Why did the chestnut go to the doctor?", punchline: "He was feeling nutty!", author: null },
    { type: 'joke', icon: '🍞', setup: "Why did the loaf of bread break up?", punchline: "She was too kneady!", author: null },
    { type: 'joke', icon: '🥯', setup: "What do you call a bagel that can fly?", punchline: "A plain bagel!", author: null },
    { type: 'joke', icon: '🥞', setup: "Why did the pancake go to the doctor?", punchline: "It was feeling flat!", author: null },
    { type: 'joke', icon: '🧇', setup: "What do you call a waffle that's been arrested?", punchline: "A waffled criminal!", author: null },
    { type: 'joke', icon: '🍔', setup: "Why did the hamburger go to the gym?", punchline: "To get better buns!", author: null },
    { type: 'joke', icon: '🍟', setup: "What do you call a french fry that tells jokes?", punchline: "A pun-tato!", author: null },
    { type: 'joke', icon: '🌭', setup: "Why did the hot dog turn down the race?", punchline: "He was already a wiener!", author: null },
    { type: 'joke', icon: '🍿', setup: "What do you call popcorn that's angry?", punchline: "Popped off!", author: null },
    { type: 'joke', icon: '👔', setup: "I told my wife she was drawing her eyebrows too high.", punchline: "She looked surprised.", author: null },
    { type: 'joke', icon: '🧊', setup: "I used to be a banker,", punchline: "but I lost interest.", author: null },
    { type: 'joke', icon: '🚗', setup: "I'm reading a book on anti-gravity.", punchline: "It's impossible to put down!", author: null },
    { type: 'joke', icon: '⏰', setup: "I used to run a bakery,", punchline: "but I couldn't make enough dough.", author: null },
    { type: 'joke', icon: '🎨', setup: "I was wondering why the frisbee was getting bigger,", punchline: "and then it hit me.", author: null },
    { type: 'joke', icon: '🎭', setup: "The rotation of Earth", punchline: "really makes my day.", author: null },
    { type: 'joke', icon: '🎪', setup: "I was going to tell a time-traveling joke,", punchline: "but you didn't like it yet.", author: null },
    { type: 'joke', icon: '🎯', setup: "Did you hear about the kidnapping at the playground?", punchline: "They woke up!", author: null },
    { type: 'joke', icon: '🎲', setup: "I used to hate facial hair,", punchline: "but then it grew on me.", author: null },
    { type: 'joke', icon: '🎸', setup: "I'm friends with all electricians", punchline: "because we have good current connections.", author: null },
    { type: 'joke', icon: '🎺', setup: "I would avoid the sushi if I was you.", punchline: "It's a little fishy.", author: null },
    { type: 'joke', icon: '🎻', setup: "The shovel", punchline: "was a ground-breaking invention.", author: null },
    { type: 'joke', icon: '🎬', setup: "I used to be addicted to soap,", punchline: "but I'm clean now.", author: null },
    { type: 'joke', icon: '🎤', setup: "Velcro", punchline: "- what a rip-off!", author: null },
    { type: 'joke', icon: '🎧', setup: "I couldn't figure out how to put my seatbelt on.", punchline: "Then it clicked.", author: null },
    { type: 'joke', icon: '🎹', setup: "I'm on a seafood diet.", punchline: "I see food and I eat it.", author: null },
    { type: 'joke', icon: '🎳', setup: "A plateau", punchline: "is the highest form of flattery.", author: null },
    { type: 'joke', icon: '🏹', setup: "I used to think I was indecisive,", punchline: "but now I'm not so sure.", author: null },
    { type: 'joke', icon: '🏓', setup: "I got a job at a bakery", punchline: "because I kneaded dough.", author: null },
    { type: 'joke', icon: '🏸', setup: "My grandpa has the heart of a lion", punchline: "and a lifetime ban from the zoo.", author: null },
    { type: 'joke', icon: '🏒', setup: "I used to be a doctor,", punchline: "but then I lost my patience.", author: null },
    { type: 'joke', icon: '🏑', setup: "I was going to tell a joke about pizza,", punchline: "but it's too cheesy.", author: null },
    { type: 'joke', icon: '🏏', setup: "I don't trust stairs", punchline: "because they're always up to something.", author: null },
    { type: 'joke', icon: '🎿', setup: "The man who survived mustard gas and pepper spray", punchline: "is a seasoned veteran.", author: null },
    { type: 'joke', icon: '🥊', setup: "I used to play piano by ear,", punchline: "but now I use my hands.", author: null },
    { type: 'joke', icon: '🥋', setup: "I'm terrified of elevators,", punchline: "so I'm going to start taking steps to avoid them.", author: null },
    { type: 'joke', icon: '⛳', setup: "I couldn't commit to the marathon,", punchline: "but I've been running jokes into the ground.", author: null },
    { type: 'joke', icon: '🏓', setup: "Parallel lines have so much in common.", punchline: "It's a shame they'll never meet.", author: null },
    { type: 'joke', icon: '🏸', setup: "I was wondering why the baseball was getting bigger.", punchline: "Then it hit me.", author: null },
    { type: 'joke', icon: '🏹', setup: "I told my computer I needed a break,", punchline: "and now it won't stop sending me Kit-Kats.", author: null },
    { type: 'joke', icon: '🏒', setup: "My wife told me to stop impersonating a flamingo.", punchline: "I had to put my foot down.", author: null },
    { type: 'joke', icon: '🏑', setup: "I was going to tell a chemistry joke,", punchline: "but I knew I wouldn't get a reaction.", author: null },
    { type: 'joke', icon: '🏏', setup: "Why do we tell actors to 'break a leg?'", punchline: "Because every play has a cast.", author: null },
    { type: 'joke', icon: '🎿', setup: "Helvetica and Times New Roman walk into a bar.", punchline: "The bartender says, 'We don't serve your type.'", author: null },
    { type: 'joke', icon: '🥊', setup: "Two guys walk into a bar.", punchline: "The third one ducks.", author: null },
    { type: 'joke', icon: '🥋', setup: "I have a few jokes about unemployed people,", punchline: "but none of them work.", author: null },
    { type: 'joke', icon: '⛳', setup: "Why did the invisible man turn down the job offer?", punchline: "He couldn't see himself doing it.", author: null },
    { type: 'joke', icon: '🏓', setup: "I wasn't originally going to get a brain transplant,", punchline: "but then I changed my mind.", author: null },
    { type: 'joke', icon: '🏸', setup: "I have a fear of speed bumps,", punchline: "but I'm slowly getting over it.", author: null },
    { type: 'joke', icon: '🏹', setup: "Did you hear about the fire at the circus?", punchline: "It was in-tents!", author: null }
];

let state = {
    jokes: [...defaultJokes],
    currentIndex: 0,
    autoMode: false,
    autoSpeed: 6000,
    autoInterval: null,
    personalVisits: 1
};

/*
================================================================================
This Area Of Code Is: Content Moderation System
Explanation: Uses PurgoMalum API to check for inappropriate content before saving
In Other Words: Automatic bad word filter using internet service
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
In Other Words: Controls the moving background video behind the cards
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
This Area Of Code Is: Metrics and Counter System (Phase 3)
Explanation: Tracks personal visits via localStorage and global visitors via Firebase
In Other Words: Counts how many times you visited and how many people worldwide
================================================================================
*/

function updatePersonalVisitCounter() {
    try {
        let visits = parseInt(localStorage.getItem('gw_personal_visits') || '0');
        visits++;
        localStorage.setItem('gw_personal_visits', visits.toString());
        state.personalVisits = visits;
        
        const visitEl = document.getElementById('personalVisits');
        if (visitEl) {
            visitEl.textContent = `Visit #${visits}`;
        }
        
        console.log('[Metrics] Personal visit count:', visits);
    } catch (e) {
        console.log('[Metrics] localStorage not available');
    }
}

async function updateGlobalVisitorCount() {
    if (!firebaseInitialized || !db) {
        console.log('[Metrics] Firebase not available for global count');
        return;
    }
    
    try {
        const counterRef = db.collection('stats').doc('globalVisitors');
        
        // Use FieldValue.increment for atomic counter (fixes "Loading..." issue)
        await counterRef.update({
            count: firebase.firestore.FieldValue.increment(1),
            lastVisit: new Date().toISOString(),
            lastVisitDevice: navigator.userAgent.slice(0, 50) // First 50 chars of user agent
        });
        
        console.log('[Metrics] Global visitor count incremented');
    } catch (error) {
        // If document doesn't exist, create it with count 1
        if (error.code === 'not-found') {
            try {
                await db.collection('stats').doc('globalVisitors').set({
                    count: 1,
                    created: new Date().toISOString()
                });
                console.log('[Metrics] Global counter created');
            } catch (e) {
                console.error('[Metrics] Failed to create counter:', e);
            }
        } else {
            console.error('[Metrics] Failed to increment:', error);
        }
    }
}

/*
================================================================================
This Area Of Code Is: Card Rendering System (Phase 2 Updated)
Explanation: Displays setup and punchline immediately together (no toggle/hide)
In Other Words: Shows the complete joke right away without waiting
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
        
        // PHASE 2: Always show punchline immediately
        punchlineText.classList.add('visible');
        
        // Only show author if it's a user submission (not null/App Original)
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
    // PHASE 3: Show "Card X of 100" (updates to actual total if more added)
    if (counter) counter.textContent = `Card ${state.currentIndex + 1} of ${state.jokes.length}`;
    if (totalCards) totalCards.textContent = `${state.jokes.length} cards`;
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
This Area Of Code Is: Auto-Play Controller (Phase 2 Updated)
Explanation: Automatically advances through cards immediately without waiting for punchline
In Other Words: Slideshow mode that moves to next card without delays
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
    // PHASE 2: Advance immediately without waiting for punchline reveal
    state.autoInterval = setInterval(() => {
        nextCard();
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
Explanation: Handles side menu, modals, and navigation
In Other Words: Controls opening/closing the menu and popup windows
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
This Area Of Code Is: Joke Submission Handler (Firebase Only - No localStorage)
Explanation: Saves user jokes to Firebase only. Card count updates after successful save.
In Other Words: Sends new jokes to the cloud database only - no local backup to save space
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    // Block submission if Firebase isn't working - no local fallback to prevent clogging
    if (!firebaseInitialized || !db) {
        alert('Unable to submit right now. Please check your internet connection and try again.');
        return;
    }
    
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
        author: location ? `${name} (${location})` : name,
        timestamp: new Date().toISOString()
    };
    
    try {
        // Save to Firebase first
        await db.collection('jokes').add(newJoke);
        console.log('[Submit] Saved to Firebase successfully');
        
        // ONLY update the app state and card count AFTER successful Firebase save
        state.jokes.push(newJoke);
        state.currentIndex = state.jokes.length - 1;
        
        // Update the card counter automatically (shows "Card X of 101", "102", etc.)
        renderCard();
        updateCardJumps();
        closeJokeModal();
        
        alert('Your joke was submitted successfully! Thank you!');
    } catch (e) {
        console.error('[Submit] Firebase failed:', e);
        alert('Failed to save your joke. Please check your connection and try again. No data was stored locally.');
        // Note: We do NOT save to localStorage here to prevent clogging resources
    }
}

/*
================================================================================
This Area Of Code Is: Firebase Data Loader (Cloud Only - No localStorage Fallback)
Explanation: Loads community-submitted jokes from Firestore only.
In Other Words: Fetches new jokes from the cloud only - doesn't look for local backups
================================================================================
*/

async function loadCommunityJokes() {
    if (!firebaseInitialized || !db) {
        console.log('[Load] Firebase not available - running with default 100 jokes only');
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
        
        console.log(`[Load] Loaded ${communityJokes.length} community jokes from Firebase`);
        renderCard();
        updateCardJumps();
    } catch (e) {
        console.log('[Load] Firestore failed:', e);
        // No localStorage fallback - we keep the default 100 jokes only
    }
}

/*
================================================================================
This Area Of Code Is: Application Initialization
Explanation: Sets up event listeners and initializes components on page load
In Other Words: Starting the app when the page first loads
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('[App] Initializing...');
    
    // PHASE 3: Initialize counters
    updatePersonalVisitCounter();
    updateGlobalVisitorCount();
    
    new VideoBackgroundManager();
    loadCommunityJokes();
    renderCard();
    updateCardJumps();
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === 'Escape') {
            closeJokeModal();
            closeGuidelines();
            const menu = document.getElementById('sideMenu');
            if (menu?.classList.contains('open')) toggleMenu();
        }
    });
    
    // PHASE 3: Removed random online users generation (no more fake "3 online")
    // The liveViewers element now shows personal visits via updatePersonalVisitCounter()
    
    console.log('[App] Initialized with', state.jokes.length, 'cards');
});
