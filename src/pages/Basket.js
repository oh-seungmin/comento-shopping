import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BasketItem from "../components/BasketItem";
import BackButton from "../components/BackButton";
import * as storage from "../utils/storage";
import { useNavigate } from "react-router-dom";
import OrderModal from "../components/OrderModal";

const Basket = () => {
  let delivery_fee = 2500;

  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [baskeItemPrice, setBasketPrice] = useState(0);

  // Basket이 렌더링 될때, 한번만 실행되는 로직
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
    TotalPrice(items);
  }, []);

  // [장바구니 상품 갯수]가 바뀌면, 실행되는 로직
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    TotalPrice(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickCancel = () => {
    setOpen(false);
    navigate("/");
  };

  const TotalPrice = (items) => {
    let totalprice = 0;
    for (var i = 0; i < items.length; i++) {
      totalprice += parseInt(items[i].price);
    }
    return setBasketPrice(totalprice);
  };

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

      <Basketbody>
        <Basketdetail>
          <div>상품 금액({basketItemCount}개)</div>
          <div>배송비</div>
          <div>총 주문금액</div>
        </Basketdetail>
        <Basketdetail style={{ textAlign: "right" }}>
          <div>{baskeItemPrice}원</div>
          <div>{delivery_fee}</div>
          <div>{baskeItemPrice + delivery_fee}원</div>
        </Basketdetail>
      </Basketbody>
      <AddBasketButtons onClick={handleClick}>장바구니 담기</AddBasketButtons>
      <OrderModal isOpen={isOpen} onCancel={handleClickCancel} />
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

const AddBasketButtons = styled.div`
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
const Basketbody = styled.div`
  display: flex;
`;
const Basketdetail = styled.div`
  padding: 16px;
  margin: 10px 0px;
  flex: 1;
`;

export default Basket;
