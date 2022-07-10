import styled from "styled-components";

const Navigaion = () =>{
    return(
        <div>
            <NavigaionStyled>코맨트 쇼핑</NavigaionStyled>
        </div>
    ); 
};

const NavigaionStyled = styled.div`
//text-align: center;
position: relative;
font-size: 25px;
font-weight: 700;
padding: 24px 16px;
left: 150px;
`;

export default Navigaion;