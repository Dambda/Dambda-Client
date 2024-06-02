import instance from './instance/instance';

export const getKeyword = async ({ content }) => {
  const data = { content };
  const response = await instance.post('/diaries/write/analyze', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
