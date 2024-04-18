import { ComuneMapSelector, ComuneSelector } from "../models/Comune";

export const comuneSelectors: ComuneSelector = {
  name: "//html/body/span[3]/table[1]/tbody/tr/td/h1",
  region:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[2]/b/a",
  province:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[3]/td[2]/b/a",
  zone: "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[4]/td[2]/b/a",
  country_town:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[3]/td[2]/b/a",
  municipalities:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[4]/td[2]",
  initials:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[5]/td[2]",
  population_density:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[6]/td/b",
  zip_code:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[8]/td[2]/b/a",
  phone_prefix:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[9]/td[2]/b/a",
  code_istat:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[10]/td[2]",
  cadastral_code:
    "//html/body/span[3]/table[2]/tbody/tr[3]/td[1]/table/tbody/tr[11]/td[2]/b/a",
};

export const comuneMapSelectors: ComuneMapSelector = {
  coordinates:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td/table/tbody/tr/td/iframe",
};
