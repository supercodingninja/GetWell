/*
================================================================================
This Area Of Code Is: Client-Side Content Filters (Church Standards)
Explanation: Provides immediate client-side validation for church community
standards (political, LGBTQ+, anti-church, drug references). This runs before
submitting to Firebase, giving instant feedback. Does NOT contain profanity
lists - that check is done via PurgoMalum API to keep code sanctified.
In Other Words: Quick check on the phone for church-appropriate content before
sending to the database. Bad words are checked separately by external service.
================================================================================
*/

/*
This Area Of Code Is: Church Standards Categories
Explanation: Object containing arrays of terms to check against. Organized by
category for specific error messages. These are church value standards, not
profanity (which is handled externally).
In Other Words: Lists of topics that don't fit church community values.
*/
const CHURCH_STANDARDS = {
    political: [
        'trump', 'biden', 'obama', 'republican', 'democrat', 'maga', 'antifa', 
        'liberal', 'conservative', 'election', 'vote', 'campaign', 'politics',
        'senate', 'congress', 'president', 'government'
    ],
    
    lgbtq: [
        'gay', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'lgbt', 
        'lgbtq', 'lgbtq+', 'pride', 'drag queen', 'homosexual', 'non-binary',
        'nonbinary', 'gender fluid'
    ],
    
    antichurch: [
        'god is dead', 'anti-christ', 'antichrist', 'satanic', 'satanism', 
        'cult', 'atheist', 'atheism', 'anti-church', 'antichurch', 'anti christian',
        'anti-christian', 'godless'
    ],
    
    drugs: [
        'cocaine', 'heroin', 'weed', 'marijuana', 'cannabis', 'drugs', 
        'getting high', 'stoned', 'crack', 'meth', 'opioid', 'acid', 'lsd'
    ]
};

/*
This Area Of Code Is: Main Validation Function
Explanation: Checks text against all church standard categories. Returns object
with passed status, failed category, and user-friendly message.
In Other Words: The checker that looks for church-inappropriate topics.
*/
function checkCommunityStandards(text) {
    // Convert to lowercase for case-insensitive matching
    const lowerText = text.toLowerCase();
    
    // Check each category
    for (const [category, words] of Object.entries(CHURCH_STANDARDS)) {
        for (const word of words) {
            if (lowerText.includes(word)) {
                return {
                    passed: false,
                    category: category,
                    message: getRejectionMessage(category)
                };
            }
        }
    }
    
    // All checks passed
    return {
        passed: true,
        message: 'Content passes community standards'
    };
}

/*
This Area Of Code Is: Rejection Message Generator
Explanation: Returns appropriate, kind rejection message based on which
category was violated. Keeps tone positive and Christ-honoring.
In Other Words: Friendly "no thank you" messages for different issues.
*/
function getRejectionMessage(category) {
    const messages = {
        political: 'Please keep content free of political references to maintain unity in our community.',
        lgbtq: 'Please keep content focused on encouragement that aligns with our church values.',
        antichurch: 'Please keep content respectful and Christ-honoring.',
        drugs: 'Please keep content free of drug references to maintain a family-friendly environment.'
    };
    
    return messages[category] || 'Content does not meet community standards.';
}

/*
This Area Of Code Is: Export for Module Use
Explanation: Makes the checkCommunityStandards function available to other
files (like app.js) when using ES modules.
In Other Words: Makes this function available to the rest of the app.
*/
export { checkCommunityStandards, CHURCH_STANDARDS };

/*
This Area Of Code Is: Global Assignment (Non-Module Fallback)
Explanation: Also assigns to window object for scripts that don't use modules.
Ensures compatibility with different script loading methods.
In Other Words: Backup way to access this function if modules aren't used.
*/
if (typeof window !== 'undefined') {
    window.ContentFilter = {
        checkCommunityStandards,
        CHURCH_STANDARDS
    };
}
