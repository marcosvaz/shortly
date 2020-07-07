import styled from 'styled-components';
import theme from '../../config/theme';

export const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 60px auto;
  margin-bottom: 120px;
  max-width: ${theme.sizes.container};
`;

export const Container = styled.div``;

export const Title = styled.h1`
  ${theme.fonts.poppins};

  color: ${theme.colors.darkBlue};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: ${64*1.2}px;
  margin-bottom: 0;
  width: 480px;
`;

export const Description = styled.p`
  ${theme.fonts.poppins};

  color: ${theme.colors.grayishViolet};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: ${18*1.8}px;
  letter-spacing: 0.5px;
  margin-top: 0;
`

export const Button = styled.div`
  margin-top: 30px;
`

export const Illustration = styled.img`
  margin-left: 60px;
  position: relative;
`;