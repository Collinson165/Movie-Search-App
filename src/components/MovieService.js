import axios from 'axios';

const OMDB_API_KEY  = process.env.REACT_APP_OMDB_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const MovieSearch = {
    searchMovies: async (query) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
            console.log('got a response!!')
            console.log(response);
            return response.data.Search;
        } catch (error) {
            console.log('Error getting a response :(')
            console.error('Error occured during movie Serach:', error);
            return [];
        }
    },

    getMovieById: async (id) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
            console.log('got a response!!')
            console.log(response);
            return response.data;
        } catch (error) {
            console.log('Error getting a response :(')
            console.error('Error occured during movie Serach:', error);
            return [];
        }

    },

    fetchTrailer: async (movieTitle) => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: `${movieTitle} trailer`,
                    part: 'snippet',
                    maxResults: 1,
                    key: `${YOUTUBE_API_KEY}`,
                },
            });
            console.log('success fetching youtube trailer');
            return response.data.items[0].id.videoId;
        } catch (error) {
            console.log('Error Fetching Movie Trailer:', error);
            return [];
        }
    },

    // getLatestMovies: async (year) => {
    //     try {
    //         const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&y=${year}`);
    //         console.log('got a response!!')
    //         console.log(response);
    //         return response.data;
    //     } catch (error) {
    //         console.log('Error getting a response :(')
    //         console.error('Error occured during movie Serach:', error);
    //         return [];
    //     }
        
    // },
};

export default MovieSearch;