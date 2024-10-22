import useAnimes from "../hooks/useAnimes"

function AnimeGrid() {

    const {data, error, loading} = useAnimes()

    return <ul>
        {data?.map(anime => <li>{anime.title}</li>)}
    </ul>

}

export default AnimeGrid