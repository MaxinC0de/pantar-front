import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"

export default function Search() {
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: api.getMovies,
  })
  const movie = movies?.filter((movie: any) => movie.title === "Cure")[0]
  if (!movie) return null
  return (
    <div className="text-white">
      {movie.title} <p>fff</p>
      <img src="" alt="" />
    </div>
  )
}
