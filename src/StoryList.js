// eslint-disable-next-line
export default {
    stories: {
      vacations: {
        id: "vacations",
        title: "Vacations",
        prompts: { adj1: "", adj2: "", noun: ""  },
        generate: ({ adj1, adj2, noun }) =>
          `A vacation is when you take a trip to some ${adj1} place with you ${adj2} family or up on a/an ${noun}`,
      },
      valentines: {
        id: "valentines",
        title: "Valentines",
        prompts: { person1: "", pluralNoun1: "", pluralNoun2: "", pluralNoun3: "", person2: "" },
        generate: ({ person1, person2, pluralNoun1, pluralNoun2, pluralNoun3 }) =>
          `Dear ${person1}, ${pluralNoun1} are red, ${pluralNoun2} are blue, \n You love me and I love ${pluralNoun3}! \n From ${person2}.`,
      },
      monalisa: {
        id: "monalisa",
        title: "The Mona Lisa",
        prompts: { noun1: "", adj: "", noun2: "" },
        generate: ({ noun1, adj, noun2 }) =>
          `After hiding the painting in his ${noun1} for two years, he grew ${adj} and tried to sell it to a/an ${noun2} in Florence, but he was caught.`,
      },
    },
  };