import axios from 'axios';
const client = axios.create({
baseURL: 'https://api.outsidein.dev/exxbCrbkA4UFQtubQsBKR5aX2DCN04j2/restaurants',
});
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        console.log(response.data);
        return response.data;
        },
    };
    export default api;