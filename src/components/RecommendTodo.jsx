import Styled from '@/styles/components/recommendtodo';
import coffeeIcon from '@/assets/icon/activity/drink-coffee.svg';
import bookIcon from '@/assets/icon/activity/read-book.svg';
import gameIcon from '@/assets/icon/activity/play-game.svg';

const RecommendTodo = ({ index, icon, text }) => {
  const src =
    icon === 'coffeeIcon'
      ? coffeeIcon
      : icon === 'bookIcon'
        ? bookIcon
        : icon === 'gameIcon'
          ? gameIcon
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
