import { Clock, Home, Plus, Search } from "lucide-react"
import { Link } from "react-router-dom"
import Watchlist from "../pages/Watchlist"

type Props = {
  isSearch: boolean
  setIsSearch: (value: boolean) => void
}

export default function Nav({ isSearch, setIsSearch }: Props) {
  return (
    <nav
      className={
        "fixed bottom-0 z-20 w-full flex gap-3 p-3 bg-white text-black font-bold text-2xl"
      }
    >
      <Link to="/">
        <Home />
      </Link>
      <Link to="/add-movie">
        <Plus />
      </Link>
      <div onClick={() => setIsSearch(true)}>
        <Search />
      </div>
      <Link to="/watchlist">
        <Clock />
      </Link>
    </nav>
  )
}
