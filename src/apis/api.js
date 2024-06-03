import instance from './instance/instance';

export const getKeyword = async (inputValue) => {
  const response = await instance.post(
    '/diaries/write/analyze',
    { content: inputValue },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};

export const getID = async (emotions, words) => {
  const response = await instance.post(
    '/diaries/write/confirm',
    { emotions, words },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};
