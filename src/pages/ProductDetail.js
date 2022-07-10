import styled from "styled-components";
import Navigaion from "../components/Navigation";
import ProductCardDettial from "../components/ProductCardDetai"
import ProductReview from "../components/ProductReview";
import ProductCard from "../components/ProductCard";


const ProductDetail = ()=>{
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
            alt = "비숑 블랙 머그잔"

            />
            </ProductDetailStyle>
      <FontStyle>관련 상품</FontStyle>
        <ProductReviewStyle>
            <img Width='230' Height='230'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg'}
            alt= "가열 보온 티코스터 온열 원터치 컵 받침대" />
                <ProductReview name={'장바구니 담기'}></ProductReview>
        </ProductReviewStyle>
        <ProductReviewStyle>
            <img Width='230' Height='230'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg'}
            alt= "벨루즈까사 솜사탕 파스텔 머그 4종 세트" />
                <ProductReview name={'장바구니 담기'}></ProductReview>
        </ProductReviewStyle>
        </div>
    </div>
    ); 
};


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