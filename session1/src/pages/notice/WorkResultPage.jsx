import { useState } from "react";
import ScreenContainer from "../../component/ScreenContainer";
import "./WorkResultPage.scss";

const WorkResultPage = () => {
  const [selected, setSelected] = useState([]);

  const toggleHandler = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const notice = {
    title: "내 근로 결과지",
    date: "2025.07.10",
    content: `본문`,
  };

  const buttons = [
    "가산수당",
    "주휴수당",
    "야간근로수당",
    "연장근로수당",
    "휴일근로수당",
  ];

  return (
    <ScreenContainer>
      <div className="work-detail">
        <p className="detail-title">{notice.title}</p>
        <p className="detail-date">{notice.date}</p>
        <div className="detail-text">
          {notice.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        
        <p className="down-title">발생 요건들</p>
        <div className="button-container">
          {buttons.map((label) => (
            <button
              key={label}
              className={`detail-button ${
                selected.includes(label) ? "selected" : ""
              }`}
              onClick={() => toggleHandler(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default WorkResultPage;
