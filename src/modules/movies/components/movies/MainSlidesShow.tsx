// import { useWindowDimensions, View } from 'react-native';
// import { Carousel } from 'react-native-reanimated-carousel';

// import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
// import { Movie } from '@/modules/movies/interfaces/movies.interface';

// interface Props {
//   movies: Movie[];
// }

// const MainSlidesShow = ({ movies }: Props) => {
//   const width = useWindowDimensions().width;

//   return (
//     <View className="w-full">
//       <Carousel
//         defaultIndex={0}
//         data={movies}
//         itemSize={width * 0.5}
//         layout={{ type: 'parallax', scale: 0.9, offset: 60 }}
//         loop
//         renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
//         style={{
//           width: width,
//           // El alto del carousel = alto del MoviePoster grande (256px)
//           height: 256,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       />
//     </View>
//   );
// };

// export default MainSlidesShow;

import { useRef, useState } from 'react';

import { Animated, useWindowDimensions, View } from 'react-native';

import MoviePoster from '@/modules/movies/components/movies/MoviePoster';
import { Movie } from '@/modules/movies/interfaces/movies.interface';

interface Props {
  movies: Movie[];
}

const ITEM_WIDTH = 144;
const ITEM_SPACING = 16;
const SNAP = ITEM_WIDTH + ITEM_SPACING;

const MainSlidesShow = ({ movies }: Props) => {
  const { width } = useWindowDimensions();
  const [scrollX] = useState(() => new Animated.Value(0));
  const flatListRef = useRef<Animated.FlatList<Movie>>(null);
  const sidePadding = (width - ITEM_WIDTH) / 2;

  // Triplicamos la data para simular loop infinito
  const loopedMovies = movies.length > 0 ? [...movies, ...movies, ...movies] : [];
  const middleStart = movies.length; // índice donde arranca la 2da copia (el "centro")

  const handleMomentumScrollEnd = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round((offsetX - sidePadding) / SNAP);

    // Si el usuario se acercó demasiado al principio o al final,
    // lo reposicionamos silenciosamente en el tramo del medio
    if (currentIndex <= 1 || currentIndex >= loopedMovies.length - 2) {
      const equivalentIndex = (currentIndex % movies.length) + middleStart;
      flatListRef.current?.scrollToOffset({
        offset: equivalentIndex * SNAP - sidePadding + sidePadding,
        animated: false,
      });
    }
  };

  if (movies.length === 0) return null;

  return (
    <View className="w-full">
      <Animated.FlatList
        ref={flatListRef}
        data={loopedMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{ paddingHorizontal: sidePadding }}
        snapToInterval={SNAP}
        decelerationRate="fast"
        initialScrollIndex={middleStart}
        getItemLayout={(_, index) => ({
          length: SNAP,
          offset: SNAP * index,
          index,
        })}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * SNAP, index * SNAP, (index + 1) * SNAP];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 0.95, 0.85],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View style={{ marginRight: ITEM_SPACING, transform: [{ scale }] }}>
              <MoviePoster id={item.id} poster={item.poster} />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default MainSlidesShow;
