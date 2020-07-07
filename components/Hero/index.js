import React from 'react';

import Button from '../Button'

import * as S from './styles';

const Hero = () => {
  return (
    <S.Hero>
      <S.Container>
        <S.Title>
          More than just shorter links
        </S.Title>
        <S.Description>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </S.Description>
        <S.Button>
          <Button text="Get Started" size='medium' rounded onPress={() => {}} />
        </S.Button>
      </S.Container>
      <S.Illustration src="images/illustration-working.svg" />
    </S.Hero>   
  );
}

export default Hero;