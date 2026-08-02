import { useRef } from 'react';

import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';

import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 500 >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;
    console.log('Cargar siguientes peliculas');

    loadNextPage && loadNextPage();
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
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
