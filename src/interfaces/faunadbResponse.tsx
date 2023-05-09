export interface FaunaDBResponse<T> {
  data: T[];
  after: string | null;
  before: string | null;
}

export interface ContinentsDataResponse {
  imageUrl: string;
  continent: string;
  description: string;
}
