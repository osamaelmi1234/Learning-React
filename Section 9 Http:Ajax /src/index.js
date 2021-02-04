import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
	//edit request before you return it, you must return it
	console.log(request)
	return request
}, error => {
	console.log(error)
	return Promise.reject(error);
});

axios.interceptors.response.use(request => {
	//edit request before you return it, you must return it
	console.log(request)
	return request
}, error => {console.log(error)
	return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
