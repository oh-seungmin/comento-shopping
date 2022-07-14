import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BasketItem from "../components/BasketItem";
import BackButton from "../components/BackButton";
import * as storage from "../utils/storage";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);

  // Basket이 렌더링 될때, 한번만 실행되는 로직
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  // [장바구니 상품 갯수]가 바뀌면, 실행되는 로직
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  const navigate = useNavigate();

  return (
    <BasketStyled>
      <BackButton onClick={() => navigate("/")} />
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((product) => (
          <BasketItem
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            onClickRemoveButton={() => onClickRemoveButton(product.id)}
          />
        ))}

      <div>상품 {basketItemCount}개 </div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

export default Basket;
