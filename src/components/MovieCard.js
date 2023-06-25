const MovieCard = ({ image, title, releaseDate, type }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{title}</p>
            <p className="text-gray-600">{releaseDate}</p>
            <p className="text-gray-600">{type}</p> 
        </div>
    );
}

export default MovieCard