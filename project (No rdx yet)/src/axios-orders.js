import axios from 'axios';

 const instance = axios.create({
	baseURL: 'https://react-my-burger-5a575-default-rtdb.firebaseio.com/'
});

 export default instance;