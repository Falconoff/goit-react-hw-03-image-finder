import { Button, BtnContainer } from './Button.styled';

export default function ShowMoreBtn({ onClickHandler }) {
  return (
    <BtnContainer>
      <Button type="button" onClick={onClickHandler}>
        Load more
      </Button>
    </BtnContainer>
  );
}
