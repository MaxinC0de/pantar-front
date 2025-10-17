import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
import { useMoviesStore } from "../store/useMoviesStore"
import { Clock, Trash } from "lucide-react"
import { api } from "../lib/api"
import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"

export default function MovieDetails() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<any | null>(null)
  const movies = useMoviesStore((s) => s.movies)
  const handleLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const movie = movies.find((movie) => movie.id === id)
    if (movie) {
      setMovie(movie)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    handleLoading()
  }, [])
  const addToWatchlist = useMutation({
    mutationFn: (poster: string) => api.addToWatchlist(poster),
  })
  return (
    <div className="flex flex-col text-white">
      <Nav />
      <div className="relative">
        {isLoading ? (
          <>
            <div className="absolute z-10 w-40 aspect-2/3 bg-gray-500 animate-pulse top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"></div>
            <div className="w-screen aspect-video animate-pulse bg-gray-500"></div>
          </>
        ) : (
          <>
            <img
              className="absolute z-10 w-40 h-auto shadow-xl top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
              src={`https://image.tmdb.org/t/p/w185/${movie?.poster}`}
              alt={movie?.title}
            />
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w780/${movie?.posterWide}`}
              alt=""
            />
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      </div>
      <div className="p-3">
        <p>{movie?.title}</p>
        <p>{movie?.year}</p>
        <p>{movie?.director}</p>
        {movie?.writer !== movie?.director && <p>{movie?.writer}</p>}
        <p>{movie?.isSeen === true ? "Vu" : "Pas vu"}</p>
        <p></p>
        <p>Actors Collapsible</p>
        <p>
          Animation carte qui va à gauche en scrollant et infos qui vont à
          droite
        </p>
        <div
          onClick={() => {
            alert("t es sûr mec ?")
            api.deleteMovie(id)
            window.location.href = "/"
          }}
        >
          <Trash />
        </div>
        <button onClick={() => addToWatchlist.mutate(movie.poster)}>
          <Clock />
        </button>
      </div>
    </div>
  )
}
