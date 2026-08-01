import { useWindowDimensions, View } from 'react-native';
import { Carousel } from 'react-native-reanimated-carousel';

import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  movies: Movie[];
}

const MainSlidesShow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;

  return (
    <View className="h-[360px] w-full">
      <Carousel
        defaultIndex={1}
        data={movies}
        itemSize={width * 0.5}
        layout={{ type: 'parallax', scale: 0.9, offset: 60 }}
        loop
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
        style={{
          width: width,
          height: 360,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default MainSlidesShow;
