import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ScreenContainer from "../../component/ScreenContainer";
import { dummyPosts } from "./dummyData";
import "./PostMain.scss";

const PostMain = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{

        const fetchPosts = async () => {
            try{
                const response = await axios.get("http://43.202.217.156:8080/api/posting/list/1")

                console.log(response.data.data)

                setPosts(response.data.data);

                console.log("Posts는: " + posts);

            }catch(error){
                console.log("에러");
            }
        }

        fetchPosts();

     }, []);

     const handleClick = (post) => {
        localStorage.setItem("postId", post.id);
        navigate("/post/detail");
     };

  return (
    <ScreenContainer>
        <p className="title">인기 게시글</p>
        <div className="post-main">
            <div className="post-header">
            <p className="title">게시글</p>
            <Link to="/post/write" className="write-btn">게시글 작성</Link>
            </div>

             <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <div className="left">
                <p className="post-title">Q. {post.title}</p>
                <p className="post-content">{post.content}</p>
              </div>
              <div className="right">
                <p className="post-date">{post.created_at}</p>
                <button className="detail-btn" onClick={() => handleClick(post)}>자세히 보기</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ScreenContainer>

  );
};

export default PostMain;
