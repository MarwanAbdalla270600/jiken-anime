import useAnimes from "../hooks/useAnimes"
import AnimeCard from "./AnimeCard"

function AnimeGrid() {

    const {animes, error, loading} = useAnimes()

    return <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4">
      {animes.map(anime=><AnimeCard anime={anime}></AnimeCard>)}
    </div>

}

export default AnimeGrid