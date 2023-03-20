import axios from 'axios';
const client = axios.create({
baseURL: 'https://api.outsidein.dev/exxbCrbkA4UFQtubQsBKR5aX2DCN04j2',
});
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
        },
    };
    export default api;