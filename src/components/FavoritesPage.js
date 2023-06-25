import { useEffect, useState } from "react"

const FavoritesPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        if (favorites) {
            setFavoriteMovies(JSON.parse(favorites));
        }
    }, []);

    return (
        <div className="h-screen">
            <h1>Favorite Movies</h1>
            {favoriteMovies.length > 0 ? (
                <ul>
                    {favoriteMovies.map((movie) => (
                        <li key={movie.imdbID}>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </li>
                    ))}
                </ul>
            ) : ( 
                <p>No favorite Movies yet.</p>
            )}
        </div>
    );
        
};

export default FavoritesPage;