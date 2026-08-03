import { useRef } from 'react';

import { FlatList, Text, View } from 'react-native';

import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => Promise<unknown>;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  const onEndReached = async () => {
    if (isLoading.current || !loadNextPage) return;

    isLoading.current = true;
    try {
      await loadNextPage();
    } finally {
      isLoading.current = false;
    }
  };

  return (
    <View className={`mt-4 ${className}`}>
      {title && <Text className="mb-2 px-4 text-3xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(movie) => `${movie.id}`}
        style={{ height: 128 }}
        contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onEndReached={onEndReached}
        onEndReachedThreshold={1.5}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

export default MovieHorizontalList;
