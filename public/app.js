/*
================================================================================
This Area Of Code Is: Main Application Logic (Firebase + Content Moderation)
Explanation: This is the brain of the GetWell PWA. It handles loading jokes
from Firebase Firestore, submitting new content with PurgoMalum API moderation,
slideshow functionality, and UI interactions. All content is validated externally
via PurgoMalum API to keep the codebase sanctified.
In Other Words: This makes everything work - loading jokes, checking they're
clean using an external service, showing them in cards, and running the slideshow.
================================================================================
*/

/*
This Area Of Code Is: Firebase SDK Imports
Explanation: Imports the Firebase modules needed for this app - initializeApp
to connect to Firebase, and Firestore functions to read/write jokes.
In Other Words: Bringing in Google's database tools.
*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js';
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    orderBy, 
    limit, 
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js';

/*
This Area Of Code Is: Firebase Configuration (YOUR ACTUAL CONFIG)
Explanation: These are YOUR Firebase project identifiers from the config you
provided. This connects the app to YOUR "Growing Get Well Card" Firebase project.
In Other Words: Your project's address and keys for the database.
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
This Area Of Code Is: Firebase Initialization
Explanation: Creates the connection to Firebase using YOUR config above.
Initializes the Firestore database instance.
In Other Words: Turns on the connection to YOUR database.
*/
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
This Area Of Code Is: Default Jokes Collection
Explanation: These 24 starter jokes display immediately while Firebase loads.
They provide content before the database responds. All are Christ-honoring.
In Other Words: The starter pack of jokes that appear instantly.
*/
const DEFAULT_JOKES = [
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!", category: "joke", author: "Anonymous" },
    { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!", category: "joke", author: "Kids Ministry" },
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", category: "joke", author: "Science Club" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta!", category: "joke", author: "Pasta Night" },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems!", category: "joke", author: "Homework Helpers" },
    { setup: "How does Moses make his coffee?", punchline: "Hebrews it!", category: "joke", author: "Coffee Club" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", category: "joke", author: "VBS Team" },
    { setup: "Why can't you give Elsa a balloon?", punchline: "Because she will let it go!", category: "joke", author: "Frozen Party" },
    { setup: "What do you get when you cross a snowman and a dog?", punchline: "Frostbite!", category: "joke", author: "Winter Retreat" },
    { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!", category: "joke", author: "Golf Ministry" },
    { setup: "What do you call a pile of cats?", punchline: "A meowtain!", category: "joke", author: "Pet Blessing" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", category: "joke", author: "Breakfast Club" },
    { setup: "What do you call a belt made of watches?", punchline: "A waist of time!", category: "joke", author: "Time Management" },
    { setup: "Why did the stadium get hot after the game?", punchline: "All the fans left!", category: "joke", author: "Sports Ministry" },
    { setup: "What do you call a fish with no eyes?", punchline: "Fsh!", category: "joke", author: "Fishing Retreat" },
    { setup: "Why did the bicycle fall over?", punchline: "It was two-tired!", category: "joke", author: "Bike Club" },
    { setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!", category: "joke", author: "Kitchen Crew" },
    { setup: "Why did the music teacher go to jail?", punchline: "Because she got caught with sharp objects!", category: "joke", author: "Worship Team" },
    { setup: "What do you call a sad strawberry?", punchline: "A blueberry!", category: "joke", author: "Fruit Stand" },
    { setup: "Why did the picture go to jail?", punchline: "Because it was framed!", category: "joke", author: "Art Ministry" },
    { setup: "What do you call a sleeping bull?", punchline: "A bulldozer!", category: "joke", author: "Farm Day" },
    { setup: "Why did the cookie go to the doctor?", punchline: "Because it felt crummy!", category: "joke", author: "Baking Team" },
    { setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus!", category: "joke", author: "Book Club" },
    { setup: "Why did the scarecrow become a pastor?", punchline: "Because he was outstanding in his field!", category: "joke", author: "Church Staff" }
];

/*
This Area Of Code Is: Church Community Standards
Explanation: Local check for content violating church values (political,
LGBTQ+ topics, anti-church content). Checked before calling PurgoMalum API.
In Other Words: First check - does this fit church family values?
*/
const CHURCH_STANDARDS = {
    political: ['trump', 'biden', 'obama', 'republican', 'democrat', 'maga', 'antifa', 'liberal', 'conservative', 'election', 'vote', 'campaign'],
    lgbtq: ['gay', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'lgbt', 'pride', 'drag queen', 'homosexual'],
    antichurch: ['god is dead', 'anti-christ', 'satanic', 'cult', 'atheist', 'anti-church'],
    drugs: ['cocaine', 'heroin', 'weed', 'marijuana', 'drugs', 'getting high']
};

/*
This Area Of Code Is: Application State Variables
Explanation: Tracks current app state - loaded jokes, active filter,
slideshow status, etc. These change as users interact.
In Other Words: The app's memory of what's happening right now.
*/
let allJokes = [];
let currentFilter = 'all';
let slideshowInterval = null;
let isSlideshowPlaying = false;
let currentSlideIndex = 0;

/*
This Area Of Code Is: DOM Element References
Explanation: Gets HTML elements so JavaScript can control them. Cached
on startup for performance.
In Other Words: Grabbing buttons and containers from the HTML to control them.
*/
const elements = {
    cardsContainer: document.getElementById('cardsContainer'),
    addModal: document.getElementById('addModal'),
    addForm: document.getElementById('addForm'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    toastContainer: document.getElementById('toastContainer'),
    slideshowControls: document.getElementById('slideshowControls'),
    slideCounter: document.getElementById('slideCounter'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    addBtn: document.getElementById('addBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    slideshowBtn: document.getElementById('slideshowBtn'),
    pauseSlideshow: document.getElementById('pauseSlideshow'),
    exitSlideshow: document.getElementById('exitSlideshow')
};

/*
================================================================================
This Area Of Code Is: Content Moderation (PurgoMalum API)
Explanation: Validates user content using external PurgoMalum API (free, no key
needed). No profanity words stored in code - all checking is external.
In Other Words: Asks external service "is this clean?" instead of storing bad words.
================================================================================
*/

/*
This Area Of Code Is: Church Standards Validator
Explanation: Checks text against church community standards. Returns passed
status and reason if failed. Runs before external API call.
In Other Words: First security check - does this fit church values?
*/
function checkChurchStandards(text) {
    const lowerText = text.toLowerCase();
    
    for (const [category, words] of Object.entries(CHURCH_STANDARDS)) {
        for (const word of words) {
            if (lowerText.includes(word)) {
                return {
                    passed: false,
                    reason: category,
                    message: `Content contains ${category} references not suitable for this community.`
                };
            }
        }
    }
    
    return { passed: true };
}

/*
This Area Of Code Is: PurgoMalum Profanity Check
Explanation: Calls PurgoMalum API to check for profanity. Returns true if
profanity found. External service keeps code clean.
In Other Words: Asks external service "any bad words in this?"
*/
async function checkProfanity(text) {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const hasProfanity = await response.json();
        return hasProfanity;
    } catch (error) {
        console.error('PurgoMalum API error:', error);
        return true; // Fail safe - block content if API fails
    }
}

/*
This Area Of Code Is: Content Moderation Coordinator
Explanation: Runs both validation layers - church standards first, then
PurgoMalum profanity check. Returns final approval status.
In Other Words: The boss that runs both checks and gives final yes/no.
*/
async function moderateContent(setup, punchline, author) {
    const fullText = `${setup} ${punchline} ${author || ''}`;
    
    // Layer 1: Church standards
    const churchCheck = checkChurchStandards(fullText);
    if (!churchCheck.passed) {
        return churchCheck;
    }
    
    // Layer 2: Profanity via PurgoMalum
    const hasProfanity = await checkProfanity(fullText);
    if (hasProfanity) {
        return {
            passed: false,
            reason: 'profanity',
            message: 'Content contains inappropriate language. Please keep it clean.'
        };
    }
    
    return { passed: true };
}

/*
================================================================================
This Area Of Code Is: Firebase Database Operations
Explanation: Functions to read from and write to YOUR Firebase Firestore.
Handles the persistent joke database that grows over time.
In Other Words: Tools for saving and loading jokes from YOUR database.
================================================================================
*/

/*
This Area Of Code Is: Load Jokes from Firebase
Explanation: Fetches jokes from YOUR Firestore, ordered by newest first.
Shows default jokes while loading. Displays toast if offline.
In Other Words: Gets jokes from YOUR database, or shows defaults if offline.
*/
async function loadJokes() {
    showLoading(true);
    
    try {
        const jokesQuery = query(
            collection(db, 'jokes'),
            orderBy('createdAt', 'desc'),
            limit(50)
        );
        
        const snapshot = await getDocs(jokesQuery);
        
        if (snapshot.empty) {
            allJokes = DEFAULT_JOKES;
            showToast('Welcome! Submit the first joke to get started.', 'info');
        } else {
            allJokes = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        }
        
        renderCards();
    } catch (error) {
        console.error('Error loading jokes:', error);
        allJokes = DEFAULT_JOKES;
        renderCards();
        showToast('Using offline jokes. Check connection.', 'warning');
    } finally {
        showLoading(false);
    }
}

/*
This Area Of Code Is: Submit Joke to Firebase
Explanation: Validates content via moderation, then saves to YOUR Firestore
if clean. Shows toast feedback. Reloads jokes on success.
In Other Words: Saves a new joke to YOUR database after checking it's clean.
*/
async function submitJoke(setup, punchline, category, author) {
    const moderation = await moderateContent(setup, punchline, author);
    
    if (!moderation.passed) {
        showToast(moderation.message, 'error');
        return false;
    }
    
    try {
        await addDoc(collection(db, 'jokes'), {
            setup,
            punchline,
            category,
            author: author || 'Anonymous',
            createdAt: serverTimestamp(),
            approved: true
        });
        
        showToast('Thank you! Your submission has been added.', 'success');
        await loadJokes();
        return true;
    } catch (error) {
        console.error('Error submitting joke:', error);
        showToast('Error saving joke. Please try again.', 'error');
        return false;
    }
}

/*
================================================================================
This Area Of Code Is: UI Rendering Functions
Explanation: Creates and updates visual elements - cards, toasts, loading spinner.
Transforms data into HTML and updates the page.
In Other Words: The decorators that make jokes look pretty in cards.
================================================================================
*/

/*
This Area Of Code Is: Render Cards Grid
Explanation: Creates HTML for all joke cards based on current filter.
Uses CSS classes for glass morphism styling. Handles empty state.
In Other Words: Draws all the joke cards on the screen.
*/
function renderCards() {
    const filtered = currentFilter === 'all' 
        ? allJokes 
        : allJokes.filter(j => j.category === currentFilter);
    
    if (filtered.length === 0) {
        elements.cardsContainer.innerHTML = `
            <div class="empty-state">
                <p>No ${currentFilter === 'all' ? '' : currentFilter}s yet.</p>
                <p>Be the first to share!</p>
            </div>
        `;
        return;
    }
    
    elements.cardsContainer.innerHTML = filtered.map((joke, index) => `
        <div class="card glass" data-index="${index}" data-category="${joke.category}">
            <div class="card-header">
                <span class="category-badge ${joke.category}">${joke.category}</span>
                <span class="author">${joke.author || 'Anonymous'}</span>
            </div>
            <div class="card-body">
                <p class="setup">${escapeHtml(joke.setup)}</p>
                <p class="punchline">${escapeHtml(joke.punchline)}</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            if (isSlideshowPlaying) return;
        });
    });
}

/*
This Area Of Code Is: HTML Escape Utility
Explanation: Prevents XSS attacks by converting special characters to HTML
entities. Ensures user content cannot inject malicious scripts.
In Other Words: Security measure so jokes can't hack the page.
*/
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/*
This Area Of Code Is: Toast Notification System
Explanation: Shows temporary popup messages at bottom. Auto-removes after
3 seconds. Types: success (green), error (red), warning (yellow), info (blue).
In Other Words: Little popup messages saying "Success!" or "Error!"
*/
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/*
This Area Of Code Is: Loading Spinner Toggle
Explanation: Shows or hides the loading spinner.
In Other Words: Shows spinning circle when loading, hides when done.
*/
function showLoading(show) {
    elements.loadingSpinner.classList.toggle('hidden', !show);
}

/*
================================================================================
This Area Of Code Is: Slideshow Functionality
Explanation: Automatic card rotation with controls. Cycles through filtered
cards every 5 seconds. Keyboard shortcuts: Space (pause), Escape (exit),
Arrow keys (manual nav).
In Other Words: Automatic mode that flips through cards like a presentation.
================================================================================
*/

/*
This Area Of Code Is: Start Slideshow
Explanation: Begins automatic card cycling. Highlights current card,
shows controls overlay.
In Other Words: Starts the automatic card show.
*/
function startSlideshow() {
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) return;
    
    isSlideshowPlaying = true;
    currentSlideIndex = 0;
    elements.slideshowControls.classList.remove('hidden');
    
    highlightCard(cards, 0);
    
    slideshowInterval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % cards.length;
        highlightCard(cards, currentSlideIndex);
    }, 5000);
    
    showToast('Slideshow started! Space=pause, Escape=exit', 'info');
}

/*
This Area Of Code Is: Highlight Current Card
Explanation: Adds active styling to current slide card, removes from others.
Scrolls card into view. Updates counter.
In Other Words: Makes current card glow and scrolls to it.
*/
function highlightCard(cards, index) {
    cards.forEach((card, i) => {
        card.classList.toggle('active-slide', i === index);
    });
    
    if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        elements.slideCounter.textContent = `${index + 1} / ${cards.length}`;
    }
}

/*
This Area Of Code Is: Pause Slideshow
Explanation: Stops automatic cycling but keeps slideshow mode active.
In Other Words: Pauses the automatic card show.
*/
function pauseSlideshow() {
    clearInterval(slideshowInterval);
    isSlideshowPlaying = false;
    elements.pauseSlideshow.textContent = '▶';
    showToast('Slideshow paused', 'info');
}

/*
This Area Of Code Is: Resume Slideshow
Explanation: Restarts automatic cycling from current position.
In Other Words: Unpauses the card show.
*/
function resumeSlideshow() {
    const cards = document.querySelectorAll('.card');
    slideshowInterval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % cards.length;
        highlightCard(cards, currentSlideIndex);
    }, 5000);
    isSlideshowPlaying = true;
    elements.pauseSlideshow.textContent = '⏸';
}

/*
This Area Of Code Is: Exit Slideshow
Explanation: Completely stops slideshow, hides controls, removes highlights.
In Other Words: Stops the show and returns to normal browsing.
*/
function exitSlideshow() {
    clearInterval(slideshowInterval);
    isSlideshowPlaying = false;
    elements.slideshowControls.classList.add('hidden');
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active-slide');
    });
}

/*
================================================================================
This Area Of Code Is: Event Listeners & Initialization
Explanation: Sets up all button clicks, form submissions, keyboard shortcuts.
Runs when page loads. Connects user actions to functions.
In Other Words: Wiring that connects buttons to their functions.
================================================================================
*/

/*
This Area Of Code Is: DOM Content Loaded Handler
Explanation: Runs once when page is fully loaded. Initializes event listeners
and loads initial jokes from YOUR Firebase.
In Other Words: Startup sequence - sets up buttons and loads jokes.
*/
document.addEventListener('DOMContentLoaded', () => {
    loadJokes();
    
    // Filter buttons
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderCards();
            
            if (isSlideshowPlaying) {
                exitSlideshow();
                startSlideshow();
            }
        });
    });
    
    // Add button - show modal
    elements.addBtn.addEventListener('click', () => {
        elements.addModal.classList.remove('hidden');
    });
    
    // Cancel button - hide modal
    elements.cancelBtn.addEventListener('click', () => {
        elements.addModal.classList.add('hidden');
        elements.addForm.reset();
    });
    
    // Form submission
    elements.addForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const category = document.getElementById('category').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        
        // Parse setup/punchline from content
        const lines = content.split('\n').filter(line => line.trim());
        let setup, punchline;
        
        if (lines.length >= 2) {
            setup = lines[0];
            punchline = lines.slice(1).join(' ');
        } else {
            const sentences = content.split(/[.!?]+/).filter(s => s.trim());
            if (sentences.length >= 2) {
                setup = sentences[0] + '.';
                punchline = sentences.slice(1).join('. ') + '.';
            } else {
                setup = content;
                punchline = '';
            }
        }
        
        const success = await submitJoke(setup, punchline, category, author);
        
        if (success) {
            elements.addModal.classList.add('hidden');
            elements.addForm.reset();
        }
    });
    
    // Slideshow button
    elements.slideshowBtn.addEventListener('click', () => {
        if (isSlideshowPlaying) {
            exitSlideshow();
        } else {
            startSlideshow();
        }
    });
    
    // Pause/Resume button
    elements.pauseSlideshow.addEventListener('click', () => {
        if (isSlideshowPlaying) {
            pauseSlideshow();
        } else {
            resumeSlideshow();
        }
    });
    
    // Exit slideshow button
    elements.exitSlideshow.addEventListener('click', exitSlideshow);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && isSlideshowPlaying) {
            e.preventDefault();
            if (isSlideshowPlaying && slideshowInterval) {
                pauseSlideshow();
            } else {
                resumeSlideshow();
            }
        }
        
        if (e.code === 'Escape') {
            if (isSlideshowPlaying) exitSlideshow();
            if (!elements.addModal.classList.contains('hidden')) {
                elements.addModal.classList.add('hidden');
                elements.addForm.reset();
            }
        }
        
        if (isSlideshowPlaying) {
            const cards = document.querySelectorAll('.card');
            if (e.code === 'ArrowRight') {
                currentSlideIndex = (currentSlideIndex + 1) % cards.length;
                highlightCard(cards, currentSlideIndex);
            } else if (e.code === 'ArrowLeft') {
                currentSlideIndex = (currentSlideIndex - 1 + cards.length) % cards.length;
                highlightCard(cards, currentSlideIndex);
            }
        }
    });
    
    // Close modal when clicking outside
    elements.addModal.addEventListener('click', (e) => {
        if (e.target === elements.addModal) {
            elements.addModal.classList.add('hidden');
            elements.addForm.reset();
        }
    });
});
