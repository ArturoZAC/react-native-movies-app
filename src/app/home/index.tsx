import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlidesShow from '@/modules/movies/components/movies/MainSlidesShow';
import MovieHorizontalList from '@/modules/movies/components/movies/MovieHorizontalList';
import { useMovies } from '@/modules/movies/hooks/useMovies';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets().top;
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isPending) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="green" size={30} />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1" style={{ paddingTop: safeArea }}>
      <Text className="mb-2 px-4 text-3xl font-bold">MoviesApp</Text>
      <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
    </ScrollView>
  );
};

export default HomeScreen;
