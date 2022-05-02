export interface PerYear {
  year: number;
  value: number;
}

export interface PopulationComposition {
  boundaryYear: number;
  data: {
    label: string;
    data: PerYear[];
  }[];
}

// NOTE: 総人口の dummy data を用意
export const dummyTotalPopulation = [
  { year: 1960, value: 2430871 },
  { year: 1965, value: 3014983 },
  { year: 1970, value: 3866472 },
  { year: 1975, value: 4821340 },
  { year: 1980, value: 5420480 },
  { year: 1985, value: 5863678 },
  { year: 1990, value: 6405319 },
  { year: 1995, value: 6759311 },
  { year: 2000, value: 6938006 },
  { year: 2005, value: 7054243 },
  { year: 2010, value: 7194556 },
  { year: 2015, value: 7266534 },
  { year: 2020, value: 7272830 },
  { year: 2025, value: 7202953 },
  { year: 2030, value: 7076167 },
  { year: 2035, value: 6909319 },
  { year: 2040, value: 6721414 },
  { year: 2045, value: 6524800 },
];
