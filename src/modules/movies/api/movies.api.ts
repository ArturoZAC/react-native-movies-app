import { create } from 'axios';

export const moviesApi = create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: 'ex-MX',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});
