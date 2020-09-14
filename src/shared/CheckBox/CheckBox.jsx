import React from 'react'
import { Wrapper, Indicator } from './CheckBox.styles';

function CheckBox ({value, title, onClick}) {
  return <Wrapper onClick={onClick}>
    <Indicator value={value} />
    {title}
  </Wrapper>
}

export default CheckBox