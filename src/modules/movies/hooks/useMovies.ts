import { useQuery } from '@tanstack/react-query';

import { nowPlayingService } from '@/modules/movies/services/now-playing.service';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
  };
};
