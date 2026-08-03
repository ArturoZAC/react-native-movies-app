import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlidesShow from '@/modules/movies/components/movies/MainSlidesShow';
import MovieHorizontalList from '@/modules/movies/components/movies/MovieHorizontalList';
import { useMovies } from '@/modules/movies/hooks/useMovies';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isPending) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="green" size={30} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom + 24,
      }}>
      <View>
        <Text className="mb-2 px-4 text-3xl font-bold">MoviesApp</Text>
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <MovieHorizontalList title="Proximamente" movies={upcomingQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
