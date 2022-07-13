import React from "react";
import styled from "styled-components";

const BasketButton = ({ name, onClick }) => {
  return (
    <Button onClick={onClick}>
      <ButtonText>{name}</ButtonText>
    </Button>
  );
};
const Button = styled.div`
  width: 300px;
  background-color: #24dbaf;
`;
const ButtonText = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 70px;
`;
export default BasketButton;
