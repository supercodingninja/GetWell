/*
================================================================================
This Area Of Code Is: Community Standards Filter
Explanation: Comprehensive content filter protecting against inappropriate 
submissions including hate speech, terrorism, criminal activity, sexual content,
and attacks on church leadership. Uses regex patterns and keyword detection.
In Other Words: The digital security guard that checks every submission against
church safety standards before allowing it through.
================================================================================
*/

const COMMUNITY_STANDARDS = {
  // Political content filter (anti-government, extremist politics)
  politics: {
    pattern: /\b(trump|biden|obama|republican|democrat|election\s+(fraud|rigged)|maga|antifa|liberal|conservative|government\s+(conspiracy|corrupt)|overthrow|coup|insurrection|capitol\s+riot|anarchist|communist\s+manifesto)\b/gi,
    message: "Please keep political content out of get-well cards"
  },
  
  // LGBTQ content filter (as requested for church context)
  lgbtq: {
    pattern: /\b(lgbt|gay|lesbian|transgender|trans|queer|bisexual|pride\s+parade|drag\s+queen|non-binary|gender\s+fluid)\b/gi,
    message: "Content does not align with church community guidelines"
  },
  
  // Sexual content filter (pornography, adult content)
  sexualContent: {
    pattern: /\b(porn|pornography|xxx|sex|sexual|nude|naked|adult\s+content|onlyfans|cam\s+girl|escort|prostitute|brothel)\b/gi,
    message: "No sexual or adult content permitted"
  },
  
  // Anti-religious content filter
  antiChristian: {
    pattern: /\b(anti-christ|satanic\s+cult|god\s+is\s+dead|christianity\s+is\s+(fake|stupid|wrong)|church\s+is\s+(scam|cult)|hate\s+church)\b/gi,
    message: "Respectful religious content only"
  },
  
  // Terrorism and violence filter
  terrorism: {
    pattern: /\b(terrorist|terrorism|bomb|bombing|shooting|massacre|isis|al-qaeda|taliban|jihad|infidel|kill\s+(everyone|them|you)|murder\s+plot|attack\s+the)\b/gi,
    message: "No violent or terroristic content permitted"
  },
  
  // Criminal activity filter
  criminal: {
    pattern: /\b(steal|theft|robbery|burglary|drug\s+dealing|fentanyl|heroin|cocaine\s+distribution|money\s+laundering|fraud\s+scheme|identity\s+theft|hack\s+(bank|government)|illegal\s+download)\b/gi,
    message: "No criminal activity or instruction permitted"
  },
  
  // Hate speech filter (racism, supremacy)
  hate: {
    pattern: /\b(nazi|kkk|white\s+supremacy|white\s+power|heil\s+hitler|racial\s+slur|n-word|wetback|chink|towelhead|racist\s+(slur|remark))\b/gi,
    message: "No hate speech permitted"
  },
  
  // Personal attacks filter (against pastor/members)
  personalAttack: {
    pattern: /\b((pastor|minister|reverend|father|priest)\s+(is\s+)?(stupid|idiot|moron|corrupt|thief|liar|cheater|bad|terrible)|(brother|sister)\s+\w+\s+(is\s+)?(ugly|stupid|hate|disgusting)|(hate\s+(you|him|her|them|everyone)|(die|death)\s+(to|wish)|kill\s+yourself)\b/gi,
    message: "No personal attacks against church family permitted"
  },
  
  // Child safety filter (child pornography, grooming)
  childSafety: {
    pattern: /\b(child\s+porn|cp|grooming|minor\s+sex|underage\s+(sex|pics)|pedophile|preteen|jailbait|lolita)\b/gi,
    message: "Child safety violation detected - content rejected immediately"
  },
  
  // Profanity filter (basic - Perspective API catches the rest)
  profanity: {
    pattern: /\b(fuck|shit|asshole|bitch|damn|hell\s+(no|yes)|crap|bastard|dick|pussy|cock|tits|motherfucker)\b/gi,
    message: "Please keep language clean and family-friendly"
  }
};

function checkCommunityStandards(text) {
  const result = {
    passed: true,
    violations: [],
    message: 'Passes community standards'
  };
  
  for (const [category, config] of Object.entries(COMMUNITY_STANDARDS)) {
    if (config.pattern.test(text)) {
      result.passed = false;
      result.violations.push(category);
      result.message = config.message;
      return result;
    }
  }
  
  return result;
}

module.exports = { checkCommunityStandards };
