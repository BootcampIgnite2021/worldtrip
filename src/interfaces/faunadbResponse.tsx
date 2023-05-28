export interface FaunaDBResponse<T> {
  data: T[];
  after: string | null;
  before: string | null;
}

export interface ContinentsDataResponse {
  imageUrl: string;
  continent: string;
  description: string;
  descriptionFull: string;
  country: string;
  language: string;
  cidades: string;
}

export interface ContinentsAndCitiesDataResponse {
  name: string;
  continent: string;
  imageUrl: string;
  country: string;
  code: string;
}
