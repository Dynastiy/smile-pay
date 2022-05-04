import Vue from 'vue'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import store from '../store'

Vue.use(Toastify)

import axios from "axios";
const BASE_URL = 'https://dev.szcmerchant.com/api';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": 'GET, HEAD, PUT, PATCH, POST, DELETE'
        "Authorization": `Token ${store.state.token}`
    }
});

// Add a request interceptor
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    // alert("requesting")
    console.log(`${store.state.token}`);
    const token = `${store.state.token}`;

    if (token) {
        config.headers['Authorization'] = `Token ${store.state.token}`;
    }

    return config;
}, function(error) {
    // Do something with request error
    alert("something went wrong")
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {

    // console.log(error);
    // console.log(error.response.data.detail);
    Toastify({
        text: error.response.data.detail,
        className: "info",
        style: {
            background: "red",
        }
    }).showToast();

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    // return error
});

export default instance