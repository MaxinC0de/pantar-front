import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"
import { useState } from "react"
import { Search } from "lucide-react"
import Nav from "../components/Nav"
import MovieCard from "../components/MovieCard"

export default function AddMovie() {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(undefined)
  const [isMovieFetched, setIsMovieFetched] = useState(false)
  const [postedMovie, setPostedMovie] = useState(null)
  const {
    data: movie,
    refetch,
    error,
  } = useQuery({
    queryKey: ["movie", title],
    queryFn: () => api.getPreview(title, year),
    enabled: false,
  })
  console.log(movie)
  console.log(error)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      refetch()
      setIsMovieFetched(true)
    }
  }
  const handlePost = async (title: string, year: number | undefined) => {
    if (title || (title && year)) {
      const res = await api.postMovie(title, year)
      setPostedMovie(res.movie)
      setIsMovieFetched(false)
      // console.log(res)
    }
  }
  return (
    <div className="flex flex-col">
      <Nav />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-black font-semibold"
      >
        <div className="flex flex-col gap-3 mt-[12vh]">
          <div className="flex gap-3">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              type="text"
              className="p-2 rounded-md border-white bg-white"
              placeholder="Ajouter un titre"
            />
            <input
              value={year}
              onChange={(e) => {
                setYear(e.target.value)
              }}
              type="text"
              className="p-2 rounded-md border-white bg-white"
              placeholder="Ajouter un titre"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-md w-full flex justify-center text-black bg-white"
          >
            <Search />
          </button>
        </div>
        {isMovieFetched && (
          <div className="flex mt-[3vh] p-3 gap-x-3">
            <div className="border-1 border-white rounded-md">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie?.tmdb?.poster_path}`}
                className="object-cover rounded-md"
              />
            </div>
            <div className="border-1 border-white rounded-md">
              <img
                src={`https://image.tmdb.org/t/p/w780/${movie?.tmdb?.backdrop_path}`}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        )}
        {isMovieFetched && (
          <button
            onClick={() => handlePost(title, year)}
            className="border-1 border-transparent cursor-pointer p-3 mt-3 w-[40vw] rounded-md bg-white hover:text-white hover:bg-black hover:border-1 hover:border-white transition-colors duration-300"
          >
            Send
          </button>
        )}
        {postedMovie && (
          <MovieCard id={postedMovie.id} poster={postedMovie.poster} />
        )}
      </form>
    </div>
  )
}
