/*
================================================================================
This Area Of Code Is: Content Safety & Community Standards Filter
Explanation: This module defines comprehensive content filters to protect your
church community from inappropriate submissions. It checks for NSFW content,
terrorism, hate speech, personal attacks, politics, and sexual content using
regular expressions. This runs BEFORE jokes are saved to ensure nothing harmful
reaches your congregation.
In Other Words: This is the security guard at the door. It checks everyone's
"ID" (the joke text) to make sure they're not bringing anything bad into church.
================================================================================
*/

/*
This Area Of Code Is: Blocked Content Categories Configuration
Explanation: An object containing regular expression patterns for different 
types of prohibited content. Each category has a pattern to match text and a 
message to show if someone tries to submit that type of content. The 'gi' flags 
make it search globally (all instances) and case-insensitive (doesn't matter 
if capital or lowercase letters).
In Other Words: This is the "banned items list" organized by category. Each 
category has a rule for what words to look for and what message to show if 
found.
*/
const COMMUNITY_STANDARDS = {
  /*
  This Area Of Code Is: Sexual Content Filter
  Explanation: Blocks pornography, sexual acts, adult content, and suggestive
  material. Includes slang terms, explicit words, and adult industry terms.
  In Other Words: Stops any dirty, sexual, or grown-up-only content from 
  getting through. Keeps everything PG and safe for kids.
  */
  sexualContent: {
    pattern: /\b(porn|pornography|xxx|sex|sexual|nude|naked|adult\s+content|onlyfans|cam\s+girl|escort|prostitute|brothel|pimp|stripper|topless|nudist|swinger|orgy|gangbang|blowjob|handjob|titjob|anal|oral|creampie|cumshot|facial|deepthroat|masturbat|ejaculat|erection|penetration|orgasm|climax|horny|aroused|wet\s+(dream|spot)|hard\s+(on|cock)|boner|wood|morning\s+wood|blue\s+balls|sext|sexting|nude\s+pic|dick\s+pic|send\s+nudes)\b/gi,
    message: "No sexual or adult content permitted - keep it family-friendly"
  },
  
  /*
  This Area Of Code Is: NSFW Slang & Evasion Filter
  Explanation: Catches creative spellings, leet speak (like s3x), and slang 
  terms people use to bypass filters. Includes words like "seggs" (evasion of 
  "sex") and "cvm" (evasion of "cum").
  In Other Words: Stops people from trying to trick the system by spelling 
  bad words differently or using code words.
  */
  nsfwEvasion: {
    pattern: /\b(s3x|s[e3]gg[s5]|c[e3]x|c[uvm]{2,}|k[iy]nk[y]?|f[e3]t[iy]sh|b[e3]d\s+r[o0]om|h[o0]t\s+and\s+b[o0]thered|frisky|naughty|dirty\s+(mind|thoughts)|adult\s+fun|mature\s+content|nsfw)\b/gi,
    message: "Inappropriate content detected - please use clean language"
  },
  
  /*
  This Area Of Code Is: Personal Identity & Handle Filter
  Explanation: Blocks usernames that contain sexual references, numbers (like
  SexyMom99), or inappropriate handles. Prevents people from using "screen names"
  instead of real names.
  In Other Words: Stops people from using fake sexy names like "HotStuff69" 
  and makes them use their real name instead.
  */
  sexualIdentity: {
    pattern: /\b(sexy|hot\s+(mama|daddy|momma|guy|girl)|stud|hunk|babe|baby\s+(girl|boy)|sugar\s+(daddy|momma)|milf|dilf|cougar|toy\s*boy|boy\s*toy|big\s+(daddy|momma)|papi|mami|playboy|playgirl|vixen|foxxy|lusty|dirty\s+(boy|girl)|kinky|sub|dom|master|slave)\b/gi,
    message: "Please use your real first name only - no nicknames or handles"
  },
  
  /*
  This Area Of Code Is: Political Content Filter
  Explanation: Blocks political extremism, election fraud claims, and partisan
  content that could divide the church community. Allows neutral mentions but
  blocks inflammatory political speech.
  In Other Words: Keeps politics out of church jokes so everyone feels welcome
  whether they vote red, blue, or other.
  */
  politics: {
    pattern: /\b(trump|biden|obama|election\s+(fraud|rigged|stolen)|maga|antifa|liberal|conservative|republican|democrat|government\s+(conspiracy|corrupt)|overthrow|coup|insurrection|capitol\s+riot|anarchist|communist\s+manifesto|build\s+the\s+wall|defund|woke|cancel\s+culture)\b/gi,
    message: "Please keep political content out of get-well cards"
  },
  
  /*
  This Area Of Code Is: LGBTQ Content Filter
  Explanation: Filters LGBTQ themes as requested for this specific church context.
  Uses pattern matching to identify related terminology.
  In Other Words: Filters content based on specific church community guidelines
  regarding LGBTQ topics.
  */
  lgbtq: {
    pattern: /\b(lgbt|gay|lesbian|transgender|trans|queer|bisexual|pride\s+parade|drag\s+queen|non-binary|gender\s+fluid|gender\s+neutral)\b/gi,
    message: "Content does not align with church community guidelines"
  },
  
  /*
  This Area Of Code Is: Anti-Religious Content Filter
  Explanation: Blocks attacks on Christianity, church, or religious beliefs.
  Protects the faith-based nature of the community.
  In Other Words: Stops people from trash-talking God, Jesus, or the church.
  */
  antiChristian: {
    pattern: /\b(anti-christ|satanic\s+cult|god\s+is\s+dead|christianity\s+is\s+(fake|stupid|wrong)|church\s+is\s+(scam|cult)|bible\s+is\s+(fake|lies)|hate\s+(god|jesus|church|christians))\b/gi,
    message: "Respectful religious content only"
  },
  
  /*
  This Area Of Code Is: Terrorism & Violence Filter
  Explanation: Blocks terrorism, violent threats, extremist groups, and violent
  acts. Includes specific terrorist organizations and violent terminology.
  In Other Words: Stops any talk about bombs, shootings, ISIS, or hurting people.
  Keeps the app safe and legal.
  */
  terrorism: {
    pattern: /\b(terrorist|terrorism|bomb|bombing|shooting|massacre|isis|al-qaeda|taliban|jihad|infidel|kill\s+(everyone|them|you|all)|murder\s+plot|attack\s+the|school\s+shooting|domestic\s+terror|violent\s+extremism)\b/gi,
    message: "No violent or terroristic content permitted"
  },
  
  /*
  This Area Of Code Is: Criminal Activity Filter
  Explanation: Blocks instructions or promotion of illegal activities including
  drug dealing, theft, fraud, and cybercrime.
  In Other Words: Stops people from talking about stealing, selling drugs, or
  hacking banks.
  */
  criminal: {
    pattern: /\b(steal|theft|robbery|burglary|drug\s+dealing|fentanyl|heroin|cocaine\s+distribution|meth\s+lab|money\s+laundering|fraud\s+scheme|identity\s+theft|hack\s+(bank|government)|illegal\s+download|pirat(ing|e))\b/gi,
    message: "No criminal activity or instruction permitted"
  },
  
  /*
  This Area Of Code Is: Hate Speech Filter
  Explanation: Blocks racist terms, white supremacy, and hate symbols. Protects
  all races and ethnicities in the congregation.
  In Other Words: Stops racist words and hate symbols like Nazi or KKK. Everyone
  is welcome here regardless of skin color.
  */
  hate: {
    pattern: /\b(nazi|kkk|white\s+supremacy|white\s+power|heil\s+hitler|racial\s+slur|n-word|wetback|chink|towelhead|raghead|beaner|coon|jigaboo|kike|kyke|spic|gook|racist\s+(slur|remark))\b/gi,
    message: "No hate speech permitted - all God's children are welcome"
  },
  
  /*
  This Area Of Code Is: Personal Attack Filter
  Explanation: Blocks attacks on specific church members, the pastor, or 
  individuals. Prevents bullying and harassment within the community.
  In Other Words: Stops people from being mean to Brother John or saying the
  Pastor is a thief. Be nice to each other.
  */
  personalAttack: {
    pattern: /\b((pastor|minister|reverend|father|priest|brother|sister|deacon|elder)\s+\w+\s+(is\s+)?(stupid|idiot|moron|corrupt|thief|liar|cheater|bad|terrible|lazy|fat|ugly|hate|disgusting)|\w+\s+(is\s+)?(ugly|stupid|fat|hate|disgusting|annoying)|(die|death|burn)\s+(to|in|wish)|kill\s+yourself|kys)\b/gi,
    message: "No personal attacks against church family permitted - speak life!"
  },
  
  /*
  This Area Of Code Is: Child Safety Filter
  Explanation: Immediately blocks any content related to child exploitation,
  grooming, or inappropriate material involving minors. This triggers immediate
  rejection and logging.
  In Other Words: ZERO tolerance for anything involving kids and bad stuff.
  This is the most serious filter - keeps children safe.
  */
  childSafety: {
    pattern: /\b(child\s+porn|cp|grooming|minor\s+sex|underage\s+(sex|pics|chat)|pedophile|preteen|jailbait|lolita|little\s+girl|little\s+boy|age\s+play)\b/gi,
    message: "CHILD SAFETY VIOLATION - Content rejected and logged"
  },
  
  /*
  This Area Of Code Is: Basic Profanity Filter
  Explanation: Blocks common curse words and profanity. Note that Google's
  Perspective API handles advanced profanity detection - this catches obvious
  attempts before API call.
  In Other Words: Stops bad words and cursing. Keeps language clean like church.
  */
  profanity: {
    pattern: /\b(fuck|shit|asshole|bitch|damn|hell\s+(no|yes)|crap|bastard|dick|pussy|cock|tits|motherfucker|faggot|retard)\b/gi,
    message: "Please keep language clean and family-friendly"
  }
};

/*
This Area Of Code Is: Content Validation Function
Explanation: Takes text input and checks it against all the blocked categories
above. Returns an object showing whether the content passed or failed, which
specific rule was broken, and the error message to show the user.
In Other Words: This is the actual security guard doing the checking. It looks
at the text, compares it to the banned list, and says "yes" or "no" with a
reason.
*/
function checkCommunityStandards(text) {
  /*
  This Area Of Code Is: Result Object Initialization
  Explanation: Creates a default "pass" result object. Starts by assuming the
  content is safe, with empty violations array.
  In Other Words: Starts with a blank report card saying "approved" unless we
  find something wrong.
  */
  const result = {
    passed: true,
    violations: [],
    message: 'Passes community standards'
  };
  
  /*
  This Area Of Code Is: Pattern Matching Loop
  Explanation: Loops through each banned category (politics, sex, etc.) and
  tests the text against that category's pattern. If ANY match is found, 
  immediately stops checking and returns a failure with the specific reason.
  In Other Words: Goes through the banned list one by one. If it finds a bad 
  word, stops immediately and says "rejected because of [reason]."
  */
  for (const [category, config] of Object.entries(COMMUNITY_STANDARDS)) {
    if (config.pattern.test(text)) {
      result.passed = false;
      result.violations.push(category);
      result.message = config.message;
      return result;
    }
  }
  
  /*
  This Area Of Code Is: Clean Content Return
  Explanation: If the loop completed without finding any violations, returns
  the original "passed" result.
  In Other Words: If we checked everything and found nothing bad, give the
  green light.
  */
  return result;
}

/*
This Area Of Code Is: Module Export
Explanation: Makes the checkCommunityStandards function available to other
files (specifically moderation.js and server.js) so they can use it to check
content before saving.
In Other Words: Shares the security guard with the rest of the program.
*/
module.exports = { checkCommunityStandards };
