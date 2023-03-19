import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/zuvrFGkaNcY4ZegKKcr826hlgeE70GK1',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;