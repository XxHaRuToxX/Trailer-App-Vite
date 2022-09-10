import axios from 'axios';

export const getMovies = async (shown, valueSearch) => {

    try {
        const data = await axios.get(`${import.meta.env.VITE_APP_API}${shown}/movie`, {
            params: {
                api_key: import.meta.env.VITE_APP_API_KEY,
                query: valueSearch
            }
        });
        const results = data.data.results;
        return results;
    } catch (error) {
        console.log(error);
    }
}

export const getTvShows = async (shows, valueSearch) => {

    try {
        const data = await axios.get(`${import.meta.env.VITE_APP_API}${shows}/tv`, {
            params: {
                api_key: import.meta.env.VITE_APP_API_KEY,
                query:valueSearch
            }
        });
        const results = data.data.results;
        return results;
    } catch (error) {
        console.log(error);
    }
}

export const getTrends = async () => {

    const trendsShown = "trending/all/week"

    try {
        const data = await axios.get(`${import.meta.env.VITE_APP_API}${trendsShown}`, {
            params: {
                api_key: import.meta.env.VITE_APP_API_KEY,
            }
        });
        const results = data.data.results;
        return results;
    } catch (error) {
        console.log(error);
    }
}

