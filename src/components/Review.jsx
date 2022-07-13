import React from "react";
import styled from "styled-components";
const Review = ({ name, detail, grade, date }) => {
  return (
    <CommentStyled>
      <div style={{ height: 70, width: 600 }}>
        <div>
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
export default Review;
