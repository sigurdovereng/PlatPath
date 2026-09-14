export type GameFlag = string;

export interface Rule {
  allOf: GameFlag[];
  noneOf?: GameFlag[];
}

export interface Choice {
  id: string;
  label: string;
  grants: GameFlag[];
}

export interface Decision {
  id: string;
  title: string;
  order: number;
  choices: Choice[];
}

export interface Trophy {
  id: string;
  name: string;
  description: string;
  unlockWhen: Rule;
}

export interface GameDefinition {
  id: string;
  title: string;
  decisions: Decision[];
  trophies: Trophy[];
}