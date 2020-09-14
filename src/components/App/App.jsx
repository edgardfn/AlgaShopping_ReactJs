import React, { useState } from 'react'
import  { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import CheckBox from '../../shared/CheckBox/CheckBox'

function App () {

    /* criar o estado: */
    const [lettuce, setLettuce] = useState(true) /* get e set, true = inicial */
    const [rice, setRice] = useState(false)

    return <Wrapper>

        <Container>

            <AppHeader>

            </AppHeader>

            <AppContainer 
                left={<div>
                    produtos disponiveis:

                    <CheckBox 
                        value= {lettuce}
                        title= "Alface"
                        onClick={() => setLettuce(!lettuce)}
                    />
                    <CheckBox 
                        value= {rice}
                        title= "Arroz"
                        onClick={() => setRice(!rice)}
                    />
                </div>}
                middle={<div>
                   sua lista de compras 
                </div>}
                right={<div>
                    estatisticas
                </div>}
            />
           
        </Container>
        
    </Wrapper>

}

export default App

