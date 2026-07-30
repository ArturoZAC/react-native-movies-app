import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Text>Hello Movies App</Text>
    </SafeAreaProvider>
  );
}
