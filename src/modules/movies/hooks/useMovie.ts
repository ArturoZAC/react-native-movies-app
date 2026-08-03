import { useQuery } from '@tanstack/react-query';

import { getMovieByIdService } from '@/modules/movies/services/movie/get-movie-by-id.service';

export const useMovie = (id: string) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdService(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
  };
};
