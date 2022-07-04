import styled from "styled-components";

const ProductCardDetail = ({name,thumbnail,price}) =>{
    return(
        <div>
        <img 
         src={thumbnail}
         alt={name}
         width="500"
         border="3px"/>
        <ProductCardNameStyle>
            <div>{name}</div>
        </ProductCardNameStyle>
            <PriceStyle>
                <div>{price}</div>
                </PriceStyle>
        </div>
    ); 
};

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

const ProductCardImgStyle = styled.div `
object-fit: cover;
border: 5px;
border-width: 2px;
`;
export default ProductCardDetail ;