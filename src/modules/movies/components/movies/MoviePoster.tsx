import { Image, Pressable } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  const width = smallPoster ? 80 : 144;
  const height = smallPoster ? 128 : 256;

  return (
    <Pressable
      className={`active:opacity-90 ${className}`}
      style={{
        width,
        height,
        borderRadius: 16,
        backgroundColor: '#fff',
      }}>
      <Image
        source={{ uri: poster }}
        resizeMode="cover"
        style={{
          width,
          height,
          borderRadius: 16,
        }}
      />
    </Pressable>
  );
};

export default MoviePoster;
