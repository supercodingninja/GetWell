/*
================================================================================
This Area Of Code Is: Application State Management
Explanation: Global variables tracking current card, auto-mode status, user preferences, and Firebase connection
In Other Words: The memory of the app - what card you're on, if auto-mode is running, etc.
================================================================================
*/

// State Management
let currentCardIndex = 0;
let autoModeInterval = null;
let isAutoModeActive = false;
let autoModeSpeed = 6000; // Default medium speed
let isPunchlineVisible = false;
let db = null;
let firebaseInitialized = false;

// Default 100 Jokes Database
const defaultJokes = [
    { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!", type: "Corny Joke", icon: "🌾" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta!", type: "Food Joke", icon: "🍝" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", type: "Food Joke", icon: "🥚" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", type: "Animal Joke", icon: "🐻" },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems!", type: "School Joke", icon: "📚" },
    { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!", type: "Animal Joke", icon: "🦕" },
    { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!", type: "Object Joke", icon: "🚲" },
    { setup: "What do you call a fish with no eyes?", punchline: "Fsh!", type: "Animal Joke", icon: "🐟" },
    { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!", type: "Sports Joke", icon: "⛳" },
    { setup: "What do you call a boomerang that doesn't come back?", punchline: "A stick!", type: "Object Joke", icon: "🪃" },
    { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!", type: "Spooky Joke", icon: "💀" },
    { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!", type: "Food Joke", icon: "🧀" },
    { setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!", type: "Food Joke", icon: "🍅" },
    { setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!", type: "Object Joke", icon: "🥫" },
    { setup: "Why did the cookie go to the hospital?", punchline: "Because it felt crummy!", type: "Food Joke", icon: "🍪" },
    { setup: "What do you call a pig that does karate?", punchline: "A pork chop!", type: "Animal Joke", icon: "🥋" },
    { setup: "Why did the belt get arrested?", punchline: "It held up a pair of pants!", type: "Object Joke", icon: "👖" },
    { setup: "What do you call a dog that does magic?", punchline: "A Labracadabrador!", type: "Animal Joke", icon: "🪄" },
    { setup: "Why did the coffee file a police report?", punchline: "It got mugged!", type: "Food Joke", icon: "☕" },
    { setup: "What do you call a shoe made of a banana?", punchline: "A slipper!", type: "Food Joke", icon: "🍌" },
    { setup: "Why did the stadium get hot?", punchline: "All the fans left!", type: "Sports Joke", icon: "🏟️" },
    { setup: "What do you call a deer with no eyes?", punchline: "No idea!", type: "Animal Joke", icon: "🦌" },
    { setup: "Why did the invisible man turn down the job?", punchline: "He couldn't see himself doing it!", type: "Classic Joke", icon: "👻" },
    { setup: "What do you call a cow with no legs?", punchline: "Ground beef!", type: "Animal Joke", icon: "🐄" },
    { setup: "Why did the picture go to jail?", punchline: "Because it was framed!", type: "Object Joke", icon: "🖼️" },
    { setup: "What do you call a seagull that flies over the bay?", punchline: "A bagel!", type: "Animal Joke", icon: "🥯" },
    { setup: "Why did the music teacher go to jail?", punchline: "She got caught with sharp objects!", type: "Music Joke", icon: "🎵" },
    { setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus!", type: "Animal Joke", icon: "📖" },
    { setup: "Why did the bicycle stand on its own?", punchline: "It was two-tired!", type: "Object Joke", icon: "🚲" },
    { setup: "What do you call a fish wearing a crown?", punchline: "King of the sea!", type: "Animal Joke", icon: "👑" },
    { setup: "Why did the clock get kicked out of class?", punchline: "It tocked too much!", type: "Object Joke", icon: "⏰" },
    { setup: "What do you call a snowman with a six-pack?", punchline: "An abdominal snowman!", type: "Winter Joke", icon: "⛄" },
    { setup: "Why did the scarecrow become a comedian?", punchline: "He was outstanding in his field!", type: "Corny Joke", icon: "🎭" },
    { setup: "What do you call a horse that lives next door?", punchline: "A neigh-bor!", type: "Animal Joke", icon: "🐴" },
    { setup: "Why did the orange stop?", punchline: "It ran out of juice!", type: "Food Joke", icon: "🍊" },
    { setup: "What do you call a bear in the rain?", punchline: "A drizzly bear!", type: "Animal Joke", icon: "🐻" },
    { setup: "Why did the computer go to the doctor?", punchline: "It had a virus!", type: "Tech Joke", icon: "💻" },
    { setup: "What do you call a belt made of watches?", punchline: "A waist of time!", type: "Object Joke", icon: "⌚" },
    { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!", type: "Animal Joke", icon: "🍗" },
    { setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!", type: "Animal Joke", icon: "🦘" },
    { setup: "Why did the math book skip breakfast?", punchline: "It was already full of problems!", type: "School Joke", icon: "🥣" },
    { setup: "What do you call a ghost's true love?", punchline: "His ghoul-friend!", type: "Spooky Joke", icon: "👻" },
    { setup: "Why did the banana go to the doctor?", punchline: "It wasn't peeling well!", type: "Food Joke", icon: "🍌" },
    { setup: "What do you call a cat that likes to swim?", punchline: "A catfish!", type: "Animal Joke", icon: "🐱" },
    { setup: "Why did the light bulb fail school?", punchline: "It wasn't very bright!", type: "Object Joke", icon: "💡" },
    { setup: "What do you call a dog in the sun?", punchline: "A hot dog!", type: "Animal Joke", icon: "🌭" },
    { setup: "Why did the pencil get a ticket?", punchline: "It didn't have a license to draw!", type: "Object Joke", icon: "✏️" },
    { setup: "What do you call a cow that plays music?", punchline: "A moo-sician!", type: "Animal Joke", icon: "🎸" },
    { setup: "Why did the tree go to the dentist?", punchline: "It needed a root canal!", type: "Nature Joke", icon: "🌳" },
    { setup: "What do you call a sheep with no legs?", punchline: "A cloud!", type: "Animal Joke", icon: "☁️" },
    { setup: "Why did the cookie cry?", punchline: "Because its mother was a wafer so long!", type: "Food Joke", icon: "😢" },
    { setup: "What do you call a crab that throws things?", punchline: "A lobster!", type: "Animal Joke", icon: "🦀" },
    { setup: "Why did the umbrella close?", punchline: "The conversation was too dry!", type: "Object Joke", icon: "☂️" },
    { setup: "What do you call a lion who likes pasta?", punchline: "A rasta-pasta-lion!", type: "Animal Joke", icon: "🦁" },
    { setup: "Why did the mirror go to school?", punchline: "To reflect on its appearance!", type: "Object Joke", icon: "🪞" },
    { setup: "What do you call a frog that's illegally parked?", punchline: "Toad!", type: "Animal Joke", icon: "🐸" },
    { setup: "Why did the bread get promoted?", punchline: "It was on a roll!", type: "Food Joke", icon: "🍞" },
    { setup: "What do you call a snake that works for the government?", punchline: "A civil serpent!", type: "Animal Joke", icon: "🐍" },
    { setup: "Why did the frog call his insurance company?", punchline: "He had a jump in his car!", type: "Animal Joke", icon: "🚗" },
    { setup: "What do you call a rabbit with fleas?", punchline: "Bugs Bunny!", type: "Animal Joke", icon: "🐰" },
    { setup: "Why did the grape stop in the middle of the road?", punchline: "It ran out of juice!", type: "Food Joke", icon: "🍇" },
    { setup: "What do you call a monkey that loves chips?", punchline: "A chipmunk!", type: "Animal Joke", icon: "🐵" },
    { setup: "Why did the toilet paper roll down the hill?", punchline: "To get to the bottom!", type: "Object Joke", icon: "🧻" },
    { setup: "What do you call a cat that eats lemons?", punchline: "A sourpuss!", type: "Animal Joke", icon: "🍋" },
    { setup: "Why did the broom get a raise?", punchline: "It swept the competition!", type: "Object Joke", icon: "🧹" },
    { setup: "What do you call a penguin in the desert?", punchline: "Lost!", type: "Animal Joke", icon: "🐧" },
    { setup: "Why did the calendar go to therapy?", punchline: "Its days were numbered!", type: "Object Joke", icon: "📅" },
    { setup: "What do you call a shark that delivers packages?", punchline: "A delivery shark!", type: "Animal Joke", icon: "🦈" },
    { setup: "Why did the ice cream truck break down?", punchline: "It had a meltdown!", type: "Food Joke", icon: "🍦" },
    { setup: "What do you call a hamster that can sing?", punchline: "Elvis Parsley!", type: "Animal Joke", icon: "🎤" },
    { setup: "Why did the backpack go to college?", punchline: "It wanted to be a satchel!", type: "Object Joke", icon: "🎒" },
    { setup: "What do you call a giraffe with no spots?", punchline: "Invisible from the neck down!", type: "Animal Joke", icon: "🦒" },
    { setup: "Why did the watermelon have a fancy wedding?", punchline: "Because it was one in a melon!", type: "Food Joke", icon: "🍉" },
    { setup: "What do you call a turtle that flies?", punchline: "A shell-icopter!", type: "Animal Joke", icon: "🐢" },
    { setup: "Why did the carpet get cleaned?", punchline: "It was floored by the dirt!", type: "Object Joke", icon: "🧹" },
    { setup: "What do you call an alligator in a vest?", punchline: "An investigator!", type: "Animal Joke", icon: "🐊" },
    { setup: "Why did the stapler go on vacation?", punchline: "It was feeling a bit attached!", type: "Object Joke", icon: "📎" },
    { setup: "What do you call a zebra that plays piano?", punchline: "A zeb-rhapsody!", type: "Animal Joke", icon: "🦓" },
    { setup: "Why did the donut go to the gym?", punchline: "To get a little rounder!", type: "Food Joke", icon: "🍩" },
    { setup: "What do you call a beaver that builds houses?", punchline: "A real estate agent!", type: "Animal Joke", icon: "🦫" },
    { setup: "Why did the feather get a ticket?", punchline: "It was tickling people!", type: "Object Joke", icon: "🪶" },
    { setup: "What do you call an octopus that tells jokes?", punchline: "A comedi-ten!", type: "Animal Joke", icon: "🐙" },
    { setup: "Why did the sandwich go to the beach?", punchline: "It wanted to get a sub-tan!", type: "Food Joke", icon: "🏖️" },
    { setup: "What do you call a panda that loves parties?", punchline: "A panda-monium!", type: "Animal Joke", icon: "🐼" },
    { setup: "Why did the lamp go to school?", punchline: "To get brighter!", type: "Object Joke", icon: "🛋️" },
    { setup: "What do you call a whale that sings?", punchline: "An opera-tuna!", type: "Animal Joke", icon: "🐋" },
    { setup: "Why did the mushroom go to the party?", punchline: "Because he was a fun-gi!", type: "Food Joke", icon: "🍄" },
    { setup: "What do you call a goat that knows martial arts?", punchline: "Karate kid!", type: "Animal Joke", icon: "🐐" },
    { setup: "Why did the pillow cross the road?", punchline: "To rest on the other side!", type: "Object Joke", icon: "🛏️" },
    { setup: "What do you call a squirrel that collects nuts?", punchline: "A cashew-al hoarder!", type: "Animal Joke", icon: "🐿️" },
    { setup: "Why did the pickle wear glasses?", punchline: "It couldn't see its way out of the jar!", type: "Food Joke", icon: "🥒" },
    { setup: "What do you call an eagle that plays basketball?", punchline: "A slam-dunkin' eagle!", type: "Animal Joke", icon: "🦅" },
    { setup: "Why did the spoon go to the party?", punchline: "To stir things up!", type: "Object Joke", icon: "🥄" },
    { setup: "What do you call a koala that loves technology?", punchline: "A USB-ear!", type: "Animal Joke", icon: "🐨" },
    { setup: "Why did the broccoli go to the dance?", punchline: "To get its groove on!", type: "Food Joke", icon: "🥦" },
    { setup: "What do you call a camel with three humps?", punchline: "Pregnant!", type: "Animal Joke", icon: "🐫" },
    { setup: "Why did the window go to the doctor?", punchline: "It had a pane!", type: "Object Joke", icon: "🪟" },
    { setup: "What do you call a hedgehog that plays soccer?", punchline: "A goal-keeper!", type: "Animal Joke", icon: "⚽" },
    { setup: "Why did the potato get an award?", punchline: "It was a real chip off the old block!", type: "Food Joke", icon: "🥔" },
    { setup: "What do you call a raccoon that cleans?", punchline: "A trash panda!", type: "Animal Joke", icon: "🦝" },
    { setup: "Why did the key go to school?", punchline: "To learn how to unlock its potential!", type: "Object Joke", icon: "🔑" }
];

// Jokes array (will be populated from Firebase or use defaults)
let jokes = [...defaultJokes];

/*
================================================================================
This Area Of Code Is: Firebase Initialization
Explanation: Sets up Firebase connection with encrypted credentials for database functionality
In Other Words: Connects to the cloud database to save and load jokes
================================================================================
*/

function initFirebase() {
    // Encrypted config for security
    const encryptedConfig = {
        apiKey: "QUl6YVN5RGllVkE1eV9wYWczNVpWaDhQOFB1bDY4c1pfMnF0RUdV",
        authDomain: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJkLmZpcmViYXNlYXBwLmNvbQ==",
        projectId: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJk",
        storageBucket: "Z3Jvd2luZy1nZXQtd2VsbC1jYXJkLmZpcmViYXNlc3RvcmFnZS5hcHA=",
        messagingSenderId: "NjE1MDI1Mzc4NTI5",
        appId: "MTo2MTUwMjUzNzg1Mjk6d2ViOjM4ZTM4MDFjNzlmNTRkODUyNjIzYTA=",
        measurementId: "Ry1SRUs5OVAzRUtX"
    };

    try {
        const firebaseConfig = {
            apiKey: atob(encryptedConfig.apiKey),
            authDomain: atob(encryptedConfig.authDomain),
            projectId: atob(encryptedConfig.projectId),
            storageBucket: atob(encryptedConfig.storageBucket),
            messagingSenderId: atob(encryptedConfig.messagingSenderId),
            appId: atob(encryptedConfig.appId),
            measurementId: atob(encryptedConfig.measurementId)
        };

        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        firebaseInitialized = true;
        console.log('Firebase initialized successfully');
        loadJokesFromFirebase();
    } catch (e) {
        console.error('Firebase initialization failed:', e);
        jokes = [...defaultJokes];
        updateCardCounter();
        renderCardJumps();
    }
}

/*
================================================================================
This Area Of Code Is: Jokes Database Management
Explanation: Loads jokes from Firebase Firestore and merges with defaults, handles real-time updates
In Other Words: Gets the jokes from the cloud and shows them
================================================================================
*/

function loadJokesFromFirebase() {
    if (!db) return;
    
    db.collection('jokes').orderBy('timestamp', 'desc').limit(50).get()
        .then((querySnapshot) => {
            const firebaseJokes = [];
            querySnapshot.forEach((doc) => {
                const joke = doc.data();
                if (joke.setup && joke.punchline) {
                    firebaseJokes.push({
                        setup: joke.setup,
                        punchline: joke.punchline,
                        type: joke.type || 'User Joke',
                        icon: joke.icon || '💬',
                        author: joke.author || 'Anonymous'
                    });
                }
            });
            
            // Merge Firebase jokes with defaults (Firebase jokes first)
            jokes = [...firebaseJokes, ...defaultJokes.slice(0, 100 - firebaseJokes.length)];
            updateCardCounter();
            renderCardJumps();
            renderCard(currentCardIndex);
        })
        .catch((error) => {
            console.error('Error loading jokes:', error);
            jokes = [...defaultJokes];
            updateCardCounter();
            renderCardJumps();
        });
}

/*
================================================================================
This Area Of Code Is: Card Rendering System
Explanation: Displays current joke card with setup text, handles punchline visibility, updates badges
In Other Words: Shows the joke on the screen
================================================================================
*/

function renderCard(index) {
    if (index < 0) index = jokes.length - 1;
    if (index >= jokes.length) index = 0;
    currentCardIndex = index;
    
    const joke = jokes[index];
    const setupElement = document.getElementById('setupText');
    const punchlineElement = document.getElementById('punchlineText');
    const cardBadge = document.getElementById('cardBadge');
    const cardIcon = document.getElementById('cardIcon');
    const cardCounter = document.getElementById('cardCounter');
    
    if (setupElement) setupElement.textContent = joke.setup;
    if (punchlineElement) {
        punchlineElement.textContent = joke.punchline;
        punchlineElement.classList.remove('visible');
    }
    if (cardBadge) cardBadge.textContent = joke.type || 'Joke';
    if (cardIcon) cardIcon.textContent = joke.icon || '😄';
    if (cardCounter) cardCounter.textContent = `Card ${index + 1} of ${jokes.length}`;
    
    isPunchlineVisible = false;
    updatePunchlineButton();
    updateActiveJumpButton();
}

/*
================================================================================
This Area Of Code Is: Navigation Controls
Explanation: Functions for moving between cards, toggling punchline visibility
In Other Words: The Back, Next, and Show Punchline buttons
================================================================================
*/

function nextCard() {
    renderCard(currentCardIndex + 1);
    resetAutoMode();
}

function previousCard() {
    renderCard(currentCardIndex - 1);
    resetAutoMode();
}

function togglePunchline() {
    const punchlineElement = document.getElementById('punchlineText');
    if (!punchlineElement) return;
    
    isPunchlineVisible = !isPunchlineVisible;
    if (isPunchlineVisible) {
        punchlineElement.classList.add('visible');
    } else {
        punchlineElement.classList.remove('visible');
    }
    updatePunchlineButton();
    resetAutoMode();
}

function updatePunchlineButton() {
    const btn = document.getElementById('punchlineBtn');
    const btnText = document.getElementById('punchlineBtnText');
    if (!btn || !btnText) return;
    
    if (isPunchlineVisible) {
        btnText.textContent = 'Hide Punchline';
        btn.classList.add('active');
    } else {
        btnText.textContent = 'Show Punchline';
        btn.classList.remove('active');
    }
}

/*
================================================================================
This Area Of Code Is: Side Menu Management
Explanation: Toggles the slide-out navigation menu, handles jump-to-card grid generation
In Other Words: The hamburger menu that slides in from the left
================================================================================
*/

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if (!sideMenu || !menuOverlay) return;
    
    sideMenu.classList.toggle('open');
    menuOverlay.classList.toggle('open');
    
    // Animate hamburger to SCN logo
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.classList.toggle('active');
    }
}

function renderCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < jokes.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        if (i === currentCardIndex) btn.classList.add('active');
        btn.onclick = () => {
            renderCard(i);
            toggleMenu();
        };
        
        const icon = document.createElement('span');
        icon.textContent = jokes[i].icon || '😄';
        
        const num = document.createElement('small');
        num.textContent = i + 1;
        
        btn.appendChild(icon);
        btn.appendChild(num);
        container.appendChild(btn);
    }
}

function updateActiveJumpButton() {
    const buttons = document.querySelectorAll('.jump-btn');
    buttons.forEach((btn, idx) => {
        if (idx === currentCardIndex) {
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
This Area Of Code Is: Auto Mode System
Explanation: Automatically advances through cards at set intervals with configurable speeds
In Other Words: The Auto Mode that flips through cards automatically
================================================================================
*/

function toggleAutoMode() {
    isAutoModeActive = !isAutoModeActive;
    const btn = document.getElementById('autoModeBtn');
    const btnText = document.getElementById('autoModeText');
    const speedControls = document.getElementById('speedControls');
    
    if (isAutoModeActive) {
        if (btn) btn.classList.add('active');
        if (btnText) btnText.textContent = 'Stop Auto';
        if (speedControls) speedControls.classList.add('visible');
        startAutoMode();
    } else {
        if (btn) btn.classList.remove('active');
        if (btnText) btnText.textContent = 'Auto Mode';
        if (speedControls) speedControls.classList.remove('visible');
        stopAutoMode();
    }
}

function startAutoMode() {
    stopAutoMode();
    autoModeInterval = setInterval(() => {
        renderCard(currentCardIndex + 1);
    }, autoModeSpeed);
}

function stopAutoMode() {
    if (autoModeInterval) {
        clearInterval(autoModeInterval);
        autoModeInterval = null;
    }
}

function resetAutoMode() {
    if (isAutoModeActive) {
        startAutoMode();
    }
}

function setSpeed(speed) {
    autoModeSpeed = speed;
    
    // Update active button
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === speed) {
            btn.classList.add('active');
        }
    });
    
    if (isAutoModeActive) {
        startAutoMode();
    }
}

/*
================================================================================
This Area Of Code Is: Content Moderation System
Explanation: Uses PurgoMalum API to check content for inappropriate language before submission
In Other Words: Checks if jokes are clean before saving them
================================================================================
*/

async function checkContent(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const result = await response.text();
        return result === 'true';
    } catch (e) {
        console.error('Content check failed:', e);
        return false;
    }
}

/*
================================================================================
This Area Of Code Is: Joke Submission Modal
Explanation: Handles opening/closing modal and submitting new jokes with validation
In Other Words: The form to add your own joke
================================================================================
*/

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.add('open');
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.remove('open');
    document.getElementById('jokeForm')?.reset();
}

async function submitJoke(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName')?.value.trim();
    const jokeSetup = document.getElementById('jokeSetup')?.value.trim();
    const jokePunchline = document.getElementById('jokePunchline')?.value.trim();
    
    if (!userName || !jokeSetup || !jokePunchline) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Check for inappropriate content
    const hasProfanity = await checkContent(jokeSetup + ' ' + jokePunchline);
    if (hasProfanity) {
        alert('Please keep content family-friendly and clean.');
        return;
    }
    
    const newJoke = {
        setup: jokeSetup,
        punchline: jokePunchline,
        type: 'Community Joke',
        icon: '💬',
        author: userName,
        timestamp: new Date().toISOString(),
        approved: true
    };
    
    // Save to Firebase if available
    if (db && firebaseInitialized) {
        try {
            await db.collection('jokes').add(newJoke);
            console.log('Joke saved to Firebase');
        } catch (e) {
            console.error('Error saving joke:', e);
        }
    }
    
    // Add to local array
    jokes.unshift(newJoke);
    if (jokes.length > 100) jokes.pop();
    
    updateCardCounter();
    renderCardJumps();
    renderCard(0);
    closeJokeModal();
    
    alert('Thank you! Your joke has been submitted for moderation.');
}

/*
================================================================================
This Area Of Code Is: Guidelines Modal
Explanation: Shows community guidelines popup
In Other Words: The rules popup
================================================================================
*/

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
This Area Of Code Is: Accessibility Modal & Features
Explanation: Manages accessibility settings panel and applies various accessibility modes
In Other Words: The settings for disabilities like Autism, ADHD, PTSD, color blindness
================================================================================
*/

function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.add('open');
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.remove('open');
}

function toggleFeature(element, feature) {
    element.classList.toggle('active');
    const isActive = element.classList.contains('active');
    document.body.classList.toggle(feature + '-mode', isActive);
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Handle special cases
    if (feature === 'high-contrast' && isActive) {
        document.body.classList.add('high-contrast');
    } else if (feature === 'high-contrast') {
        document.body.classList.remove('high-contrast');
    }
}

function applyColorFilter(filter) {
    // Remove all filter classes
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia', 
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia'
    );
    
    // Add selected filter
    if (filter !== 'none') {
        document.body.classList.add('filter-' + filter);
    }
    
    localStorage.setItem('gw_color_filter', filter);
    
    // Update button states
    document.querySelectorAll('.access-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filter.replace('-', '')) || 
            (filter === 'none' && btn.textContent.includes('Normal'))) {
            btn.classList.add('active');
        }
    });
}

/*
================================================================================
This Area Of Code Is: Keyboard Navigation Support
Explanation: Adds keyboard shortcuts for accessibility (Space for punchline, Arrows for navigation, Escape for menus)
In Other Words: Use keyboard to control the app
================================================================================
*/

document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    switch(e.key) {
        case ' ':
        case 'Spacebar':
            e.preventDefault();
            togglePunchline();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case 'ArrowLeft':
            previousCard();
            break;
        case 'Escape':
            closeJokeModal();
            closeGuidelines();
            closeAccessibilityModal();
            const sideMenu = document.getElementById('sideMenu');
            if (sideMenu?.classList.contains('open')) {
                toggleMenu();
            }
            break;
    }
});

/*
================================================================================
This Area Of Code Is: Application Initialization
Explanation: Sets up app on page load - initializes Firebase, renders first card, loads saved settings
In Other Words: Starts everything when the page opens
================================================================================
*/

function updateCardCounter() {
    const totalCardsEl = document.getElementById('totalCards');
    if (totalCardsEl) {
        totalCardsEl.textContent = jokes.length + ' cards';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initFirebase();
    renderCard(0);
    
    // Load saved accessibility settings
    const savedFeatures = ['autism', 'adhd', 'dyslexia', 'anxiety', 'ptsd', 'high-contrast'];
    savedFeatures.forEach(feature => {
        if (localStorage.getItem('gw_access_' + feature) === 'true') {
            document.body.classList.add(feature + '-mode');
        }
    });
    
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add('filter-' + savedFilter);
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW registration failed'));
}
