import PropTypes from 'prop-types';

import { MessageText } from './Message.styled';

export default function Message({ text }) {
  return <MessageText>{text}</MessageText>;
}

Message.propTypes = {
  text: PropTypes.string,
};
