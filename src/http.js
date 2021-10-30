import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

const baseURL = process.env.VUE_APP_API_ENDPOINT;

let instance = axios.create({ 
  baseURL: baseURL,
});

instance.interceptors.request.use(async(config) => {
    const { token } = await firebase.auth().currentUser.getIdTokenResult();
    config.headers["Authorization"] = `Bearer ${token}`

    return config
})

export default instance;