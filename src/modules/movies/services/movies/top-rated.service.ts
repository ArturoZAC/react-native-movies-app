import { moviesApi } from '@/modules/movies/api/movies.api';
import { MoviesResponse } from '@/modules/movies/interfaces/movies.response';
import { MovieMapper } from '@/modules/movies/mappers/movies.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedService = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await moviesApi.get<MoviesResponse>('/top_rated', {
      params: {
        page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top rated movies';
  }
};
