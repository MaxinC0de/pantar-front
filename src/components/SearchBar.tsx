import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { api } from "../lib/api"

export default function SearchBar({
  isSearching,
  setIsSearching,
  title,
  setTitle,
}) {
  const [movieId, setMovieId] = useState("")
  const { data: fetchedMovie } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => api.getMovie(movieId),
    enabled: !!movieId,
  })
  const movie = fetchedMovie
  const handleSearching = (e) => {
    const value = e.target.value
    setTitle(value)
    if (value.trim() !== "") {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const movies = await api.getMovies()
    const movie = movies.find((movie: any) => movie.title === title)
    setMovieId(movie.id)
  }
  return (
    <div className="w-screen p-3 bg-white">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleSearching(e)}
          className="p-1.5 bg-black rounded-md"
          type="text"
        />
      </form>
    </div>
  )
}
