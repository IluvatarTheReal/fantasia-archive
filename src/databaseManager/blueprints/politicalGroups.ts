import { I_Blueprint } from "../../interfaces/I_Blueprint"
export const politicalGroupsBlueprint: I_Blueprint = {
  _id: "politicalGroups",
  order: 15,
  namePlural: "Political groups/Ideologies",
  nameSingular: "Political group/Ideology",
  icon: "mdi-bank-outline",
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
      icon: "mdi-bank-outline",
      sizing: 6
    },
    {
      id: "parentDoc",
      name: "Belongs under",
      type: "singleToNoneRelationship",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups"
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
      id: "headquarters",
      name: "Headquesters",
      type: "singleToNoneRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "locations"
      }
    },
    {
      id: "population",
      name: "Population",
      type: "text",
      icon: "mdi-account-group",
      sizing: 2
    },
    {
      id: "leaders",
      name: "Leading figures",
      type: "manyToNoneRelationship",
      icon: "mdi-crown",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "characters"
      }
    },
    {
      id: "formGovernment",
      name: "Form of government",
      type: "multiSelect",
      icon: "fas fa-person-booth",
      sizing: 6,
      predefinedSelectValues: [
        "Anarchism",
        "Anarcho-capitalism",
        "Anarchy",
        "Aristocracy",
        "Autocracy",
        "Communism",
        "Corporatocracy",
        "Democracy",
        "Despotism",
        "Dictatorship",
        "Fascism",
        "Feudalism",
        "Geniocracy",
        "Matriarchy",
        "Monarchy",
        "Oligarchy",
        "Patriarchy",
        "Republic",
        "Technocracy",
        "Theocracy",
        "Theodemocracy",
        "Tyranny"
      ]
    },
    {
      id: "localCurrencies",
      name: "Used currencies",
      type: "manyToManyRelationship",
      icon: "fas fa-coins",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "currencies",
        connectedField: "usedInPoliticalGroups"
      }
    },
    {
      id: "localLanguages",
      name: "Used languages",
      type: "manyToManyRelationship",
      icon: "mdi-book-alphabet",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "languages",
        connectedField: "usedInPoliticalGroups"
      }
    },
    {
      id: "connectedRaces",
      name: "Common species/races",
      type: "manyToManyRelationship",
      icon: "fas fa-dragon",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "races",
        connectedField: "commonInPoliticalGroups"
      }
    },
    {
      id: "description",
      name: "Description & History",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "traditions",
      name: "Traditions & Customs",
      type: "wysiwyg",
      sizing: 12
    },
    {
      id: "breakRelasionships",
      name: "Diplomatic relationships & Influences",
      type: "break",
      sizing: 12
    },
    {
      id: "governLocations",
      name: "Ruled locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "governPolitical"
      }
    },
    {
      id: "connectedLocations",
      name: "Connected locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "connectedPolitical"
      }
    },
    {
      id: "pairedBelongingCharacter",
      name: "Prominent members",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedBelongingPolGroup"
      }
    },
    {
      id: "pairedAllyCharacter",
      name: "Prominent allies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedAllyPolGroup"
      }
    },
    {
      id: "pairedEnemyCharacter",
      name: "Prominent enemies",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedEnemyPolGroup"
      }
    },
    {
      id: "pairedConnectedPolGroups",
      name: "Connected political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyPolGroups",
      name: "Allied political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyPolGroups",
      name: "Enemy political groups/ideologies",
      type: "manyToManyRelationship",
      icon: "mdi-bank-outline",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "politicalGroups",
        connectedField: "pairedEnemyPolGroups"
      }
    },
    {
      id: "pairedConnectedReligiousGroups",
      name: "Connected religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyReligiousGroups",
      name: "Allied religious groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyReligiousGroups",
      name: "Enemy religious groups/teaching",
      type: "manyToManyRelationship",
      icon: "fas fa-ankh",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "religions",
        connectedField: "pairedEnemyPolGroups"
      }
    },

    {
      id: "pairedConnectedMagicalGroups",
      name: "Connected magical groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyMagicalGroups",
      name: "Allied magical groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyMagicalGroups",
      name: "Enemy magical groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedEnemyPolGroups"
      }
    },

    {
      id: "pairedConnectedTechGroups",
      name: "Connected scientifical/technological groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedAllyTechGroups",
      name: "Allied scientifical/technological groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedAllyPolGroups"
      }
    },
    {
      id: "pairedEnemyTechGroups",
      name: "Enemy scientifical/technological groups/teachings",
      type: "manyToManyRelationship",
      icon: "fas fa-wrench",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "tech",
        connectedField: "pairedEnemyPolGroups"
      }
    },
    {
      id: "breakOther",
      name: "Other details",
      type: "break",
      sizing: 12
    },
    {
      id: "connectedEvents",
      name: "Connected events",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "connectedPolitical"
      }
    },
    {
      id: "pairedConnectedMyths",
      name: "Connected to myths and legends",
      type: "manyToManyRelationship",
      icon: "fas fa-journal-whills",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "myths",
        connectedField: "pairedConnectedPolGroups"
      }
    },
    {
      id: "pairedConnectedItems",
      name: "Connected legendary items/artifacts",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 4,
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedConnectedPolGroups"
      }
    }
  ]
}
