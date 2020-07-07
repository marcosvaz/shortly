import styled from 'styled-components'
import theme from '../../config/theme'

export const Button = styled.button`
  ${theme.fonts.poppins};

  --webkit-appearance: none;
  background: ${theme.colors.primary};
  border: none;
  border-radius: ${props => props.rounded ? '50' : '10'}px;
  box-sizing: border-box;
  color: ${theme.colors.white};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  ${props => !props.size && 'width: 120px'};
  padding: ${ props => props.size === 'medium' ? '15px 35px' : props.size === 'big' ? '20px 35px' : '10px 25px'};

  &:hover {
    background: ${theme.colors.primaryHover};
  }

  &:focus {
    background: ${theme.colors.darkViolet};
    color: ${theme.colors.white};
  }
`