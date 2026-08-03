import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          zIndex: 1,
          width: '100%',
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name="arrow-back" size={25} color="white" className="shadow" />
        </Pressable>
      </View>

      <View style={{ height: screenHeight * 0.7 }} className="shadow-xl shadow-black/20">
        <View className="flex-1 overflow-hidden">
          <Image source={{ uri: poster }} resizeMode="cover" className="flex-1 rounded-b-3xl" />
        </View>

        <View className="mt-5 px-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="text-2xl font-semibold">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
