import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './global.css';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Text className="flex text-2xl font-black text-green-500">Hello Movies App</Text>
    </SafeAreaProvider>
  );
}
