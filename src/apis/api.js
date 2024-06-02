import axios from 'axios';

const baseURL = 'https://server.mooner.dev/dambda/api/v1';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 3000,
});

export const getKeyword = async ({ content }) => {
  const response = await instance.post(
    '/diaries/write/analyze',
    {
      content: content,
    },
    {
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  return response.data;
};
