import BoxComponent from "../../component/main/BoxComponent";
import SideBoxComponent from "../../component/main/SideBoxComponent";
import ScreenContainer from "../../component/ScreenContainer";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <ScreenContainer>
      <div className="main-container">
        <div className="box">
          <BoxComponent
            number="1"
            title="내 계약서 검토"
            text={
              <>
                우선 나의 근로계약서가 제대로 된 계약서인지를 검토해 봐야 해요<br />
                근로 계약서에 유의깊게 봐야할 항목 확인!
              </>
            }
          />
          <SideBoxComponent />
        </div>

        <div className="box">
          <SideBoxComponent />
          <BoxComponent
            number="2"
            title="내 근로 정리"
            text={
              <>
                지피지기 백전백승!<br />
                우선 나의 근로계약서를 검토해 봐야 해요
              </>
            }
          />
        </div>

        <div className="box">
          <BoxComponent
            number="3"
            title="네편 현답"
            text={
              <>      
                지피지기 백전백승!<br />
                우선 나의 근로계약서를 검토해 봐야 해요
              </>
            }
          />
          <SideBoxComponent />
        </div>
      </div>
    </ScreenContainer>
  );
};

export default MainPage;