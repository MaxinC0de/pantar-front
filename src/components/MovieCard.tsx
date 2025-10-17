import { Link } from "react-router-dom"

interface Props {
  id?: string
  poster: string
  isLoading?: boolean
  isFetching?: boolean
}

export default function MovieCard({
  id,
  poster,
  isLoading,
  isFetching,
}: Props) {
  const isBusy = isLoading || isFetching
  return (
    <Link
      key={id}
      to={`movie/${id}`}
      className="relative w-[25%] aspect-2/3 h-full p-1"
    >
      <div
        className={`w-full rounded-md border-gray-600 border-1 overflow-hidden ${
          isBusy ? "h-full animate-pulse bg-gray-500" : ""
        }`}
      >
        {!isBusy && (
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster}`}
            className="object-cover rounded-md transition-transform duration-500 hover:scale-120"
          />
        )}
      </div>
    </Link>
  )
}
