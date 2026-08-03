import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { ActorCard } from '@/modules/movies/components/movie/ActorCard';
import { Cast } from '@/modules/movies/interfaces/cast.interface';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5">
      <Text className="px-5 text-2xl font-bold">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
