// import PropTypes from 'prop-types';
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular';

import { SpinnerWrapper } from './Loader.styled';

export default function ShowLoader() {
  return (
    <SpinnerWrapper>
      <SpinnerCircular color={'#3f51b5'} />
    </SpinnerWrapper>
  );
}
