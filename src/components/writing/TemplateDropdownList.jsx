import React from 'react';
import Styled from '../../styles/components/template';
import movieTemplate from '@/assets/movie-template.png';
import travelTemplate from '@/assets/travel-template.png';
import thanksTemplate from '@/assets/thanks-template.png';
import threeLInesTemplate from '@/assets/three-lines-template.png';
import parentingTemplate from '@/assets/parenting-template.png';
import thanksTemplate2 from '@/assets/thanks-template2.png';
import cookTemplate from '@/assets/cook-template.png';
import readingTemplate from '@/assets/reading-template.png';

const TemplateDropdownList = () => {
  const items = [
    {
      src: movieTemplate,
      name: '영화일기',
      content: '오늘은 영화가 인상깊었네!',
    },
    {
      src: travelTemplate,
      name: '여행일기',
      content: '신나는 기분을 마음껏!!',
    },

    {
      src: thanksTemplate,
      name: '감사일기',
      content: '오늘도 감사합니다~',
    },

    {
      src: threeLInesTemplate,
      name: '3줄일기',
      content: '간단한 나의 하루',
    },

    {
      src: parentingTemplate,
      name: '육아일기',
      content: '우리 아이의 일생',
    },

    {
      src: thanksTemplate2,
      name: '감사일기(2)',
      content: '매일매일이 감사해요~',
    },

    {
      src: cookTemplate,
      name: '요리일기',
      content: '맛있는 요리는 늘 기분이 좋아~',
    },

    {
      src: readingTemplate,
      name: '독서일기',
      content: '감명 깊은 하루',
    },
  ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <Styled.TemplateItemContainer key={index}>
            <img src={item.src} />
            <div>
              <strong className="template-name">{item.name}</strong>
              <span className="template-content">{item.content}</span>
            </div>
          </Styled.TemplateItemContainer>
        );
      })}
    </>
  );
};

export default TemplateDropdownList;
