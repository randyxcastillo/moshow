import axiosClient from "./axiosClient";
import apiConfig from './apiConfig';

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type) => {
        const url = 'movie/'.concat(movieType[type], '?api_key=', apiConfig.apiKey);
        return axiosClient.get(url);
    },
    getTvList: (type) => {
        const url = 'tv/'.concat(tvType[type], '?api_key=', apiConfig.apiKey);
        return axiosClient.get(url);
    },
    getVideos: (cate, id) => {
        var url = ''
        if (cate === 'movie') {
            url = url.concat('movie/', id, '/videos?api_key=', apiConfig.apiKey);
        } else {
            url = url.concat('tv/', id, '/videos?api_key=', apiConfig.apiKey);
        }
        return axiosClient.get(url);
    },
    search: (cate, params) => {
        var url = ''
        if (cate === 'movie') {
            url = 'search/movie?api_key='.concat(apiConfig.apiKey);
        } else {
            url = 'search/tv?api_key='.concat(apiConfig.apiKey);
        }
        return axiosClient.get(url, params);
    },
    detail: (cate, id) => {
        var url = ''
        if (cate === 'movie') {
            url = url.concat('movie/', id, '?api_key=', apiConfig.apiKey);
        } else {
            url = url.concat('tv/', id, '?api_key=', apiConfig.apiKey);
        }
        return axiosClient.get(url);
    },
    credits: (cate, id) => {
        var url = ''
        if (cate === 'movie') {
            url = url.concat('movie/', id, '/credits?api_key=', apiConfig.apiKey);
        } else {
            url = url.concat('tv/', id, '/credits?api_key=', apiConfig.apiKey);
        }
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        var url = ''
        if (cate === 'movie') {
            url = url.concat('movie/', id, '/similar?api_key=', apiConfig.apiKey);
        } else {
            url = url.concat('tv/', id, '/similar?api_key=', apiConfig.apiKey);
        }
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;