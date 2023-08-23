import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/fonts.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register/Register";
import Magazine from "./pages/Magazine";
import Community from "./pages/Community";
import Shop from "./pages/Shop";
import MyPage from "./pages/MyPage";
import MagazineDetail from "./pages/Magazine/Detail/MagazineDetail";
import Upload from "./pages/Magazine/Upload";
import CommunityDetail from "./pages/Community/Detail/CommunityDetail";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Main />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/magazine" element={<Magazine />} />
      <Route exact path="/magazine/:id" element={<MagazineDetail />} />
      <Route exact path="/magazine/upload" element={<Upload />} />
      <Route exact path="/community" element={<Community />} />
      <Route exact path="/community/:id" element={<CommunityDetail />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
