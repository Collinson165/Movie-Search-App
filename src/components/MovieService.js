import axios from 'axios';

const API_KEY  = process.env.REACT_APP_OMDB_API_KEY;

const MovieSearch = {
    searchMovies: async (query) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
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
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            console.log('got a response!!')
            console.log(response);
            return response.data;
        } catch (error) {
            console.log('Error getting a response :(')
            console.error('Error occured during movie Serach:', error);
            return [];
        }

    },

    // getLatestMovies: async (year) => {
    //     try {
    //         const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&y=${year}`);
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