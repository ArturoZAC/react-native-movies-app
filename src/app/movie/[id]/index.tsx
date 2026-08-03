import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useLocalSearchParams } from 'expo-router';

import MovieDescription from '@/modules/movies/components/movie/MovieDescription';
import MovieHeader from '@/modules/movies/components/movie/MovieHeader';
import { useMovie } from '@/modules/movies/hooks/useMovie';

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { movieQuery } = useMovie(id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color={'purple'} size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data!.originalTitle}
        poster={movieQuery.data!.poster}
        title={movieQuery.data!.title}
      />

      <MovieDescription movie={movieQuery.data!} />
    </ScrollView>
  );
};

export default MovieDetailScreen;
