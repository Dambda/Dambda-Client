import Styled from '@/styles/components/recommendtodo';
import coffeeIcon from '@/assets/icon/activity/drink-coffee.svg';
import bookIcon from '@/assets/icon/activity/read-book.svg';
import gameIcon from '@/assets/icon/activity/play-game.svg';
import musicIcon from '@/assets/icon/activity/music.svg';
import drawingIcon from '@/assets/icon/activity/drawing.svg';
import exerciseIcon from '@/assets/icon/activity/exercise.svg';
import eatSnackIcon from '@/assets/icon/activity/eat-snack.svg';
import eatDeliciousIcon from '@/assets/icon/activity/eat-delicious.svg';

const RecommendTodo = ({ index, icon, text }) => {
  const src =
    icon === 'coffeeIcon'
      ? coffeeIcon
      : icon === 'bookIcon'
        ? bookIcon
        : icon === 'gameIcon'
          ? gameIcon
          : icon === 'musicIcon'
            ? musicIcon
            : icon === 'drawingIcon'
              ? drawingIcon
              : icon === 'exerciseIcon'
                ? exerciseIcon
                : icon === 'eatSnackIcon'
                  ? eatSnackIcon
                  : icon === 'eatDeliciousIcon'
                    ? eatDeliciousIcon
                    : null;
  return (
    <Styled.Container>
      <strong className="classification">{index}</strong>
      <img src={src} className="todo-icon" alt="todo-icon" />
      <p className="recommended-phrase">
        {text.split('\n').map((content) => {
          return (
            <>
              {content}
              <br />
            </>
          );
        })}
      </p>
    </Styled.Container>
  );
};

export default RecommendTodo;
