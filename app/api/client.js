import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://172.30.1.69:9000/api',
});

export default apiClient;
