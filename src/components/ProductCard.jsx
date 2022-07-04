import styled from "styled-components";

const ProductCard = ({name,description,thumbnail}) =>{
    return(
        <div>

            <ProductCardImgStyle>
        <img src={thumbnail} alt={name} width="500"/>
        </ProductCardImgStyle>
        <ProductCardNameStyle>
            <div>{name}</div>
            </ProductCardNameStyle>
            <ProductDescriptionStyle>            
            <div>{description}</div>
            </ProductDescriptionStyle>
        </div>
    ); 
};

const ProductCardWrap = styled.div `
width: 65%;
border: 1px;
`;

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

const ProductCardImgStyle = styled.div `
object-fit: cover
`;

export default ProductCard ;