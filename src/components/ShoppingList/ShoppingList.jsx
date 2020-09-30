import React from 'react';
//import { useSelector } from 'react-redux';
import CheckBox from '../../shared/CheckBox';
//import { selectAllProducts } from '../../store/Products/Products.selectors';
import { Wrapper, Title, Array } from './ShoppingList.styles';

function ShoppingList({ title, products, onToggle }) {
  // const productsFromRedux = useSelector(selectAllProducts) // utilização do estado.

  /*
  useEffect(
    () => console.table(productsFromRedux), 
    [productsFromRedux]
  )
  */
 
  return <Wrapper>
    <Title>
      {title} :
    </Title>

    <Array>

      {
        products.map(product => 
          <CheckBox 
            key={product.id}
            value={product.checked} 
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }

    </Array>

  </Wrapper>
    
}

export default ShoppingList