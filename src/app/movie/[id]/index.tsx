import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLocalSearchParams } from 'expo-router';

import MovieCast from '@/modules/movies/components/movie/MovieCast';
import MovieDescription from '@/modules/movies/components/movie/MovieDescription';
import MovieHeader from '@/modules/movies/components/movie/MovieHeader';
import { useMovie } from '@/modules/movies/hooks/useMovie';

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const { movieQuery, castQuery } = useMovie(id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color={'purple'} size={30} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={false}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 24,
      }}>
      <MovieHeader
        originalTitle={movieQuery.data!.originalTitle}
        poster={movieQuery.data!.poster}
        title={movieQuery.data!.title}
      />

      <MovieDescription movie={movieQuery.data!} />

      <MovieCast cast={castQuery.data!} />
    </ScrollView>
  );
};

export default MovieDetailScreen;
