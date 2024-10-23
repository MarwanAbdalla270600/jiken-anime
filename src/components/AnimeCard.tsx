import { Anime } from "../hooks/useAnimes";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  return (
    <div className="flex p-2 border rounded-md">
      <div className="rounded-md ">
      <img
          src={anime.image}
          alt="Movie"
            />
      </div>
        
      <div className="flex flex-col justify-between w-auto p-2">
        <h2 className="">{anime.title}</h2>
        
      </div>
    </div>
  );
}

export default AnimeCard