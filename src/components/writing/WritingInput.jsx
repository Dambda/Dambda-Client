import { useState } from 'react';
import Input from '../../styles/components/writinginput';

const WritingInput = () => {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  return (
    <form>
      <Input
        name="content"
        value={value}
        onChange={handleInput}
        placeholder="OO님의 오늘 하루 이야기를 작성해주세요"
      />
    </form>
  );
};

export default WritingInput;
