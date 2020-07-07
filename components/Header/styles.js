import styled from 'styled-components'
import theme from '../../config/theme'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${theme.sizes.container};
  margin: 50px auto;
`

export const Left = styled.div`
  align-items: center;
  display: flex;
`

export const Logo = styled.img`
  margin-right: 25px;
`

export const Pages = styled.div`
  display: inline-block;
`

export const Page = styled.a`
  ${theme.fonts.poppins};

  color: ${theme.colors.gray};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.darkViolet};
  }
`

export const Right = styled.div`
  align-items: center;
  display: flex;
`
export const Button = styled.div`
  margin-left: 20px;
`