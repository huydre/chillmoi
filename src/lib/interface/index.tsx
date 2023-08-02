export interface LastestUpdateInterface {
  results: any;
  genres_ids: any;
  poster_path: any;
  title: string;
  original_name: any;
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

