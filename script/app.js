import axios from './axios.js'; 
import { renderPhotosInGrid, renderVideosInGrid } from './render.js';

const loadPhotos = async () => {
    const response = await axios.get('https://api.pexels.com/v1/search?query=nature&per_page=60', {
        headers: {
            "Authorization": "3UZqHOSNt76jnHmV6OqRKahtPfDsCJpuQQZX19Q46sjtVWo5Z5KucCft"
        }
    });
    const data = response.data;
    renderPhotosInGrid(data.photos);
};

const loadVideos = async () => {
    const response = await axios.get('https://api.pexels.com/videos/search?query=nature&per_page=60', {
        headers: {
            "Authorization": "3UZqHOSNt76jnHmV6OqRKahtPfDsCJpuQQZX19Q46sjtVWo5Z5KucCft"
        }
    });
    const data = response.data;
    renderVideosInGrid(data.videos);
};

loadPhotos();
loadVideos();

