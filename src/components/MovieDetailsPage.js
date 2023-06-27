import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from './MovieService';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [trailerId, setTrailerId] = useState('');

    const handleWatchNow = async () => {
        try {
            const videoId = await MovieService.fetchTrailer(movieDetails.Title);
            setTrailerId(videoId);
            console.log('fetched youtube video', trailerId)
            console.log(videoId)
        } catch(error){
            console.error('Failed to fetch video from youtube', error);
        }
    }

    const handleToggleFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.findIndex((fav) => fav.imdbID === movieDetails.imdbID);

        if (index === -1){
            favorites.push(movieDetails);
            setIsFavorite(true);
        } else {
            favorites.splice(index, 1);
            setIsFavorite(false);
        }

        //check 

        //update favorites list in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            try {
                const details = await MovieService.getMovieById(id);
                setMovieDetails(details);
                if (favorites.findIndex((fav) => fav.imdbID === details.imdbID) > 0){
                    setIsFavorite(true)
                }
            } catch (error) {
                console.error('Error occured while fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);
    

    if (!movieDetails) {
        return <div>Loading...</div>
    };

    const sectionStyle = {
        backgroundImage: `url(${movieDetails.Poster})`,
        opacity: 0.3,
        backgroundSize: '100% 150%',
        backgroundPosition: 'top',
    };

    return (

        <div className="bg-black">

            <section className='bg-gradient-to-t from-black to-gray-900 py-12' style={{ sectionStyle }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex justify-center">
                            <div className="w-64 h-auto">
                                <img src={movieDetails.Poster} alt={movieDetails.Title} className="w-full h-full rounded-lg shadow-lg" />
                                <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent'></div>
                            </div>
                        </div>
                        

                        <div className="w-full md:w-2/3 md:pl-8">
                            <h1 className="text-4xl font-bold text-white">{movieDetails.Title}</h1>
                            <p className="text-gray-400 text-lg font-semibold">{movieDetails.Year}</p>
                            <p className="text-gray-400">{movieDetails.Genre}</p>
                            <p className="text-gray-400 text-lg leading-relaxed">{movieDetails.Plot}</p>

                            <div className="mt-6 text-gray-400">
                                <p><span className="font-bold">Actors:</span>{movieDetails.Actors}</p>
                                <p><span className="font-bold">Director:</span>{movieDetails.Director}</p>
                                <p><span className="font-bold">Country:</span>{movieDetails.Country}</p>
                                <p><span className="font-bold">Box Office Sale:</span>{movieDetails.BoxOffice}</p>
                                <p><span className="font-bold">Language:</span>{movieDetails.Language}</p>
                                <p><span className="font-bold">Release Date:</span>{movieDetails.Released}</p>
                                <p><span className="font-bold">Rated:</span>{movieDetails.Rated}</p>
                                <p><span className="font-bold">Runtime:</span>{movieDetails.Runtime}</p>
                                <p><span className="font-bold">Writer:</span>{movieDetails.Writer}</p>
                                <p><span className="font-bold">Awards:</span>{movieDetails.Awards}</p>
                                <p><span className="font-bold">Website:</span><a className='text-blue-500' href={movieDetails.Website}>{movieDetails.Website}</a></p>
                            </div>
                            

                            <div className="mt-8">
                                <button onClick={handleWatchNow} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg inline-block">Watch Trailer</button>
                                <button
                                 onClick={handleToggleFavorites} 
                                 className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg inline-block ml-4">
                                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button>
                            </div>
                        </div>

                        

                    </div>
                    
                </div>
                {/* YOUTUBE VIDEO IFRAME HERE */}
                
            </section>

            <section className='flex justify-center'>
            <div className='h-fit py-10'>
                {trailerId && (
                    <iframe
                        title={movieDetails.Title}
                        src={`https://www.youtube.com/embed/${trailerId}`} 
                        frameborder="0"
                        width="560"
                        height="315"
                        allowFullScreen
                    />
                )}
            </div>
            </section>

            <section className="bg-gradient-to-t from-gray-900 to-black py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white">Ratings</h2>
                    <div className="flex mt-8">
                    {movieDetails.Ratings && movieDetails.Ratings.map((rating) => (
                        
                        <div className="px-2 w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-white">{rating.Source}</h3>
                                <p className="text-4xl text-red-500 font-bold">{rating.Value}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default MovieDetailsPage;