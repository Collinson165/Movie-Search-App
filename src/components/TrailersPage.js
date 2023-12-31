import { useEffect, useState } from "react";

const TrailersPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const youtubeVideoId = localStorage.getItem('youtubeVideoId');
        if(youtubeVideoId){
            setFavoriteMovies(JSON.parse(youtubeVideoId));
        }
        
        
    }, []);

    console.log(favoriteMovies);

    return (
        <div className="bg-gray-900 text-white min-h-screen px-4">
            {favoriteMovies.length > 0 ? (
                <div>
                    <h1 className="text-white text-3xl text-center py-6">Your Trailers History</h1>
                    <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                        {favoriteMovies.map((movie) => (
                            <iframe
                                title={movie}
                                src={`https://www.youtube.com/embed/${movie}`} 
                                frameborder="0"
                                className="h-64 w-full border border-gray-400 rounded-md my-3"
                                allowFullScreen
                            />
                        ))}
                    </div>
                </div>
                
            ) : ( 
                <p className="text-white flex justify-center items-center h-screen">Any Movie Trailer You Watch Would Appear Here.</p>
            )}

        </div>
    )
}

export default TrailersPage;