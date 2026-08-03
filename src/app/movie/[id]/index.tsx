import { Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import { getMovieById } from '@/modules/movies/services/movie/get-movie-by-id.service';

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  getMovieById(id);

  return (
    <View>
      <Text>MovieDetailScreen</Text>
    </View>
  );
};

export default MovieDetailScreen;
