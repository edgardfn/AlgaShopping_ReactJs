import React from 'react';
import { useSelector } from 'react-redux';
import CheckBox from '../../shared/CheckBox';
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors';
import { Wrapper, Title, Array } from './ShoppingList.styles';

function ShoppingList({ title, onToggle, displayOnlySelected }) {
  const products = useSelector(
    displayOnlySelected 
      ? selectSelectedProducts // se ela existir
      : selectAllProducts 
  )  

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