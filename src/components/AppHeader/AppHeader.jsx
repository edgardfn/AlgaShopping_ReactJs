import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from './AppHeader.styles'

function AppHeader () {
  const result = useSelector(state => state.calculator) // estado global
  return <Wrapper>
    alga
    <span>
      Shopping
    </span>

    <span>
      { result } 
    </span>
    
  </Wrapper>

}

export default AppHeader

// 1:06:39