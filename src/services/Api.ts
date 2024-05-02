// Api service
import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from 'src/types/ApiResponse';

const baseUrl = 'https://randomuser.me/api/';

const Api = {
  getStudents: async (page: number = 1): Promise<ApiResponse> => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(baseUrl, {
        params: { results: 20, page },
      });

      if (response.status !== 200) {
        throw new Error(
          `API request failed with status code: ${response.status}`,
        );
      }

      return response.data;
    } catch (error: any) {
      console.error('Error fetching students:', error);
      throw error;
    }
  },
};

export const getStudents = Api.getStudents;
