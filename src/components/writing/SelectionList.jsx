import React from 'react';
import Styled from '@/styles/components/modal';

const SelectionList = ({ items, col }) => {
  return (
    <Styled.Ul col={col}>
      {items.map((item, index) => {
        return (
          <Styled.Li key={index} checked={item.isChecked}>
            {item.name}
          </Styled.Li>
        );
      })}
    </Styled.Ul>
  );
};

export default SelectionList;
