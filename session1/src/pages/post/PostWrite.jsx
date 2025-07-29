import { useState } from "react";
import ScreenContainer from "../../component/ScreenContainer";
import "./PostWrite.scss";
import axios from "axios";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [boardType, setBoardType] = useState({ answer: false, info: false });

  const toggleCheckbox = (type) => {
    setBoardType((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSubmit = async() => {
    try{

        const data = {
            user_id: 1,
            worksheet_id: 1,
            title: title,
            content: content,
            type: 1
        }

        const response = await axios.post("http://43.202.217.156:8080/api/posting", data);

        console.log(response);

    } catch(error){
        console.log("에러");
    }
  };

  return (
    <ScreenContainer>
      <div className="post-write">
        <div className="form-group">
          <label>게시글 제목</label>
          <input
            type="text"
            placeholder="질문 제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>게시판 선택</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={boardType.answer}
                onChange={() => toggleCheckbox("answer")}
              />
              네편 답변
            </label>
            <label>
              <input
                type="checkbox"
                checked={boardType.info}
                onChange={() => toggleCheckbox("info")}
              />
              네편 정보
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>게시글 내용</label>
          <textarea
            placeholder="질문 내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>내 결과지 가져오기(선택)</label>
          <div className="result-box">
            <span className="plus">+</span>
          </div>
        </div>

        <div className="btn-box">
          <button onClick={handleSubmit}>등록하기</button>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default PostWrite;
