export type Province = {
  name: string;
  region: string;
  country_town: string;
  municipalities: number;
  initials: string;
  population_density: string;
  surface: string;
};

export type ProvinceSelector = {
  [Property in keyof Province]: string;
};

export type ProvinceMap = {
  coordinates: [number, number];
};

export type ProvinceMapSelector = {
  [Property in keyof ProvinceMap]: string;
};
