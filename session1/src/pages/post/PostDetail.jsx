import { useParams } from "react-router-dom";
import ScreenContainer from "../../component/ScreenContainer";
import { dummyPosts } from "./dummyData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostDetail.scss";

const PostDetail = () => {
  const { id } = useParams();
//   const post = dummyPosts.find((item) => item.id === parseInt(id));

    const navigate = useNavigate();
    
    const goPostPageHandler = () => {
        navigate(`/post`);
    }

    const [post, setPost] = useState(null);

        useEffect(()=>{

        const postId = localStorage.getItem("postId");

        const fetchPosts = async ()=> {
            try{
                const response = await axios.get(`http://43.202.217.156:8080/api/posting/${postId}`)

                setPost(response.data.data);

            } catch(error){
                console.log("에러");
            }
        }

        fetchPosts();

     }, []);

  if (!post) return <ScreenContainer><p>게시글을 찾을 수 없습니다.</p></ScreenContainer>;

  return (
    <ScreenContainer>
      <div className="post-detail">
        <p className="detail-title">Q. {post.title}</p>
        <p className="detail-meta">{post.author}</p>
        <p className="detail-meta">{post.date}</p>
        <div className="detail-content">
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <hr />
        <textarea placeholder="답변을 입력하세요" disabled />
      </div>
    </ScreenContainer>
  );
};

export default PostDetail;
