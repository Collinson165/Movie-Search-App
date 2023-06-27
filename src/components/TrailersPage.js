import { useEffect, useState } from "react";
import MovieSearch from "./MovieService";

const TrailersPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        const videoID = [];

        for(let i =0; i < favorites.length; i++){
            MovieSearch.fetchTrailer(favorites[i].Title).then((res) => videoID.push(res));
            console.log(videoID);
        }

        setFavoriteMovies(videoID);
    }, [favoriteMovies]);

    return (
        <div>
            {favoriteMovies.length > 0 ? (
                <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4">
                    {favoriteMovies.map((movie) => (
                        <iframe
                            title='video'
                            src={`https://www.youtube.com/embed/${movie}`} 
                            frameborder="0"
                            width="560"
                            height="315"
                            allowFullScreen
                        />
                    ))}
                </div>
            ) : ( 
                <p>No favorite Movies yet.</p>
            )}

        </div>
    )
}

export default TrailersPage;