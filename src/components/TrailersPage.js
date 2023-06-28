import { useEffect, useState } from "react";

const TrailersPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const youtubeVideoId = localStorage.getItem('youtubeVideoId');
        if(youtubeVideoId){
            setFavoriteMovies(JSON.parse(youtubeVideoId));
        }
        
        // console.log(youtubeVideoId);
        // console.log(favoriteMovies);
    }, []);

    return (
        <div className="">
            {favoriteMovies.length > 0 ? (
                <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {favoriteMovies.map((movie) => (
                        <iframe
                            title={movie}
                            src={`https://www.youtube.com/embed/${movie}`} 
                            frameborder="0"
                            width="560"
                            height="315"
                            allowFullScreen
                        />
                    ))}
                </div>
            ) : ( 
                <p>Any Movie Trailer You Watch Would Appear Here.</p>
            )}

        </div>
    )
}

export default TrailersPage;