import styled from "styled-components";

const BackButton = ({ onClick }) => {
  return (
    <div>
      <IconPosition onClick={onClick}>
        <Icon></Icon>
      </IconPosition>
    </div>
  );
};

const IconPosition = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 20px;
  top: 25px;
`;

const Icon = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 10px;
  top: 10px;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  transform: rotate(315deg);
`;

export default BackButton;
