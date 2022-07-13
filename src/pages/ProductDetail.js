import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import styled from "styled-components";
import MenuTab from "../components/MenuTab";
import BasketButton from "../components/BasketButton";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  return (
    <div>
      <Navigation />

      {product && (
        <>
          <img
            src={product.thumbnail}
            width="550"
            height="550"
            alt={product.name}
          />
          <FontStyle>{product.name}</FontStyle>
          <FontStyle>{product.price}</FontStyle>
        </>
      )}
      <div>
        <MenuTab />
      </div>
      <BasketButton name={"장바구니에 담기"}></BasketButton>
    </div>
  );
};

const FontStyle = styled.div`
  font-size: 25px;
  font-weight: 700;
  left: 20px;
`;

export default ProductDetail;
