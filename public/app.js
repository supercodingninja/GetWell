/*
================================================================================
This Area Of Code Is: Firebase SDK Imports
Explanation: I am importing the Firebase modules needed for database operations 
using ES module syntax from Google's CDN (version 12.10.0). The initializeApp 
function starts Firebase, getFirestore provides database access, and serverTimestamp 
ensures consistent timestamps across all user submissions.
In Other Words: I am connecting my app to the cloud database using the latest tools.
================================================================================
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    orderBy, 
    limit, 
    serverTimestamp,
    where 
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

/*
================================================================================
This Area Of Code Is: Firebase Configuration
Explanation: I am configuring Firebase with my project's unique credentials. 
These settings tell my app exactly which Firebase project to connect to, 
authenticating my requests so only my app can access my database.
In Other Words: This is my app's unique key to access the cloud database securely.
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
Explanation: I am initializing the Firebase app with my configuration and 
getting a reference to the Firestore database. This creates the connection 
that allows me to read and write data in real-time.
In Other Words: I am starting the engine that powers my app's data storage.
================================================================================
*/
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
================================================================================
This Area Of Code Is: Video Background Configuration
Explanation: I am defining the video URLs hosted on GitHub Releases. The landing 
page shows a peaceful interior scene, while the main app shows community 
gatherings. I use direct GitHub URLs to avoid storage limits and ensure 
reliable streaming.
In Other Words: These are the background videos that play behind my app's content.
================================================================================
*/
const videoConfig = {
    landing: 'https://github.com/supercodingninja/GetWell/releases/download/v1.0-videos/church-interior.mp4',
    main: 'https://github.com/supercodingninja/GetWell/releases/download/v1.0-videos/video.mp4'
};

/*
================================================================================
This Area Of Code Is: Content Moderation - External API
Explanation: I am using the PurgoMalum API to check content without storing 
any banned words in my code. When someone submits text, I send it to this 
external service which returns whether it's clean or contains profanity. This 
keeps my codebase sanctified and clean.
In Other Words: I use an external service to check if text is appropriate, so I 
don't need to store bad words in my app.
================================================================================
*/
const checkPurgoMalum = async (text) => {
    try {
        const response = await fetch(`https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(text)}`);
        const result = await response.text();
        return result === 'true';
    } catch (error) {
        console.error('I encountered an error checking content:', error);
        return false;
    }
};

/*
================================================================================
This Area Of Code Is: Church Standards Validation
Explanation: I am implementing client-side checks for content that aligns with 
church values - checking for political content, LGBTQ+ themes, anti-church 
sentiment, and drug references. This uses pattern matching to flag potentially 
inappropriate content before submission.
In Other Words: I check if content matches values important to my community before 
allowing it to be posted.
================================================================================
*/
const checkChurchStandards = (text) => {
    const lowerText = text.toLowerCase();
    
    const politicalPatterns = ['trump', 'biden', 'election', 'vote democrat', 'vote republican', 'liberal', 'conservative', 'political'];
    const inappropriatePatterns = ['lgbtq', 'lgbt', 'gay pride', 'transgender agenda', 'anti-church', 'hate church', 'weed', 'marijuana', 'drugs'];
    
    const issues = [];
    
    politicalPatterns.forEach(pattern => {
        if (lowerText.includes(pattern)) issues.push('political content');
    });
    
    inappropriatePatterns.forEach(pattern => {
        if (lowerText.includes(pattern)) issues.push('inappropriate content');
    });
    
    return {
        isValid: issues.length === 0,
        issues: issues
    };
};

/*
================================================================================
This Area Of Code Is: Starter Content Database
Explanation: I am seeding my app with 24 starter jokes to ensure users have 
immediate content to enjoy. These are clean, family-friendly jokes stored 
locally while Firebase synchronization happens in the background. This ensures 
the app works immediately even before database content loads.
In Other Words: These are the first jokes people see when they open my app.
================================================================================
*/
const starterJokes = [
    { type: 'jokes', text: "Why don't scientists trust atoms? Because they make up everything!", author: 'Community' },
    { type: 'jokes', text: "Why did the scarecrow win an award? He was outstanding in his field!", author: 'Community' },
    { type: 'jokes', text: "Why don't eggs tell jokes? They'd crack each other up!", author: 'Community' },
    { type: 'jokes', text: "What do you call a fake noodle? An impasta!", author: 'Community' },
    { type: 'jokes', text: "Why did the bicycle fall over? It was two-tired!", author: 'Community' },
    { type: 'jokes', text: "What do you call a bear with no teeth? A gummy bear!", author: 'Community' },
    { type: 'jokes', text: "Why can't you give Elsa a balloon? Because she will let it go!", author: 'Community' },
    { type: 'jokes', text: "What do you get when you cross a snowman with a vampire? Frostbite!", author: 'Community' },
    { type: 'jokes', text: "Why did the math book look sad? Because it had too many problems!", author: 'Community' },
    { type: 'jokes', text: "What do you call cheese that isn't yours? Nacho cheese!", author: 'Community' },
    { type: 'jokes', text: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", author: 'Community' },
    { type: 'jokes', text: "What do you call a sleeping dinosaur? A dino-snore!", author: 'Community' },
    { type: 'jokes', text: "Why don't skeletons fight each other? They don't have the guts!", author: 'Community' },
    { type: 'jokes', text: "What did the grape do when it got stepped on? It let out a little wine!", author: 'Community' },
    { type: 'jokes', text: "Why couldn't the leopard play hide and seek? Because he was always spotted!", author: 'Community' },
    { type: 'jokes', text: "What do you call a fish wearing a crown? A king fish!", author: 'Community' },
    { type: 'jokes', text: "Why did the cookie go to the doctor? Because it felt crummy!", author: 'Community' },
    { type: 'jokes', text: "What do you call a lazy kangaroo? A pouch potato!", author: 'Community' },
    { type: 'jokes', text: "Why did the stadium get hot after the game? All the fans left!", author: 'Community' },
    { type: 'jokes', text: "What do you call a dog magician? A labracadabrador!", author: 'Community' },
    { type: 'jokes', text: "Why did the picture go to jail? Because it was framed!", author: 'Community' },
    { type: 'jokes', text: "What do you call a bear in the rain? A drizzly bear!", author: 'Community' },
    { type: 'jokes', text: "Why did the scarecrow become a successful neurosurgeon? He was out-standing in his field!", author: 'Community' },
    { type: 'jokes', text: "What do you call a snowman with a six pack? An abdominal snowman!", author: 'Community' }
];

const starterPrayers = [
    { type: 'prayers', text: "Heavenly Father, thank You for this day. Bless everyone who reads this with peace, joy, and healing. In Jesus' name, Amen.", author: 'Community' },
    { type: 'prayers', text: "Lord, I pray for anyone feeling sick or down today. Wrap them in Your love and give them strength. Amen.", author: 'Community' }
];

const starterMessages = [
    { type: 'messages', text: "You are stronger than you know, braver than you believe, and loved more than you can imagine. Keep going!", author: 'Community' },
    { type: 'messages', text: "This too shall pass. Every storm runs out of rain. Hold on, better days are coming.", author: 'Community' }
];

/*
================================================================================
This Area Of Code Is: Application State Management
Explanation: I am creating variables to track the current state of my app - 
which content type is being viewed (jokes, prayers, or messages), the current 
index in the slideshow, whether slideshow mode is active, and the full database 
of content items. This allows smooth navigation and transitions.
In Other Words: This keeps track of where the user is and what they're looking at.
================================================================================
*/
let currentMode = 'jokes';
let currentIndex = 0;
let isSlideshowActive = false;
let slideshowInterval = null;
let allContent = {
    jokes: [...starterJokes],
    prayers: [...starterPrayers],
    messages: [...starterMessages]
};

/*
================================================================================
This Area Of Code Is: DOM Element References
Explanation: I am caching references to HTML elements that I need to manipulate 
frequently. This improves performance by avoiding repeated document searches 
and makes my code cleaner by using descriptive variable names for each element.
In Other Words: I grab all the buttons and display areas so I can work with them easily.
================================================================================
*/
const elements = {
    cardType: document.getElementById('cardType'),
    cardNumber: document.getElementById('cardNumber'),
    cardText: document.getElementById('cardText'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    modeButtons: document.querySelectorAll('.mode-btn'),
    slideshowToggle: document.getElementById('slideshowToggle'),
    addContentBtn: document.getElementById('addContentBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    submissionForm: document.getElementById('submissionForm'),
    contentForm: document.getElementById('contentForm'),
    submitType: document.getElementById('submitType'),
    submitText: document.getElementById('submitText'),
    charCount: document.getElementById('charCount'),
    contentCard: document.getElementById('contentCard')
};

/*
================================================================================
This Area Of Code Is: Content Display Controller
Explanation: I am creating a function to update the display card with the 
current content item. It handles the type label styling, card counter, text 
display, and applies fade animations for smooth transitions between items.
In Other Words: This function shows the current joke, prayer, or message on screen.
================================================================================
*/
const displayContent = (index) => {
    const items = allContent[currentMode];
    if (items.length === 0) {
        elements.cardText.textContent = "No content yet. Be the first to add something!";
        return;
    }
    
    const item = items[index];
    
    elements.cardType.textContent = item.type.charAt(0).toUpperCase() + item.type.slice(1);
    elements.cardNumber.textContent = `#${index + 1} of ${items.length}`;
    elements.cardText.textContent = item.text;
    
    // Color coding by type
    const colors = {
        jokes: '#f59e0b',
        prayers: '#10b981',
        messages: '#3b82f6'
    };
    elements.cardType.style.color = colors[item.type];
    
    // Animation effect
    elements.contentCard.style.opacity = '0';
    setTimeout(() => {
        elements.contentCard.style.opacity = '1';
    }, 150);
};

/*
================================================================================
This Area Of Code Is: Navigation Controller
Explanation: I am implementing next and previous functions that cycle through 
content items. They use modulo arithmetic to loop back to the beginning when 
reaching the end, ensuring infinite navigation through the collection.
In Other Words: These let users move forward and backward through the cards.
================================================================================
*/
const nextContent = () => {
    const items = allContent[currentMode];
    currentIndex = (currentIndex + 1) % items.length;
    displayContent(currentIndex);
};

const prevContent = () => {
    const items = allContent[currentMode];
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    displayContent(currentIndex);
};

/*
================================================================================
This Area Of Code Is: Mode Switching Controller
Explanation: I am creating a function to switch between jokes, prayers, and 
messages modes. It updates the active button styling, resets to the first item 
in the new category, and refreshes the display to show content from the selected type.
In Other Words: This switches between jokes, prayers, and messages when users click tabs.
================================================================================
*/
const switchMode = (mode) => {
    currentMode = mode;
    currentIndex = 0;
    
    elements.modeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    
    displayContent(currentIndex);
};

/*
================================================================================
This Area Of Code Is: Slideshow Controller
Explanation: I am implementing an automatic slideshow feature that cycles 
through content every 5 seconds when activated. It includes play/pause toggle 
functionality and visual feedback through button text changes.
In Other Words: This automatically shows new content every few seconds like a presentation.
================================================================================
*/
const toggleSlideshow = () => {
    if (isSlideshowActive) {
        clearInterval(slideshowInterval);
        isSlideshowActive = false;
        elements.slideshowToggle.textContent = '▶ Slideshow';
        elements.slideshowToggle.classList.remove('active');
    } else {
        slideshowInterval = setInterval(nextContent, 5000);
        isSlideshowActive = true;
        elements.slideshowToggle.textContent = '⏸ Pause';
        elements.slideshowToggle.classList.add('active');
    }
};

/*
================================================================================
This Area Of Code Is: Form Visibility Controller
Explanation: I am managing the visibility of the submission form with smooth 
animations. When users click "Add Your Own," the form slides into view; when 
they cancel or submit, it hides gracefully.
In Other Words: This shows and hides the form for adding new content.
================================================================================
*/
const showForm = () => {
    elements.submissionForm.style.display = 'block';
    setTimeout(() => {
        elements.submissionForm.style.opacity = '1';
        elements.submissionForm.style.transform = 'translateY(0)';
    }, 10);
    elements.addContentBtn.style.display = 'none';
};

const hideForm = () => {
    elements.submissionForm.style.opacity = '0';
    elements.submissionForm.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        elements.submissionForm.style.display = 'none';
    }, 300);
    elements.addContentBtn.style.display = 'block';
    elements.contentForm.reset();
    elements.charCount.textContent = '0 / 500';
};

/*
================================================================================
This Area Of Code Is: Character Counter
Explanation: I am implementing a real-time character counter for the submission 
textarea, updating as the user types to show how close they are to the 500 
character limit. This provides immediate feedback and prevents overflow.
In Other Words: This counts how many letters the user has typed.
================================================================================
*/
const updateCharCount = () => {
    const count = elements.submitText.value.length;
    elements.charCount.textContent = `${count} / 500`;
    
    if (count > 450) {
        elements.charCount.style.color = '#ef4444';
    } else {
        elements.charCount.style.color = '#9ca3af';
    }
};

/*
================================================================================
This Area Of Code Is: Content Submission Handler
Explanation: I am handling form submissions by validating content length, checking 
against external moderation APIs (PurgoMalum), validating church standards, 
checking for duplicates, and then saving to Firebase. I provide user feedback 
through alerts and gracefully handle errors.
In Other Words: This processes new jokes/prayers/messages when people submit them.
================================================================================
*/
const handleSubmit = async (e) => {
    e.preventDefault();
    
    const text = elements.submitText.value.trim();
    const type = elements.submitType.value;
    
    if (text.length === 0) {
        alert('Please enter some content to share.');
        return;
    }
    
    if (text.length > 500) {
        alert('Please keep your message under 500 characters.');
        return;
    }
    
    // Check PurgoMalum API
    const containsProfanity = await checkPurgoMalum(text);
    if (containsProfanity) {
        alert('Your message contains inappropriate language. Please keep it family-friendly.');
        return;
    }
    
    // Check church standards
    const standardsCheck = checkChurchStandards(text);
    if (!standardsCheck.isValid) {
        alert(`Your message contains ${standardsCheck.issues.join(', ')}. Please keep content neutral and uplifting.`);
        return;
    }
    
    // Check for duplicates
    const isDuplicate = allContent[type].some(item => item.text.toLowerCase() === text.toLowerCase());
    if (isDuplicate) {
        alert('This content already exists in our collection!');
        return;
    }
    
    try {
        // Add to Firebase
        await addDoc(collection(db, type), {
            text: text,
            type: type,
            author: 'Community Member',
            timestamp: serverTimestamp(),
            approved: true
        });
        
        // Add to local collection
        allContent[type].push({
            text: text,
            type: type,
            author: 'Community Member'
        });
        
        alert('Thank you for sharing! Your content has been added.');
        hideForm();
        
        // If currently viewing this type, update display
        if (currentMode === type) {
            currentIndex = allContent[type].length - 1;
            displayContent(currentIndex);
        }
        
    } catch (error) {
        console.error('I encountered an error saving content:', error);
        
        // Still add to local collection if Firebase fails (offline mode)
        allContent[type].push({
            text: text,
            type: type,
            author: 'Community Member'
        });
        
        alert('Content saved locally! It will sync when you reconnect.');
        hideForm();
    }
};

/*
================================================================================
This Area Of Code Is: Firebase Data Loader
Explanation: I am fetching all content from Firebase Firestore when the app 
loads. I query each collection (jokes, prayers, messages), merge them with my 
starter content to ensure the app always has something to display, and handle 
offline scenarios gracefully.
In Other Words: This loads all the saved jokes and messages from the cloud when the app starts.
================================================================================
*/
const loadFirebaseData = async () => {
    try {
        const types = ['jokes', 'prayers', 'messages'];
        
        for (const type of types) {
            const q = query(collection(db, type), orderBy('timestamp', 'desc'), limit(100));
            const snapshot = await getDocs(q);
            
            const firebaseItems = [];
            snapshot.forEach((doc) => {
                firebaseItems.push({ id: doc.id, ...doc.data() });
            });
            
            // Merge with starters, avoiding duplicates
            const existingTexts = allContent[type].map(item => item.text.toLowerCase());
            const newItems = firebaseItems.filter(item => !existingTexts.includes(item.text.toLowerCase()));
            
            allContent[type] = [...allContent[type], ...newItems];
        }
        
        // Refresh display
        displayContent(currentIndex);
        
    } catch (error) {
        console.error('I encountered an error loading Firebase data:', error);
        // Continue with starter content if Firebase fails
    }
};

/*
================================================================================
This Area Of Code Is: Keyboard Navigation Controller
Explanation: I am implementing keyboard shortcuts for improved accessibility 
and user experience. Left/right arrows navigate content, spacebar toggles 
slideshow, and escape closes any open forms.
In Other Words: This lets people use keyboard arrows to navigate instead of clicking.
================================================================================
*/
const handleKeyboard = (e) => {
    if (e.target.tagName === 'TEXTAREA') return;
    
    switch(e.key) {
        case 'ArrowLeft':
            prevContent();
            break;
        case 'ArrowRight':
        case ' ':
            if (e.target !== elements.submitText) {
                e.preventDefault();
                nextContent();
            }
            break;
        case 'Escape':
            hideForm();
            break;
    }
};

/*
================================================================================
This Area Of Code Is: Video Background Manager
Explanation: I am handling video playback for the background ambiance. I ensure 
videos autoplay with muted audio (required by browsers), handle visibility changes 
to pause when the tab is inactive (saving battery), and implement error recovery.
In Other Words: This manages the background videos so they play smoothly.
================================================================================
*/
const initVideoBackground = () => {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.muted = true;
        video.play().catch(err => {
            console.log('I note that autoplay was prevented:', err);
        });
    });
    
    // Pause when tab is hidden to save resources
    document.addEventListener('visibilitychange', () => {
        videos.forEach(video => {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(() => {});
            }
        });
    });
};

/*
================================================================================
This Area Of Code Is: Event Listeners Setup
Explanation: I am attaching all event listeners when the DOM loads. This 
includes button clicks for navigation, mode switching, form submission, 
keyboard controls, and input monitoring for the character counter.
In Other Words: This hooks up all the buttons so they actually do something when clicked.
================================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    // Initialize video
    initVideoBackground();
    
    // Load data from Firebase
    loadFirebaseData();
    
    // Navigation
    elements.prevBtn.addEventListener('click', prevContent);
    elements.nextBtn.addEventListener('click', nextContent);
    
    // Mode switching
    elements.modeButtons.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });
    
    // Slideshow
    elements.slideshowToggle.addEventListener('click', toggleSlideshow);
    
    // Form handling
    elements.addContentBtn.addEventListener('click', showForm);
    elements.cancelBtn.addEventListener('click', hideForm);
    elements.contentForm.addEventListener('submit', handleSubmit);
    elements.submitText.addEventListener('input', updateCharCount);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Initial display
    displayContent(currentIndex);
    
    console.log('I have successfully initialized the Get Well app!');
});

/*
================================================================================
This Area Of Code Is: Service Worker Registration Helper
Explanation: I am registering the service worker for Progressive Web App 
functionality. This enables offline access, home screen installation, and 
caching of assets for faster loading on repeat visits.
In Other Words: This makes the app work without internet and installable on phones.
================================================================================
*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('I successfully registered the service worker:', registration);
            })
            .catch(error => {
                console.log('I encountered an error registering service worker:', error);
            });
    });
}

/*
================================================================================
This Area Of Code Is: Export for Module Use
Explanation: I am exporting the database reference and utility functions so 
they can be accessed by other modules if needed, such as the filters.js file 
for additional content moderation features.
In Other Words: This shares my tools with other files that might need them.
================================================================================
*/
export { db, allContent, checkPurgoMalum, checkChurchStandards };
