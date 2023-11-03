import { Container } from './style'

export default function LinkButton({ children, ...rest }){
  return(
    <Container {...rest}>{ children }</Container>
  )
}