import { moviesApi } from '@/modules/movies/api/movies.api';
import { CompleteMovie } from '@/modules/movies/interfaces/movies.interface';
import { MovieDetail } from '@/modules/movies/interfaces/movies-detail.response';
import { MovieMapper } from '@/modules/movies/mappers/movies.mapper';

export const getMovieById = async (id: string): Promise<CompleteMovie> => {
  try {
    const { data } = await moviesApi.get<MovieDetail>(`/${id}`);

    console.log(data);

    return MovieMapper.fromTheMovieDbToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
