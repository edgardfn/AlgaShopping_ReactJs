import React from 'react';
import CheckBox from '../../shared/CheckBox';
import { Wrapper, Title, Array } from './ShoppingList.styles';

function ShoppingList({ title, products, onToggle }) {
  return <Wrapper>
    <Title>
      {title} :
    </Title>

    <Array>

      {
        products.map(product => 
          <CheckBox 
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

