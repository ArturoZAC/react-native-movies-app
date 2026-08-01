import { moviesApi } from '@/modules/movies/api/movies.api';
import { MoviesResponse } from '@/modules/movies/interfaces/movies.response';
import { MovieMapper } from '@/modules/movies/mappers/movies.mapper';

export const popularService = async () => {
  try {
    const { data } = await moviesApi.get<MoviesResponse>('/popular');

    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
