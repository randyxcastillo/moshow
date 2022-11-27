// import axiosClient from "./axiosClient";
// import apiConfig from './apiConfig';

// export const category = {
//     movie: 'movie',
//     tv: 'tv'
// }

// export const movieType = {
//     upcoming: 'upcoming',
//     popular: 'popular',
//     top_rated: 'top_rated'
// }

// export const tvType = {
//     popular: 'popular',
//     top_rated: 'top_rated',
//     on_the_air: 'on_the_air'
// }

// const tmdbApi = {
//     getMoviesList: (type, params) => {
//         console.log(params.params)
//         const url = 'movie/'.concat(movieType[type], '?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url);
//     },
//     getTvList: (type, params) => {
//         console.log(params.params)
//         const url = 'tv/'.concat(tvType[type], '?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url);
//     },
//     getVideos: (cate, id) => {
//         const url = category[cate].concat('/', id, '/videos?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url, {params: {}});
//     },
//     search: (cate, params) => {
//         console.log(params.params)
//         const url = 'search/'.concat(category[cate], '?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url, params);
//     },
//     detail: (cate, id, params) => {
//         console.log(params.params)
//         const url = category[cate].concat('/', id, '?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url, params);
//     },
//     credits: (cate, id) => {
//         const url = category[cate].concat('/', id, '/credits?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url, {params: {}});
//     },
//     similar: (cate, id) => {
//         const url = category[cate].concat('/', id, '/similar?api_key=', apiConfig.apiKey);
//         return axiosClient.get(url, {params: {}});
//     },
// }

// export default tmdbApi;

import axiosClient from "./axiosClient";

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
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;