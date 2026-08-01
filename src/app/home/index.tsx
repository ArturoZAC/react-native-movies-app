import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlidesShow from '@/modules/movies/components/MainSlidesShow';
import { useMovies } from '@/modules/movies/hooks/useMovies';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets().top;
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isPending) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="green" size={30} />
      </View>
    );
  }

  return (
    <View style={{ paddingTop: safeArea }}>
      <Text className="mb-2 px-4 text-3xl font-bold">HomeScreen</Text>
      <MainSlidesShow movies={nowPlayingQuery.data ?? []} />
    </View>

    // <SafeAreaView>
    //   <Text>HomeScreen</Text>
    // </SafeAreaView>
  );
};

export default HomeScreen;
