import { Student } from './Student';

export interface ApiResponse {
  results: Student[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
