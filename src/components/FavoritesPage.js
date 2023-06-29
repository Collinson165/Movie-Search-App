import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";


const FavoritesPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        if (favorites) {
            setFavoriteMovies(JSON.parse(favorites));
        }
    }, []);

    return (
        <div className="px-6 bg-gray-900 text-white min-h-screen">
            <section className="py-6">
                <h1 className="text-white text-lg leading-5 text-center">Favorite Movies</h1>
                {favoriteMovies.length > 0 ? (
                    <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-4">
                        {favoriteMovies.map((movie) => (
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                title={movie.Title}
                                image={movie.Poster}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        ))}
                    </div>
                ) : ( 
                    <p>No favorite Movies yet.</p>
                )}
            </section>
        </div>
    );
        
};

export default FavoritesPage;