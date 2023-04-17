// src/types.ts
export interface Pokemon {
  name: string;
  url: string;
  sprites: {
    front_default?: string;
  };
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
