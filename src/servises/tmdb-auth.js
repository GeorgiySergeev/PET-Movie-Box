import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/authentication/token/new',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_TMDB_AUTH,
  },
};

export const createRequestToken = async () => {
  const response = await axios(options.url, {
    method: 'GET',
    headers: options.headers,
  });
  console.log('responseToken', response.data.request_token);
  return response.data.request_token;
};

export const validateTokenWithLogin = async (
  username,
  password,
  requestToken
) => {
  console.log('Response:', username, password, requestToken);
  try {
    const response = await axios.post(
      'https://api.themoviedb.org/3/authentication/token/validate_with_login',
      {
        username,
        password,
        request_token: requestToken,
      },
      {
        params: {
          api_key: API_KEY,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // В response.data будет содержаться ответ от сервера
    console.log('Response:', response.data);

    // Вернуть результат валидации
    return response.data.success;
  } catch (error) {
    // Обработка ошибок
    console.error('Error:', error);
    throw error;
  }
};
