import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/challenge-d087a/us-central1/api', // the api (clound function)url
});

export default instance;