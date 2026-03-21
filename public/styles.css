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
This Area Of Code Is: Complete Card Dataset (100 Cards)
================================================================================
*/

const defaultCards = [
    // JOKES 1-85
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
    { type: 'joke', icon: '🦅', setup: "Why did the eagle bring a ruler?", punchline: "To measure his talon-ts 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    white-space: nowrap;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: var(--online-green);
    border-radius: 50%;
    animation: pulse 2s infinite;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
    50% { opacity: 0.8; transform: scale(0.9); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
}

/* Cards Count Badge */
.cards-badge {
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 8px 14px;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: white;
    font-weight: 500;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    white-space: nowrap;
}

/*
================================================================================
This Area Of Code Is: Side Menu
================================================================================
*/

.side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: min(85vw, 360px);
    height: 100dvh;
    height: -webkit-fill-available;
    background: rgba(15, 23, 42, 0.98);
    border-right: 1px solid var(--glass-border);
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    padding-top: var(--safe-top);
    padding-bottom: var(--safe-bottom);
}

.side-menu.open { transform: translateX(0); }

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 199;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.menu-overlay.open { opacity: 1; visibility: visible; }

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid var(--glass-border);
    position: sticky;
    top: 0;
    background: rgba(15, 23, 42, 0.98);
    z-index: 10;
}

.menu-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: white;
}

.close-menu {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--glass-border);
    background: transparent;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.close-menu:hover { background: rgba(255, 255, 255, 0.1); transform: rotate(90deg); }

.menu-content { padding: 15px; }

.menu-item {
    width: 100%;
    padding: 15px;
    border-radius: var(--border-radius-sm);
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
    text-align: left;
    font-family: inherit;
}

.menu-item:hover {
    background: var(--glass-bg-strong);
    transform: translateX(5px);
    border-color: var(--primary-gold);
}

.menu-divider { height: 1px; background: var(--glass-border); margin: 20px 0; }

.menu-label {
    font-size: 12px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    padding-left: 5px;
    font-weight: 600;
}

/*
================================================================================
This Area Of Code Is: Jump-to-Card Grid
================================================================================
*/

.card-jumps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    max-height: 55vh;
    overflow-y: auto;
    padding-right: 5px;
}

.card-jumps::-webkit-scrollbar { width: 6px; }
.card-jumps::-webkit-scrollbar-track { background: transparent; }
.card-jumps::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 3px; }

.jump-btn {
    padding: 8px 4px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border-light);
    color: var(--text-secondary);
    font-size: 11px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-height: 44px;
    justify-content: center;
    font-family: inherit;
}

.jump-btn span { font-size: 16px; line-height: 1; margin-bottom: 2px; }

.jump-btn:hover, .jump-btn.active {
    background: var(--glass-bg-strong);
    color: white;
    border-color: var(--primary-gold);
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.jump-btn.active {
    background: rgba(251, 191, 36, 0.2);
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
    font-weight: 600;
}

.jump-btn.is-scripture { border-color: rgba(251, 191, 36, 0.4); }
.jump-btn.is-message { border-color: rgba(16, 185, 129, 0.4); }

@media (max-width: 380px) { .card-jumps { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 320px) { 
    .card-jumps { grid-template-columns: repeat(3, 1fr); gap: 4px; }
    .jump-btn { padding: 6px 2px; font-size: 10px; min-height: 40px; }
    .jump-btn span { font-size: 14px; }
}

/*
================================================================================
This Area Of Code Is: Main Layout
================================================================================
*/

.app-main {
    position: relative;
    z-index: 10;
    min-height: 100dvh;
    min-height: -webkit-fill-available;
    padding: calc(var(--header-height) + var(--safe-top) + 70px) 15px calc(100px + var(--safe-bottom));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

/*
================================================================================
This Area Of Code Is: Content Card
================================================================================
*/

.card-container { 
    width: 100%; 
    max-width: 600px; 
    perspective: 1000px; 
    margin-top: 0; 
}

.content-card {
    background: var(--glass-bg-card);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: var(--border-radius);
    padding: clamp(30px, 8vw, 50px) clamp(20px, 5vw, 40px);
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 100px rgba(251, 191, 36, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
}

.content-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer { 0% { left: -100%; } 100% { left: 200%; } }

.content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 120px rgba(251, 191, 36, 0.15);
}

.card-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-secondary);
}

.card-icon {
    font-size: clamp(40px, 10vw, 56px);
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    animation: iconFloat 3s ease-in-out infinite;
    line-height: 1;
}

@keyframes iconFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

.setup-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 6vw, 32px);
    line-height: 1.4;
    color: var(--text-primary);
    margin-bottom: 16px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-weight: 600;
}

.punchline-text {
    font-size: clamp(18px, 4vw, 22px);
    color: var(--primary-gold);
    font-weight: 600;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    min-height: 30px;
    font-family: 'Inter', sans-serif;
}

.punchline-text.visible {
    opacity: 1;
    transform: translateY(0);
    margin-top: 10px;
}

.punchline-text[style*="italic"] {
    color: var(--text-secondary);
    font-size: clamp(16px, 3.5vw, 18px);
    font-weight: 400;
}

.card-footer {
    margin-top: auto;
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--text-muted);
    border-top: 1px solid rgba(255,255,255,0.1);
    margin-top: 30px;
}

.author-info { display: flex; align-items: center; gap: 6px; }
.author-name { font-style: italic; color: var(--text-secondary); font-weight: 500; }
.card-counter { font-weight: 600; color: var(--primary-gold); font-size: 12px; letter-spacing: 0.5px; }

/*
================================================================================
This Area Of Code Is: Control Buttons
================================================================================
*/

.controls-row {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 600px;
}

.controls-row.main-controls {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 10px;
}

.nav-btn {
    min-height: 48px;
    padding: 12px 20px;
    border-radius: 50px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s;
    justify-content: center;
    font-family: inherit;
}

.nav-btn:hover {
    background: var(--glass-bg-strong);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-color: var(--primary-gold);
}

.punchline-btn {
    background: rgba(251, 191, 36, 0.15);
    border-color: rgba(251, 191, 36, 0.4);
    color: var(--primary-gold);
    position: relative;
    overflow: hidden;
}

.punchline-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(251,191,36,0.2), transparent);
    transition: left 0.5s;
}

.punchline-btn:hover::before {
    left: 100%;
}

.punchline-btn:hover {
    background: rgba(251, 191, 36, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
    border-color: var(--primary-gold);
}

.punchline-btn.active {
    background: rgba(251, 191, 36, 0.35);
    border-color: var(--primary-gold);
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

.punchline-btn.hidden {
    display: none !important;
    visibility: hidden !important;
}

.controls-row.secondary { margin-top: 5px; }

.add-joke-btn {
    min-height: 48px;
    padding: 12px 24px;
    border-radius: 50px;
    border: 1px solid rgba(16, 185, 129, 0.4);
    background: rgba(16, 185, 129, 0.15);
    color: #6ee7b7;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s;
    flex: 1;
    justify-content: center;
    min-width: 140px;
    font-family: inherit;
}

.add-joke-btn:hover {
    background: rgba(16, 185, 129, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
}

.auto-mode-btn {
    min-height: 48px;
    padding: 12px 24px;
    border-radius: 50px;
    border: 1px solid rgba(59, 130, 246, 0.4);
    background: rgba(59, 130, 246, 0.15);
    color: #93c5fd;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s;
    flex: 1;
    justify-content: center;
    min-width: 140px;
    font-family: inherit;
}

.auto-mode-btn:hover {
    background: rgba(59, 130, 246, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.auto-mode-btn.active {
    animation: goldenPulse 2s infinite;
    border-color: var(--primary-gold);
    color: var(--primary-gold);
    background: rgba(251, 191, 36, 0.2);
}

@keyframes goldenPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
    50% { box-shadow: 0 0 20px 5px rgba(251, 191, 36, 0.2); }
}

.speed-controls { display: none; gap: 12px; justify-content: center; width: 100%; max-width: 400px; }
.speed-controls.visible { display: flex; animation: slideDown 0.3s ease; }
@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

.speed-btn {
    padding: 12px 20px;
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    color: var(--text-secondary);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    line-height: 1.3;
    flex: 1;
    font-family: inherit;
    font-weight: 500;
}

.speed-btn small { display: block; font-size: 11px; opacity: 0.7; margin-top: 4px; font-weight: 400; }
.speed-btn:hover { background: var(--glass-bg-strong); color: white; }
.speed-btn.active { background: var(--primary-gold); color: #0f172a; border-color: var(--primary-gold); font-weight: 700; }

.guidelines-link {
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 15px;
    transition: color 0.3s;
    background: none;
    border: none;
    font-family: inherit;
}

.guidelines-link:hover { color: var(--text-secondary); }

/*
================================================================================
This Area Of Code Is: Modal System
================================================================================
*/

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.modal.open { opacity: 1; visibility: visible; }

.modal-content {
    width: 100%;
    max-width: 480px;
    max-height: 85dvh;
    max-height: -webkit-fill-available;
    overflow-y: auto;
    transform: scale(0.9) translateY(20px);
    transition: transform 0.3s;
}

.modal.open .modal-content { transform: scale(1) translateY(0); }

.glass-modal {
    background: rgba(15, 23, 42, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    padding: 30px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
}

.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.modal-header h3 { font-family: 'Playfair Display', serif; font-size: 24px; color: white; }

.close-modal {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--glass-border);
    background: transparent;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.close-modal:hover { background: rgba(255, 255, 255, 0.1); transform: rotate(90deg); }

.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 14px; font-weight: 600; margin-bottom: 8px; color: var(--text-secondary); }
.form-group input, .form-group textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--glass-border);
    background: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-gold);
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
}

.location-group { background: rgba(255, 255, 255, 0.03); padding: 15px; border-radius: var(--border-radius-sm); border: 1px solid var(--glass-border-light); }
.location-options { display: flex; gap: 20px; margin-bottom: 12px; flex-wrap: wrap; }
.checkbox-label { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary); cursor: pointer; }
.checkbox-label input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--primary-gold); }
.help-text { display: block; font-size: 12px; color: var(--text-muted); margin-top: 6px; font-style: italic; }

.form-actions { display: flex; gap: 12px; margin-top: 25px; }
.submit-btn, .cancel-btn, .ok-btn {
    flex: 1;
    padding: 14px 24px;
    border-radius: var(--border-radius-sm);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 48px;
    font-family: inherit;
}

.submit-btn {
    background: linear-gradient(135deg, var(--success-green) 0%, #059669 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5); }
.cancel-btn { background: var(--glass-bg); color: var(--text-secondary); border: 1px solid var(--glass-border); }
.cancel-btn:hover { background: var(--glass-bg-strong); color: white; }
.form-disclaimer { font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 15px; line-height: 1.5; font-style: italic; }

.guidelines-content { line-height: 1.7; }
.guidelines-content p { margin-bottom: 15px; color: var(--text-secondary); font-size: 15px; }
.guidelines-content ul { list-style: none; margin-bottom: 20px; padding: 0; }
.guidelines-content li { padding: 10px 0; color: var(--text-secondary); border-bottom: 1px solid var(--glass-border-light); font-size: 14px; display: flex; align-items: flex-start; gap: 8px; }
.guidelines-content li:last-child { border-bottom: none; }
.ok-btn { background: var(--primary-gold); color: #0f172a; width: 100%; margin-top: 10px; }
.ok-btn:hover { background: var(--primary-gold-dark); transform: translateY(-2px); }

/*
================================================================================
This Area Of Code Is: Accessibility Modal
================================================================================
*/

.accessibility-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 100dvh;
    height: -webkit-fill-available;
    background: rgba(0, 0, 0, 0.9);
    z-index: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.accessibility-modal.open { opacity: 1; visibility: visible; }

.accessibility-content {
    width: 100%;
    max-width: 500px;
    max-height: 85dvh;
    max-height: -webkit-fill-available;
    background: linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.99) 100%);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: var(--border-radius);
    padding: 30px;
    overflow-y: auto;
    box-shadow: 0 25px 50px rgba(0,0,0,0.7);
    position: relative;
}

.accessibility-header { text-align: center; margin-bottom: 25px; position: relative; }
.accessibility-header h2 { color: var(--primary-gold); font-family: 'Playfair Display', serif; font-size: 26px; margin-bottom: 8px; }
.accessibility-header p { color: var(--text-muted); font-size: 14px; }
.accessibility-header .close-modal { position: absolute; top: -10px; right: -10px; }

.access-category { margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
.access-category:last-child { border-bottom: none; margin-bottom: 15px; }
.access-category h3 { color: var(--primary-gold); font-size: 16px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-family: 'Playfair Display', serif; text-transform: uppercase; letter-spacing: 1px; }

.access-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: var(--border-radius-sm);
    padding: 14px 15px;
    margin-bottom: 10px;
    color: white;
    font-size: 14px;
    transition: all 0.3s;
    cursor: pointer;
}

.access-toggle:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25); }
.access-toggle.active { background: rgba(251, 191, 36, 0.1); border-color: rgba(251, 191, 36, 0.4); }

.toggle-switch {
    width: 50px;
    height: 26px;
    background: rgba(255,255,255,0.2);
    border-radius: 13px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
}

.toggle-switch::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.3s;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

.access-toggle.active .toggle-switch { background: var(--primary-gold); }
.access-toggle.active .toggle-switch::after { left: 26px; }

.color-filter-label { color: rgba(255,255,255,0.6); font-size: 12px; margin: 15px 0 10px 0; text-transform: uppercase; letter-spacing: 1px; }
.access-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.filter-group-label { grid-column: 1 / -1; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-top: 8px; margin-bottom: 4px; padding-left: 4px; }

.access-btn {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 10px 6px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    font-weight: 500;
    font-family: inherit;
}

.access-btn:hover, .access-btn.active { background: rgba(251, 191, 36, 0.15); border-color: rgba(251, 191, 36, 0.6); transform: translateY(-2px); }
.access-btn.active { background: rgba(251, 191, 36, 0.25); font-weight: 600; }

.close-modal-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, var(--primary-gold), #f59e0b);
    border: none;
    border-radius: 50px;
    color: #0f172a;
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
    margin-top: 10px;
    font-family: inherit;
}

.close-modal-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4); }

/*
================================================================================
This Area Of Code Is: Translation Bar
================================================================================
*/

.translation-bar {
    position: fixed;
    bottom: calc(20px + var(--safe-bottom));
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    color: var(--text-muted);
    border: 1px solid var(--glass-border);
    z-index: 50;
    white-space: nowrap;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/*
================================================================================
This Area Of Code Is: Color Vision Filters
================================================================================
*/

.filter-deuteranomaly, .cv-deuteranomaly { filter: url('#deuteranomaly'); }
.filter-deuteranopia, .cv-deuteranopia { filter: url('#deuteranopia'); }
.filter-protanomaly, .cv-protanomaly { filter: url('#protanomaly'); }
.filter-protanopia, .cv-protanopia { filter: url('#protanopia'); }
.filter-tritanomaly, .cv-tritanomaly { filter: url('#tritanomaly'); }
.filter-tritanopia, .cv-tritanopia { filter: url('#tritanopia'); }
.filter-achromatopsia, .cv-achromatopsia { filter: grayscale(100%) brightness(1.1) contrast(1.1); }
.filter-cone-monochromacy, .cv-cone-monochromacy { filter: grayscale(100%) sepia(20%); }
.filter-blue-cone-monochromacy, .cv-blue-cone-monochromacy { filter: url('#tritanopia') grayscale(50%); }

/*
================================================================================
This Area Of Code Is: Accessibility Modes
================================================================================
*/

.autism-mode * { transition-duration: 0.5s !important; animation-duration: 2s !important; }
.autism-mode .content-card { border-width: 3px; border-color: rgba(255, 255, 255, 0.5); }
.autism-mode .card-icon { animation: none; }

.ptsd-mode * { animation: none !important; transition-duration: 0.2s !important; }
.ptsd-mode .content-card::before { display: none; }
.ptsd-mode .card-icon { animation: none; }
.ptsd-mode .auto-mode-btn.active { animation: none; box-shadow: 0 0 15px rgba(251, 191, 36, 0.4); }

.adhd-mode .setup-text { font-size: clamp(26px, 7vw, 34px); line-height: 1.3; }
.adhd-mode .punchline-text { font-size: clamp(20px, 5vw, 24px); color: #60a5fa; }

.dyslexia-mode * { letter-spacing: 0.05em; word-spacing: 0.1em; }
.dyslexia-mode .setup-text { line-height: 1.6; }

.anxiety-mode .content-card { border-color: rgba(96, 165, 250, 0.4); box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2); }
.anxiety-mode .card-badge { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }

.high-contrast-mode * { border-color: white !important; }
.high-contrast-mode .content-card { background: rgba(0, 0, 0, 0.8); border: 2px solid white; }
.high-contrast-mode .setup-text, .high-contrast-mode .punchline-text { color: white; text-shadow: none; }

.large-targets-mode .nav-btn, .large-targets-mode .add-joke-btn, .large-targets-mode .auto-mode-btn, .large-targets-mode .jump-btn { min-height: 56px; padding: 16px 28px; }
.large-targets-mode .jump-btn { min-height: 52px; }

/*
================================================================================
This Area Of Code Is: Mobile Responsive
================================================================================
*/

@media (max-width: 480px) {
    .app-main { 
        padding: calc(var(--header-height) + var(--safe-top) + 60px) 12px calc(90px + var(--safe-bottom)); 
    }
    
    .live-stats {
        top: calc(var(--header-height) + var(--safe-top) + 8px);
        right: 10px;
        gap: 6px;
    }
    
    .online-badge, .cards-badge {
        padding: 6px 12px;
        font-size: 12px;
    }
    
    .content-card { 
        padding: 25px 15px; 
        min-height: 280px; 
        border-radius: 20px;
    }
    
    .setup-text { 
        font-size: clamp(20px, 5.5vw, 28px); 
    }
    
    .punchline-text { 
        font-size: clamp(16px, 4vw, 20px); 
    }
    
    .controls-row.main-controls {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    
    .punchline-btn { 
        order: -1; 
    }
    
    .controls-row.secondary {
        flex-direction: column;
    }
    
    .nav-btn, .add-joke-btn, .auto-mode-btn { 
        width: 100%;
        min-height: 44px;
        font-size: 14px;
    }
    
    .glass-modal { padding: 20px; }
    .accessibility-content { padding: 20px; }
}

@media (max-width: 360px) {
    .header-title {
        font-size: 16px;
    }
    
    .online-badge, .cards-badge {
        padding: 5px 10px;
        font-size: 11px;
    }
}

@media (max-height: 600px) and (orientation: landscape) {
    .app-main {
        padding: calc(var(--header-height) + var(--safe-top) + 20px) 15px calc(60px + var(--safe-bottom));
    }
    
    .live-stats {
        flex-direction: row;
        top: calc(var(--header-height) + var(--safe-top) + 5px);
        right: 10px;
        gap: 8px;
    }
    
    .content-card { 
        min-height: 200px; 
        padding: 20px; 
    }
    
    .card-icon { 
        font-size: 32px; 
        margin-bottom: 10px; 
    }
    
    .setup-text { 
        font-size: 20px; 
    }
}

@media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
    .content-card::before { display: none; }
    .card-icon { animation: none; }
}
