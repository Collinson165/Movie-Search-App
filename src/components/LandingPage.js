import MovieCard from "./MovieCard";
import { useState } from "react";
import MovieSearch from "./MovieService";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [prevSearchQuery, setPrevSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        //Implement Search Logic

        try {
            const searchResults = await MovieSearch.searchMovies(searchQuery);
            setSearchResults(searchResults);
            setPrevSearchQuery(searchQuery)
        } catch (error) {
            console.error('Error occured during search:', error);
        }
        console.log('search query:', searchQuery);
        console.log(searchResults);
        setSearchQuery('');
    };

    const justiceLeague = [

        {
            "Title": "Justice League",
            "Year": "2017",
            "imdbID": "tt0974015",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Zack Snyder's Justice League",
            "Year": "2021",
            "imdbID": "tt12361974",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
        },
        {
            "Title": "Justice League",
            "Year": "2001–2004",
            "imdbID": "tt0275137",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGQxYzExOGEtYjE2Ni00YzNlLTkyMGEtZTM0NDE3ZTIzODU1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: The Flashpoint Paradox",
            "Year": "2013",
            "imdbID": "tt2820466",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNTljYzgtOTU3ZC00ZjhhLTk0YzItY2RiMWU0MGZlNzFjL2ltYWdlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Doom",
            "Year": "2012",
            "imdbID": "tt2027128",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTFlMzdkMDgtNzJmZC00ZmE3LThkYzktNGZmNmMzZmNhYmY5XkEyXkFqcGdeQXVyNDYwMjI1MzI@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: War",
            "Year": "2014",
            "imdbID": "tt3060952",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjA3NzUtNDhjNS00OGNlLWI4ZWUtYzhkMmJiZDU2ZWExXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Crisis on Two Earths",
            "Year": "2010",
            "imdbID": "tt1494772",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzg0ODZjNjUtNmVhZi00NTYxLWExNWMtMWI3MDFiMjhiNjc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League Dark",
            "Year": "2017",
            "imdbID": "tt2494376",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmNkMGU4YzEtZTdhZS00YzBhLTgzYzAtZWM2NTQ0ZGU2ZjM3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League: Throne of Atlantis",
            "Year": "2015",
            "imdbID": "tt3878542",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGYwYTBjYTEtODE1NS00OTA2LTk5ZTctM2I0ZWViMTc4NDljXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
        },
        {
            "Title": "Justice League vs. Teen Titans",
            "Year": "2016",
            "imdbID": "tt5091548",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFiYTBkOGQtZjAwNi00OGMwLTg0YzQtNjI5YmFlZjY3ZWM3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
        }
    ];

    const avengers = [
        {
            "Title": "The Avengers",
            "Year": "2012",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Age of Ultron",
            "Year": "2015",
            "imdbID": "tt2395427",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
            "Title": "The Avengers",
            "Year": "1998",
            "imdbID": "tt0118661",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            "Title": "The Avengers: Earth's Mightiest Heroes",
            "Year": "2010–2012",
            "imdbID": "tt1626038",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        },
        {
            "Title": "Ultimate Avengers: The Movie",
            "Year": "2006",
            "imdbID": "tt0491703",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
        },
        {
            "Title": "Ultimate Avengers II",
            "Year": "2006",
            "imdbID": "tt0803093",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Avengers",
            "Year": "1961–1969",
            "imdbID": "tt0054518",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers Assemble",
            "Year": "2012–2019",
            "imdbID": "tt2455546",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
        }
    ];

    const starWars = [
        {
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VII - The Force Awakens",
            "Year": "2015",
            "imdbID": "tt2488496",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode I - The Phantom Menace",
            "Year": "1999",
            "imdbID": "tt0120915",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode III - Revenge of the Sith",
            "Year": "2005",
            "imdbID": "tt0121766",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode II - Attack of the Clones",
            "Year": "2002",
            "imdbID": "tt0121765",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        },
        {
            "Title": "Rogue One: A Star Wars Story",
            "Year": "2016",
            "imdbID": "tt3748528",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VIII - The Last Jedi",
            "Year": "2017",
            "imdbID": "tt2527336",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode IX - The Rise of Skywalker",
            "Year": "2019",
            "imdbID": "tt2527338",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
        }
    ];

    

    return (
        <div className="bg-gray-900 text-white py-16 text-center">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold mb-8 ">Welcome to Movie App</h1>
                <p className="text-xl">Explore and discover your Favorite Movies</p>
                <p className="text-sm">Add Favorite Movies to your Favorite List</p>
                <p className="text-sm">Get details about the Movie</p>
                <p className="text-sm mb-12">Watch a Trailer about the movie</p>
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

            

            {searchResults && (
                <div className="flex justify-center items-center flex-col">
                    {prevSearchQuery && <h2 className="text-3xl font-bold mb-8">Your Search: '{prevSearchQuery}' </h2>}
                    <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
                    {searchResults && searchResults.map((movie) => (
                        <div className="hover:scale-105 transition ease-in">
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                
            )}

            {justiceLeague && (
                <div className="flex justify-center items-center flex-col">
                    <h2 className="text-3xl font-bold mb-8">Justice League</h2>
                    <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
                    {justiceLeague && justiceLeague.map((movie) => (
                        <div className="hover:scale-105 transition ease-in">
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                
            )}

            {avengers && (
                <div className="flex justify-center items-center flex-col">
                    <h2 className="text-3xl font-bold mb-8">Avengers</h2>
                    <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
                    {avengers && avengers.map((movie) => (
                        <div className="hover:scale-105 transition ease-in">
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                
            )}

            {starWars && (
                <div className="flex justify-center items-center flex-col">
                    <h2 className="text-3xl font-bold mb-8">Star Wars</h2>
                    <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
                    {starWars && starWars.map((movie) => (
                        <div className="hover:scale-105 transition ease-in">
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                
            )}



            

            {/* <h2 className="text-3xl font-bold mb-8">Justice League</h2>
            <div className="flex justify-center items-center">

            </div>
            <div className="p-4 grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {justiceLeague.map((movie) => (
                    <div className="hover:scale-105 transition ease-in">
                        <Link to={`/movies/${movie.imdbID}`}>
                        <MovieCard
                            key={movie.imdbID}
                            image={movie.Poster}
                            title={movie.Title}
                            releaseDate={movie.Year}
                            type={movie.Type}
                        />
                        </Link>
                    </div>
                ))}
            </div> */}

            {/* <h2 className="text-3xl font-bold mb-8">Avengers</h2>
            <div className="flex justify-center items-center">
                <div className="p-4 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
                    {avengers.map((movie) => (
                        <div className="hover:scale-105 transition ease-in">
                            <Link to={`/movies/${movie.imdbID}`}>
                            <MovieCard
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                releaseDate={movie.Year}
                                type={movie.Type}
                            />
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>
            

            <h2 className="text-3xl font-bold mb-8">Star Wars</h2>
            <div className="p-4 grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
                {starWars.map((movie) => (
                    <div className="hover:scale-105 transition ease-in">
                        <Link to={`/movies/${movie.imdbID}`}>
                        <MovieCard
                            key={movie.imdbID}
                            image={movie.Poster}
                            title={movie.Title}
                            releaseDate={movie.Year}
                            type={movie.Type}
                        />
                        </Link>
                    </div>
                    
                ))}
            </div> */}
        </div>
    );
};

export default LandingPage;