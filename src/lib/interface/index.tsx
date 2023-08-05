import { ReactNode } from "react";

export interface LastestUpdateInterface {
  id: string;
  results: any;
  genres_ids: any;
  poster_path: any;
  title: string;
  original_name: any;
  name: string;
  media_type:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}

export interface DetailMovieInterface {
  id: any;
  name: ReactNode;
  first_air_date: any;
  poster_path: any;
  overview: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genres: any;
  original_title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
