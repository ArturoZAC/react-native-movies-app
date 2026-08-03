//prettier-ignore
export interface MovieCredits {
  id:   number;
  cast: MovieCast[];
  crew: MovieCast[];
}

//prettier-ignore
export interface MovieCast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          string;
  job?:                 string;
}
