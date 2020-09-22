import React, { useState, useEffect } from 'react'
import  { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
//import CheckBox from '../../shared/CheckBox/CheckBox'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/products.json';

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    /* criar o estado: */
    // const [lettuce, setLettuce] = useState(true) /* get e set, true = inicial */
    // const [rice, setRice] = useState(false)
    /* const [healthy, setHealthy] = useState(20) */

    // criar estado dos produtos json:
    const [products, setProducts] = useState(productsMock.products)
    
    // estado para aparecer lista somente se produto for marcado:
    const [selectedProducts, setSelectedProducts] = useState([])
    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked) // ele vai filtrar o array e trazer somente os produtos que estão com o checked = true;
        setSelectedProducts(newSelectedProducts)
    }, [products]) // dependencia de products, sempre que products for alterado essa função irá ser executada
    


    /* na criação do compente executa a função */
    /* executar depois de 5 segundos */
    /*
    useEffect(function () { 
        setTimeout(() => { 
            setHealthy(80)
        }, 5000)
    })
    */

    function handleToggle (id, checked, name) {
        // console.log(id, checked, name)
        const newProducts = products.map(product => {
            return product.id === id
                ? { ...product, checked: !product.checked }
                : product
            
        })
         
        setProducts(newProducts);

            /*
            if (product.id === id) {
                return {
                    ...product,
                    checked: !product.checked
                }
            } else {
                return product
            }
            */
        
        
    }

    return <Wrapper>

        <Container>

            <AppHeader>

            </AppHeader>

            <AppContainer 
                left={
                    <ShoppingList 
                        title="Produtos disponíveis" 
                        products = {products}
                        onToggle={handleToggle}
                    />}
                middle={
                    <ShoppingList 
                        title="Sua lista de compras" 
                        products = {selectedProducts}
                        onToggle={handleToggle}
                    />}
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



