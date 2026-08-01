import { useQuery } from '@tanstack/react-query';

import { nowPlayingService } from '@/modules/movies/services/now-playing.service';
import { popularService } from '@/modules/movies/services/popular.service';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
  };
};
