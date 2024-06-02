import { useEffect, useState } from 'react';
import Styled from '../../styles/components/writinginput';
import SelectionModal from '@/components/writing/SelectionModal';
import completedIcon from '@/assets/icon/completed-icon.svg';
import { getKeyword } from '@/apis/api';

const WritingInput = ({ setContent, setModalView, setLoading }) => {
  const [value, setValue] = useState('');

  const handleKeywordLoad = async (inputValue) => {
    try {
      setLoading(true);
      const keywords = await getKeyword(inputValue);
      setContent(keywords.content);
      setLoading(false);
      setModalView(true); // data 불러온 후 modal 띄우기
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
