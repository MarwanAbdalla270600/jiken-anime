import useAnimes from "../hooks/useAnimes"

function AnimeGrid() {

    const {animes, error, loading} = useAnimes()

    return <>
      {animes.map(anime=><img width={300} src={anime.image}></img>)}
    </>

}

export default AnimeGrid