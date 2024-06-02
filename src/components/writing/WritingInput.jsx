import { useState } from 'react';
import Styled from '../../styles/components/writinginput';
import completedIcon from '@/assets/icon/completed-icon.svg';
import { getKeyword } from '@/apis/api';

const WritingInput = ({ modalViewChange, handleLoading }) => {
  const [value, setValue] = useState('');

  const handleKeywordLoad = async (inputValue) => {
    try {
      handleLoading(true);
      const result = await getKeyword({ content: inputValue });
      console.log(result);
      handleLoading(false);
    } catch (error) {
      console.error(error);
      handleLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modalViewChange(true);
    const inputValue = e.target[0].value;
    handleKeywordLoad(inputValue);
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
