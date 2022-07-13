import { useState } from "react";
import { Nav } from "react-bootstrap";
import { reviewData } from "../data/reviewData";
import Review from "../components/Review";

const MenuTab = () => {
  let [productTab, setproductTab] = useState({});

  function Tab(themeId) {
    <Tab productTab={productTab} />;
    if (themeId.productTab === 0) {
      return <div> 상세 정보 </div>;
    } else if (themeId.productTab === 1) {
      return (
        <div>
          {reviewData.map((item, idx) => (
            <>
              <Review
                name={item.name}
                detail={item.detail}
                date={item.date}
                grade={item.grade}
              />
              <div style={{ height: 20 }}></div>
            </>
          ))}{" "}
        </div>
      );
    }
    console.log("버튼 누름");
  }

  return (
    <Nav className="mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link
          eventKey="link-0"
          onClick={() => {
            setproductTab(0);
          }}
        >
          상세 설명
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          onClick={() => {
            setproductTab(1);
          }}
        >
          상품후기
        </Nav.Link>
        <Tab productTab={productTab} />
      </Nav.Item>
    </Nav>
  );
};

export default MenuTab;
