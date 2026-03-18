/*
================================================================================
This Area Of Code Is: Firebase Configuration Object
Explanation: I configured the Firebase connection with my specific project 
credentials. This object contains the API key, authentication domain, project 
ID, storage bucket, messaging sender ID, and app ID necessary to connect to 
my Firebase project "growing-get-well-card".
In Other Words: This is the secret password that lets the app talk to my 
database on Google's computers.
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

/*
================================================================================
This Area Of Code Is: Firebase Initialization
Explanation: I initialized the Firebase app with my configuration and created 
a database reference variable (db). I wrapped this in a try-catch block so 
if Firebase fails to load (offline or blocked), the app continues working 
with local jokes only. The firebaseInitialized flag tracks whether cloud 
storage is available.
In Other Words: I turned on the connection to Google's database, but if it 
doesn't work, the app still runs with the jokes built into it.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Initial Jokes & Cards Array
Explanation: I created the starting array of 24 cards containing clean jokes, 
church messages, prayers, and encouragement. Each card has properties: type 
(category), icon (emoji), title (setup or message), punchline (for jokes), 
and isOriginal (true for built-in content). This provides immediate content 
before any user submissions load from Firebase.
In Other Words: This is the list of 24 jokes and messages that are already 
in the app when you first open it, before anyone adds new ones.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Application State Variables
Explanation: I declared variables to track the current application state: 
currentIndex (which card is showing), punchlineVisible (whether the answer 
is showing), autoMode (whether slideshow is running), autoInterval (the 
timer reference so I can stop it), and autoSpeed (milliseconds between cards, 
default 5000ms = 5 seconds).
In Other Words: These are the memory variables that remember which joke 
you're looking at, if the answer is showing, and if the slideshow is playing.
================================================================================
*/
let currentIndex = 0;
let punchlineVisible = false;
let autoMode = false;
let autoInterval = null;
let autoSpeed = 5000;

/*
================================================================================
This Area Of Code Is: Firebase Jokes Loader Function
Explanation: I created an async function that fetches user-submitted jokes 
from Firestore when the app loads. It queries the 'jokes' collection ordered 
by timestamp (newest first), converts each document into a card object with 
the isUserAdded flag, appends them to the cards array, and refreshes the 
display and menu. If Firebase is offline, it silently fails and uses local jokes.
In Other Words: This goes to the internet to get new jokes people have added, 
then adds them to the list so everyone can see them.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Card Display Updater Function
Explanation: I wrote the central updateDisplay function that refreshes all 
UI elements when the current card changes. It updates the badge (showing 
either category or "Added by [Name] from [Location]"), the emoji icon, the 
title text, the punchline text (with opacity control for show/hide), and 
the card counter numbers.
In Other Words: This changes what's on the screen when you click Next or 
Back, showing the new joke and hiding the answer again.
================================================================================
*/
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
    
    /*
    ================================================================================
    This Area Of Code Is: User Attribution Display Logic
    Explanation: I added logic to detect if the current card was added by a user 
    (isUserAdded flag) and if so, change the badge text to show the author's name 
    and location instead of just the category type.
    In Other Words: If it's a joke someone added, this shows who wrote it and 
    where they're from in the corner tag.
    ================================================================================
    */
    if (card.isUserAdded) {
        document.getElementById('cardTypeBadge').textContent = `Added by ${card.author} from ${card.location}`;
    }
    
    /*
    ================================================================================
    This Area Of Code Is: Punchline Button Text Toggle
    Explanation: I update the punchline button text dynamically to reflect the 
    current state: "Show Punchline" when hidden, "Hide Punchline" when visible.
    In Other Words: This changes the button words so it says "Hide" when the 
    answer is showing and "Show" when it's hidden.
    ================================================================================
    */
    const btn = document.getElementById('punchlineBtn');
    btn.textContent = punchlineVisible ? 'Hide Punchline' : 'Show Punchline';
}

/*
================================================================================
This Area Of Code Is: Punchline Visibility Toggle
Explanation: I created a simple function that flips the punchlineVisible 
boolean state and triggers a display refresh. This is called when the user 
clicks the Show/Hide Punchline button.
In Other Words: This is what happens when you press the button to show or 
hide the answer.
================================================================================
*/
function togglePunchline() {
    punchlineVisible = !punchlineVisible;
    updateDisplay();
}

/*
================================================================================
This Area Of Code Is: Next Card Navigation
Explanation: I wrote the nextCard function to advance to the next index in 
the array, using the modulo operator (%) to loop back to 0 when reaching 
the end. It also resets punchlineVisible to false so the next joke's answer 
starts hidden.
In Other Words: This shows the next joke and hides the answer so you can 
guess again.
================================================================================
*/
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    punchlineVisible = false;
    updateDisplay();
}

/*
================================================================================
This Area Of Code Is: Previous Card Navigation
Explanation: I created the previousCard function to go backward in the array. 
I added the cards.length to the index before applying modulo to handle negative 
numbers correctly (JavaScript's modulo can return negatives, so this ensures 
we wrap around to the end of the array when going back from the first card).
In Other Words: This goes to the previous joke, or to the last one if you're 
at the beginning.
================================================================================
*/
function previousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    punchlineVisible = false;
    updateDisplay();
}

/*
================================================================================
This Area Of Code Is: Auto Mode Toggle Controller
Explanation: I built the toggleAuto function to switch Auto Mode on and off. 
When turning on, it adds the 'auto-active' CSS class (golden glow), changes 
the icon to a pause symbol, shows the speed controls, and starts the interval. 
When turning off, it reverses all these changes and clears the interval timer.
In Other Words: This turns on the slideshow that automatically changes jokes 
every few seconds, with a golden glowing button.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Auto Play Interval Manager
Explanation: I created the startAuto function that sets up a JavaScript interval 
to automatically call nextCard() every autoSpeed milliseconds. It also includes 
logic to automatically show the punchline 1 second after the card changes if 
the card has a punchline (creating a reveal effect during the slideshow).
In Other Words: This is the timer that changes the joke every 5 seconds (or 
whatever speed you pick) and automatically shows the answer after a second.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Speed Control Setter
Explanation: I wrote the setSpeed function to update the autoSpeed variable 
and visually update the speed buttons to show which one is active. If auto 
mode is currently running, it restarts the interval with the new timing 
immediately.
In Other Words: This lets you pick slow, medium, or fast for the slideshow, 
and changes the speed right away if it's already playing.
================================================================================
*/
function setSpeed(ms) {
    autoSpeed = ms;
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-speed="${ms}"]`).classList.add('active');
    if (autoMode) startAuto();
}

/*
================================================================================
This Area Of Code Is: Side Menu Toggle Controller
Explanation: I built the toggleMenu function to slide the navigation drawer 
in and out from the left side. It uses CSS class manipulation (removing 
'-translate-x-full' to show, adding it to hide) and toggles the backdrop 
visibility.
In Other Words: This slides the menu out from the left when you click the 
hamburger button, and slides it back when you click the X or the dark area.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Menu Card List Populator
Explanation: I created the populateMenu function that dynamically generates 
buttons for every card in the array and inserts them into the "Jump to Card" 
section of the side menu. For user-added jokes, it shows the author name; 
for original cards, it shows "Card X".
In Other Words: This fills up the side menu with a button for every single 
joke so you can jump to any one you want.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Joke Modal Open Function
Explanation: I wrote the openJokeModal function to display the submission form 
and pre-populate it with any draft data saved in LocalStorage. This allows 
users to close the modal and return later without losing their typing.
In Other Words: This opens the window where you type your joke, and if you 
started typing before, it remembers what you wrote.
================================================================================
*/
function openJokeModal() {
    document.getElementById('jokeModal').classList.add('open');
    // Load draft from LocalStorage
    const draft = JSON.parse(localStorage.getItem('jokeDraft') || '{}');
    if (draft.name) document.getElementById('jokeName').value = draft.name;
    if (draft.location) document.getElementById('jokeLocation').value = draft.location;
    if (draft.setup) document.getElementById('jokeSetup').value = draft.setup;
    if (draft.punchline) document.getElementById('jokePunchline').value = draft.punchline;
}

/*
================================================================================
This Area Of Code Is: Joke Modal Close Function
Explanation: I created a simple function to hide the joke submission modal by 
removing the 'open' class. The draft remains in LocalStorage for later retrieval.
In Other Words: This closes the joke typing window but saves what you typed 
for later.
================================================================================
*/
function closeJokeModal() {
    document.getElementById('jokeModal').classList.remove('open');
}

/*
================================================================================
This Area Of Code Is: LocalStorage Auto-Save Listener
Explanation: I set up an event listener on the document that captures input 
events from the joke form fields. Whenever the user types in any of the four 
fields (name, location, setup, punchline), it saves the current values to 
LocalStorage as a JSON object under the key 'jokeDraft'.
In Other Words: This secretly saves what you're typing every time you press 
a key, so if your phone dies or you close the app, you don't lose your joke.
================================================================================
*/
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

/*
================================================================================
This Area Of Code Is: Content Moderation Checker (PurgoMalum API)
Explanation: I created an async function that sends text to the PurgoMalum 
API (a free profanity filter service) to check if the content contains 
inappropriate language. It returns true if profanity is found, false if clean.
In Other Words: This sends the joke to a service that checks for bad words 
before allowing it to be posted.
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

/*
================================================================================
This Area Of Code Is: Joke Submission Handler
Explanation: I built the submitJoke async function that processes form submission. 
It prevents default form posting (e.preventDefault), shows a status message, 
extracts form values, checks content via PurgoMalum API, saves to Firebase 
Firestore if available, adds to local cards array immediately for instant 
feedback, clears the LocalStorage draft, resets the form, and updates the UI.
In Other Words: This handles everything that happens when you press Submit: 
checks for bad words, saves the joke to the internet and your phone, clears 
your draft, and shows a success message.
================================================================================
*/
async function submitJoke(e) {
    e.preventDefault();
    const status = document.getElementById('submitStatus');
    status.classList.remove('hidden');
    status.textContent = 'Checking content...';
    
    const name = document.getElementById('jokeName').value.trim();
    const location = document.getElementById('jokeLocation').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    
    /*
    ================================================================================
    This Area Of Code Is: Client-Side Content Validation
    Explanation: I call the checkContent function to verify the joke doesn't 
    contain profanity before proceeding. If it does, I display an error message 
    and stop submission.
    In Other Words: This checks if the joke is clean; if not, it says "no" and 
    stops.
    ================================================================================
    */
    const isBad = await checkContent(setup + ' ' + punchline + ' ' + name);
    if (isBad) {
        status.textContent = '❌ Content does not meet community guidelines.';
        status.className = 'mt-4 text-center text-sm text-red-600 font-bold';
        return;
    }
    
    /*
    ================================================================================
    This Area Of Code Is: Firebase Cloud Storage
    Explanation: If Firebase is initialized, I save the joke to Firestore with 
    the user's name, location, setup, punchline, server timestamp, and approved 
    status. This makes the joke available to all users immediately.
    In Other Words: This saves the joke to the internet database so everyone 
    can see it on their phones too.
    ================================================================================
    */
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
    
    /*
    ================================================================================
    This Area Of Code Is: Local Card Addition
    Explanation: I immediately append the new joke to the local cards array 
    so the user sees their submission right away without waiting for a page 
    refresh. It marks isUserAdded as true for visual distinction.
    In Other Words: This adds the joke to your phone's list right away so you 
    see it immediately without reloading.
    ================================================================================
    */
    cards.push({
        type: 'joke',
        icon: '😄',
        title: setup,
        punchline: punchline,
        author: name,
        location: location,
        isUserAdded: true
    });
    
    /*
    ================================================================================
    This Area Of Code Is: Post-Submission Cleanup
    Explanation: I clear the LocalStorage draft since the joke is now submitted, 
    reset the form fields, show a success message, close the modal after a 
    1.5-second delay, refresh the menu list, and navigate to the newly added card.
    In Other Words: This cleans up the form, says "success!", closes the window, 
    and takes you to your new joke.
    ================================================================================
    */
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

/*
================================================================================
This Area Of Code Is: Guidelines Modal Display Functions
Explanation: I created simple functions to show and hide the Community Guidelines 
modal by adding/removing the 'open' class which controls CSS display properties.
In Other Words: These open and close the rules window when you click the link.
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
This Area Of Code Is: Keyboard Navigation Controls
Explanation: I added a keyboard event listener to enable accessibility features: 
Right arrow (next card), Left arrow (previous card), Space/Enter (toggle 
punchline), and Escape (close modals). This allows users to navigate without 
touching the screen.
In Other Words: This lets you use the arrow keys on your keyboard to go 
through jokes, spacebar to show answers, and escape to close windows.
================================================================================
*/
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
Explanation: I set up a DOMContentLoaded event listener to initialize the app 
once the HTML is fully parsed. It loads external jokes from Firebase, renders 
the initial card display, and populates the navigation menu.
In Other Words: This starts the app when the page loads, getting everything 
ready and showing the first joke.
================================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    loadJokes();
    updateDisplay();
    populateMenu();
});
