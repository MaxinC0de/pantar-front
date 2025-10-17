import axios from "axios"

const axiosClient = axios.create({
  baseURL: "https://pantar-back-production.up.railway.app",
})

const getMovies = async () => {
  const { data: movies } = await axiosClient.get("/movies")
  return movies
}

const getPreview = async (title: string, year: number | undefined) => {
  const { data: movie } = await axiosClient.get("/movies/preview", {
    params: { title, year },
  })
  return movie
}

const postMovie = async (title: string, year?: number | undefined) => {
  const { data: response } = await axiosClient.post("/movies", {
    title,
    year,
  })
  return response
}

const deleteMovie = async (id: string) => {
  const { data: response } = await axiosClient.delete("/movies", {
    data: { id },
  })
  return response
}

const getMovie = async (id: string) => {
  const { data: movie } = await axiosClient.get(`/movies/${id}`)
  return movie
}

const getWatchlist = async () => {
  const watchlist = await axiosClient.get("/watchlist")
  return watchlist
}

const addToWatchlist = async (poster: string) => {
  axiosClient.post("/watchlist", { poster })
}

const removeFromWatchlist = async (id: string) => {
  const { data: response } = await axiosClient.delete(`/watchlist/${id}`)
  return response
}

export const api = {
  getMovies,
  getPreview,
  postMovie,
  deleteMovie,
  getMovie,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
}
