import React from "react";
import styled from "styled-components";
const Review = ({ thumbnail, name, detail, grade, date }) => {
  return (
    <CommentStyled>
      <div style={{ height: 70, width: 600 }}>
        <div>
          <ProfileImg
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></ProfileImg>
          <div style={{ color: "black" }}>{grade}</div>
          <div>{name + " || " + date}</div>
        </div>
      </div>
      <div>{detail}</div>
    </CommentStyled>
  );
};

const CommentStyled = styled.div`
  background-color: rgb(250, 250, 250);
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
`;
export default Review;
