import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AddMovie from "./pages/AddMovie.tsx"
import MovieDetails from "./pages/MovieDetails.tsx"
import Watchlist from "./pages/Watchlist.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="add-movie" element={<AddMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
