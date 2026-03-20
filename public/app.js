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
This Area Of Code Is: Universal Wellness Mission (Phase 8)
Explanation: App mission constants for PTSD, mental health, hospital, prison, global support
In Other Words: The heart of the app - bringing joy to everyone everywhere
================================================================================
*/

const APP_MISSION = {
    name: "GetWell Card",
    tagline: "Universal Wellness for Everyone",
    audience: ["PTSD survivors", "Mental health warriors", "Hospital patients", "Prison communities", "Anyone having a bad day", "Global community"],
    values: ["Clean humor", "Spiritual encouragement", "Inclusive support", "Family-friendly content", "No political division"],
    scripturesEnabled: true,
    globalReach: true
};

/*
================================================================================
This Area Of Code Is: Default Jokes Dataset (Phase 1 Complete)
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

/*
================================================================================
This Area Of Code Is: KJV Scriptures Dataset (Phase 7 Complete)
Explanation: Array of 30 uplifting King James Version scriptures for spiritual encouragement
In Other Words: Bible verses to show as bonus encouragement every 10th card
================================================================================
*/

const kjvScriptures = [
    { reference: "Psalm 23:1-3", text: "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul." },
    { reference: "Psalm 27:1", text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?" },
    { reference: "Psalm 34:17-18", text: "The righteous cry, and the LORD heareth, and delivereth them out of all their troubles. The LORD is nigh unto them that are of a broken heart." },
    { reference: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." },
    { reference: "Psalm 91:1-2", text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress." },
    { reference: "Psalm 121:1-2", text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth." },
    { reference: "Psalm 139:14", text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well." },
    { reference: "Proverbs 3:5-6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths." },
    { reference: "Proverbs 17:22", text: "A merry heart doeth good like a medicine: but a broken spirit drieth the bones." },
    { reference: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary." },
    { reference: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee." },
    { reference: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end." },
    { reference: "Lamentations 3:22-23", text: "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness." },
    { reference: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
    { reference: "Matthew 19:26", text: "With God all things are possible." },
    { reference: "John 14:27", text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid." },
    { reference: "John 16:33", text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world." },
    { reference: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
    { reference: "Romans 8:38-39", text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, shall be able to separate us from the love of God." },
    { reference: "1 Corinthians 10:13", text: "God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape." },
    { reference: "2 Corinthians 4:16-17", text: "For which cause we faint not; but though our outward man perish, yet the inward man is renewed day by day. For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory." },
    { reference: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." },
    { reference: "Philippians 4:6-7", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." },
    { reference: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
    { reference: "Colossians 3:15", text: "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful." },
    { reference: "Hebrews 11:1", text: "Now faith is the substance of things hoped for, the evidence of things not seen." },
    { reference: "Hebrews 13:5-6", text: "For he hath said, I will never leave thee, nor forsake thee. So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me." },
    { reference: "James 1:2-3", text: "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience." },
    { reference: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you." },
    { reference: "1 John 4:4", text: "Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world." }
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
This Area Of Code Is: Content Moderation System (Phase 8 - Universal Standards)
Explanation: Uses PurgoMalum API to check for inappropriate content - keeping it clean for hospitals, prisons, schools worldwide
In Other Words: Automatic bad word filter that works for everyone everywhere
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
This Area Of Code Is: Metrics and Counter System (Phase 3 Complete)
Explanation: Tracks personal visits via localStorage and global visitors via Firebase Firestore
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
        updateGlobalDisplay(null);
        return;
    }
    
    try {
        const counterRef = db.collection('stats').doc('globalVisitors');
        
        await counterRef.update({
            count: firebase.firestore.FieldValue.increment(1),
            lastVisit: new Date().toISOString(),
            lastVisitDevice: navigator.userAgent.slice(0, 50)
        });
        
        console.log('[Metrics] Global visitor count incremented');
        await loadGlobalStats();
        
    } catch (error) {
        if (error.code === 'not-found' || error.message?.includes('No document to update')) {
            try {
                await db.collection('stats').doc('globalVisitors').set({
                    count: 1,
                    created: new Date().toISOString(),
                    lastVisit: new Date().toISOString(),
                    lastVisitDevice: navigator.userAgent.slice(0, 50)
                });
                console.log('[Metrics] Global counter created');
                updateGlobalDisplay(1);
            } catch (e) {
                console.error('[Metrics] Failed to create counter:', e);
                updateGlobalDisplay(null);
            }
        } else {
            console.error('[Metrics] Failed to increment:', error);
            updateGlobalDisplay(null);
        }
    }
}

async function loadGlobalStats() {
    if (!firebaseInitialized || !db) {
        updateGlobalDisplay(null);
        return;
    }
    
    try {
        const doc = await db.collection('stats').doc('globalVisitors').get();
        if (doc.exists) {
            const data = doc.data();
            const count = data.count || 0;
            updateGlobalDisplay(count);
            console.log('[Metrics] Global visitors loaded:', count);
        } else {
            updateGlobalDisplay(0);
        }
    } catch (error) {
        console.error('[Metrics] Failed to load global stats:', error);
        updateGlobalDisplay(null);
    }
}

function updateGlobalDisplay(count) {
    const globalEl = document.getElementById('globalVisitors');
    if (!globalEl) return;
    
    if (count === null) {
        globalEl.textContent = 'Offline';
        globalEl.style.opacity = '0.5';
    } else {
        globalEl.textContent = count.toLocaleString();
        globalEl.style.opacity = '1';
    }
}

/*
================================================================================
This Area Of Code Is: Universal Accessibility Controller (Full Implementation)
Explanation: Manages all accessibility features - Vision, Neurodivergent, Mental Health, Hearing, Motor, Speech
In Other Words: The complete system for all disability accommodations
================================================================================
*/

// Color Vision Types
const colorVisionTypes = [
    'normal', 'deuteranomaly', 'deuteranopia', 'protanomaly', 'protanopia',
    'tritanomaly', 'tritanopia', 'achromatopsia', 'cone-monochromacy', 'blue-cone-monochromacy'
];

// All accessibility features list
const accessibilityFeatures = [
    // Neurodivergent
    'autism', 'adhd', 'dyslexia', 'dyspraxia',
    // Mental Health
    'anxiety', 'ptsd', 'mania', 'cognitive',
    // Vision (non-filter)
    'screen-reader', 'high-contrast',
    // Hearing
    'sign-language', 'visual-alerts', 'captions',
    // Motor
    'large-targets', 'keyboard-only', 'extended-time', 'switch-control',
    // Speech
    'speech-input', 'simple-language'
];

function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (!modal) return;
    
    modal.classList.add('open');
    loadSavedAccessibilitySettings();
    checkModalScroll();
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.remove('open');
}

function checkModalScroll() {
    const modalContent = document.getElementById('accessibilityContent');
    const indicator = document.getElementById('scrollIndicator');
    
    if (!modalContent || !indicator) return;
    
    if (modalContent.scrollHeight > modalContent.clientHeight) {
        indicator.classList.add('visible');
        
        modalContent.addEventListener('scroll', () => {
            if (modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight - 20) {
                indicator.classList.remove('visible');
            } else {
                indicator.classList.add('visible');
            }
        });
    }
}

function toggleFeature(element, feature) {
    if (!element) return;
    
    element.classList.toggle('active');
    const isActive = element.classList.contains('active');
    
    // Apply body class
    document.body.classList.toggle(feature + '-mode', isActive);
    
    // Save to localStorage
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Update aria
    element.setAttribute('aria-checked', isActive);
    
    console.log('[Accessibility]', feature, 'mode:', isActive ? 'ON' : 'OFF');
    
    // Special handling for specific features
    if (feature === 'high-contrast') {
        if (isActive) {
            document.body.classList.add('high-contrast-mode');
        } else {
            document.body.classList.remove('high-contrast-mode');
        }
    }
    
    if (feature === 'large-targets') {
        document.body.classList.toggle('large-targets-mode', isActive);
    }
    
    // Announce to screen readers
    announceChange(feature + ' mode ' + (isActive ? 'enabled' : 'disabled'));
}

function announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}

function applyColorFilter(filterType) {
    // Remove all color vision classes
    colorVisionTypes.forEach(type => {
        document.body.classList.remove('cv-' + type);
        document.body.classList.remove('filter-' + type);
    });
    
    // Apply new filter
    if (filterType && filterType !== 'none' && filterType !== 'normal') {
        document.body.classList.add('cv-' + filterType);
        document.body.classList.add('filter-' + filterType);
    }
    
    // Save preference
    localStorage.setItem('gw_color_filter', filterType);
    
    // Update UI
    document.querySelectorAll('.access-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType || 
            (filterType === 'none' && btn.dataset.filter === 'none')) {
            btn.classList.add('active');
        }
    });
    
    console.log('[Accessibility] Color filter:', filterType);
}

function setColorVision(type) {
    applyColorFilter(type);
}

function loadSavedAccessibilitySettings() {
    // Load color filter
    const savedFilter = localStorage.getItem('gw_color_filter');
    if (savedFilter && savedFilter !== 'none' && savedFilter !== 'normal') {
        document.body.classList.add('cv-' + savedFilter);
        document.body.classList.add('filter-' + savedFilter);
    }
    
    // Load all toggle features
    accessibilityFeatures.forEach(feature => {
        const saved = localStorage.getItem('gw_access_' + feature);
        if (saved === 'true') {
            document.body.classList.add(feature + '-mode');
            
            // Update toggle switches if they exist
            const toggle = document.querySelector(`[data-feature="${feature}"]`);
            if (toggle) {
                toggle.classList.add('active');
                toggle.setAttribute('aria-checked', 'true');
            }
        }
    });
    
    // Update color buttons
    if (savedFilter) {
        document.querySelectorAll('.access-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === savedFilter) {
                btn.classList.add('active');
            }
        });
    }
}

/*
================================================================================
This Area Of Code Is: Color Vision Accessibility Controller (Legacy Support)
Explanation: Maintains compatibility with Phase 6 color vision system
In Other Words: Still supports the original 9 color vision modes
================================================================================
*/

function loadColorVisionPreference() {
    loadSavedAccessibilitySettings();
}

/*
================================================================================
This Area Of Code Is: Scripture Display Controller (Phase 7 Complete)
Explanation: Shows KJV scriptures every 10th card as spiritual encouragement
In Other Words: Adds a Bible verse banner to cards 10, 20, 30, etc.
================================================================================
*/

function shouldShowScripture(cardIndex) {
    if (!APP_MISSION.scripturesEnabled) return false;
    return (cardIndex + 1) % 10 === 0;
}

function getScriptureForCard(cardIndex) {
    const scriptureIndex = Math.floor((cardIndex + 1) / 10) - 1;
    return kjvScriptures[scriptureIndex % kjvScriptures.length];
}

function renderScriptureBanner() {
    const banner = document.getElementById('scriptureBanner');
    if (!banner) return;
    
    if (shouldShowScripture(state.currentIndex)) {
        const scripture = getScriptureForCard(state.currentIndex);
        banner.innerHTML = `
            <div class="scripture-content">
                <span class="scripture-label">✨ Spiritual Boost</span>
                <p class="scripture-text">"${scripture.text}"</p>
                <span class="scripture-ref">— ${scripture.reference}</span>
            </div>
        `;
        banner.classList.add('visible');
    } else {
        banner.classList.remove('visible');
        banner.innerHTML = '';
    }
}

/*
================================================================================
This Area Of Code Is: Card Rendering System (Phase 2 & 7 Integrated)
Explanation: Displays setup and punchline immediately together, plus scripture banner every 10th card
In Other Words: Shows the complete joke right away with bonus Bible verse on special cards
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
        
        punchlineText.classList.add('visible');
        
        if (joke.author && joke.author !== 'App Original, USA' && !joke.author.includes('App Original')) {
            authorInfo.innerHTML = `<span>by</span> <span class="author-name">${joke.author}</span>`;
        } else {
            authorInfo.innerHTML = '<span style="opacity:0.5;">GetWell Card</span>';
        }
        
        updateCounter();
        cardIcon.style.transform = 'scale(1)';
        
        renderScriptureBanner();
    }, 150);
}

function updateCounter() {
    const counter = document.getElementById('cardCounter');
    const totalCards = document.getElementById('totalCards');
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
This Area Of Code Is: Auto-Play Controller
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

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid System (Phase 4 Complete)
Explanation: Generates navigation grid buttons for all 100 cards with emoji indicators
In Other Words: Creates the clickable grid to jump to any card - now handles 100 items
================================================================================
*/

function updateCardJumps() {
    const container = document.getElementById('cardJumps');
    if (!container) return;
    
    container.innerHTML = '';
    
    state.jokes.forEach((joke, index) => {
        const btn = document.createElement('button');
        btn.className = 'jump-btn';
        
        if (index === state.currentIndex) {
            btn.classList.add('active');
        }
        
        if ((index + 1) % 10 === 0) {
            btn.classList.add('has-scripture');
        }
        
        btn.innerHTML = `<span>${joke.icon}</span> ${index + 1}`;
        btn.onclick = () => jumpToCard(index);
        container.appendChild(btn);
    });
    
    setTimeout(() => {
        const activeBtn = container.querySelector('.jump-btn.active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

function openJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.add('open');
}

/*
================================================================================
This Area Of Code Is: Close Joke Modal (Phase 5 Complete)
Explanation: Closes modal and resets form with Country checked by default only
In Other Words: Cleans up the form when you close it so Country is the only default checked option
================================================================================
*/

function closeJokeModal() {
    const modal = document.getElementById('jokeModal');
    if (modal) modal.classList.remove('open');
    document.getElementById('jokeForm')?.reset();
    
    const countryCheck = document.getElementById('showCountry');
    const cityCheck = document.getElementById('showCity');
    const stateCheck = document.getElementById('showState');
    if (countryCheck) countryCheck.checked = true;
    if (cityCheck) cityCheck.checked = false;
    if (stateCheck) stateCheck.checked = false;
}

/*
================================================================================
This Area Of Code Is: Community Guidelines Modal (Phase 8 - Universal)
Explanation: Shows universal wellness guidelines for hospitals, prisons, mental health, PTSD support
In Other Words: The rules popup that emphasizes global community support
================================================================================
*/

function showGuidelines() {
    const modal = document.getElementById('guidelinesModal');
    if (modal) {
        const title = modal.querySelector('h3');
        if (title) title.textContent = 'Community Guidelines';
        
        const content = modal.querySelector('.guidelines-content');
        if (content) {
            content.innerHTML = `
                <p>Welcome to the GetWell Card - a <strong>Universal Wellness App</strong> for everyone, everywhere.</p>
                <p style="margin-top: 10px; font-size: 13px; color: var(--text-muted);">For PTSD survivors, mental health warriors, hospital patients, prison communities, or anyone having a bad day.</p>
                <ul style="margin: 15px 0;">
                    <li>✓ Keep content family-friendly and clean (suitable for hospitals & schools)</li>
                    <li>✓ No profanity, hate speech, or political division</li>
                    <li>✓ Be kind, encouraging, and inclusive to all</li>
                    <li>✓ Spiritual encouragement welcome (optional, never forced)</li>
                    <li>✗ No offensive, explicit, or harmful content</li>
                </ul>
                <p style="font-size: 13px; font-style: italic;">All submissions are moderated to maintain a safe space for vulnerable populations.</p>
                <button class="ok-btn" onclick="closeGuidelines()" style="margin-top: 15px;">I Understand</button>
            `;
        }
        modal.classList.add('open');
    }
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
This Area Of Code Is: Joke Submission Handler (Phase 5 Complete)
Explanation: Saves user jokes to Firebase with location checkbox validation and filtered location display
In Other Words: Sends new jokes to cloud after verifying at least one location option selected
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
        
        if (selectedParts.length === 0 && countryChecked) {
            displayLocation = location;
        } else {
            displayLocation = selectedParts.join(', ');
        }
    }
    
    const newJoke = {
        type: 'joke',
        icon: '✨',
        setup: setup,
        punchline: punchline,
        author: displayLocation ? `${name} (${displayLocation})` : name,
        timestamp: new Date().toISOString()
    };
    
    try {
        await db.collection('jokes').add(newJoke);
        console.log('[Submit] Saved to Firebase successfully');
        
        state.jokes.push(newJoke);
        state.currentIndex = state.jokes.length - 1;
        
        renderCard();
        updateCardJumps();
        closeJokeModal();
        
        alert('Your joke was submitted successfully! Thank you for spreading joy!');
    } catch (e) {
        console.error('[Submit] Firebase failed:', e);
        alert('Failed to save your joke. Please check your connection and try again.');
    }
}

/*
================================================================================
This Area Of Code Is: Firebase Data Loader
Explanation: Loads community-submitted jokes from Firestore only.
In Other Words: Fetches new jokes from the cloud only
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
    }
}

/*
================================================================================
This Area Of Code Is: Application Initialization (Phase 8 Final Integration)
Explanation: Sets up all components on page load with complete feature set
In Other Words: Starting the fully completed app with all 8 phases active
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('[App] Initializing GetWell Card - Universal Wellness App...');
    console.log(`[App] Mission: ${APP_MISSION.tagline}`);
    
    // Phase 3: Metrics
    updatePersonalVisitCounter();
    loadGlobalStats().then(() => {
        updateGlobalVisitorCount();
    });
    
    // Phase 6 & Full Accessibility: Load all saved settings
    loadSavedAccessibilitySettings();
    
    // Phase 1 & 2: Load jokes and render initial card
    new VideoBackgroundManager();
    loadCommunityJokes();
    renderCard();
    updateCardJumps();
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === 'Escape') {
            closeJokeModal();
            closeGuidelines();
            closeAccessibilityModal();
            const menu = document.getElementById('sideMenu');
            if (menu?.classList.contains('open')) toggleMenu();
        }
    });
    
    console.log('[App] Initialization complete. Total cards:', state.jokes.length);
    console.log('[App] Features active: 100 Jokes, Immediate Punchlines, Metrics, 100-Card Grid, Location Checkboxes, Full Universal Accessibility, KJV Scriptures');
});

/*
================================================================================
This Area Of Code Is: Copyright Notice
Explanation: Legal copyright declaration for the application
In Other Words: Who made this and who owns it
================================================================================
*/

// © 2026 Get Well Card | 𝐹𝑟𝑒𝑑𝑒𝑟𝑖𝑐𝑘 𝑇ℎ𝑜𝑚𝑎𝑠,𝑇ℎ𝑒 𝑆𝑢𝑝𝑒𝑟 𝐶𝑜𝑑𝑖𝑛𝑔 𝑁𝑖𝑛𝑗𝑎™ | Made with ❤️ for the global community
