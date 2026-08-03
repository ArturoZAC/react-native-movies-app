import { moviesApi } from '@/modules/movies/api/movies.api';
import { MovieCredits } from '@/modules/movies/interfaces/movie-credits.response';
import { CastMapper } from '@/modules/movies/mappers/cast.mapper';

export const getCastByIdService = async (movieId: string) => {
  try {
    const { data } = await moviesApi.get<MovieCredits>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw 'Cant load cast by id';
  }
};
