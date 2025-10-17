import { useMoviesStore } from "../store/useMoviesStore"
import MovieCard from "./MovieCard"

export default function SearchingResults({ title }) {
  const movies = useMoviesStore((s) => s.movies)
  const searchInput = title?.trim().toLowerCase()
  const results = movies
    .filter(
      (movie) =>
        searchInput && movie.title.toLowerCase().startsWith(searchInput)
    )
    .slice(0, 12)
  return (
    <div className="flex flex-wrap p-3 mt-3">
      {results?.map((movie) => (
        <MovieCard id={movie.id} title={movie.title} poster={movie.poster} />
      ))}
    </div>
  )
}
