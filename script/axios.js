const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "3UZqHOSNt76jnHmV6OqRKahtPfDsCJpuQQZX19Q46sjtVWo5Z5KucCft"
    },

    timeout: 10000
});

export default instance;








