import { useState } from 'react';
import Styled from '../../styles/components/writinginput';
import completedIcon from '@/assets/icon/completed-icon.svg';
import { getKeyword } from '@/apis/api';

const WritingInput = ({ onClick }) => {
  const [value, setValue] = useState('');

  const handleKeywordLoad = async (inputValue) => {
    try {
      const result = await getKeyword({ inputValue });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    const inputValue = e.target[0].value;
    e.preventDefault();
    onClick(true);
    handleKeywordLoad(inputValue);
    // console.log(inputValue);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.Input
        name="content"
        value={value}
        onChange={handleInput}
        placeholder="OOO님의 오늘 하루 이야기를 작성해주세요"
      />
      <Styled.CompletedBtn>
        <span>작성완료</span>
        <img src={completedIcon} />
      </Styled.CompletedBtn>
    </form>
  );
};

export default WritingInput;
