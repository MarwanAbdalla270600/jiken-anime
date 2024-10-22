import { AnimeApiResponse } from "../services/api-modals";
import useData from "./useData";



export interface Anime {
  title: string;
  type: string | null;
  image: string;
}

export interface AnimeQuery {}


function animeMapper(mappingObject: AnimeApiResponse[]): Anime[] {
    return mappingObject? mappingObject.map(x=>({
        title: x.title,
        type: x.type,
        image: x.images.webp.large_image_url
    })): []
}

const useAnimes = () => {
  const { data, error, loading } = useData<AnimeApiResponse>("anime");
  const animes = animeMapper(data)
  return { animes, error, loading };
};

export default useAnimes;
