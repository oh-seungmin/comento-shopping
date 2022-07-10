import styled from "styled-components";

const ProductCard = ({name,description,thumbnail}) =>{
    return(
        <div>


        <ProductCardImgStyle src={thumbnail} alt={name} />
          <ProductCardNameStyle>
            <div>{name}</div>
          </ProductCardNameStyle>
          <ProductDescriptionStyle>            
            <div>{description}</div>
          </ProductDescriptionStyle>
        </div>
    ); 
};

const ProductCardImgStyle = styled.img`
object-fit: cover;
width: 500px;
height: 350px;
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
  white-space: pre-line;
`;

export default ProductCard ;