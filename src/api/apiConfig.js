const api_key = process.env.REACT_APP_API_KEY;

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: api_key,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;