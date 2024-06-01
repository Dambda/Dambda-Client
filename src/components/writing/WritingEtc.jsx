import Styled from '@/styles/components/writingmenu';
import paperClip from '@/assets/icon/menu/paper-clip.svg';
import link from '@/assets/icon/menu/link.svg';
import pin from '@/assets/icon/menu/pin.svg';
import sun from '@/assets/icon/menu/sun.svg';
import smile from '@/assets/icon/menu/smile.svg';
import lable from '@/assets/icon/menu/lable.svg';

const WritingEtc = () => {
  const sources = [paperClip, link, pin, sun, smile, lable];

  return (
    <Styled.EtcContainer>
      {sources.map((item, index) => {
        return <img src={item} key={index} />;
      })}
    </Styled.EtcContainer>
  );
};

export default WritingEtc;
