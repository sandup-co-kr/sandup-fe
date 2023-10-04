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
import MagazineUpload from "./pages/Magazine/Upload";
import CommunityDetail from "./pages/Community/Detail/CommunityDetail";
import ShopDetail from "./pages/Shop/Detail/ShopDetail";
import CommunityUpload from "./pages/Community/Upload";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Main />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/magazine" element={<Magazine />} />
      <Route exact path="/magazine/:id" element={<MagazineDetail />} />
      <Route exact path="/magazine/upload" element={<MagazineUpload />} />
      <Route exact path="/community" element={<Community />} />
      <Route exact path="/community/:id" element={<CommunityDetail />} />
      <Route exact path="/community/upload" element={<CommunityUpload />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop/:id" element={<ShopDetail />} />
      <Route exact path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
