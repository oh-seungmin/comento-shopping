import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import styled from "styled-components";


const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();

  const [product, setProduct] = useState();
  const [catergoryIndex, setCategoryIndex] = useState(0);
  const categories = ['상품설명','상품후기'];

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  const buttonstyled = {display:'grid',alignItems:'center',flex:2};
  const selectbutton = {backgroundColor:'#eeeeee'};

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
    <ButtonStyled>
          {
          categories ? (
          categories.map((item,idx) => (
            <div style={Object.assign({},buttonstyled,catergoryIndex===idx && selectbutton)} key={idx} onClick={()=>{setCategoryIndex(idx)}}>{item}</div>
          ))
        ) : (
          <div>제품이 없습니다.</div>
        )}
        </ButtonStyled>
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
position: relative;
font-size: 25px;
font-weight: 700;
padding: 24px 16px;
left: 20px;
`;

export default ProductDetail;