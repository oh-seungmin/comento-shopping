import Navigaion from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  // 테마 버튼 클릭 Event
  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else {
      setProducts(mockTheme2Produdcts);
    }
    console.log("버튼 누름");
  };

  useEffect(() => {
    // 1초 후, 상품 초기화
    setTimeout(() => {
      setProducts(mockTheme1Produdcts);
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <Navigaion />
        <NavigationLine />
        <ThemeSection>
          <ThemeButton
            themeName={"#겨울방한탬"}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            themeName={"#따순 머그컵"}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>

        <GrayLine />
      </div>
      <ProductSection>
        {products ? (
          products.map((product) => (
            <ProductCard
              onClick={() => navigate(`product/${product.id}`)}
              key={product.id}
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))
        ) : (
          <div>테마를 선택해주세요</div>
        )}
      </ProductSection>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

const NavigationLine = styled.div`
  height: 4px;
  width: 100%;
  background: #eeeeee;
`;

export default Home;
