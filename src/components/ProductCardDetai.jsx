import styled from "styled-components";

const ProductCardDetail = ({name,thumbnail,price}) =>{
    return(
        <div>
        <ProductCardDetailImgStyle 
         src={thumbnail}
         alt={name}/>
        <ProductCardNameStyle>{name}</ProductCardNameStyle>
            <PriceStyle>{price}</PriceStyle>
        </div>
    ); 
};
const ProductCardDetailImgStyle = styled.img`
  object-fit: cover;
  width: 500px;
  border: 3px;
  height: 350px;
`;


const ProductCardNameStyle = styled.div `
  position:relative;
  background-color: white;
  left: 20px;
  font-weight: 700;
  font-size: 25px;
`;

const PriceStyle = styled.div`
  position: relative;
  padding-top: 5px;
  left: 20px;
  font-size: 20px;
  background-color: white;
  text-align: left;
`;

export default ProductCardDetail ;