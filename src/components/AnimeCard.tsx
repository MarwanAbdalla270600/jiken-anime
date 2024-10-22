import { Anime } from "../hooks/useAnimes";

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  return (
    <div className="flex p-2 border rounded-md">
        <img
          src={anime.image}
          alt="Movie"
    
          className="w-24 h-32 rounded-md"
        />
      <div className="flex flex-col justify-between w-auto">
        <h2 className="">{anime.title}</h2>
        
      </div>
    </div>
  );
}

export default AnimeCard