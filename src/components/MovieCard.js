const MovieCard = ({ image, title, releaseDate, type }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-0 relative ">
            <img src={image} alt={title} className="w-full h-auto rounded-md mb-2" />
            {/* <h3 className="text-xl font-bold mb-2">{title}</h3> */}
            <p className="text-gray-600">{title}</p>
            <p className="text-gray-600 bg-blue-400 rounded-lg w-fit p-1 absolute top-0 bg-opacity-80">{releaseDate}</p>
            <p className="text-white rounded-lg bg-gray-800 w-1/2 p-1 mx-auto">{type}</p> 
        </div>
    );
}

export default MovieCard