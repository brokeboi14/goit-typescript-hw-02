import axios from "axios";

const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      Authorization: 'Client-ID E08XuUmocRE1N0NEIv0knI6Z9LYNDigl5tUM8YD8E7A',
    },
  });
  
export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number; 
  description?: string;
}

  export interface UnsplashResponse {
    results: Image[];
    total: number;
    total_pages: number;
  }

  export default async function getImages(query: string, page: number): Promise<UnsplashResponse> {
    const params = {
      query,
      page,
      per_page: 12,
    };
  
    const response = await unsplashApi.get<UnsplashResponse>('search/photos', { params });
    return response.data;
  }