import { api } from "../lib/api"
import { useQuery } from "@tanstack/react-query"
import { EyeClosed } from "lucide-react"
import Nav from "../components/Nav"

export default function Watchlist() {
  const { data: watchlist } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.getWatchlist,
  })
  if (!watchlist) return null
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <Nav />
      {watchlist.data.map((movie) => (
        <div className="relative w-[22%] rounded-md border-gray-600 border-1 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster}`}
            className=""
            alt=""
          />
          <button onClick={() => api.removeFromWatchlist(movie.id)}>
            <EyeClosed className="absolute right-1 bottom-1 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  )
}
