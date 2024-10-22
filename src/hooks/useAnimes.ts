import useData from "./useData";

export interface AnimeApiResponse {
  title: string;
  type: string | null;
  episodes: number;
  status: string | null;
  url: string;
  images: { webp: { large_image_url: string } };
  background: string | null;
}

export interface Anime {
  title: string;
  type: string | null;
  image: string;
}

export interface AnimeQuery {}

const useAnimes = () => {
  const { data, error, loading } = useData<AnimeApiResponse>("anime");
  const animes: Anime[] = data
    ? data.map((x) => ({
        title: x.title,
        type: x.type,
        image: x.images.webp.large_image_url || '',
      }))
    : [];

  return { animes, error, loading };
};

export default useAnimes;
