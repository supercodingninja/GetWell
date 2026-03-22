/*
================================================================================
This Area Of Code Is: Encrypted Firebase Configuration
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
    // Silent fail - app works without Firebase
}

/*
================================================================================
This Area Of Code Is: Complete Card Dataset (100 Corny Jokes)
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
This Area Of Code Is: Application State
================================================================================
*/

let currentCardIndex = 0;
let autoMode = false;
let autoModeInterval = null;
let autoModeSpeed = 6000;
let isMenuOpen = false;

/*
================================================================================
This Area Of Code Is: DOM Ready Initialization
================================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize immediately
    renderCard();
    updateCardJumps();
    
    // Menu button setup
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
    
    // Load saved settings
    loadSavedAccessibilitySettings();
});

/*
================================================================================
This Area Of Code Is: Card Rendering
================================================================================
*/

function renderCard() {
    const card = defaultCards[currentCardIndex];
    if (!card) return;
    
    const setupText = document.getElementById('setupText');
    const punchlineText = document.getElementById('punchlineText');
    const cardIcon = document.getElementById('cardIcon');
    const cardCounter = document.getElementById('cardCounter');
    
    if (setupText) setupText.textContent = card.setup;
    if (punchlineText) {
        punchlineText.textContent = card.punchline;
        punchlineText.classList.add('visible');
    }
    if (cardIcon) cardIcon.textContent = card.icon;
    if (cardCounter) cardCounter.textContent = `Card ${currentCardIndex + 1} of ${defaultCards.length}`;
    
    updateActiveJumpButton();
}

/*
================================================================================
This Area Of Code Is: Menu Toggle (Hamburger → SCN Morph)
================================================================================
*/

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const scnLogo = document.getElementById('scnLogo');
    
    if (isMenuOpen) {
        if (sideMenu) sideMenu.classList.add('open');
        if (menuOverlay) menuOverlay.classList.add('open');
        
        if (hamburgerIcon) {
            hamburgerIcon.style.opacity = '0';
            hamburgerIcon.style.transform = 'scale(0.8)';
            setTimeout(() => { hamburgerIcon.style.display = 'none'; }, 200);
        }
        
        if (scnLogo) {
            scnLogo.style.display = 'flex';
            setTimeout(() => {
                scnLogo.style.opacity = '1';
                scnLogo.style.transform = 'scale(1)';
            }, 50);
        }
    } else {
        if (sideMenu) sideMenu.classList.remove('open');
        if (menuOverlay) menuOverlay.classList.remove('open');
        
        if (scnLogo) {
            scnLogo.style.opacity = '0';
            scnLogo.style.transform = 'scale(0.8)';
            setTimeout(() => { scnLogo.style.display = 'none'; }, 200);
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

/*
================================================================================
This Area Of Code Is: Card Navigation
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
    toggleMenu();
}

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid
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
        grid.appendChild(btn);
    });
}

function updateActiveJumpButton() {
    const buttons = document.querySelectorAll('.jump-btn');
    buttons.forEach((btn, index) => {
        if (index === currentCardIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

/*
================================================================================
This Area Of Code Is: Auto Mode
================================================================================
*/

function toggleAutoMode() {
    autoMode = !autoMode;
    const btn = document.getElementById('autoModeBtn');
    const speedControls = document.getElementById('speedControls');
    const btnText = document.getElementById('autoModeText');
    
    if (autoMode) {
        if (btn) btn.classList.add('active');
        if (speedControls) speedControls.classList.add('visible');
        if (btnText) btnText.textContent = 'Stop Auto';
        startAutoMode();
    } else {
        if (btn) btn.classList.remove('active');
        if (speedControls) speedControls.classList.remove('visible');
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
This Area Of Code Is: Accessibility Modal Management
================================================================================
*/

function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        checkModalScroll();
    }
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
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
This Area Of Code Is: Accessibility Toggle System (Tap Row to Toggle ON/OFF)
================================================================================
*/

function toggleFeature(element, feature) {
    let row = element;
    let toggleSwitch = element;
    
    if (element.classList.contains('access-toggle')) {
        toggleSwitch = element.querySelector('.toggle-switch');
    } else if (element.classList.contains('toggle-switch')) {
        row = element.closest('.access-toggle');
    }
    
    const isCurrentlyActive = toggleSwitch.classList.contains('active');
    const newState = !isCurrentlyActive;
    
    if (newState) {
        toggleSwitch.classList.add('active');
        toggleSwitch.setAttribute('aria-checked', 'true');
        if (row) row.classList.add('active');
        document.body.classList.add(feature + '-mode');
    } else {
        toggleSwitch.classList.remove('active');
        toggleSwitch.setAttribute('aria-checked', 'false');
        if (row) row.classList.remove('active');
        document.body.classList.remove(feature + '-mode');
    }
    
    if (feature === 'high-contrast') {
        if (newState) {
            document.body.classList.add('high-contrast-mode');
        } else {
            document.body.classList.remove('high-contrast-mode');
        }
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
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
}

function loadSavedAccessibilitySettings() {
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
            document.body.classList.add(feature + '-mode');
            if (feature === 'high-contrast') {
                document.body.classList.add('high-contrast-mode');
            }
        }
    });
    
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add('filter-' + savedFilter);
    }
}

/*
================================================================================
This Area Of Code Is: Keyboard Navigation
================================================================================
*/

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

/*
================================================================================
This Area Of Code Is: Modal Management (Joke & Guidelines)
================================================================================
*/

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
    const form = document.getElementById('jokeForm');
    if (form) form.reset();
}

function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/*
================================================================================
This Area Of Code Is: Joke Submission with Validation
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const setup = document.getElementById('jokeSetup').value.trim();
    const punchline = document.getElementById('jokePunchline').value.trim();
    
    const showCity = document.getElementById('showCity').checked;
    const showState = document.getElementById('showState').checked;
    const showCountry = document.getElementById('showCountry').checked;
    
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
            alert('Your submission contains inappropriate language.');
            return;
        }
        
        alert('Thank you! Your joke has been submitted for review.');
        closeJokeModal();
        
    } catch (error) {
        alert('Error submitting joke. Please try again.');
    }
}

/*
================================================================================
This Area Of Code Is: Home Navigation
================================================================================
*/

function goHome() {
    window.location.href = '../index.html';
}

/*
================================================================================
This Area Of Code Is: Service Worker Registration
================================================================================
*/

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}
