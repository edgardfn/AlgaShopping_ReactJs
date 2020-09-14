import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  cursor: default;

`

export const Indicator = styled.div`
  height: 14px; 
  width: 14px;
  
  border-radius: 7px;

  ${props => props.value ? 'background-color: #004D61;' : ''} /* (ternaria) caso props.value = verdadeiro retorna o que está depois de ?, caso falso retorna o que está depois dos :   */
  border: 2px solid #004D61;

  margin-right: 8px;
  cursor: pointer;

`