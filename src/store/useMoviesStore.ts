import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type Movie = {
  id: string
  title: string
  year: string
  genre: string
  director: string
  writer: string
  actors: string
  poster: string
  ratings: JSON
  metascore: string
  isSeen: boolean
}

type MoviesStore = {
  movies: Movie[]
  setMovies: (movies: Movie[]) => void
}

export const useMoviesStore = create<MoviesStore>()(
  persist<MoviesStore>(
    (set) => ({
      movies: [],
      setMovies: (movies: Movie[]) => set({ movies }),
    }),
    {
      name: "movies",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
