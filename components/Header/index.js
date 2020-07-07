import React from 'react';

import Button from '../Button'

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.Left>
        <S.Logo src="images/logo.svg" />
        <S.Pages>
          <S.Page href="#">Features</S.Page>
          <S.Page href="#">Pricing</S.Page>
          <S.Page href="#">Resources</S.Page>
        </S.Pages>
      </S.Left>
      <S.Right>
        <S.Page href="#">Login</S.Page>
        <S.Button>
          <Button text="Sign Up" rounded onPress={() => {}} />
        </S.Button>
      </S.Right>
    </S.Header>
  );
}

export default Header;