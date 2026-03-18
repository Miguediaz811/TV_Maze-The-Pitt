export interface Show {

  id: number;
  name: string;
  language: string;
  status: string;
  summary: string;

  image: {
    medium: string;
    original: string;
  };

  network?: {
    name: string;
  };

}