import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import styled from "styled-components";
import MenuTab from "../components/MenuTab";
import BackButton from "../components/BackButton";
import * as storage from "../utils/storage";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);

  //navigate 사용
  const navigate = useNavigate();

  const onClickAddBasketButton = () => {
    storage.addBasket(product);
    navigate("/basket");
  };
  return (
    <div>
      {product && (
        <>
          <BackButton onClick={() => navigate("/")} />
          <Navigation />
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
      <AddBasketButton onClick={onClickAddBasketButton}>
        장바구니 담기
      </AddBasketButton>
    </div>
  );
};

const FontStyle = styled.div`
  font-size: 25px;
  font-weight: 700;
  left: 20px;
`;

const AddBasketButton = styled.div`
  bottom: 0px;
  width: 100%;
  max-width: 390px;
  height: 70px;
  background: #24dbaf;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export default ProductDetail;
