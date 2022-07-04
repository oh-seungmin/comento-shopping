import styled from "styled-components";

const ProductCard = ({name,description,thumbnail}) =>{
    return(
        <div>


        <img src={thumbnail} alt={name} width="500"/>

        <ProductCardNameStyle>
            <div>{name}</div>
            </ProductCardNameStyle>
            <ProductDescriptionStyle>            
            <div>{description}</div>
            </ProductDescriptionStyle>
        </div>
    ); 
};


const ProductCardNameStyle = styled.div `
  padding: 16px;  
  background-color: white;
  text-align: left;
  font-weight: 700;
  font-size: 25px;
`;

const ProductDescriptionStyle = styled.div `
  padding: 16px;  
  background-color: white;
  font-weight: 700;
  text-align: left;
`;

export default ProductCard ;