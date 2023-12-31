const MovieCard = ({ image, title, releaseDate, type }) => {
    return (
        // <div className="bg-white rounded-lg shadow-md p-0 relative ">
        //     <img src={image} alt={title} className="w-full h-auto rounded-md mb-2" />
        //     {/* <h3 className="text-xl font-bold mb-2">{title}</h3> */}
        //     <p className="text-gray-600">{title}</p>
        //     <p className="text-gray-600 bg-blue-400 rounded-lg w-fit p-1 absolute top-0 bg-opacity-80">{releaseDate}</p>
        //     <p className="text-white rounded-lg bg-gray-800 w-1/2 p-1 mx-auto">{type}</p> 
        // </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
            <img src={image} alt={title} className="w-full" />
            <div className="px-4 py-2">
                <div className="font-bold text-sm mb:text-xl mb-1">{title}</div>
                <p className="text-gray-700 text-base">{releaseDate}</p>
            </div>
            <div className="px-4 pt-2 pb-1">
                <button className="absolute bg-opacity-40 top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    {type}
                </button>
            </div>
        </div>
    );
}

export default MovieCard