import { Button } from "bootstrap";
import styled from "styled-components";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const OrderModal = (isOpen) => {
  return isOpen == true ? (
    <ReactModal isOpen={isOpen}>
      <div>모달 입니다.</div>
      <button onClick={() => setOpen(false)}>닫기</button>
    </ReactModal>
  ) : null;
};

export default OrderModal;
