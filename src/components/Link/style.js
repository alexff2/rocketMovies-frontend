import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.primary};
  text-decoration: none;
`