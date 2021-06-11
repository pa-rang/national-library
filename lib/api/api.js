import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://52.78.94.149:5000/api',
});

export const getStudioInfo = async () => {
	try {
		const data = await instance.get('/reservation/studio');
		console.log(data.data);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};
