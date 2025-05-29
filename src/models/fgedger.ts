export interface Belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Production_countries {
  iso_3166_1: string;
  name: string;
}

export interface Spoken_language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Results {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Videos {
  results: Results[];
}

export interface Backdrops {
  aspect_ratio: number;
  height: number;
  iso_639_1?: any;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Logos {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Posters {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  backdrops: Backdrops[];
  logos: Logos[];
  posters: Posters[];
}

export interface IResponseModel  {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongs_to_collection;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spoken_language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  images: Images;
}