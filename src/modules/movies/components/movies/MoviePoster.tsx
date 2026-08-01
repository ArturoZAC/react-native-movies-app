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
        backgroundColor: '#fff', // necesario para que Android calcule bien la sombra
        elevation: 10,
        // Sombra en iOS (va también acá, no en el Image)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
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
