import styled from "styled-components";
import Navigaion from "../components/Navigation";
import ProductCardDettial from "../components/ProductCardDetai"
import ProductReview from "../components/ProductReview";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const ProductDetail = ()=>{
    const[products, setproducts] = useState();
    const onClick = ()=>{
    }

    return(
        <div>
        <Navigaion/>
            <ProductCardDettial name ="비숑 블랙 머그잔"
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
            price={"21,800원"}
            alt="비숑 블랙 머그잔"/>
            <ProductReviewButton>상품 설명</ProductReviewButton>
            <ProductReviewButton>상품 후기</ProductReviewButton>
        <div>
        <ProductDetailStyle>    
        <ProductCard
            name="비숑 블랙 머그잔" 
            description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙
            &화이트 비숑 머그잔입니다."
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
            />
            </ProductDetailStyle>
            <FontStyle>관련 상품</FontStyle>
      <ProductReviewStyle>
      <img Width='230' Height='230'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg'} />
      <ProductReview name={'장바구니 담기'}></ProductReview>
      </ProductReviewStyle>
      <ProductReviewStyle>
      <img Width='230' Height='230'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg'} />
      <ProductReview name={'장바구니 담기'}></ProductReview>
      </ProductReviewStyle>
        </div>
    </div>
    ); 
};

const PrductStyle = styled.div `
//outline: 1px solid black;
text-decoration-line:none;
margin-top: 30px;
width:255px; 
height:40px;
background: #eeeeee;
color: black;
font-weight: 700;
float: left;
font-size:15px;
text-align:center;
padding-top:20px; 
margin-bottom: 30px;
`;

const ProductDetailStyle = styled.div`
position: relative;
margin-top: 100px;
float: none;
width: 400px;
`;

const ProductReviewStyle = styled.div`
width: 200px;
float: left; 
margin-top: 30px;
margin-right: 60px;
`;
const FontStyle = styled.div`
//text-align: center;
position: relative;
font-size: 25px;
font-weight: 700;
padding: 24px 16px;
left: 150px;
`;

const ProductReviewButton = styled.button `
width:250px;
height: 50px;
background-color: #eeeeee;
`;

export default ProductDetail;