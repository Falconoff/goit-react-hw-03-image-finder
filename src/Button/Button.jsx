// import { Component } from 'react/cjs/react.production.min';

import { Button, BtnContainer } from './Button.styled';

// export default class ShowMoreBtn extends Component {

export default function ShowMoreBtn({ onClickHandler }) {
  // onClickHandler = evt => {
  //   console.log('click on More btn');
  // };

  // render() {
  return (
    <BtnContainer>
      <Button type="button" onClick={onClickHandler}>
        Load more
      </Button>
    </BtnContainer>
  );
  // }
}
