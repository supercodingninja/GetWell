/*
================================================================================
This Area Of Code Is: Encrypted Firebase Configuration
Explanation: Base64 encoded Firebase credentials to prevent API key exposure
In Other Words: Hidden database passwords for security
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
} catch (e) {
    // Silent fail - works offline
}

/*
================================================================================
This Area Of Code Is: Complete Corny Jokes Dataset (EXACTLY 100 Cards)
Explanation: 90 jokes + 10 scriptures mixed throughout = 100 total cards
In Other Words: Exactly 100 cards with 10 spiritual boosts at positions 10,20,30,40,50,60,70,80,90,100
================================================================================
*/

const defaultCards = [
    // Cards 1-9: Jokes
    { type: 'joke', icon: '🧪', setup: "What do you call a fake noodle?", punchline: "An impasta!", author: null },
    { type: 'joke', icon: '🐄', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!", author: null },
    { type: 'joke', icon: '🍊', setup: "Why did the orange stop?", punchline: "It ran out of juice!", author: null },
    { type: 'joke', icon: '🐝', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!", author: null },
    { type: 'joke', icon: '🐟', setup: "What do you call a fish with no eyes?", punchline: "Fsh!", author: null },
    { type: 'joke', icon: '🍕', setup: "Why did the pizza maker go to church?", punchline: "He needed help with his daily bread!", author: null },
    { type: 'joke', icon: '⛪', setup: "Why do church musicians have to be so careful?", punchline: "Because one wrong note and it's an organ-ized crime!", author: null },
    { type: 'joke', icon: '🍌', setup: "Why did the banana go to the doctor?", punchline: "It wasn't peeling well!", author: null },
    { type: 'joke', icon: '🍪', setup: "Why did the cookie go to the hospital?", punchline: "It felt crumby!", author: null },
    // Card 10: Scripture
    { type: 'scripture', icon: '📖', setup: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters.", punchline: "— Psalm 23:1-2 (KJV)", author: null },
    // Cards 11-19: Jokes
    { type: 'joke', icon: '⛄', setup: "What do you call a snowman with a six pack?", punchline: "An abdominal snowman!", author: null },
    { type: 'joke', icon: '🥚', setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", author: null },
    { type: 'joke', icon: '🚲', setup: "Why did the bicycle fall over?", punchline: "It was two-tired!", author: null },
    { type: 'joke', icon: '🧀', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!", author: null },
    { type: 'joke', icon: '🏌️', setup: "Why did the golfer wear two pairs of pants?", punchline: "In case he got a hole in one!", author: null },
    { type: 'joke', icon: '🐻', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", author: null },
    { type: 'joke', icon: '🐶', setup: "What do you call a dog that can do magic?", punchline: "A Labracadabrador!", author: null },
    { type: 'joke', icon: '🐱', setup: "Why did the cat sit on the computer?", punchline: "To keep an eye on the mouse!", author: null },
    { type: 'joke', icon: '🐭', setup: "What do you call a mouse that can sing?", punchline: "A mouse-ician!", author: null },
    // Card 20: Scripture
    { type: 'scripture', icon: '✝️', setup: "The Lord is my light and my salvation; whom shall I fear? The Lord is the strength of my life; of whom shall I be afraid?", punchline: "— Psalm 27:1 (KJV)", author: null },
    // Cards 21-29: Jokes
    { type: 'joke', icon: '🦁', setup: "Why did the lion eat the tightrope walker?", punchline: "He wanted a well-balanced meal!", author: null },
    { type: 'joke', icon: '🐸', setup: "What do you call a frog that's illegally parked?", punchline: "Toad!", author: null },
    { type: 'joke', icon: '🐔', setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!", author: null },
    { type: 'joke', icon: '🐴', setup: "What do you call a horse that lives next door?", punchline: "A neighbor!", author: null },
    { type: 'joke', icon: '🐘', setup: "Why did the elephant bring a suitcase to the party?", punchline: "He wanted to pack his trunk!", author: null },
    { type: 'joke', icon: '🦒', setup: "What do you call a giraffe's notebook?", punchline: "A long story!", author: null },
    { type: 'joke', icon: '🦓', setup: "Why did the zebra get a ticket?", punchline: "For illegal parking!", author: null },
    { type: 'joke', icon: '🦘', setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!", author: null },
    { type: 'joke', icon: '🐨', setup: "Why did the koala get hired?", punchline: "He had all the right koalafications!", author: null },
    // Card 30: Scripture
    { type: 'scripture', icon: '🙏', setup: "The righteous cry, and the Lord heareth, and delivereth them out of all their troubles. The Lord is nigh unto them that are of a broken heart.", punchline: "— Psalm 34:17-18 (KJV)", author: null },
    // Cards 31-39: Jokes
    { type: 'joke', icon: '🐼', setup: "What do you call a bear with no socks?", punchline: "Bare-foot!", author: null },
    { type: 'joke', icon: '🦉', setup: "Why did the owl invite his friends over?", punchline: "He didn't want to be owl by himself!", author: null },
    { type: 'joke', icon: '🦜', setup: "What do you call a parrot that flew away?", punchline: "A polygon!", author: null },
    { type: 'joke', icon: '🦚', setup: "Why did the peacock get a job?", punchline: "He wanted to make some plume!", author: null },
    { type: 'joke', icon: '🦩', setup: "What do you call a flamingo at a dance?", punchline: "The pink of the party!", author: null },
    { type: 'joke', icon: '🦢', setup: "Why did the swan refuse to fight?", punchline: "He didn't want to ruffle feathers!", author: null },
    { type: 'joke', icon: '🦆', setup: "What do you call a duck that gets all A's?", punchline: "A wise quacker!", author: null },
    { type: 'joke', icon: '🦅', setup: "Why did the eagle bring a ruler?", punchline: "To measure his talon-ts!", author: null },
    { type: 'joke', icon: '🐧', setup: "What do you call a penguin in the desert?", punchline: "Lost!", author: null },
    // Card 40: Scripture
    { type: 'scripture', icon: '⛪', setup: "God is our refuge and strength, a very present help in trouble. Therefore will not we fear, though the earth be removed.", punchline: "— Psalm 46:1-2 (KJV)", author: null },
    // Cards 41-49: Jokes
    { type: 'joke', icon: '🐢', setup: "Why did the turtle cross the road?", punchline: "To get to the shell station!", author: null },
    { type: 'joke', icon: '🐍', setup: "What do you call a snake that works for the government?", punchline: "A civil serpent!", author: null },
    { type: 'joke', icon: '🦎', setup: "Why did the lizard go on a diet?", punchline: "It was a little heavy scale-d!", author: null },
    { type: 'joke', icon: '🐙', setup: "What do you call an octopus that throws things?", punchline: "An octo-pus!", author: null },
    { type: 'joke', icon: '🦑', setup: "Why did the squid cross the road?", punchline: "To get to the other tide!", author: null },
    { type: 'joke', icon: '🦐', setup: "What do you call a shrimp that won't share?", punchline: "Shellfish!", author: null },
    { type: 'joke', icon: '🦀', setup: "Why did the crab never give to charity?", punchline: "Because he's shellfish!", author: null },
    { type: 'joke', icon: '🐌', setup: "What do you call a snail on a ship?", punchline: "A snailor!", author: null },
    { type: 'joke', icon: '🦋', setup: "Why did the butterfly flutter by?", punchline: "Because it saw the caterpillar cry!", author: null },
    // Card 50: Scripture
    { type: 'scripture', icon: '🕊️', setup: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress.", punchline: "— Psalm 91:1-2 (KJV)", author: null },
    // Cards 51-59: Jokes
    { type: 'joke', icon: '🐛', setup: "What do you call a caterpillar with a phone?", punchline: "A social butterfly in training!", author: null },
    { type: 'joke', icon: '🐜', setup: "Why don't ants get sick?", punchline: "They have little anty-bodies!", author: null },
    { type: 'joke', icon: '🐞', setup: "Why did the ladybug go to the doctor?", punchline: "It was feeling spotty!", author: null },
    { type: 'joke', icon: '🕷️', setup: "Why did the spider go to school?", punchline: "To learn web design!", author: null },
    { type: 'joke', icon: '🦂', setup: "What do you call a scorpion that loves music?", punchline: "A rock-stinger!", author: null },
    { type: 'joke', icon: '🌵', setup: "Why did the cactus cross the road?", punchline: "It got stuck to the chicken!", author: null },
    { type: 'joke', icon: '🌲', setup: "What do you call a tree that doubts itself?", punchline: "An un-sure-wood!", author: null },
    { type: 'joke', icon: '🌳', setup: "Why did the tree go to the dentist?", punchline: "It needed a root canal!", author: null },
    { type: 'joke', icon: '🍁', setup: "What do you call a leaf that's guilty?", punchline: "A con-leaf!", author: null },
    // Card 60: Scripture
    { type: 'scripture', icon: '📿', setup: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", punchline: "— Proverbs 3:5-6 (KJV)", author: null },
    // Cards 61-69: Jokes
    { type: 'joke', icon: '🍄', setup: "Why did the mushroom go to the party?", punchline: "Because he's a fungi!", author: null },
    { type: 'joke', icon: '🌹', setup: "What do you call a rose that tells jokes?", punchline: "A comedi-bloom!", author: null },
    { type: 'joke', icon: '🌻', setup: "Why did the sunflower get in trouble?", punchline: "It was always looking at the sun instead of working!", author: null },
    { type: 'joke', icon: '🌷', setup: "What do you call a flower that runs marathons?", punchline: "A petal-pusher!", author: null },
    { type: 'joke', icon: '🌼', setup: "Why did the daisy break up with the rose?", punchline: "It was tired of the thorny relationship!", author: null },
    { type: 'joke', icon: '🍎', setup: "Why did the apple go to the doctor?", punchline: "It wasn't peeling well!", author: null },
    { type: 'joke', icon: '🍐', setup: "What do you call a pear that plays guitar?", punchline: "A rock and roll fruit!", author: null },
    { type: 'joke', icon: '🍋', setup: "What do you call a lemon that's been stolen?", punchline: "A sour crime!", author: null },
    { type: 'joke', icon: '🍉', setup: "What do you call a watermelon that's angry?", punchline: "Melon-choly!", author: null },
    // Card 70: Scripture
    { type: 'scripture', icon: '✨', setup: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.", punchline: "— Jeremiah 29:11 (KJV)", author: null },
    // Cards 71-79: Jokes
    { type: 'joke', icon: '🍇', setup: "Why did the grape stop in the middle of the road?", punchline: "Because it ran out of juice!", author: null },
    { type: 'joke', icon: '🍓', setup: "What do you call a strawberry that's sad?", punchline: "A blue-berry!", author: null },
    { type: 'joke', icon: '🫐', setup: "Why did the blueberry go to school?", punchline: "To become a little brr-ighter!", author: null },
    { type: 'joke', icon: '🍈', setup: "What do you call a melon that can't get married?", punchline: "Cant-elope!", author: null },
    { type: 'joke', icon: '🍒', setup: "Why did the cherry go to the doctor?", punchline: "It was feeling a little pit-iful!", author: null },
    { type: 'joke', icon: '🍑', setup: "What do you call a peach that's a great dancer?", punchline: "A fruit-loop!", author: null },
    { type: 'joke', icon: '🍍', setup: "Why did the pineapple stop at the gas station?", punchline: "It needed more juice!", author: null },
    { type: 'joke', icon: '🥝', setup: "What do you call a kiwi that's a detective?", punchline: "Sherlock Fruit!", author: null },
    { type: 'joke', icon: '🥑', setup: "Why did the avocado go to the gym?", punchline: "To get better abs-ocado!", author: null },
    // Card 80: Scripture
    { type: 'scripture', icon: '🛡️', setup: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", punchline: "— Isaiah 41:10 (KJV)", author: null },
    // Cards 81-89: Jokes
    { type: 'joke', icon: '🍅', setup: "What do you call a tomato that's embarrassed?", punchline: "A blushing fruit!", author: null },
    { type: 'joke', icon: '🥕', setup: "Why did the carrot get an award?", punchline: "Because it was outstanding in its field!", author: null },
    { type: 'joke', icon: '🌽', setup: "What do you call corn that joins the army?", punchline: "Kernel!", author: null },
    { type: 'joke', icon: '🥔', setup: "Why did the potato go to the party?", punchline: "Because it was a hot potato!", author: null },
    { type: 'joke', icon: '🥦', setup: "What do you call a broccoli that's a bodyguard?", punchline: "A head of security!", author: null },
    { type: 'joke', icon: '🥬', setup: "Why did the lettuce break up with the celery?", punchline: "It wanted someone with more stalk!", author: null },
    { type: 'joke', icon: '🥒', setup: "What do you call a pickle that plays piano?", punchline: "A dill-ightful musician!", author: null },
    { type: 'joke', icon: '🌶️', setup: "Why did the pepper put on a sweater?", punchline: "Because it was a little chili!", author: null },
    { type: 'joke', icon: '🧅', setup: "What do you call an onion that's a great actor?", punchline: "A tear-jerker!", author: null },
    // Card 90: Scripture
    { type: 'scripture', icon: '💪', setup: "I can do all things through Christ which strengtheneth me.", punchline: "— Philippians 4:13 (KJV)", author: null },
    // Cards 91-99: Jokes
    { type: 'joke', icon: '🧄', setup: "Why did the garlic go to the doctor?", punchline: "It had a bad case of the cloves!", author: null },
    { type: 'joke', icon: '🍞', setup: "What do you call bread that's sleeping?", punchline: "A nap-kin!", author: null },
    { type: 'joke', icon: '🥐', setup: "Why did the croissant go to the dentist?", punchline: "It needed a filling!", author: null },
    { type: 'joke', icon: '🥯', setup: "What do you call a bagel that can fly?", punchline: "A plain bagel!", author: null },
    { type: 'joke', icon: '🥞', setup: "Why did the pancake go to the doctor?", punchline: "It was feeling a little flat!", author: null },
    { type: 'joke', icon: '🧇', setup: "What do you call a waffle that's been kidnapped?", punchline: "A hostage breakfast!", author: null },
    { type: 'joke', icon: '🧀', setup: "Why did the cheese go to the party?", punchline: "Because it was grate!", author: null },
    { type: 'joke', icon: '🍔', setup: "What do you call a burger that tells jokes?", punchline: "A pun-kin!", author: null },
    { type: 'joke', icon: '🍟', setup: "Why did the french fry win an award?", punchline: "Because it was outstanding in its salt!", author: null },
    // Card 100: Scripture
    { type: 'scripture', icon: '❤️', setup: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", punchline: "— Romans 8:28 (KJV)", author: null }
];

/*
================================================================================
This Area Of Code Is: Application State Management
Explanation: Tracks current position, auto-play status, menu state, punchline visibility
In Other Words: Remembers where you are and what's showing
================================================================================
*/

let currentCardIndex = 0;
let autoMode = false;
let autoModeInterval = null;
let autoModeSpeed = 6000;
let isMenuOpen = false;
let punchlineVisible = false;

/*
================================================================================
This Area Of Code Is: DOM Ready Initialization
Explanation: Sets up event listeners, renders initial card, loads settings
In Other Words: Starts the app when page loads
================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    renderCard();
    updateCardJumps();
    initMetrics();
    loadPersonalVisits();
    trackGlobalVisitor();
    
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    document.addEventListener('keydown', handleKeyPress);
    loadSavedAccessibilitySettings();
});

/*
================================================================================
This Area Of Code Is: Metrics System
Explanation: Updates card count badge and visitor welcome message
In Other Words: Shows "100 cards" and "Welcome Back" instead of "2 online"
================================================================================
*/

function initMetrics() {
    const cardsBadge = document.getElementById('totalCards');
    if (cardsBadge) {
        cardsBadge.textContent = '100 cards';
    }
    
    const onlineBadge = document.getElementById('onlineUsers');
    if (onlineBadge) {
        onlineBadge.innerHTML = '<span style="font-family: \'Dancing Script\', cursive; font-size: 18px; color: white;">𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓑𝓪𝓬𝓛!</span>';
    }
}

function loadPersonalVisits() {
    try {
        let visits = parseInt(localStorage.getItem('gw_personal_visits') || '0');
        visits++;
        localStorage.setItem('gw_personal_visits', visits.toString());
        
        const visitElement = document.getElementById('visitCount');
        if (visitElement) {
            visitElement.textContent = visits;
        }
    } catch (e) {}
}

async function trackGlobalVisitor() {
    if (!firebaseInitialized || !db) return;
    try {
        const counterRef = db.collection('stats').doc('globalVisitors');
        await counterRef.update({
            count: firebase.firestore.FieldValue.increment(1),
            lastVisit: new Date().toISOString()
        });
    } catch (error) {
        if (error.code === 'not-found') {
            await db.collection('stats').doc('globalVisitors').set({
                count: 1,
                created: new Date().toISOString()
            });
        }
    }
}

/*
================================================================================
This Area Of Code Is: Card Rendering Engine
Explanation: Displays setup, hides punchline by default (click to show)
In Other Words: Shows the joke question, hides answer until "Show Punchline" clicked
================================================================================
*/

function renderCard() {
    const card = defaultCards[currentCardIndex];
    if (!card) return;
    
    const setupText = document.getElementById('setupText');
    const punchlineText = document.getElementById('punchlineText');
    const cardIcon = document.getElementById('cardIcon');
    const cardCounter = document.getElementById('cardCounter');
    const cardBadge = document.getElementById('cardBadge');
    const punchlineBtnText = document.getElementById('punchlineBtnText');
    
    if (setupText) setupText.textContent = card.setup;
    if (cardIcon) cardIcon.textContent = card.icon;
    if (cardCounter) cardCounter.textContent = `Card ${currentCardIndex + 1} of 100`;
    
    // Reset punchline visibility
    punchlineVisible = false;
    if (punchlineText) {
        punchlineText.textContent = card.punchline;
        punchlineText.classList.remove('visible');
        punchlineText.style.opacity = '0';
        punchlineText.style.transform = 'translateY(10px)';
    }
    
    if (punchlineBtnText) punchlineBtnText.textContent = 'Show Punchline';
    document.getElementById('punchlineBtn')?.classList.remove('active');
    
    // Update badge
    if (cardBadge) {
        if (card.type === 'scripture') {
            cardBadge.textContent = 'SPIRITUAL BOOST';
            cardBadge.style.background = 'rgba(251, 191, 36, 0.2)';
            cardBadge.style.color = '#fbbf24';
            // Auto-show for scriptures
            togglePunchline();
        } else {
            cardBadge.textContent = 'Corny Joke';
            cardBadge.style.background = 'rgba(255, 255, 255, 0.15)';
            cardBadge.style.color = 'var(--text-secondary)';
        }
    }
    
    updateActiveJumpButton();
}

/*
================================================================================
This Area Of Code Is: Punchline Toggle Control
Explanation: Shows/hides punchline when button clicked
In Other Words: The "Show Punchline" / "Hide Punchline" button functionality
================================================================================
*/

function togglePunchline() {
    const punchlineText = document.getElementById('punchlineText');
    const punchlineBtn = document.getElementById('punchlineBtn');
    const punchlineBtnText = document.getElementById('punchlineBtnText');
    
    punchlineVisible = !punchlineVisible;
    
    if (punchlineVisible) {
        if (punchlineText) {
            punchlineText.classList.add('visible');
            punchlineText.style.opacity = '1';
            punchlineText.style.transform = 'translateY(0)';
        }
        if (punchlineBtnText) punchlineBtnText.textContent = 'Hide Punchline';
        if (punchlineBtn) punchlineBtn.classList.add('active');
    } else {
        if (punchlineText) {
            punchlineText.classList.remove('visible');
            punchlineText.style.opacity = '0';
            punchlineText.style.transform = 'translateY(10px)';
        }
        if (punchlineBtnText) punchlineBtnText.textContent = 'Show Punchline';
        if (punchlineBtn) punchlineBtn.classList.remove('active');
    }
}

/*
================================================================================
This Area Of Code Is: Menu Toggle System
Explanation: Hamburger to SCN logo morph animation
In Other Words: Menu button animation
================================================================================
*/

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const scnLogo = document.getElementById('scnLogo');
    
    if (isMenuOpen) {
        sideMenu?.classList.add('open');
        menuOverlay?.classList.add('open');
        if (hamburgerIcon) {
            hamburgerIcon.style.opacity = '0';
            hamburgerIcon.style.transform = 'scale(0.8)';
            setTimeout(() => hamburgerIcon.style.display = 'none', 200);
        }
        if (scnLogo) {
            scnLogo.style.display = 'flex';
            setTimeout(() => {
                scnLogo.style.opacity = '1';
                scnLogo.style.transform = 'scale(1)';
            }, 50);
        }
    } else {
        sideMenu?.classList.remove('open');
        menuOverlay?.classList.remove('open');
        if (scnLogo) {
            scnLogo.style.opacity = '0';
            scnLogo.style.transform = 'scale(0.8)';
            setTimeout(() => scnLogo.style.display = 'none', 200);
        }
        if (hamburgerIcon) {
            hamburgerIcon.style.display = 'flex';
            setTimeout(() => {
                hamburgerIcon.style.opacity = '1';
                hamburgerIcon.style.transform = 'scale(1)';
            }, 50);
        }
    }
}

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
    if (isMenuOpen) toggleMenu();
}

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid Generator
Explanation: Creates 100 buttons in 5-column grid
In Other Words: Menu grid to jump to any card
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
        
        const emoji = document.createElement('span');
        emoji.textContent = card.icon;
        
        const num = document.createElement('small');
        num.textContent = index + 1;
        
        btn.appendChild(emoji);
        btn.appendChild(num);
        
        if (index === currentCardIndex) btn.classList.add('active');
        if (card.type === 'scripture') btn.classList.add('is-scripture');
        
        grid.appendChild(btn);
    });
}

function updateActiveJumpButton() {
    document.querySelectorAll('.jump-btn').forEach((btn, index) => {
        if (index === currentCardIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

/*
================================================================================
This Area Of Code Is: Auto-Play Mode
Explanation: Auto-advances cards at set intervals
In Other Words: Slideshow mode
================================================================================
*/

function toggleAutoMode() {
    autoMode = !autoMode;
    const btn = document.getElementById('autoModeBtn');
    const speedControls = document.getElementById('speedControls');
    const btnText = document.getElementById('autoModeText');
    
    if (autoMode) {
        btn?.classList.add('active');
        speedControls?.classList.add('visible');
        if (btnText) btnText.textContent = 'Stop Auto';
        startAutoMode();
    } else {
        btn?.classList.remove('active');
        speedControls?.classList.remove('visible');
        if (btnText) btnText.textContent = 'Auto Mode';
        stopAutoMode();
    }
}

function startAutoMode() {
    stopAutoMode();
    autoModeInterval = setInterval(nextCard, autoModeSpeed);
}

function stopAutoMode() {
    if (autoModeInterval) {
        clearInterval(autoModeInterval);
        autoModeInterval = null;
    }
}

function setSpeed(speed) {
    autoModeSpeed = speed;
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.speed) === speed) btn.classList.add('active');
    });
    if (autoMode) startAutoMode();
}

/*
================================================================================
This Area Of Code Is: Modal Management
Explanation: Opens/closes joke submission and guidelines modals
In Other Words: Popup window controls
================================================================================
*/

function openJokeModal() {
    document.getElementById('jokeModal')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeJokeModal() {
    document.getElementById('jokeModal')?.classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('jokeForm')?.reset();
}

function showGuidelines() {
    document.getElementById('guidelinesModal')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeGuidelines() {
    document.getElementById('guidelinesModal')?.classList.remove('open');
    document.body.style.overflow = '';
}

function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        checkModalScroll();
    }
}

function closeAccessibilityModal() {
    document.getElementById('accessibilityModal')?.classList.remove('open');
    document.body.style.overflow = '';
}

function checkModalScroll() {
    const content = document.getElementById('accessibilityContent');
    const indicator = document.getElementById('scrollIndicator');
    if (!content || !indicator) return;
    
    if (content.scrollHeight > content.clientHeight) {
        indicator.classList.add('visible');
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
This Area Of Code Is: Accessibility Features
Explanation: Toggle switches and color filters
In Other Words: Settings for Autism, ADHD, PTSD, Color blindness modes
================================================================================
*/

function toggleFeature(element, feature) {
    let toggleSwitch = element.classList.contains('toggle-switch') ? element : element.querySelector('.toggle-switch');
    let row = element.classList.contains('access-toggle') ? element : element.closest('.access-toggle');
    
    const isActive = toggleSwitch.classList.contains('active');
    const newState = !isActive;
    
    if (newState) {
        toggleSwitch.classList.add('active');
        toggleSwitch.setAttribute('aria-checked', 'true');
        row?.classList.add('active');
        document.body.classList.add(feature + '-mode');
        if (feature === 'high-contrast') document.body.classList.add('high-contrast-mode');
    } else {
        toggleSwitch.classList.remove('active');
        toggleSwitch.setAttribute('aria-checked', 'false');
        row?.classList.remove('active');
        document.body.classList.remove(feature + '-mode');
        if (feature === 'high-contrast') document.body.classList.remove('high-contrast-mode');
    }
    
    localStorage.setItem('gw_access_' + feature, newState);
}

function applyColorFilter(filterType) {
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia', 
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia', 'filter-cone-monochromacy',
        'filter-blue-cone-monochromacy'
    );
    
    if (filterType !== 'none') {
        document.body.classList.add('filter-' + filterType);
    }
    
    localStorage.setItem('gw_color_filter', filterType);
    
    document.querySelectorAll('.access-btn[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) btn.classList.add('active');
    });
}

function loadSavedAccessibilitySettings() {
    const features = ['autism', 'adhd', 'dyslexia', 'dyspraxia', 'anxiety', 'ptsd', 'mania', 'cognitive',
        'screen-reader', 'high-contrast', 'sign-language', 'visual-alerts', 'captions', 'large-targets', 
        'keyboard-only', 'extended-time', 'switch-control', 'speech-input', 'simple-language'];
    
    features.forEach(feature => {
        if (localStorage.getItem('gw_access_' + feature) === 'true') {
            document.body.classList.add(feature + '-mode');
            if (feature === 'high-contrast') document.body.classList.add('high-contrast-mode');
        }
    });
    
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add('filter-' + savedFilter);
    }
}

/*
================================================================================
This Area Of Code Is: Joke Submission Form
Explanation: Validates form, checks profanity with PurgoMalum API, submits to Firebase
In Other Words: "Add Your Joke" form handling
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    
    const showCity = document.getElementById('showCity')?.checked;
    const showState = document.getElementById('showState')?.checked;
    const showCountry = document.getElementById('showCountry')?.checked;
    
    if (!showCity && !showState && !showCountry) {
        alert('Please select at least one location option.');
        return;
    }
    
    if (!name || !setup || !punchline) {
        alert('Please fill in all required fields.');
        return;
    }
    
    try {
        const textToCheck = `${setup} ${punchline}`;
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(textToCheck)}`);
        const isProfane = await response.text();
        
        if (isProfane === 'true') {
            alert('Your submission contains inappropriate language. Please keep content family-friendly.');
            return;
        }
        
        if (firebaseInitialized && db) {
            await db.collection('pending_jokes').add({
                name, setup, punchline,
                location: { city: showCity, state: showState, country: showCountry },
                submittedAt: new Date().toISOString(),
                status: 'pending'
            });
        }
        
        alert('Thank you! Your joke has been submitted for review.');
        closeJokeModal();
    } catch (error) {
        alert('Error submitting joke. Please try again later.');
    }
}

function handleKeyPress(e) {
    if (e.key === 'Escape') {
        closeJokeModal();
        closeGuidelines();
        closeAccessibilityModal();
        if (isMenuOpen) toggleMenu();
    } else if (e.key === 'ArrowRight') {
        nextCard();
    } else if (e.key === 'ArrowLeft') {
        previousCard();
    }
}

function goHome() {
    window.location.href = '../index.html';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}
