import React, { useState, useEffect } from 'react'
import  { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
//import CheckBox from '../../shared/CheckBox/CheckBox'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/products.json';
import extractPercentage from '../../utils/extractPercentage'
import Calculator from '../Calculator'

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    /* criar o estado: */
    // const [lettuce, setLettuce] = useState(true) /* get e set, true = inicial */
    // const [rice, setRice] = useState(false)
    /* const [healthy, setHealthy] = useState(20) */

    // criar estado dos produtos json:
    const [products, setProducts] = useState(productsMock.products)
    
    //estado para exibir valores dos produtos selecionados:
    const [totalPrice, setTotalPrice] = useState(0) // iniciar com 0


    // estado para aparecer lista somente se produto for marcado:
    const [selectedProducts, setSelectedProducts] = useState([])
    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked) // ele vai filtrar o array e trazer somente os produtos que estão com o checked = true;
        setSelectedProducts(newSelectedProducts)
    }, [products]) // dependencia de products, sempre que products for alterado essa função irá ser executada
    
    // Call back para retornar valores dos produtos, call back vai ser acinado comente quando o selectedProducts for alterado.
    useEffect(() => {
        const total = selectedProducts
            .map(product => product.price)
            .reduce((a, b) => a + b, 0)
        
        setTotalPrice(total)
    }, [selectedProducts])

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
                        color={colors[0]} 
                        title="Saudável" 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('healthy'))
                                .length
                        )}
                    />
                    <LineChart 
                        color={colors[1]}
                        title="Não tão Saudável" 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('junk'))
                                .length
                        )}
                    />
                    <LineChart 
                        color={colors[2]}
                        title="Limpeza" 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('cleaning'))
                                .length
                        )}
                    />
                    <LineChart 
                        color={colors[3]}
                        title="Outros" 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts
                                .filter(product => product.tags.includes('others'))
                                .length
                        )}
                    />

                    <div style={{marginTop:12}}>
                            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                                previsão de gastos:
                            </h2>
                            <div style={{ fontSize: 24 }}>
                                { totalPrice.toLocaleString('pt-br', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                }) }
                            </div>

                            <Calculator />

                    </div>
                    
                </div>}
            />
           
        </Container>
        
    </Wrapper>

}

export default App



