import axios from "axios";

const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      Authorization: 'Client-ID E08XuUmocRE1N0NEIv0knI6Z9LYNDigl5tUM8YD8E7A',
    },
  });
  
  export default async function getImages(query, page) {
    const params = {
      query,
      page,
      per_page: 12,
    };
  
    const response = await unsplashApi.get('search/photos', { params });
    return response.data;
  }
