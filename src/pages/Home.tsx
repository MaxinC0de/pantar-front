import { useState } from "react"
import MoviesList from "../components/MoviesList"
import Nav from "../components/Nav"
import SearchBar from "../components/SearchBar"
import SearchingResults from "../components/searchingResults"
import Watchlist from "./Watchlist"
import Tags from "../components/Tags"

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [title, setTitle] = useState("")
  return (
    <div className="pb-[7vh]">
      <p className="mt-3 ml-3 font-bold text-2xl">Pantàr</p>
      <Nav isSearch={isSearchOpen} setIsSearch={setIsSearchOpen} />
      <Tags />
      <div className="fixed z-10 top-0">
        {isSearchOpen && (
          <SearchBar
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            title={title}
            setTitle={setTitle}
          />
        )}
      </div>
      {isSearching ? <SearchingResults title={title} /> : <MoviesList />}
    </div>
  )
}
