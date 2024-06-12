export const renderPhotosInGrid = (photos) => { 
    const imageGrid = document.querySelector('#images');
    const imageGridsArray = Array.from(imageGrid.children);
    imageGridsArray.forEach((imageGrid, index) => {
        const imageDataGroups = photos.slice(index * 20, (index + 1) * 20);
        const imagesFragment = document.createDocumentFragment();
        imageDataGroups.forEach((imageData) => {
            const a = document.createElement('a');
            a.className = "image-grid-row";
            a.href = `../pages/photo.html?id=${imageData.id}`;
            a.innerHTML = `<img src="${imageData.src.medium}" alt="${imageData.alt}">`;
            imagesFragment.appendChild(a); 
        });
        imageGrid.appendChild(imagesFragment);
    });
};

export const renderVideosInGrid = (videos) => { 
    const videoGrid = document.querySelector('#videos');
    const videoGridsArray = Array.from(videoGrid.children);
    videoGridsArray.forEach((videoGrid, index) => {
        const videoDataGroups = videos.slice(index * 20, (index + 1) * 20);
        const videosFragment = document.createDocumentFragment();
        videoDataGroups.forEach((videoData) => {
            const a = document.createElement('a');
            a.className = "video-grid-row";
            a.href = `../pages/videoshow.html?id=${videoData.id}`;
            a.innerHTML = `
                <video width="320" height="240" controls>
                    <source src="${videoData.video_files[0].link}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            videosFragment.appendChild(a); 
        });
        videoGrid.appendChild(videosFragment);
    });
};
