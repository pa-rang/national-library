import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://52.78.94.149:5000/api',
});

export const reservationApi = {
	getStudio: () => instance.get('/reservation/studio'),
	getSeminar: () => instance.get('/reservation/seminar'),
};
