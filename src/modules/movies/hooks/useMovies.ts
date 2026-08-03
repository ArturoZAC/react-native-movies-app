import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { nowPlayingService } from '@/modules/movies/services/movies/now-playing.service';
import { popularService } from '@/modules/movies/services/movies/popular.service';
import { topRatedService } from '@/modules/movies/services/movies/top-rated.service';
import { upcomingService } from '@/modules/movies/services/movies/upcoming.service';

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

  // const topRatedQuery = useQuery({
  //   queryKey: ['movies', 'top-rated'],
  //   queryFn: () => topRatedService({ page: 1 }),
  //   staleTime: 1000 * 60 * 60 * 24,
  // });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({ pageParam }) => {
      // console.log({ pageParam });
      return topRatedService({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
