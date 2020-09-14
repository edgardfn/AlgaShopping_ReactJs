import React, { useState, useEffect } from 'react'
import  { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import CheckBox from '../../shared/CheckBox/CheckBox'
import LineChart from '../../shared/LineChart'

function App () {

    /* criar o estado: */
    const [lettuce, setLettuce] = useState(true) /* get e set, true = inicial */
    const [rice, setRice] = useState(false)
    /* const [healthy, setHealthy] = useState(20) */
    
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    /* na criação do compente executa a função */
    /* executar depois de 5 segundos */
    /*
    useEffect(function () { 
        setTimeout(() => { 
            setHealthy(80)
        }, 5000)
    })
    */

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

                    <LineChart 
                        color={colors[0]} title="Saudável" percentage={80}
                    />
                    <LineChart 
                        color={colors[1]}title="Não tão Saudável" percentage={20}
                    />
                    <LineChart 
                        color={colors[2]}title="Limpeza" percentage={35}
                    />
                    <LineChart 
                        color={colors[3]}title="Outros" percentage={15}
                    />
                    
                </div>}
            />
           
        </Container>
        
    </Wrapper>

}

export default App

