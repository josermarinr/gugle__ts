export interface RootObject {
  data: Data;
}
export interface Data {
  advertisements: Advertisements;
}

export interface Advertisements {
  __typename: string;
  description: string;
  thumbnail: string;
  title: string;
}