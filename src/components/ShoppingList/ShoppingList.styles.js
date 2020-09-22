import styled from 'styled-components'

export const Wrapper = styled.div`


`

export const Title = styled.h2`
  color: #004D61;
  font-size: 18px;
  font-weight: 400;
  text-transform: lowercase; 
  height: 32px;
`
// text-transform: lowercase; =todos caracteres caixa baixa

export const Array = styled.div`
  height: 424px;

  overflow-y: auto;
`

// overflow-y: auto; caso o conteudo no eixo y seja maior que o componente é inserido barra de rolagem;