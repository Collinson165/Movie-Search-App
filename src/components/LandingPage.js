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
    };

    const movies = [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            releaseDate: '1994',
            image: '',
        },
        {
            id:2,
            title: 'Inception',
            releaseDate: '2010',
            image: '',
        },
        {
            id:3,
            title: 'Inception',
            releaseDate: '2010',
            image: '',
        },
        {
            id:4,
            title: 'Inception',
            releaseDate: '2010',
            image: '',
        },
        {
            id:5,
            title: 'Inception',
            releaseDate: '2010',
            image: '',
        },
    ];

    return (
        <div className="bg-gray-900 text-white py-16 text-center">
            <div className="container mx-auto px-4">
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
            {searchResults && <div className="p-4 grid grid-cols-4 gap-4">
                {searchResults && searchResults.map((movie) => (
                    <Link to={`/movies/${movie.imdbID}`}>
                    <MovieCard
                        key={movie.imdbID}
                        image={movie.Poster}
                        title={movie.Title}
                        releaseDate={movie.Year}
                        type={movie.Type}
                     />
                    </Link>
                ))}
            </div>}

            <h2 className="text-3xl font-bold mb-8">Top Grossing Movies</h2>
            <div className="p-4 grid grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`}>
                    <MovieCard
                        key={movie.id}
                        image={movie.image}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        
                     />
                    </Link>
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-8">Latest Movies</h2>
            <div className="p-4 grid grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        image={movie.image}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                     />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;