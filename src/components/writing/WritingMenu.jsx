import React, { useState } from 'react';
import Layout from '@/styles/components/writingmenu';
import Typography from './Typography';
import topic from '@/assets/icon/menu/topic.svg';
import template from '@/assets/icon/menu/template.svg';

const WritingMenu = () => {
  return (
    <>
      <Layout.Container>
        <Typography />
        <Layout.TemplateContainer>
          <div>
            <span>주제</span>
            <img src={topic}></img>
          </div>
          <div>
            <span>템플릿</span>
            <img src={template}></img>
          </div>
        </Layout.TemplateContainer>
      </Layout.Container>
    </>
  );
};

export default WritingMenu;
