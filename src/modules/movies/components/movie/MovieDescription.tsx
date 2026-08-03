import { Text, View } from 'react-native';

import { CompleteMovie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className="mt-5 font-bold">Historia</Text>
    </View>
  );
};

export default MovieDescription;
