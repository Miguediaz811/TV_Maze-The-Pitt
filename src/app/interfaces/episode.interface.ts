export interface Episode {

  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;

  image: {
    medium: string;
    original: string;
  };

}