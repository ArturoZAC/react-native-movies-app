import { Text, useWindowDimensions, View } from 'react-native';
import { Carousel } from 'react-native-reanimated-carousel';

import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  movies: Movie[];
}

const MainSlidesShow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;

  return (
    <View className="h-[350px] w-full">
      <Carousel
        defaultIndex={1}
        data={movies}
        itemSize={width / 2}
        layout={{ type: 'parallax', scale: 0.9, offset: 50 }}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default MainSlidesShow;
