import styled from "styled-components";

export const OrderModal = ({ isOpen, onCancel }) => {
  const handleClickCancel = () => {
    console.log("닫기버튼 클릭");
    onCancel();
  };
  return isOpen ? (
    <Modal>
      <ModalBody>
        <ModalStyled>주문 되었습니다.</ModalStyled>
        <div>
          <ModalBtnStyled onClick={handleClickCancel}>확인</ModalBtnStyled>
        </div>
      </ModalBody>
    </Modal>
  ) : null;
};

const ModalStyled = styled.div`
  position: flex;
  font-size: 150%;
  font-weight: 700;
  left: 150px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const ModalBtnStyled = styled.div`
  position: absolute;
  left: 80px;
  background-color: #eeeeee;
  width: fit-content;
  border-radius: 10px;
  font-size: 20px;
  line-height: 5px;
  padding: 24px 40px;
  color: black;
`;

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalBody = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
`;
export default OrderModal;
