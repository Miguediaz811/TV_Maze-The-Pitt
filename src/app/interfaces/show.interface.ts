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

  rating?: {
    average: number;
  };

  network?: {
    name: string;
  };

}