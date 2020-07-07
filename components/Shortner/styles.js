import styled from 'styled-components';
import theme from '../../config/theme'

export const Container = styled.div`
  align-items: center;
  background: url('images/bg-shorten-desktop.svg') center center ${theme.colors.darkBlue};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: ${theme.sizes.container};
  padding: 40px 5px;
  position: relative;
  top: -70px;
  z-index: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Input = styled.input`
  ${theme.fonts.poppins};

  border: ${props => props.error ? `2px solid ${theme.colors.red}` : '2px solid transparent'};
  border-radius: 8px;
  color: ${theme.colors.darkViolet};
  font-family: 'Poppins', sans-serif;
  padding: 20px 25px;

  ::placeholder {
    color: ${props => props.error ? theme.colors.red : theme.colors.grayishViolet};
  }
`;

export const ErrorMessage = styled.i`
  ${theme.fonts.poppins};

  color: ${theme.colors.red};
  font-family: 'Poppins', sans-serif;
  position: absolute;
  bottom: 15px;
`;

export const Button = styled.div`
  margin-left: 20px;
`;

export const Shortned = styled.div`
  margin: 0 auto;
  max-width: ${theme.sizes.container};
  position: relative;
  top: -50px;
`;

export const ShortnedLink = styled.div`
  background: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 8px 30px;
`;

export const Title = styled.h3`
  ${theme.fonts.poppins};

  color: ${theme.colors.darkBlue};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const ShortItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Link = styled.h3`
  ${theme.fonts.poppins};

  color: ${theme.colors.primary};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const CopyButton = styled.div`
  margin-left: 25px;
`;