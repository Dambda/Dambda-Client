import { useState } from 'react';
import Styled from '../../styles/components/writinginput';
import completedIcon from '@/assets/icon/completed-icon.svg';

const WritingInput = () => {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  return (
    <form>
      <Styled.Input
        name="content"
        value={value}
        onChange={handleInput}
        placeholder="OO님의 오늘 하루 이야기를 작성해주세요"
      />
      <Styled.CompletedBtn>
        <span>작성완료</span>
        <img src={completedIcon} />
      </Styled.CompletedBtn>
    </form>
  );
};

export default WritingInput;
