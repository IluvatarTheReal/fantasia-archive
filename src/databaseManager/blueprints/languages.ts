import { I_Blueprint } from "../../interfaces/I_Blueprint"
export const languagesBlueprint: I_Blueprint = {
  _id: "languages",
  order: 9,
  namePlural: "Languages",
  nameSingular: "Language",
  icon: "mdi-book-alphabet",
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
        connectedObjectType: "languages"
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
      sizing: 6
    },
    {
      id: "languageFamily",
      name: "Language family",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "languageFamily"
      }
    },
    {
      id: "speakerCount",
      name: "Estimated speaker count",
      type: "text",
      icon: "mdi-account-group",
      sizing: 2
    },
    {
      id: "predecessorLanguages",
      name: "Predecessor languages",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "predecessorLanguages"
      }
    },
    {
      id: "followingLanguages",
      name: "Evolved into languages",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "followingLanguages"
      }
    },
    {
      id: "description",
      name: "History & Conteporary situation",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "traditions",
      name: "Traditions & Customs connected to the language",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "breakSpeakers",
      name: "Spoken in groups, areas and by characters",
      type: "break",
      sizing: 12
    },
    {
      id: "pairedCharacter",
      name: "Prominent speakers",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedLanguage"
      }
    },
    {
      id: "usedByRaces",
      name: "Spoken by species/races",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "localLanguages"
      }
    },
    {
      id: "pairedLocations",
      name: "Spoken in locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedLanguages"
      }
    },
    {
      id: "usedInPoliticalGroups",
      name: "Spoken in political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "localLanguages"
      }
    },
    {
      id: "usedInReligiousGroups",
      name: "Spoken in religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "localLanguages"
      }
    },
    {
      id: "usedInMagicalGroups",
      name: "Spoken in magical groups/institutions",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "localLanguages"
      }
    },
    {
      id: "usedInTechGroups",
      name: "Spoken in science/technology groups/institutions",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "localLanguages"
      }
    }
  ]
}
