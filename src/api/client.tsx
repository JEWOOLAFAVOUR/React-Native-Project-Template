import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const BASE_URL = 'your base url';

const client: AxiosInstance = axios.create({baseURL: BASE_URL});

// Add a request interceptor to add the authentication token to every request
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Using a dummy token instead of Redux
    const dummyToken = 'your_dummy_token_here';

    // Add the token to the request headers
    if (dummyToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${dummyToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default client;
