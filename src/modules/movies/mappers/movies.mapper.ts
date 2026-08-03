import { CompleteMovie, Movie } from '@/modules/movies/interfaces/movies.interface';
import { Result } from '@/modules/movies/interfaces/movies.response';
import { MovieDetail } from '@/modules/movies/interfaces/movies-detail.response';

export class MovieMapper {
  public static fromTheMovieDbToMovie = (movie: Result): Movie => {
    //prettier-ignore
    return {
      id         : movie.id,
      title      : movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster     : 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
      backdrop   : 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
      rating     : movie.vote_average,
    };
  };

  public static fromTheMovieDbToCompleteMovie = (movie: MovieDetail): CompleteMovie => {
    //prettier-ignore
    return {
      id                 : movie.id,
      title              : movie.title,
      description        : movie.overview,
      releaseDate        : new Date(movie.release_date),
      poster             : 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
      backdrop           : 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
      rating             : movie.vote_average,
      budget             : movie.budget,
      duration           : movie.runtime,
      genres             : movie.genres.map((g) => g.name),
      originalTitle      : movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name)
    };
  };
}
