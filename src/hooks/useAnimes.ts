import useData from "./useData"

export interface Anime {
    title: string
}

export interface AnimeQuery {

}

const useAnimes = () => useData<Anime>('anime');

export default useAnimes