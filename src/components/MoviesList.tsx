import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"
import { useMoviesStore } from "../store/useMoviesStore"
import MovieCard from "./MovieCard"

export default function MoviesList() {
  const setMovies = useMoviesStore((s) => s.setMovies)
  const {
    data: fetchedMovies,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      return api.getMovies()
    },
  })
  const movies = fetchedMovies
  if (fetchedMovies) setMovies(fetchedMovies)
  return (
    <div className="flex flex-wrap justify-center p-3">
      {(movies ?? Array.from({ length: 50 })).map((movie: any) => (
        <MovieCard
          id={movie?.id}
          poster={movie?.poster}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      ))}
    </div>
  )
}
