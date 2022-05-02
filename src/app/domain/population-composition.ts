export interface PerYear {
  year: number;
  value: number;
}

export interface PopulationComposition {
  boundaryYear: number;
  data: {
    label: string;
    data: PerYear[];
  };
}
