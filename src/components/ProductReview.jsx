import React from 'react'
import styled from 'styled-components'

const ProductReview = ({name,onClick}) => {
  return (
    <Button onClick={onClick}>
        <ButtonText >
        {name}
        </ButtonText>
    </Button>
  )
}
const Button = styled.div`
width: 230px;
background-color: #eeeeee;
  `; 
  const ButtonText = styled.div`

  `; 
export default ProductReview;