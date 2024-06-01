import Styled from '@/styles/components/typography';

const fonts = ['맑은 고딕', '함초롱바탕', '굴림', '바탕', '돋움'];

const FontsDropdown = ({ onClick }) => {
  const handleFontType = (item) => {
    onClick(item.target.innerText);
    // console.log(item.target.innerText);
  };
  return (
    <Styled.FontDropdown>
      {fonts.map((item, index) => {
        return (
          <li key={index} onClick={handleFontType}>
            {item}
          </li>
        );
      })}
    </Styled.FontDropdown>
  );
};

export default FontsDropdown;
