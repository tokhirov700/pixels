import axios from './axios.js';

const loadPhotoDetail = async () => {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.textContent = 'Loading...';
    document.body.appendChild(loadingIndicator);
    loadingIndicator.style.display = 'block';

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const photoId = urlParams.get('id');

        const response = await axios.get(`/photos/${photoId}`, {
            headers: {
                "Authorization": "3UZqHOSNt76jnHmV6OqRKahtPfDsCJpuQQZX19Q46sjtVWo5Z5KucCft"
            }
        });

        const photoData = response.data;
        document.getElementById('full-image').src = photoData.src.original;
        document.getElementById('full-image').alt = photoData.alt;
    } catch (error) {
        console.error('Error loading photo detail:', error);
        alert('Failed to load photo. Please try again later.');
    } finally {
        loadingIndicator.style.display = 'none';
    }
}


loadPhotoDetail();


