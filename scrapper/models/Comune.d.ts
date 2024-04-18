export type Comune = {
  name: string;
  region: string;
  province: string;
  zone: string;
  country_town: string;
  municipalities: number;
  initials: string;
  population_density: string;
  surface: string;
  zip_code: number;
  phone_prefix: number;
  code_istat: string;
  cadastral_code: string;
};

export type ComuneSelector = {
  [Property in keyof Comune]: string;
};

export type ComuneMap = {
  coordinates: [number, number];
};

export type ComuneMapSelector = {
  [Property in keyof ComuneMap]: string;
};
