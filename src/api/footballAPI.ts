import axios from 'axios';

const API_KEY_HEADER = 'x-apisports-key';
const API_KEY_VALIDATION_ENDPOINT = 'https://v3.football.api-sports.io/status';

export const validateApiKey = async (apiKey: string): Promise<boolean> => {
  try {
    const response = await axios.get(API_KEY_VALIDATION_ENDPOINT, {
      headers: {
        [API_KEY_HEADER]: apiKey,
      },
    });
    console.log(response.data, 'response.data');
    console.log(response.data.results, 'response.data.results');

    if (response.data.results) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
