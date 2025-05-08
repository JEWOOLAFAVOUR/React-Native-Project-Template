import axios, {Method, AxiosResponse, AxiosError} from 'axios';
import client from './client';

interface ApiResponse<T = any> {
  data?: T;
  status?: number;
  error?: string;
}

interface ApiErrorResponse {
  data?: any;
  status?: number;
}

const makeApiRequest = async <T = any>(
  method: Method,
  endpoint: string,
  data?: unknown,
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await client.request({
      method,
      url: endpoint,
      data,
    });
    return {data: response.data, status: response.status};
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const response = axiosError.response as ApiErrorResponse;
      return {
        data: response.data,
        status: response.status,
      };
    }
    return {
      error: axiosError.message || 'An unknown error occurred',
    };
  }
};

export const registerUser = async (data: unknown): Promise<ApiResponse> => {
  const response = await makeApiRequest('POST', '/auth/register', data);
  return response;
};

export const loginUser = async (
  data: unknown,
): Promise<ApiResponse<{token: string}>> => {
  console.log('Login data:', data);
  const response = await makeApiRequest('POST', '/auth/login', data);
  return response;
};
