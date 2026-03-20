/*
================================================================================
This Area Of Code Is: Client-Side Content Filters (Universal Wellness Standards)
Explanation: Provides immediate client-side validation for community safety
standards appropriate for universal wellness contexts (hospitals, mental health
facilities, prisons, PTSD support, general audiences). Checks for political,
hate speech, and drug references while keeping code sanctified (no profanity
lists stored locally - that validation is handled by PurgoMalum API).
In Other Words: Quick safety check on the device to ensure content is
appropriate for vulnerable populations in wellness settings before sending to
the database. Bad words are checked separately by external service.
================================================================================
*/

/*
================================================================================
This Area Of Code Is: Community Safety Categories
Explanation: Object containing arrays of terms to check against for content
that could be inappropriate in wellness, hospital, or mental health contexts.
Organized by category for specific, supportive error messages. These are
general safety standards, not profanity (which is handled externally by API).
In Other Words: Lists of sensitive topics to filter for safe, inclusive
wellness environments serving diverse populations including trauma survivors.
================================================================================
*/
const COMMUNITY_STANDARDS = {
    political: [
        'trump', 'biden', 'obama', 'republican', 'democrat', 'maga', 'antifa', 
        'liberal', 'conservative', 'election', 'vote', 'campaign', 'politics',
        'senate', 'congress', 'president', 'government'
    ],
    
    hateSpeech: [
        'gay', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'lgbt', 
        'lgbtq', 'lgbtq+', 'pride', 'drag queen', 'homosexual', 'non-binary',
        'nonbinary', 'gender fluid', 'racist', 'nazi', 'white power', 'supremacy'
    ],
    
    harmfulContent: [
        'god is dead', 'anti-christ', 'antichrist', 'satanic', 'satanism', 
        'cult', 'atheist', 'atheism', 'anti-church', 'antichurch', 'anti christian',
        'anti-christian', 'godless', 'kill yourself', 'suicide', 'self-harm',
        'cutting', 'end it all'
    ],
    
    drugs: [
        'cocaine', 'heroin', 'weed', 'marijuana', 'cannabis', 'drugs', 
        'getting high', 'stoned', 'crack', 'meth', 'opioid', 'acid', 'lsd',
        'fentanyl', 'overdose', 'shooting up'
    ]
};

/*
================================================================================
This Area Of Code Is: Main Validation Function
Explanation: Checks text against all community safety categories. Returns object
with passed status, failed category, and user-friendly, non-judgmental message.
Runs synchronously for immediate UI feedback before Firebase submission.
In Other Words: The safety checker that looks for potentially triggering or
inappropriate content for wellness environments.
================================================================================
*/
function checkCommunityStandards(text) {
    // Convert to lowercase for case-insensitive matching
    const lowerText = text.toLowerCase();
    
    // Check each category
    for (const [category, words] of Object.entries(COMMUNITY_STANDARDS)) {
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
================================================================================
This Area Of Code Is: Rejection Message Generator
Explanation: Returns appropriate, kind, and supportive rejection messages based
on which category was flagged. Maintains positive, inclusive tone appropriate
for mental health and wellness contexts. Avoids judgmental or preachy language.
In Other Words: Friendly, supportive messages explaining why content needs
adjustment for this safe space.
================================================================================
*/
function getRejectionMessage(category) {
    const messages = {
        political: 'Please keep content free of political references to maintain a peaceful, unified space for healing and wellness.',
        hateSpeech: 'Please keep content inclusive and respectful of all people, creating a safe space for everyone seeking encouragement.',
        harmfulContent: 'Please keep content uplifting and supportive, avoiding themes that could be distressing to those in vulnerable moments.',
        drugs: 'Please keep content free of substance references to maintain a safe, recovery-friendly environment for all users.'
    };
    
    return messages[category] || 'Content does not meet community safety standards.';
}

/*
================================================================================
This Area Of Code Is: Export for Module Use
Explanation: Makes the checkCommunityStandards function and standards object
available to other files (like app.js) when using ES modules. Allows tree
shaking and scoped imports for modern JavaScript architectures.
In Other Words: Makes this safety check function available to the rest of the
app when using modern import/export syntax.
================================================================================
*/
export { checkCommunityStandards, COMMUNITY_STANDARDS };

/*
================================================================================
This Area Of Code Is: Global Assignment (Non-Module Fallback)
Explanation: Assigns to window object for compatibility with scripts that don't
use ES modules. Ensures backward compatibility with traditional script loading
and immediate function availability in global scope.
In Other Words: Backup way to access this function if modules aren't used -
makes it available the old-fashioned way through the browser window object.
================================================================================
*/
if (typeof window !== 'undefined') {
    window.ContentFilter = {
        checkCommunityStandards,
        COMMUNITY_STANDARDS
    };
}
