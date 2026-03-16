/*
================================================================================
This Area Of Code Is: Firebase Cloud Functions (Server-Side Moderation)
Explanation: Serverless functions that run in Firebase when new jokes are
submitted. Provides secondary validation (in case client-side is bypassed)
and can integrate with Perspective API for AI-powered toxicity detection.
Runs on Google's servers, not the user's device, making it impossible to bypass.
In Other Words: The backup security guard living in Google's computers that
double-checks every joke for bad words even if someone tries to hack the app
on their phone.
================================================================================
*/
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

/*
This Area Of Code Is: Banned Words List (Server-Side)
Explanation: Comprehensive list of prohibited content checked server-side.
More extensive than client-side list. Includes profanity, sexual terms,
political terms, hate speech, and anti-church content.
In Other Words: The master list of bad words checked by Google's computers -
even bigger than the list checked by the phone.
*/
const BANNED_WORDS = [
'[f-word]', '[s-word]', '[d-word]', '[a-word]', '[b-word]', '[h-word]', '[c-word]', '[p-word]', '[ba-word]',
'sex', 'porn', 'naked', 'nude', 'boobs', '[male-anatomy-1]', '[male-anatomy-2]', '[female-anatomy-1]', '[female-anatomy-2]', '[male-anatomy-3]', '[female-anatomy-3]',
'gay', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'lgbt', 'pride', 'drag queen',
'trump', 'biden', 'obama', 'republican', 'democrat', 'maga', 'antifa', 'liberal', 'conservative',
'nazi', 'kkk', 'white supremacy', 'hitler', 'terrorist', 'bomb', 'kill', 'death', 'murder',
'god is dead', 'anti-christ', 'satanic', 'cult', 'atheist',
'cocaine', 'heroin', 'weed', 'marijuana', 'drugs'
];

/*
This Area Of Code Is: OnCreate Joke Trigger
Explanation: Automatically runs when a new joke is added to Firestore. Checks
content for banned words. If violation found, deletes the joke immediately and
logs the attempt. If clean, updates the joke with approved:true status.
In Other Words: The robot watching the database 24/7 that immediately deletes
any bad jokes that slip through, even if someone hacked the app to send them.
*/
exports.moderateJokeOnCreate = functions.firestore
.document('jokes/{jokeId}')
.onCreate(async (snap, context) => {
const joke = snap.data();
const jokeId = context.params.jokeId;
    
    const fullText = `${joke.setup || ''} ${joke.punchline || ''} ${joke.author || ''}`.toLowerCase();
    
    const hasViolation = BANNED_WORDS.some(word => fullText.includes(word));
    
    if (hasViolation) {
        console.warn(`Inappropriate content detected in joke ${jokeId}. Deleting.`);
        await snap.ref.delete();
        
        await db.collection('moderationLog').add({
            action: 'deleted',
            reason: 'banned_content',
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            content_preview: joke.setup?.substring(0, 50) + '...'
        });
        
        return null;
    }
    
    await snap.ref.update({
        approved: true,
        moderatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    return null;
});
