import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";



  // f688fdf1


  const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=f688fdf1"
  const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTearm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length > 0 ?
        (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No movies found</h1>
          </div>
        )
      }



      
    </div>
  );
}

export default App;
