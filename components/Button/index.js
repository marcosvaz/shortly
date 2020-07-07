import React from 'react';

import * as S from './styles';

const Button = ({ text, onPress, size, rounded }) => {
  return (
    <S.Button size={size} rounded={rounded} onClick={() => onPress()}>{text}</S.Button>
  );
}

export default Button;