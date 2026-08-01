import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { nowPlayingService } from '@/modules/movies/services/now-playing.service';

import './global.css';

export default function Layout() {
  nowPlayingService();

  return (
    <SafeAreaProvider>
      <Text className="flex text-2xl font-black text-green-500">Hello Movies App</Text>
    </SafeAreaProvider>
  );
}
