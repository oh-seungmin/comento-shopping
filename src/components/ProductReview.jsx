import React from 'react'
import styled from 'styled-components'

const ProductReview = ({name}) => {
  return (
    <Button>
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
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  line-height: 70.06px;
  
  `; 
export default ProductReview;