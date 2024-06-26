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

export const getEmotionString = async (str) => {
  const response = await instance.get(`/emotion/search?q=${str}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
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

export const getAnaylsis = async (id) => {
  const response = await instance.get(`/diaries/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
