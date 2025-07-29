import { useState } from "react";
import "./NoticeList.scss";

const NoticeList = () => {
  const [notices] = useState([
    { id: 1, title: "더미데이터1", date: "2025-07-10" },
    { id: 2, title: "더미데이터2", date: "2025-07-11" },
    { id: 3, title: "더미데이터3", date: "2025-07-12" },
    { id: 4, title: "더미데이터4", date: "2025-07-13" },
    { id: 5, title: "더미데이터5", date: "2025-07-14" },
    { id: 6, title: "더미데이터6", date: "2025-07-15" },
  ]);

  return (
    <div className="notice-list">
      <p className="notice-title">공지사항</p>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id} className="notice-item">
            <div className="notice-num">{notice.id}</div>
            <div className="notice-text">{notice.title}</div>
            <div className="notice-date">{notice.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
