import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://52.78.94.149:5000',
});

export const reservationApi = {
	getStudio: () => instance.get('/api/reservation/studio'),
	getSeminar: () => instance.get('/api/reservation/seminar'),
};
