import MovieCard from "./MovieCard";
import { useState } from "react";
import MovieSearch from "./MovieService";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        //Implement Search Logic

        try {
            const searchResults = await MovieSearch.searchMovies(searchQuery);
            setSearchResults(searchResults);
        } catch (error) {
            console.error('Error occured during search:', error);
        }
        console.log('search query:', searchQuery);
        console.log(searchResults);
        setSearchQuery('');
    };

    const movies = [

        {
            "Title": "Justice League",
            "Year": "2017",
            "imdbID": "tt0974015",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Zack Snyder's Justice League",
            "Year": "2021",
            "imdbID": "tt12361974",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
        },
        {
            "Title": "Justice League",
            "Year": "2001–2004",
            "imdbID": "tt0275137",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGQxYzExOGEtYjE2Ni00YzNlLTkyMGEtZTM0NDE3ZTIzODU1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: The Flashpoint Paradox",
            "Year": "2013",
            "imdbID": "tt2820466",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNTljYzgtOTU3ZC00ZjhhLTk0YzItY2RiMWU0MGZlNzFjL2ltYWdlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Doom",
            "Year": "2012",
            "imdbID": "tt2027128",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTFlMzdkMDgtNzJmZC00ZmE3LThkYzktNGZmNmMzZmNhYmY5XkEyXkFqcGdeQXVyNDYwMjI1MzI@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: War",
            "Year": "2014",
            "imdbID": "tt3060952",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjA3NzUtNDhjNS00OGNlLWI4ZWUtYzhkMmJiZDU2ZWExXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Crisis on Two Earths",
            "Year": "2010",
            "imdbID": "tt1494772",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzg0ODZjNjUtNmVhZi00NTYxLWExNWMtMWI3MDFiMjhiNjc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League Dark",
            "Year": "2017",
            "imdbID": "tt2494376",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmNkMGU4YzEtZTdhZS00YzBhLTgzYzAtZWM2NTQ0ZGU2ZjM3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Throne of Atlantis",
            "Year": "2015",
            "imdbID": "tt3878542",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGYwYTBjYTEtODE1NS00OTA2LTk5ZTctM2I0ZWViMTc4NDljXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League vs. Teen Titans",
            "Year": "2016",
            "imdbID": "tt5091548",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFiYTBkOGQtZjAwNi00OGMwLTg0YzQtNjI5YmFlZjY3ZWM3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
        }
    ];

    

    return (
        <div className="bg-gray-900 text-white py-16 text-center">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold mb-8 ">Welcome to Movie App</h1>
                <p className="text-xl mb-12">Explore and discover your Favorite Movies</p>
                <div className="flex items-center justify-center">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Search Movies"
                        value={searchQuery}
                        onChange={handleSearchInputChange} 
                        className="w-64 px-4 py-2 rounded-l-md bg-white text-gray-900 focus:outline-none"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">Search</button>
                    </form>
                </div>
            </div>

            {searchResults && <h2 className="text-3xl font-bold mb-8">Your Search: '{searchQuery}' </h2>}
            {searchResults && <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4">
                {searchResults && searchResults.map((movie) => (
                    <div className="hover:scale-105 transition ease-in">
                        <Link to={`/movies/${movie.imdbID}`}>
                        <MovieCard
                            key={movie.imdbID}
                            image={movie.Poster}
                            title={movie.Title}
                            releaseDate={movie.Year}
                            type={movie.Type}
                        />
                        </Link>
                    </div>
                ))}
            </div>}

            <h2 className="text-3xl font-bold mb-8">Top Grossing Movies</h2>
            <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div className="hover:scale-105 transition ease-in">
                        <Link to={`/movies/${movie.imdbID}`}>
                        <MovieCard
                            key={movie.imdbID}
                            image={movie.Poster}
                            title={movie.Title}
                            releaseDate={movie.Year}
                            type={movie.Type}
                        />
                        </Link>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-8">Latest Movies</h2>
            <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div className="hover:scale-105 transition ease-in">
                        <Link to={`/movies/${movie.imdbID}`}>
                        <MovieCard
                            key={movie.imdbID}
                            image={movie.Poster}
                            title={movie.Title}
                            releaseDate={movie.Year}
                            type={movie.Type}
                        />
                        </Link>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default LandingPage;