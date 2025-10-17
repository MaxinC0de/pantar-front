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

type MovieStore = {
  movie: null | Movie
  setMovie: (value: Movie) => void
}

export const useMovieStore = create<MovieStore>()(
  persist<MovieStore>(
    (set) => ({
      movie: null,
      setMovie: (movie) => set({ movie }),
    }),
    {
      name: "movie",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
