import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import styled from "styled-components";
import { reviewData } from "../data/reviewData";
import Review from "../components/Review";
import MenuTab from "../components/MenuTab";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);


  /*const onClickReviewButton = (themeid) =>{
    if(themeid ===1){
      console.log("1번이 찍혔음");
    }else{
      console.log("다른 번호가 찍혔음");
    }
  }
*/
  return (
    <div>
      <Navigation />
      
      {product && (
      <>
        <img src={product.thumbnail} width="550" height="550"  alt={product.name}/>
        <FontStyle>{product.name}</FontStyle>
        <FontStyle>{product.price}</FontStyle>
      </>
      )}
      <div>
      <MenuTab/> 
      </div>   
    </div>
    ); 
};
const ButtonStyled = styled.div `
width: 550px;
height: 50px;
display: flex;
text-align: center;
`;

const FontStyle = styled.div`
font-size: 25px;
font-weight: 700;
left: 20px;
`;



export default ProductDetail;