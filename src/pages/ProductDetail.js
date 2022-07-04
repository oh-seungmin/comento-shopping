import styled from "styled-components";
import Navigaion from "../components/Navigation";
import ProductCardDettial from "../components/ProductCardDetai"

const ProductDetail = ()=>{
    return(
        <div>
        <Navigaion/>
        <div>
            <ProductCardDettial name ="비숑 블랙 머그잔"
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
            price={"21,800원"}/>
        </div>
        <div>
            <PrductStyle><a href>상품 설명</a></PrductStyle>
            <PrductStyle><a href>상품 후기</a></PrductStyle>
        
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
`;
export default ProductDetail;