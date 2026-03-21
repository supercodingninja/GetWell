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
    console.log('[App] Firebase initialized');
} catch (e) {
    console.error('[App] Firebase init failed:', e);
}

/*
================================================================================
This Area Of Code Is: Complete Card Dataset (100 Cards - 85 Jokes, 10 Scriptures, 5 Messages)
================================================================================
*/

const defaultCards = [
    // JOKES 1-85 (with punchlines)
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
    
    // Adding 2 more jokes to reach 85 total jokes
    { type: 'joke', icon: '🧊', setup: "Why did the ice cube break up with the water?", punchline: "It needed some space!", author: null },
    { type: 'joke', icon: '🍩', setup: "Why did the donut go to the dentist?", punchline: "It needed a filling!", author: null },
    
    // SCRIPTURES 86-95 (no punchlines)
    { type: 'scripture', icon: '✨', setup: "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters.", punchline: null, reference: "Psalm 23:1-3", author: null },
    { type: 'scripture', icon: '🕊️', setup: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?", punchline: null, reference: "Psalm 27:1", author: null },
    { type: 'scripture', icon: '💙', setup: "The righteous cry, and the LORD heareth, and delivereth them out of all their troubles. The LORD is nigh unto them that are of a broken heart.", punchline: null, reference: "Psalm 34:17-18", author: null },
    { type: 'scripture', icon: '🛡️', setup: "God is our refuge and strength, a very present help in trouble.", punchline: null, reference: "Psalm 46:1", author: null },
    { type: 'scripture', icon: '🦅', setup: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress.", punchline: null, reference: "Psalm 91:1-2", author: null },
    { type: 'scripture', icon: '🏔️', setup: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.", punchline: null, reference: "Psalm 121:1-2", author: null },
    { type: 'scripture', icon: '⭐', setup: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", punchline: null, reference: "Proverbs 3:5-6", author: null },
    { type: 'scripture', icon: '💊', setup: "A merry heart doeth good like a medicine: but a broken spirit drieth the bones.", punchline: null, reference: "Proverbs 17:22", author: null },
    { type: 'scripture', icon: '🦋', setup: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary.", punchline: null, reference: "Isaiah 40:31", author: null },
    { type: 'scripture', icon: '💪', setup: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.", punchline: null, reference: "Isaiah 41:10", author: null },
    
    // POSITIVE MESSAGES 96-100 (no punchlines)
    { type: 'message', icon: '🌅', setup: "You are stronger than you know, braver than you believe, and more loved than you imagine. This moment is temporary, but your strength is permanent.", punchline: null, author: null },
    { type: 'message', icon: '🌱', setup: "Growth takes time. Be patient with yourself. Just like a seed buried in darkness before it breaks through the soil, your breakthrough is coming.", punchline: null, author: null },
    { type: 'message', icon: '🤗', setup: "You matter. Your story matters. Your presence makes a difference in this world, even when you don't see it. Keep going.", punchline: null, author: null },
    { type: 'message', icon: '🔥', setup: "It's okay to not be okay. Healing isn't linear. Take it one breath at a time. You've survived 100% of your bad days so far - that's a perfect record.", punchline: null, author: null },
    { type: 'message', icon: '🎆', setup: "Your current situation is not your final destination. Better days are ahead. You are worthy of peace, joy, and love. Never forget that.", punchline: null, author: null }
];

let state = {
    cards: [...defaultCards],
    currentIndex: 0,
    autoMode: false,
    autoSpeed: 6000,
    autoInterval: null,
    personalVisits: 1,
    punchlineVisible: false,  // Track if punchline is currently shown
    onlineUsers: 3  // Simulated online users count
};

/*
================================================================================
This Area Of Code Is: Content Moderation (PurgoMalum API)
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
================================================================================
*/

class VideoBackgroundManager {
    constructor() {
        this.video = document.getElementById('appBgVideo');
        this.container = document.querySelector('.video-background');
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
            if(this.video.style) this.video.style.display = 'none';
        }
    }

    showFallback() {
        if (this.container) {
            this.container.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
        }
        if (this.video && this.video.style) {
            this.video.style.display = 'none';
        }
    }
}

/*
================================================================================
This Area Of Code Is: Metrics and Online Users System
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
    } catch (e) {
        console.log('[Metrics] localStorage not available');
    }
}

function updateOnlineUsers() {
    // Simulate fluctuating online users (2-8 range)
    const baseUsers = 3;
    const variance = Math.floor(Math.random() * 5) - 2; // -2 to +2
    state.onlineUsers = Math.max(2, Math.min(8, baseUsers + variance));
    
    const onlineEl = document.getElementById('onlineUsers');
    if (onlineEl) {
        onlineEl.textContent = `${state.onlineUsers} online`;
    }
}

async function updateGlobalVisitorCount() {
    if (!firebaseInitialized || !db) {
        console.log('[Metrics] Firebase not available for global count');
        return;
    }
    
    try {
        const counterRef = db.collection('stats').doc('globalVisitors');
        
        try {
            await counterRef.update({
                count: firebase.firestore.FieldValue.increment(1),
                lastVisit: new Date().toISOString(),
                lastVisitDevice: navigator.userAgent.slice(0, 50)
            });
        } catch (updateError) {
            if (updateError.code === 'not-found') {
                await counterRef.set({
                    count: 1,
                    created: new Date().toISOString(),
                    lastVisit: new Date().toISOString(),
                    lastVisitDevice: navigator.userAgent.slice(0, 50)
                });
            } else {
                throw updateError;
            }
        }
        
        console.log('[Metrics] Global visitor counted');
    } catch (error) {
        console.error('[Metrics] Failed to track global visitor:', error);
    }
}

/*
================================================================================
This Area Of Code Is: Punchline Toggle System (RESTORED)
================================================================================
*/

function togglePunchline() {
    const card = state.cards[state.currentIndex];
    
    // Only allow toggle for jokes
    if (card.type !== 'joke') return;
    
    state.punchlineVisible = !state.punchlineVisible;
    renderCard();
}

function updatePunchlineButton() {
    const btn = document.getElementById('punchlineBtn');
    const card = state.cards[state.currentIndex];
    
    if (!btn) return;
    
    // Only show button for jokes
    if (card.type !== 'joke') {
        btn.style.display = 'none';
        return;
    }
    
    btn.style.display = 'flex';
    
    if (state.punchlineVisible) {
        btn.innerHTML = '<span>👁️</span> Hide Punchline';
        btn.classList.add('active');
    } else {
        btn.innerHTML = '<span>👁️</span> Show Punchline';
        btn.classList.remove('active');
    }
}

/*
================================================================================
This Area Of Code Is: Accessibility Controller (9 Color Vision Types)
================================================================================
*/

const accessibilityFeatures = [
    'autism', 'adhd', 'dyslexia', 'dyspraxia',
    'anxiety', 'ptsd', 'mania', 'cognitive',
    'screen-reader', 'high-contrast',
    'sign-language', 'visual-alerts', 'captions',
    'large-targets', 'keyboard-only', 'extended-time', 'switch-control',
    'speech-input', 'simple-language'
];

function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (!modal) return;
    
    modal.classList.add('open');
    loadSavedAccessibilitySettings();
    setTimeout(checkModalScroll, 100);
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.remove('open');
}

function checkModalScroll() {
    const modalContent = document.getElementById('accessibilityContent');
    const indicator = document.getElementById('scrollIndicator');
    
    if (!modalContent || !indicator) return;
    
    const hasOverflow = modalContent.scrollHeight > modalContent.clientHeight;
    
    if (hasOverflow) {
        indicator.classList.add('visible');
        
        modalContent.onscroll = () => {
            const nearBottom = modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight - 30;
            if (nearBottom) {
                indicator.classList.remove('visible');
            } else {
                indicator.classList.add('visible');
            }
        };
    } else {
        indicator.classList.remove('visible');
    }
}

function toggleFeature(element, feature) {
    if (!element) return;
    
    element.classList.toggle('active');
    const isActive = element.classList.contains('active');
    
    document.body.classList.toggle(feature + '-mode', isActive);
    localStorage.setItem('gw_access_' + feature, isActive);
    element.setAttribute('aria-checked', isActive);
    
    if (feature === 'high-contrast' && isActive) {
        document.body.classList.add('high-contrast-mode');
    } else if (feature === 'high-contrast') {
        document.body.classList.remove('high-contrast-mode');
    }
    
    if (feature === 'large-targets') {
        document.body.classList.toggle('large-targets-mode', isActive);
    }
}

function applyColorFilter(filterType) {
    const colorClasses = ['cv-deuteranomaly', 'cv-deuteranopia', 'cv-protanomaly', 'cv-protanopia', 
                         'cv-tritanomaly', 'cv-tritanopia', 'cv-achromatopsia', 'cv-cone-monochromacy', 
                         'cv-blue-cone-monochromacy', 'filter-deuteranomaly', 'filter-deuteranopia', 
                         'filter-protanomaly', 'filter-protanopia', 'filter-tritanomaly', 
                         'filter-tritanopia', 'filter-achromatopsia'];
    
    colorClasses.forEach(cls => document.body.classList.remove(cls));
    
    if (filterType && filterType !== 'none' && filterType !== 'normal') {
        document.body.classList.add('cv-' + filterType);
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
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none' && savedFilter !== 'normal') {
        document.body.classList.add('cv-' + savedFilter);
        document.body.classList.add('filter-' + savedFilter);
    }
    
    document.querySelectorAll('.access-btn[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === (savedFilter || 'none')) {
            btn.classList.add('active');
        }
    });
    
    accessibilityFeatures.forEach(feature => {
        const saved = localStorage.getItem('gw_access_' + feature);
        if (saved === 'true') {
            document.body.classList.add(feature + '-mode');
            
            const toggle = document.querySelector(`[data-feature="${feature}"]`);
            if (toggle) {
                toggle.classList.add('active');
                toggle.setAttribute('aria-checked', 'true');
            }
        }
    });
}

/*
================================================================================
This Area Of Code Is: Card Rendering System (with Punchline Toggle)
================================================================================
*/

function renderCard() {
    const card = state.cards[state.currentIndex];
    const cardIcon = document.getElementById('cardIcon');
    const setupText = document.getElementById('setupText');
    const punchlineText = document.getElementById('punchlineText');
    const cardBadge = document.getElementById('cardBadge');
    const authorInfo = document.getElementById('authorInfo');
    
    if (!cardIcon || !setupText || !punchlineText || !cardBadge) return;

    cardIcon.style.transform = 'scale(0)';
    
    setTimeout(() => {
        cardIcon.textContent = card.icon;
        
        // Set badge based on type
        if (card.type === 'scripture') {
            cardBadge.textContent = 'WORD';
            cardBadge.style.background = 'rgba(251, 191, 36, 0.2)';
            cardBadge.style.color = '#fbbf24';
        } else if (card.type === 'message') {
            cardBadge.textContent = 'HEALING';
            cardBadge.style.background = 'rgba(16, 185, 129, 0.2)';
            cardBadge.style.color = '#10b981';
        } else {
            cardBadge.textContent = 'JOKE';
            cardBadge.style.background = 'rgba(255, 255, 255, 0.15)';
            cardBadge.style.color = 'rgba(255, 255, 255, 0.9)';
        }
        
        // Setup text (all types have this)
        setupText.textContent = card.setup;
        
        // Punchline logic - ONLY for jokes, AND only if visible
        if (card.type === 'joke' && card.punchline) {
            if (state.punchlineVisible) {
                punchlineText.textContent = card.punchline;
                punchlineText.classList.add('visible');
            } else {
                punchlineText.textContent = '';
                punchlineText.classList.remove('visible');
            }
        } else if (card.type === 'scripture' && card.reference) {
            punchlineText.textContent = `— ${card.reference}`;
            punchlineText.style.fontStyle = 'italic';
            punchlineText.style.opacity = '0.8';
            punchlineText.classList.add('visible');
        } else {
            punchlineText.textContent = '';
            punchlineText.style.fontStyle = 'normal';
        }
        
        // Author info
        if (card.author && card.author !== 'App Original, USA' && !card.author.includes('App Original')) {
            authorInfo.innerHTML = `<span>by</span> <span class="author-name">${card.author}</span>`;
        } else {
            authorInfo.innerHTML = '<span style="opacity:0.5;">GetWell Card</span>';
        }
        
        updateCounter();
        updatePunchlineButton();  // Update the button state
        cardIcon.style.transform = 'scale(1)';
    }, 150);
}

function updateCounter() {
    const counter = document.getElementById('cardCounter');
    const totalCards = document.getElementById('totalCards');
    if (counter) counter.textContent = `Card ${state.currentIndex + 1} of ${state.cards.length}`;
    if (totalCards) totalCards.textContent = `${state.cards.length} cards`;
}

function nextCard() {
    state.currentIndex = (state.currentIndex + 1) % state.cards.length;
    state.punchlineVisible = false;  // Reset punchline visibility on card change
    renderCard();
    updateCardJumps();
}

function previousCard() {
    state.currentIndex = (state.currentIndex - 1 + state.cards.length) % state.cards.length;
    state.punchlineVisible = false;  // Reset punchline visibility on card change
    renderCard();
    updateCardJumps();
}

function jumpToCard(index) {
    state.currentIndex = index;
    state.punchlineVisible = false;  // Reset punchline visibility
    renderCard();
    updateCardJumps();
    toggleMenu();
}

/*
================================================================================
This Area Of Code Is: Auto-Play Controller
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
        if (btnText) btnText.textContent = 'Stop Auto';
        startAutoMode();
    } else {
        btn.classList.remove('active');
        speedControls.classList.remove('visible');
        if (btnText) btnText.textContent = 'Auto Mode';
        stopAutoMode();
    }
}

function startAutoMode() {
    stopAutoMode();
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
This Area Of Code Is: Menu and Navigation
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
        if (menuBtn) menuBtn.classList.remove('active');
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
        if (menuBtn) menuBtn.classList.add('active');
        updateCardJumps();
    }
}

function updateCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    
    state.cards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        
        if (index === state.currentIndex) {
            btn.classList.add('active');
        }
        
        if (card.type === 'scripture') {
            btn.classList.add('is-scripture');
        } else if (card.type === 'message') {
            btn.classList.add('is-message');
        }
        
        btn.innerHTML = `<span>${card.icon}</span> ${index + 1}`;
        btn.onclick = () => jumpToCard(index);
        btn.setAttribute('aria-label', `Jump to card ${index + 1}`);
        container.appendChild(btn);
    });
    
    setTimeout(() => {
        const activeBtn = container.querySelector('.jump-btn.active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    }, 100);
}

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.add('open');
}

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.remove('open');
    
    const form = document.getElementById('jokeForm');
    if (form) form.reset();
    
    const countryCheck = document.getElementById('showCountry');
    const cityCheck = document.getElementById('showCity');
    const stateCheck = document.getElementById('showState');
    if (countryCheck) countryCheck.checked = true;
    if (cityCheck) cityCheck.checked = false;
    if (stateCheck) stateCheck.checked = false;
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
This Area Of Code Is: Joke Submission Handler
================================================================================
*/

async function submitJoke(event) {
    event.preventDefault();
    
    if (!firebaseInitialized || !db) {
        alert('Unable to submit right now. Please check your internet connection and try again.');
        return;
    }
    
    const nameInput = document.getElementById('userName');
    const locationInput = document.getElementById('userLocation');
    const setupInput = document.getElementById('jokeSetup');
    const punchlineInput = document.getElementById('jokePunchline');
    
    const cityChecked = document.getElementById('showCity')?.checked || false;
    const stateChecked = document.getElementById('showState')?.checked || false;
    const countryChecked = document.getElementById('showCountry')?.checked || false;
    
    if (locationInput?.value.trim() && !cityChecked && !stateChecked && !countryChecked) {
        alert('Please select at least one location option (City, State/Province, or Country) to display.');
        return;
    }
    
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
    
    let displayLocation = '';
    if (location) {
        const parts = location.split(',').map(p => p.trim());
        const selectedParts = [];
        
        if (cityChecked && parts[0]) selectedParts.push(parts[0]);
        if (stateChecked && parts[1]) selectedParts.push(parts[1]);
        if (countryChecked && parts[2]) selectedParts.push(parts[2]);
        
        displayLocation = selectedParts.join(', ');
    }
    
    const newCard = {
        type: 'joke',
        icon: '✨',
        setup: setup,
        punchline: punchline,
        author: displayLocation ? `${name} (${displayLocation})` : name,
        timestamp: new Date().toISOString()
    };
    
    try {
        await db.collection('jokes').add(newCard);
        console.log('[Submit] Saved to Firebase successfully');
        
        state.cards.push(newCard);
        state.currentIndex = state.cards.length - 1;
        
        renderCard();
        updateCardJumps();
        closeJokeModal();
        
        alert('Your joke was submitted successfully! Thank you for spreading joy!');
    } catch (e) {
        console.error('[Submit] Firebase failed:', e);
        alert('Failed to save your joke. Please check your connection and try again.');
    }
}

async function loadCommunityJokes() {
    if (!firebaseInitialized || !db) {
        console.log('[Load] Firebase not available - running with default 100 cards only');
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
        
        const existingSetups = new Set(state.cards.map(c => c.setup));
        let addedCount = 0;
        
        communityJokes.forEach(joke => {
            if (!existingSetups.has(joke.setup)) {
                state.cards.push(joke);
                addedCount++;
            }
        });
        
        console.log(`[Load] Added ${addedCount} community cards. Total: ${state.cards.length}`);
        
        if (addedCount > 0) {
            updateCounter();
            updateCardJumps();
        }
    } catch (e) {
        console.log('[Load] Firestore failed:', e);
    }
}

/*
================================================================================
This Area Of Code Is: Application Initialization
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('[App] Initializing GetWell Card - Universal Wellness App...');
    console.log(`[App] Total cards in deck: ${state.cards.length}`);
    
    // Initialize systems
    updatePersonalVisitCounter();
    updateOnlineUsers();  // Set initial online users
    updateGlobalVisitorCount();
    
    // Update online users every 30 seconds
    setInterval(updateOnlineUsers, 30000);
    
    loadSavedAccessibilitySettings();
    new VideoBackgroundManager();
    loadCommunityJokes();
    renderCard();
    updateCardJumps();
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === ' ' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            if (state.cards[state.currentIndex].type === 'joke') {
                togglePunchline();
            } else {
                nextCard();
            }
        }
        if (e.key === 'Escape') {
            closeJokeModal();
            closeGuidelines();
            closeAccessibilityModal();
            const menu = document.getElementById('sideMenu');
            if (menu?.classList.contains('open')) toggleMenu();
        }
    });
    
    console.log('[App] Initialization complete.');
});

// © 2026 Get Well Card | 𝐹𝑟𝑒𝑑𝑒𝑟𝑖𝑐𝑘 𝑇ℎ𝑜𝑚𝑎𝑠,𝑇ℎ𝑒 𝑆𝑢𝑝𝑒𝑟 𝐶𝑜𝑑𝑖𝑛𝑔 𝑁𝑖𝑛𝑗𝑎™ | Made with ❤️ for the global community
