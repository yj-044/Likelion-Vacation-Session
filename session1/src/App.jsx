import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Signup/Login";
import Main from "./pages/main/Main";
import NoticePage from "./pages/notice/NoticePage";
import NoticeDetailPage from "./pages/notice/NoticeDetailPage";
import MainLayout from "./component/MainLayout";
import WorkResultPage from "./pages/notice/WorkResultPage";
import PostMain from "./pages/post/PostMain";
import PostWrite from "./pages/post/PostWrite";
import PostDetail from "./pages/post/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}> // 중첩 라우터
            <Route path="/main" element={<Main />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/notice/:id" element={<NoticeDetailPage />} />
            <Route path="/workresult" element={<WorkResultPage />} />
            <Route path="/post" element={<PostMain />} />
            <Route path="/post/write" element={<PostWrite />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Route>
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
