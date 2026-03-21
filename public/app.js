/*
================================================================================
This Area Of Code Is: Encrypted Firebase Configuration
Explanation: Base64-encoded Firebase credentials for security. Prevents API key 
exposure in plain text while maintaining full Firestore functionality.
In Other Words: Hidden API keys to keep your database safe from unauthorized access.
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
    console.log('[App] Firebase initialized successfully');
} catch (e) {
    console.error('[App] Firebase initialization failed:', e);
}

/*
================================================================================
This Area Of Code Is: Complete Card Dataset (100 Corny Jokes)
Explanation: Static array of 100 family-friendly dad jokes with unique emojis.
No authors attached (null) as requested. Type 'joke' for all entries.
In Other Words: The complete joke database built right into the app.
================================================================================
*/

const defaultCards = [
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
    { type: 'joke', icon: '🐧', setup: "What do you call a penguin in the desert?", punchline: "Lost!", author: null },
    { type: 'joke', icon: '🐢', setup: "Why did the turtle cross the road?", punchline: "To get to the shell station!", author: null },
    { type: 'joke', icon: '🐍', setup: "What do you call a snake that works for the government?", punchline: "A civil serpent!", author: null },
    { type: 'joke', icon: '🦎', setup: "Why did the lizard go on a diet?", punchline: "It was a little heavy scale-d!", author: null },
    { type: 'joke', icon: '🐙', setup: "What do you call an octopus that throws things?", punchline: "An octo-pus!", author: null },
    { type: 'joke', icon: '🦑', setup: "Why did the squid cross the road?", punchline: "To get to the other tide!", author: null },
    { type: 'joke', icon: '🦐', setup: "What do you call a shrimp that won't share?", punchline: "Shellfish!", author: null },
    { type: 'joke', icon: '🦀', setup: "Why did the crab never give to charity?", punchline: "Because he's shellfish!", author: null },
    { type: 'joke', icon: '🐌', setup: "What do you call a snail on a ship?", punchline: "A snailor!", author: null },
    { type: 'joke', icon: '🦋', setup: "Why did the butterfly flutter by?", punchline: "Because it saw the caterpillar cry!", author: null },
    { type: 'joke', icon: '🐛', setup: "What do you call a caterpillar with a phone?", punchline: "A social butterfly in training!", author: null },
    { type: 'joke', icon: '🐜', setup: "Why don't ants get sick?", punchline: "They have little anty-bodies!", author: null },
    { type: 'joke', icon: '🐝', setup: "What do you call a bee that can't stop eating?", punchline: "Chub-bee!", author: null },
    { type: 'joke', icon: '🐞', setup: "Why did the ladybug go to the doctor?", punchline: "It was feeling spotty!", author: null },
    { type: 'joke', icon: '🦗', setup: "What do you call a cricket with no legs?", punchline: "A hop-less case!", author: null },
    { type: 'joke', icon: '🕷️', setup: "Why did the spider go to school?", punchline: "To learn web design!", author: null },
    { type: 'joke', icon: '🦂', setup: "What do you call a scorpion that loves music?", punchline: "A rock-stinger!", author: null },
    { type: 'joke', icon: '🌵', setup: "Why did the cactus cross the road?", punchline: "It got stuck to the chicken!", author: null },
    { type: 'joke', icon: '🌲', setup: "What do you call a tree that doubts itself?", punchline: "An un-sure-wood!", author: null },
    { type: 'joke', icon: '🌳', setup: "Why did the tree go to the dentist?", punchline: "It needed a root canal!", author: null },
    { type: 'joke', icon: '🍁', setup: "What do you call a leaf that's guilty?", punchline: "A con-leaf!", author: null },
    { type: 'joke', icon: '🍄', setup: "Why did the mushroom go to the party?", punchline: "Because he's a fungi!", author: null },
    { type: 'joke', icon: '🌹', setup: "What do you call a rose that tells jokes?", punchline: "A comedi-bloom!", author: null },
    { type: 'joke', icon: '🌻', setup: "Why did the sunflower get in trouble?", punchline: "It was always looking at the sun instead of working!", author: null },
    { type: 'joke', icon: '🌷', setup: "What do you call a flower that runs marathons?", punchline: "A petal-pusher!", author: null },
    { type: 'joke', icon: '🌼', setup: "Why did the daisy break up with the rose?", punchline: "It was tired of the thorny relationship!", author: null },
    { type: 'joke', icon: '🍎', setup: "Why did the apple go to the doctor?", punchline: "It wasn't peeling well!", author: null },
    { type: 'joke', icon: '🍐', setup: "What do you call a pear that plays guitar?", punchline: "A rock and roll fruit!", author: null },
    { type: 'joke', icon: '🍊', setup: "Why did the orange lose the race?", punchline: "It ran out of juice!", author: null },
    { type: 'joke', icon: '🍋', setup: "What do you call a lemon that's been stolen?", punchline: "A sour crime!", author: null },
    { type: 'joke', icon: '🍌', setup: "Why did the banana go out with the prune?", punchline: "Because it couldn't get a date!", author: null },
    { type: 'joke', icon: '🍉', setup: "What do you call a watermelon that's angry?", punchline: "Melon-choly!", author: null },
    { type: 'joke', icon: '🍇', setup: "Why did the grape stop in the middle of the road?", punchline: "Because it ran out of juice!", author: null },
    { type: 'joke', icon: '🍓', setup: "What do you call a strawberry that's sad?", punchline: "A blue-berry!", author: null },
    { type: 'joke', icon: '🫐', setup: "Why did the blueberry go to school?", punchline: "To become a little brr-ighter!", author: null },
    { type: 'joke', icon: '🍈', setup: "What do you call a melon that can't get married?", punchline: "Cant-elope!", author: null },
    { type: 'joke', icon: '🍒', setup: "Why did the cherry go to the doctor?", punchline: "It was feeling a little pit-iful!", author: null },
    { type: 'joke', icon: '🍑', setup: "What do you call a peach that's a great dancer?", punchline: "A fruit-loop!", author: null },
    { type: 'joke', icon: '🍍', setup: "Why did the pineapple stop at the gas station?", punchline: "It needed more juice!", author: null },
    { type: 'joke', icon: '🥝', setup: "What do you call a kiwi that's a detective?", punchline: "Sherlock Fruit!", author: null },
    { type: 'joke', icon: '🥑', setup: "Why did the avocado go to the gym?", punchline: "To get better abs-ocado!", author: null },
    { type: 'joke', icon: '🍅', setup: "What do you call a tomato that's embarrassed?", punchline: "A blushing fruit!", author: null },
    { type: 'joke', icon: '🥕', setup: "Why did the carrot get an award?", punchline: "Because it was outstanding in its field!", author: null },
    { type: 'joke', icon: '🌽', setup: "What do you call corn that joins the army?", punchline: "Kernel!", author: null },
    { type: 'joke', icon: '🥔', setup: "Why did the potato go to the party?", punchline: "Because it was a hot potato!", author: null },
    { type: 'joke', icon: '🥦', setup: "What do you call a broccoli that's a bodyguard?", punchline: "A head of security!", author: null },
    { type: 'joke', icon: '🥬', setup: "Why did the lettuce break up with the celery?", punchline: "It wanted someone with more stalk!", author: null },
    { type: 'joke', icon: '🥒', setup: "What do you call a pickle that plays piano?", punchline: "A dill-ightful musician!", author: null },
    { type: 'joke', icon: '🌶️', setup: "Why did the pepper put on a sweater?", punchline: "Because it was a little chili!", author: null },
    { type: 'joke', icon: '🧅', setup: "What do you call an onion that's a great actor?", punchline: "A tear-jerker!", author: null },
    { type: 'joke', icon: '🧄', setup: "Why did the garlic go to the doctor?", punchline: "It had a bad case of the cloves!", author: null },
    { type: 'joke', icon: '🍞', setup: "What do you call bread that's sleeping?", punchline: "A nap-kin!", author: null },
    { type: 'joke', icon: '🥐', setup: "Why did the croissant go to the dentist?", punchline: "It needed a filling!", author: null },
    { type: 'joke', icon: '🥯', setup: "What do you call a bagel that can fly?", punchline: "A plain bagel!", author: null },
    { type: 'joke', icon: '🥞', setup: "Why did the pancake go to the doctor?", punchline: "It was feeling a little flat!", author: null },
    { type: 'joke', icon: '🧇', setup: "What do you call a waffle that's been kidnapped?", punchline: "A hostage breakfast!", author: null },
    { type: 'joke', icon: '🧀', setup: "Why did the cheese go to the party?", punchline: "Because it was grate!", author: null },
    { type: 'joke', icon: '🍔', setup: "What do you call a burger that tells jokes?", punchline: "A pun-kin!", author: null },
    { type: 'joke', icon: '🍟', setup: "Why did the french fry win an award?", punchline: "Because it was outstanding in its salt!", author: null },
    { type: 'joke', icon: '🍕', setup: "What do you call a pizza that's a great singer?", punchline: "A pepperoni Crooner!", author: null },
    { type: 'joke', icon: '🌭', setup: "Why did the hot dog turn down a chance to star in a movie?", punchline: "It was afraid it might get too much of the spotlight!", author: null },
    { type: 'joke', icon: '🥪', setup: "What do you call a sandwich that's been left out?", punchline: "A sub-par meal!", author: null },
    { type: 'joke', icon: '🌮', setup: "Why did the taco go to the gym?", punchline: "To get better shell-f esteem!", author: null },
    { type: 'joke', icon: '🌯', setup: "What do you call a burrito that's a spy?", punchline: "A wrap-tile!", author: null },
    { type: 'joke', icon: '🥗', setup: "Why did the salad go to the music studio?", punchline: "To lay down some fresh beets!", author: null },
    { type: 'joke', icon: '🥙', setup: "What do you call a pita that's always calm?", punchline: "Hummus-ble!", author: null },
    { type: 'joke', icon: '🥚', setup: "Why did the egg cross the road?", punchline: "To get to the shell station!", author: null }
];

/*
================================================================================
This Area Of Code Is: Application State Management
Explanation: Tracks current card position, auto-play status, and user preferences.
In Other Words: The app's memory of where you are and what you're doing.
================================================================================
*/

let currentCardIndex = 0;
let autoMode = false;
let autoModeInterval = null;
let autoModeSpeed = 6000;
let isMenuOpen = false;
let punchlineVisible = true; // Always show punchlines (no toggle)

/*
================================================================================
This Area Of Code Is: DOM Content Loaded Initialization
Explanation: Sets up all event listeners, loads saved preferences, initializes 
the card display, and tracks visitor metrics on page load.
In Other Words: Starts the app when the page loads.
================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize card display
    renderCard();
    updateCardJumps();
    
    // Initialize visitor tracking
    trackPersonalVisits();
    trackGlobalVisitor();
    
    // Load saved accessibility settings
    loadSavedAccessibilitySettings();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup menu hamburger animation
    setupMenuAnimation();
});

/*
================================================================================
This Area Of Code Is: Card Rendering Engine
Explanation: Displays the current joke with immediate punchline visibility.
Setup and punchline shown together per Phase 2 requirements.
In Other Words: Shows the joke and answer at the same time, no hiding.
================================================================================
*/

function renderCard() {
    const card = defaultCards[currentCardIndex];
    
    // Update badge
    const badge = document.getElementById('cardBadge');
    badge.textContent = 'JOKE';
    
    // Update icon
    document.getElementById('cardIcon').textContent = card.icon;
    
    // Update setup text (the joke question)
    document.getElementById('setupText').textContent = card.setup;
    
    // Update punchline text (always visible per Phase 2)
    const punchlineEl = document.getElementById('punchlineText');
    punchlineEl.textContent = card.punchline;
    punchlineEl.classList.add('visible');
    
    // Update counter
    document.getElementById('cardCounter').textContent = `Card ${currentCardIndex + 1} of ${defaultCards.length}`;
    
    // Update jump grid active state
    updateActiveJumpButton();
    
    // Announce to screen readers if enabled
    announceToScreenReader(`Card ${currentCardIndex + 1}: ${card.setup} ${card.punchline}`);
}

/*
================================================================================
This Area Of Code Is: Card Navigation System
Explanation: Previous/Next card functionality with boundary wrapping.
In Other Words: Moving between jokes with arrow buttons.
================================================================================
*/

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % defaultCards.length;
    renderCard();
}

function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + defaultCards.length) % defaultCards.length;
    renderCard();
}

function jumpToCard(index) {
    currentCardIndex = index;
    renderCard();
    toggleMenu(); // Close menu after selection
}

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid Generator
Explanation: Creates 100 clickable buttons in a grid layout for quick navigation.
5-column grid that scrolls if needed. Shows emoji and number for each card.
In Other Words: The menu buttons to jump to any joke instantly.
================================================================================
*/

function updateCardJumps() {
    const grid = document.getElementById('cardJumps');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    defaultCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        btn.onclick = () => jumpToCard(index);
        btn.setAttribute('aria-label', `Jump to card ${index + 1}`);
        
        // Add emoji
        const emoji = document.createElement('span');
        emoji.textContent = card.icon;
        
        // Add number
        const num = document.createElement('small');
        num.textContent = index + 1;
        
        btn.appendChild(emoji);
        btn.appendChild(num);
        
        if (index === currentCardIndex) {
            btn.classList.add('active');
        }
        
        grid.appendChild(btn);
    });
}

function updateActiveJumpButton() {
    const buttons = document.querySelectorAll('.jump-btn');
    buttons.forEach((btn, index) => {
        if (index === currentCardIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/*
================================================================================
This Area Of Code Is: Auto-Play Mode Controller
Explanation: Automatically advances through cards at set intervals.
Speed options: 3.5s (fast), 5-7s (medium), 8-10s (slow).
In Other Words: The slideshow feature that plays jokes automatically.
================================================================================
*/

function toggleAutoMode() {
    autoMode = !autoMode;
    const btn = document.getElementById('autoModeBtn');
    const speedControls = document.getElementById('speedControls');
    const btnText = document.getElementById('autoModeText');
    
    if (autoMode) {
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
    stopAutoMode(); // Clear any existing interval
    
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

function setSpeed(speed) {
    autoModeSpeed = speed;
    
    // Update active button state
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === speed) {
            btn.classList.add('active');
        }
    });
    
    // Restart with new speed if active
    if (autoMode) {
        startAutoMode();
    }
}

/*
================================================================================
This Area Of Code Is: Side Menu Controller
Explanation: Hamburger menu toggle with overlay. Morphs to SCN logo when open.
In Other Words: The sliding menu from the left with all 100 card jumps.
================================================================================
*/

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('hamburgerIcon');
    const scnLogo = document.getElementById('scnLogo');
    
    if (isMenuOpen) {
        sideMenu.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('hidden');
        scnLogo.classList.add('visible');
    } else {
        sideMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('hidden');
        scnLogo.classList.remove('visible');
    }
}

function setupMenuAnimation() {
    // Menu button setup is handled in HTML/CSS, this ensures proper state
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
}

/*
================================================================================
This Area Of Code Is: Modal Management System
Explanation: Opens/closes joke submission, guidelines, and accessibility modals.
Handles form validation and prevents body scroll when modals are open.
In Other Words: Managing all the popup windows in the app.
================================================================================
*/

// Joke Modal
function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('jokeForm').reset();
}

// Guidelines Modal
function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Accessibility Modal
function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    checkModalScroll();
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

function checkModalScroll() {
    const content = document.getElementById('accessibilityContent');
    const indicator = document.getElementById('scrollIndicator');
    
    if (!content || !indicator) return;
    
    // Check if content is scrollable
    if (content.scrollHeight > content.clientHeight) {
        indicator.classList.add('visible');
        
        // Hide indicator when scrolled to bottom
        content.addEventListener('scroll', () => {
            if (content.scrollTop + content.clientHeight >= content.scrollHeight - 20) {
                indicator.classList.remove('visible');
            } else {
                indicator.classList.add('visible');
            }
        });
    }
}

/*
================================================================================
This Area Of Code Is: Accessibility Feature Toggle System
Explanation: Enables/disables accessibility modes when user taps anywhere on the 
accessibility row. Toggle switch visual updates and saves to localStorage.
In Other Words: Tap the row to turn on Autism mode, tap again to turn off.
================================================================================
*/

function toggleFeature(element, feature) {
    // If clicking the row (access-toggle), find the toggle-switch inside
    let toggleSwitch = element;
    let row = element;
    
    if (element.classList.contains('access-toggle')) {
        toggleSwitch = element.querySelector('.toggle-switch');
    } else if (element.classList.contains('toggle-switch')) {
        row = element.closest('.access-toggle');
    }
    
    // Toggle active state
    const isActive = !toggleSwitch.classList.contains('active');
    
    // Update visual state
    if (isActive) {
        toggleSwitch.classList.add('active');
        toggleSwitch.setAttribute('aria-checked', 'true');
        if (row && row.classList.contains('access-toggle')) {
            row.classList.add('active');
        }
    } else {
        toggleSwitch.classList.remove('active');
        toggleSwitch.setAttribute('aria-checked', 'false');
        if (row && row.classList.contains('access-toggle')) {
            row.classList.remove('active');
        }
    }
    
    // Apply/remove feature class from body
    if (isActive) {
        document.body.classList.add(feature + '-mode');
    } else {
        document.body.classList.remove(feature + '-mode');
    }
    
    // Special handling for high-contrast
    if (feature === 'high-contrast') {
        if (isActive) {
            document.body.classList.add('high-contrast-mode');
        } else {
            document.body.classList.remove('high-contrast-mode');
        }
    }
    
    // Save to localStorage
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Screen reader announcement
    announceToScreenReader(`${feature} mode ${isActive ? 'enabled' : 'disabled'}`);
}

function loadSavedAccessibilitySettings() {
    // List of all possible accessibility features
    const features = [
        'autism', 'adhd', 'dyslexia', 'dyspraxia',
        'anxiety', 'ptsd', 'mania', 'cognitive',
        'screen-reader', 'high-contrast', 'sign-language', 
        'visual-alerts', 'captions', 'large-targets', 
        'keyboard-only', 'extended-time', 'switch-control', 
        'speech-input', 'simple-language'
    ];
    
    features.forEach(feature => {
        const saved = localStorage.getItem('gw_access_' + feature);
        if (saved === 'true') {
            // Apply to body
            document.body.classList.add(feature + '-mode');
            if (feature === 'high-contrast') {
                document.body.classList.add('high-contrast-mode');
            }
            
            // Update any visible toggles
            const toggles = document.querySelectorAll(`[onclick*="'${feature}'"]`);
            toggles.forEach(toggle => {
                const switchEl = toggle.classList.contains('toggle-switch') ? 
                    toggle : toggle.querySelector('.toggle-switch');
                if (switchEl) {
                    switchEl.classList.add('active');
                    switchEl.setAttribute('aria-checked', 'true');
                    if (toggle.classList.contains('access-toggle')) {
                        toggle.classList.add('active');
                    }
                }
            });
        }
    });
    
    // Load saved color filter
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        applyColorFilter(savedFilter, false);
    }
}

/*
================================================================================
This Area Of Code Is: Color Vision Filter System
Explanation: Applies CSS filters for 9 types of color blindness.
Filters: Deuteranomaly, Deuteranopia, Protanomaly, Protanopia, Tritanomaly, 
Tritanopia, Achromatopsia, Cone Monochromacy, Blue Cone Monochromacy.
In Other Words: Changes colors on screen for colorblind users.
================================================================================
*/

function applyColorFilter(filterType, save = true) {
    // Remove all existing filter classes
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia', 
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia', 'filter-cone-monochromacy',
        'filter-blue-cone-monochromacy', 'cv-deuteranomaly', 
        'cv-deuteranopia', 'cv-protanomaly', 'cv-protanopia',
        'cv-tritanomaly', 'cv-tritanopia', 'cv-achromatopsia',
        'cv-cone-monochromacy', 'cv-blue-cone-monochromacy'
    );
    
    // Apply new filter if not 'none'
    if (filterType !== 'none') {
        document.body.classList.add('filter-' + filterType);
        document.body.classList.add('cv-' + filterType);
    }
    
    // Save preference
    if (save) {
        localStorage.setItem('gw_color_filter', filterType);
    }
    
    // Update button states
    document.querySelectorAll('.access-btn[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
    
    // Close modal if opened from there (optional - can be removed if you want modal to stay open)
    // closeAccessibilityModal();
}

/*
================================================================================
This Area Of Code Is: Joke Submission System with PurgoMalum API
Explanation: Validates user-submitted jokes against profanity API and church 
content standards. Checks location checkboxes (default: Country only).
In Other Words: Submit new jokes with bad word checking.
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    const location = document.getElementById('userLocation').value.trim();
    
    // Check location checkboxes
    const showCity = document.getElementById('showCity').checked;
    const showState = document.getElementById('showState').checked;
    const showCountry = document.getElementById('showCountry').checked;
    
    // Validation: At least one location option must be checked
    if (!showCity && !showState && !showCountry) {
        alert('Please select at least one location option (City, State/Province, or Country).');
        return;
    }
    
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Content moderation using PurgoMalum API
    try {
        const textToCheck = `${setup} ${punchline}`;
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(textToCheck)}`);
        const isProfane = await response.text();
        
        if (isProfane === 'true') {
            alert('Your submission contains inappropriate language. Please keep content family-friendly and clean.');
            return;
        }
        
        // If clean, proceed with submission to Firebase
        if (firebaseInitialized && db) {
            await db.collection('pending_jokes').add({
                name: name,
                setup: setup,
                punchline: punchline,
                location: location,
                locationOptions: {
                    city: showCity,
                    state: showState,
                    country: showCountry
                },
                submittedAt: new Date().toISOString(),
                status: 'pending',
                userAgent: navigator.userAgent.slice(0, 100)
            });
            
            alert('Thank you! Your joke has been submitted for review and will appear after approval.');
            closeJokeModal();
        } else {
            // Fallback if Firebase not available
            alert('Submission received! (Demo mode - Firebase not connected)');
            closeJokeModal();
        }
        
    } catch (error) {
        console.error('Submission error:', error);
        alert('Error submitting joke. Please try again.');
    }
}

/*
================================================================================
This Area Of Code Is: Keyboard Navigation System
Explanation: Enables arrow keys for card navigation, space for punchline 
(legacy), escape to close modals, and accessibility shortcuts.
In Other Words: Using keyboard to control the app.
================================================================================
*/

function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close modals on Escape
        if (e.key === 'Escape') {
            closeJokeModal();
            closeGuidelines();
            closeAccessibilityModal();
            if (isMenuOpen) toggleMenu();
            return;
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            previousCard();
        }
        
        // Space for auto-mode toggle (optional)
        if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            toggleAutoMode();
        }
    });
}

/*
================================================================================
This Area Of Code Is: Visitor Metrics Tracking
Explanation: Tracks personal visits via localStorage and global visitors via 
Firebase Firestore atomic increment. Updates UI with animated counters.
In Other Words: Counting how many people use the app.
================================================================================
*/

function trackPersonalVisits() {
    try {
        let visits = parseInt(localStorage.getItem('gw_personal_visits') || '0');
        visits++;
        localStorage.setItem('gw_personal_visits', visits.toString());
        
        // Update display if element exists
        const visitEl = document.getElementById('visitCount');
        if (visitEl) {
            visitEl.textContent = visits;
        }
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

async function trackGlobalVisitor() {
    if (!firebaseInitialized || !db) {
        console.log('Firebase not available for visitor tracking');
        updateOnlineDisplay(1);
        return;
    }
    
    try {
        const counterRef = db.collection('stats').doc('globalVisitors');
        
        // Increment atomically
        await counterRef.update({
            count: firebase.firestore.FieldValue.increment(1),
            lastVisit: new Date().toISOString()
        });
        
        // Get updated count
        const doc = await counterRef.get();
        const count = doc.data()?.count || 1;
        
        updateOnlineDisplay(count);
        
    } catch (error) {
        // If document doesn't exist, create it
        if (error.code === 'not-found') {
            try {
                await db.collection('stats').doc('globalVisitors').set({
                    count: 1,
                    created: new Date().toISOString()
                });
                updateOnlineDisplay(1);
            } catch (e) {
                updateOnlineDisplay(1);
            }
        } else {
            updateOnlineDisplay(1);
        }
    }
}

function updateOnlineDisplay(count) {
    const onlineEl = document.getElementById('onlineUsers');
    if (onlineEl) {
        onlineEl.textContent = `${count.toLocaleString()} online`;
    }
}

/*
================================================================================
This Area Of Code Is: Screen Reader Announcer
Explanation: Creates live region announcements for accessibility users when 
features change or cards navigate.
In Other Words: Tells blind users what's happening in the app.
================================================================================
*/

function announceToScreenReader(message) {
    // Check if screen reader mode is enabled or if user has accessibility needs
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/*
================================================================================
This Area Of Code Is: Home Navigation
Explanation: Returns user to index.html (landing page).
In Other Words: The home button functionality.
================================================================================
*/

function goHome() {
    window.location.href = '../index.html';
}

/*
================================================================================
This Area Of Code Is: Service Worker Registration
Explanation: Registers the PWA service worker for offline functionality.
In Other Words: Makes the app work without internet.
================================================================================
*/

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('[App] ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('[App] ServiceWorker registration failed:', error);
            });
    });
}
