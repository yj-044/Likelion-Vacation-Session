import ScreenContainer from "../../component/ScreenContainer";
import "./NoticeDetailPage.scss";

const NoticeDetailPage = () => {
  const notice = {
    title: "네편 설명서",
    date: "2025.07.10",
    content: `본문`
  };

  return (
    <ScreenContainer>
      <div className="notice-detail">
        <p className="detail-title">{notice.title}</p>
        <p className="detail-date">{notice.date}</p>
        <div className="detail-text">
          {notice.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default NoticeDetailPage;
