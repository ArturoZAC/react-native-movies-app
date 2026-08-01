import { FlatList, Text, View } from 'react-native';

import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View className="mt-4">
      {title && <Text className="mb-2 px-4 text-3xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(movie) => `${movie.id}`}
        style={{ height: 128 }}
        contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster withShadow={false} />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
