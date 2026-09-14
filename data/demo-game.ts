import type { GameDefinition } from "@/domain/models";

export const demoGame: GameDefinition = {
  id: "echoes-of-orion",
  title: "Echoes of Orion",

  decisions: [
    {
      id: "reactor-fate",
      title: "What should happen to the reactor?",
      order: 1,
      choices: [
        {
          id: "stabilize-reactor",
          label: "Stabilize the reactor",
          grants: ["reactor-stabilized"],
        },
        {
          id: "overload-reactor",
          label: "Overload the reactor",
          grants: ["reactor-overloaded"],
        },
      ],
    },
    {
      id: "crew-fate",
      title: "What should happen to the crew?",
      order: 2,
      choices: [
        {
          id: "rescue-crew",
          label: "Rescue the crew",
          grants: ["crew-rescued"],
        },
        {
          id: "abandon-crew",
          label: "Abandon the crew",
          grants: ["crew-abandoned"],
        },
      ],
    },
  ],

  trophies: [
    {
      id: "humanitarian",
      name: "The Humanitarian",
      description: "Stabilize the reactor and rescue the crew.",
      unlockWhen: {
        allOf: ["reactor-stabilized", "crew-rescued"],
      },
    },
    {
      id: "total-collapse",
      name: "Total Collapse",
      description: "Overload the reactor and abandon the crew.",
      unlockWhen: {
        allOf: ["reactor-overloaded", "crew-abandoned"],
      },
    },
    {
      id: "reactor-specialist",
      name: "Reactor Specialist",
      description: "Successfully stabilize the reactor.",
      unlockWhen: {
        allOf: ["reactor-stabilized"],
      },
    },
    {
      id: "no-turning-back",
      name: "No Turning Back",
      description: "Overload the reactor.",
      unlockWhen: {
        allOf: ["reactor-overloaded"],
      },
    },
  ],
};