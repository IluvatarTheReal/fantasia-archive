import { I_Blueprint } from "./../../interfaces/I_Blueprint"
export const charactersBlueprint: I_Blueprint = {
  _id: "characters",
  order: 18,
  namePlural: "Characters",
  nameSingular: "Character",
  icon: "mdi-account",
  extraFields: [
    {
      id: "breakBasic",
      name: "Basic information",
      type: "break",
      sizing: 12
    },
    {
      id: "name",
      name: "Name",
      type: "text",
      icon: "mdi-account",
      sizing: 6
    },
    {
      id: "parentDoc",
      name: "Belongs under",
      type: "singleToNoneRelationship",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters"
      }
    },
    {
      id: "order",
      name: "Order number",
      type: "number",
      icon: "mdi-file-tree",
      sizing: 2
    },
    {
      id: "otherNames",
      name: "Other names",
      type: "list",
      icon: "mdi-book-plus",
      sizing: 4
    },
    {
      id: "sex",
      name: "Sex",
      type: "singleSelect",
      icon: "mdi-gender-male-female",
      sizing: 2,
      predefinedSelectValues: ["Male", "Female", "Other", "None"]
    },
    {
      id: "age",
      name: "Age",
      type: "text",
      icon: "mdi-timer-sand",
      sizing: 2
    },
    {
      id: "height",
      name: "Height",
      type: "text",
      icon: "mdi-human-male-height-variant",
      sizing: 2
    },
    {
      id: "weight",
      name: "Weight",
      type: "text",
      icon: "mdi-weight",
      sizing: 2
    },
    {
      id: "strength",
      name: "Strength",
      type: "text",
      icon: "fas fa-dumbbell",
      sizing: 2
    },
    {
      id: "constitution",
      name: "Constitution",
      type: "text",
      icon: "mdi-shield",
      sizing: 2
    },
    {
      id: "dexterity",
      name: "Dexterity",
      type: "text",
      icon: "mdi-run-fast",
      sizing: 2
    },
    {
      id: "intellect",
      name: "Intellect",
      type: "text",
      icon: "mdi-brain",
      sizing: 2
    },
    {
      id: "wisdom",
      name: "Wisdom/Willpower",
      type: "text",
      icon: "fas fa-yin-yang",
      sizing: 2
    },
    {
      id: "charisma",
      name: "Charisma",
      type: "text",
      icon: "mdi-drama-masks",
      sizing: 2
    },
    {
      id: "pairedOriginLocation",
      name: "Place of origin",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 3,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedOriginCharacters"
      }
    },
    {
      id: "birthDate",
      name: "Date of birth",
      type: "text",
      icon: "mdi-cake-variant",
      sizing: 3
    },
    {
      id: "pairedDemiseLocation",
      name: "Place of demise",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 3,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedDemiseCharacters"
      }
    },
    {
      id: "deathDate",
      name: "Date of death",
      type: "text",
      icon: "mdi-skull-crossbones",
      sizing: 3
    },
    {
      id: "pairedCurrentLocation",
      name: "Place of residence",
      type: "singleToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedCurrentCharacters"
      }
    },
    {
      id: "pairedRace",
      name: "Race/Species",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "powerLevel",
      name: "Power Level",
      type: "singleSelect",
      icon: "fas fa-fist-raised",
      sizing: 4,
      predefinedSelectValues: [
        /*
        "0 - Civilian",
        "1 - Trainee / Athletic civilian",
        "2 - Trained soldier / Weak magic user",
        "3 - Veteran soldier / Average magic user",
        "4 - Elite soldier / Weak vampire",
        "5 - Top-tier soldier / Strong magic user / Weak nephilim / Average vampire",
        "6 - Exceptional magic user / Average nephilim / Powerful vampire",
        "7 - Genius magic user / Powerful nephilim / Prodigy vampire",
        "8 - Prodigy magic user / Genius nephilim",
        "9 - Weak god / Weak dragon / Prodigy nephilim",
        "10 - Average god / Adult dragon",
        "11 - Powerful god / Poweful and old dragon / Weak ascendant",
        "12 - Prodigy god / Ancient dragon / Medium ascendant / Weak & medium outerplanar entities",
        "13 - World-shaping god / Powerful ascendant / Strong outerplanar entity",
        "14 - New transcendant / Genius ascendant / Powerful outerplanar entity",
        "15 - Established transcendant / Prodigy ascendant / Ancient outerplanar entity",
        "16 & Above - Off the scale / Impossible to even categorize" */
      ]
    },
    {
      id: "description",
      name: "Description & History",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "breakSkills",
      name: "Skill and other features",
      type: "break",
      sizing: 12
    },
    {
      id: "personalityTraits",
      name: "Personality traits",
      type: "multiSelect",
      icon: "mdi-head-cog",
      sizing: 6,
      predefinedSelectValues: [
        "Abrasive",
        "Abrupt",
        "Agonizing",
        "Aimless",
        "Airy",
        "Aloof",
        "Amoral",
        "Angry",
        "Anxious",
        "Apathetic",
        "Arbitrary",
        "Argumentative",
        "Arrogantt",
        "Artificial",
        "Asocial",
        "Assertive",
        "Astigmatic",
        "Barbaric",
        "Bewildered",
        "Bizarre",
        "Bland",
        "Blunt",
        "Biosterous",
        "Brittle",
        "Brutal",
        "Calculating",
        "Callous",
        "Cantakerous",
        "Careless",
        "Cautious",
        "Charmless",
        "Childish",
        "Clumsy",
        "Coarse",
        "Cold",
        "Colorless",
        "Complacent",
        "Complaintive",
        "Compulsive",
        "Conceited",
        "Condemnatory",
        "Conformist",
        "Confused",
        "Contemptible",
        "Conventional",
        "Cowardly",
        "Crafty",
        "Crass",
        "Crazy",
        "Criminal",
        "Critical",
        "Crude",
        "Cruel",
        "Cynical",
        "Decadent",
        "Deceitful",
        "Delicate",
        "Demanding",
        "Dependent",
        "Desperate",
        "Destructive",
        "Devious",
        "Difficult",
        "Dirty",
        "Disconcerting",
        "Discontented",
        "Discouraging",
        "Discourteous",
        "Dishonest",
        "Disloyal",
        "Disobedient",
        "Disorderly",
        "Disorganized",
        "Disputatious",
        "Disrespectful",
        "Disruptive",
        "Dissolute",
        "Dissonant",
        "Distractible",
        "Disturbing",
        "Dogmatic",
        "Domineering",
        "Dull",
        "Easily Discouraged",
        "Egocentric",
        "Enervated",
        "Envious",
        "Erratic",
        "Escapist",
        "Excitable",
        "Expedient",
        "Extravagant",
        "Extreme",
        "Faithless",
        "False",
        "Fanatical",
        "Fanciful",
        "Fatalistic",
        "Fawning",
        "Fearful",
        "Fickle",
        "Fiery",
        "Fixed",
        "Flamboyant",
        "Foolish",
        "Forgetful",
        "Fraudulent",
        "Frightening",
        "Frivolous",
        "Gloomy",
        "Graceless",
        "Grand",
        "Greedy",
        "Grim",
        "Gullible",
        "Hateful",
        "Haughty",
        "Hedonistic",
        "Hesitant",
        "Hidebound",
        "High-handed",
        "Hostile",
        "Ignorant",
        "Imitative",
        "Impatient",
        "Impractical",
        "Imprudent",
        "Impulsive",
        "Inconsiderate",
        "Incurious",
        "Indecisive",
        "Indulgent",
        "Inert",
        "Inhibited",
        "Insecure",
        "Insensitive",
        "Insincere",
        "Insulting",
        "Intolerant",
        "Irascible",
        "Irrational",
        "Irresponsible",
        "Irritable",
        "Lazy",
        "Libidinous",
        "Loquacious",
        "Malicious",
        "Mannered",
        "Mannerless",
        "Mawkish",
        "Mealymouthed",
        "Mechanical",
        "Meddlesome",
        "Melancholic",
        "Meretricious",
        "Messy",
        "Miserable",
        "Miserly",
        "Misguided",
        "Mistaken",
        "Money-minded",
        "Monstrous",
        "Moody",
        "Morbid",
        "Muddle-headed",
        "Naive",
        "Narcissistic",
        "Narrow",
        "Narrow-minded",
        "Natty",
        "Negativistic",
        "Neglectful",
        "Neurotic",
        "Nihilistic",
        "Obnoxious",
        "Obsessive",
        "Obvious",
        "Odd",
        "Offhand",
        "One-dimensional",
        "One-sided",
        "Opinionated",
        "Opportunistic",
        "Oppressed",
        "Outrageous",
        "Overimaginative",
        "Paranoid",
        "Passive",
        "Pedantic",
        "Perverse",
        "Petty",
        "Pharissical",
        "Phlegmatic",
        "Plodding",
        "Pompous",
        "Possessive",
        "Power-hungry",
        "Predatory",
        "Prejudiced",
        "Presumptuous",
        "Pretentious",
        "Prim",
        "Procrastinating",
        "Profligate",
        "Provocative",
        "Pugnacious",
        "Puritanical",
        "Quirky",
        "Reactionary",
        "Reactive",
        "Regimental",
        "Regretful",
        "Repentant",
        "Repressed",
        "Resentful",
        "Ridiculous",
        "Rigid",
        "Ritualistic",
        "Rowdy",
        "Ruined",
        "Sadistic",
        "Sanctimonious",
        "Scheming",
        "Scornful",
        "Secretive",
        "Sedentary",
        "Selfish",
        "Self-indulgent",
        "Shallow",
        "Shortsighted",
        "Shy",
        "Silly",
        "Single-minded",
        "Sloppy",
        "Slow",
        "Sly",
        "Small-thinking",
        "Softheaded",
        "Sordid",
        "Steely",
        "Stiff",
        "Strong-willed",
        "Stupid",
        "Submissive",
        "Superficial",
        "Superstitious",
        "Suspicious",
        "Tactless",
        "Tasteless",
        "Tense",
        "Thievish",
        "Thoughtless",
        "Timid",
        "Transparent",
        "Treacherous",
        "Trendy",
        "Troublesome",
        "Unappreciative",
        "Uncaring",
        "Uncharitable",
        "Unconvincing",
        "Uncooperative",
        "Uncreative",
        "Uncritical",
        "Unctuous",
        "Undisciplined",
        "Unfriendly",
        "Ungrateful",
        "Unhealthy",
        "Unimaginative",
        "Unimpressive",
        "Unlovable",
        "Unpolished",
        "Unprincipled",
        "Unrealistic",
        "Unreflective",
        "Unreliable",
        "Unrestrained",
        "Unself-critical",
        "Unstable",
        "Vacuous",
        "Vague",
        "Venal",
        "Venomous",
        "Vindictive",
        "Vulnerable",
        "Weak",
        "Weak-willed",
        "Well-meaning",
        "Willful",
        "Wishful",
        "Zany",
        "Accessible",
        "Active",
        "Adaptable",
        "Admirable",
        "Adventurous",
        "Agreeable",
        "Alert",
        "Allocentric",
        "Amiable",
        "Anticipative",
        "Appreciative",
        "Articulate",
        "Aspiring",
        "Athletic",
        "Attractive",
        "Balanced",
        "Benevolent",
        "Brilliant",
        "Calm",
        "Capable",
        "Captivating",
        "Caring",
        "Challenging",
        "Charismatic",
        "Charming",
        "Cheerful",
        "Clean",
        "Clear-headed",
        "Clever",
        "Colorful",
        "Companionly",
        "Compassionate",
        "Conciliatory",
        "Confident",
        "Conscientious",
        "Considerate",
        "Constant",
        "Contemplative",
        "Cooperative",
        "Courageous",
        "Courteous",
        "Creative",
        "Cultured",
        "Curious",
        "Daring",
        "Debonair",
        "Decent",
        "Decisive",
        "Dedicated",
        "Deep",
        "Dignified",
        "Directed",
        "Disciplined",
        "Discreet",
        "Dramatic",
        "Dutiful",
        "Dynamic",
        "Earnest",
        "Ebullient",
        "Educated",
        "Efficient",
        "Elegant",
        "Eloquent",
        "Empathetic",
        "Energetic",
        "Enthusiastic",
        "Esthetic",
        "Exciting",
        "Extraordinary",
        "Fair",
        "Faithful",
        "Farsighted",
        "Felicific",
        "Firm",
        "Flexible",
        "Focused",
        "Forecful",
        "Forgiving",
        "Forthright",
        "Freethinking",
        "Friendly",
        "Fun-loving",
        "Gallant",
        "Generous",
        "Gentle",
        "Genuine",
        "Good-natured",
        "Gracious",
        "Hardworking",
        "Healthy",
        "Hearty",
        "Helpful",
        "Herioc",
        "High-minded",
        "Honest",
        "Honorable",
        "Humble",
        "Humorous",
        "Idealistic",
        "Imaginative",
        "Impressive",
        "Incisive",
        "Incorruptible",
        "Independent",
        "Individualistic",
        "Innovative",
        "Inoffensive",
        "Insightful",
        "Insouciant",
        "Intelligent",
        "Intuitive",
        "Invulnerable",
        "Kind",
        "Knowledge",
        "Leaderly",
        "Leisurely",
        "Liberal",
        "Logical",
        "Lovable",
        "Loyal",
        "Lyrical",
        "Magnanimous",
        "Many-sided",
        "Masculine (Manly)",
        "Mature",
        "Methodical",
        "Maticulous",
        "Moderate",
        "Modest",
        "Multi-leveled",
        "Neat",
        "Nonauthoritarian",
        "Objective",
        "Observant",
        "Open",
        "Optimistic",
        "Orderly",
        "Organized",
        "Original",
        "Painstaking",
        "Passionate",
        "Patient",
        "Patriotic",
        "Peaceful",
        "Perceptive",
        "Perfectionist",
        "Personable",
        "Persuasive",
        "Planful",
        "Playful",
        "Polished",
        "Popular",
        "Practical",
        "Precise",
        "Principled",
        "Profound",
        "Protean",
        "Protective",
        "Providential",
        "Prudent",
        "Punctual",
        "Pruposeful",
        "Rational",
        "Realistic",
        "Reflective",
        "Relaxed",
        "Reliable",
        "Resourceful",
        "Respectful",
        "Responsible",
        "Responsive",
        "Reverential",
        "Romantic",
        "Rustic",
        "Sage",
        "Sane",
        "Scholarly",
        "Scrupulous",
        "Secure",
        "Selfless",
        "Self-critical",
        "Self-defacing",
        "Self-denying",
        "Self-reliant",
        "Self-sufficent",
        "Sensitive",
        "Sentimental",
        "Seraphic",
        "Serious",
        "Sexy",
        "Sharing",
        "Shrewd",
        "Simple",
        "Skillful",
        "Sober",
        "Sociable",
        "Solid",
        "Sophisticated",
        "Spontaneous",
        "Sporting",
        "Stable",
        "Steadfast",
        "Steady",
        "Stoic",
        "Strong",
        "Studious",
        "Suave",
        "Subtle",
        "Sweet",
        "Sympathetic",
        "Systematic",
        "Tasteful",
        "Teacherly",
        "Thorough",
        "Tidy",
        "Tolerant",
        "Tractable",
        "Trusting",
        "Uncomplaining",
        "Understanding",
        "Undogmatic",
        "Unfoolable",
        "Upright",
        "Urbane",
        "Venturesome",
        "Vivacious",
        "Warm",
        "Well-bred",
        "Well-read",
        "Well-rounded",
        "Winning",
        "Wise",
        "Witty",
        "Youthful",
        "Absentminded",
        "Aggressive",
        "Ambitious",
        "Amusing",
        "Artful",
        "Ascetic",
        "Authoritarian",
        "Big-thinking",
        "Boyish",
        "Breezy",
        "Businesslike",
        "Busy",
        "Casual",
        "Crebral",
        "Chummy",
        "Circumspect",
        "Competitive",
        "Complex",
        "Confidential",
        "Conservative",
        "Contradictory",
        "Crisp",
        "Cute",
        "Deceptive",
        "Determined",
        "Dominating",
        "Dreamy",
        "Driving",
        "Droll",
        "Dry",
        "Earthy",
        "Effeminate",
        "Emotional",
        "Enigmatic",
        "Experimental",
        "Familial",
        "Folksy",
        "Formal",
        "Freewheeling",
        "Frugal",
        "Glamorous",
        "Guileless",
        "High-spirited",
        "Huried",
        "Hypnotic",
        "Iconoclastic",
        "Idiosyncratic",
        "Impassive",
        "Impersonal",
        "Impressionable",
        "Intense",
        "Invisible",
        "Irreligious",
        "Irreverent",
        "Maternal",
        "Mellow",
        "Modern",
        "Moralistic",
        "Mystical",
        "Neutral",
        "Noncommittal",
        "Noncompetitive",
        "Obedient",
        "Old-fashined",
        "Ordinary",
        "Outspoken",
        "Paternalistic",
        "Physical",
        "Placid",
        "Political",
        "Predictable",
        "Preoccupied",
        "Private",
        "Progressive",
        "Proud",
        "Pure",
        "Questioning",
        "Quiet",
        "Religious",
        "Reserved",
        "Restrained",
        "Retiring",
        "Sarcastic",
        "Self-conscious",
        "Sensual",
        "Skeptical",
        "Smooth",
        "Soft",
        "Solemn",
        "Solitary",
        "Stern",
        "Stoiid",
        "Strict",
        "Stubborn",
        "Stylish",
        "Subjective",
        "Surprising",
        "Soft",
        "Tough",
        "Unaggressive",
        "Unambitious",
        "Unceremonious",
        "Unchanging",
        "Undemanding",
        "Unfathomable",
        "Unhurried",
        "Uninhibited",
        "Unpatriotic",
        "Unpredicatable",
        "Unreligious",
        "Unsentimental",
        "Whimsical"
      ]
    },
    {
      id: "traits",
      name: "Unusual features/traits",
      type: "list",
      icon: "mdi-guy-fawkes-mask",
      sizing: 6
    },
    {
      id: "skills",
      name: "Skills",
      type: "list",
      icon: "mdi-sword-cross",
      sizing: 6,
      predefinedListExtras: {
        affix: "Level",
        extraSelectValueList: [
          "Trainee",
          "Appreantice",
          "Capable",
          "Advanced",
          "Expert",
          "Master",
          "Grand-master",
          "Genius",
          "Prodigy",
          "Off-the-scale"
        ]
      }
    },
    {
      id: "pairedLanguage",
      name: "Languages",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedMagic",
      name: "Known magic/spells",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedTech",
      name: "Known technnologies/sciences",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "breakRelationships",
      name: "Relationships",
      type: "break",
      sizing: 12
    },
    {
      id: "parentsOfCharacter",
      name: "Parents of character",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "childOfCharacter"
      }
    },
    {
      id: "childOfCharacter",
      name: "Children of character",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "parentsOfCharacter"
      }
    },
    {
      id: "relativesOfCharacter",
      name: "Other relatives of character",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "relativesOfCharacter"
      }
    },
    {
      id: "allyResCharacter",
      name: "Friends/Allies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "allyResCharacter"
      }
    },
    {
      id: "enemydResCharacter",
      name: "Enemies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "enemydResCharacter"
      }
    },
    {
      id: "complicatedResCharacter",
      name: "Complicated relationship with",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "complicatedResCharacter"
      }
    },
    {
      id: "breakPolitics",
      name: "Ideologies, religions & politics",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedBelongingPolGroup",
      name: "Member of political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyPolGroup",
      name: "Ally of political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyPolGroup",
      name: "Enemy of political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedEnemyCharacter"
      }
    },
    {
      id: "pairedBelongingRelGroup",
      name: "Member of religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyRelGroup",
      name: "Ally of religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyRelGroup",
      name: "Enemy of religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedEnemyCharacter"
      }
    },
    {
      id: "pairedBelongingMagicGroup",
      name: "Member of magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyMagicGroup",
      name: "Ally of magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyMagicGroup",
      name: "Enemy of magical groups",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedEnemyCharacter"
      }
    },
    {
      id: "pairedBelongingTechGroup",
      name: "Member of scientifical/technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedBelongingCharacter"
      }
    },
    {
      id: "pairedAllyTechGroup",
      name: "Ally of scientifical/technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedAllyCharacter"
      }
    },
    {
      id: "pairedEnemyTechGroup",
      name: "Enemy of scientifical/technological groups",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedEnemyCharacter"
      }
    },
    {
      id: "breakOther",
      name: "Other details",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedEvent",
      name: "Took part in events",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "pairedCharacter"
      }
    },
    {
      id: "pairedConnectedPlaces",
      name: "Connected to locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "pairedConnectedMyths",
      name: "Connected to myths and legends",
      type: "manyToManyRelationship",
      icon: "fas fa-journal-whills",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "myths",
        connectedField: "pairedConnectedCharacter"
      }
    },
    {
      id: "pairedConnectedItems",
      name: "Connected legendary items/artifacts",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedCharacter"
      }
    }
  ]
}
