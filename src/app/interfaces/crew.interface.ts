export interface Crew {

  type: string;

  person: {

    id: number;

    name: string;

    image: {
      medium: string;
      original: string;
    };

  };

}