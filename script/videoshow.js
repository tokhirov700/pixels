import axios from './axios.js';

document.addEventListener('DOMContentLoaded', async () => {
    const loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.style.display = 'block';

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get('id');


        console.log(videoId);

        const response = await axios.get(`/videos/videos/${videoId}`, {
            headers: {
                "Authorization": "3UZqHOSNt76jnHmV6OqRKahtPfDsCJpuQQZX19Q46sjtVWo5Z5KucCft"
            }
        });

        const videoData = response.data;
        if (videoData && videoData.video_files && videoData.video_files.length > 0) {
            const videoElement = document.getElementById('full-video');
            videoElement.src = videoData.video_files[0].link;
        } else {
            alert('No video files available.');
        }
    } catch (error) {
        console.error('Error loading video detail:', error);
        alert('Failed to load video. Please try again later.');
    } finally {
        loadingIndicator.style.display = 'none';
    }
});







