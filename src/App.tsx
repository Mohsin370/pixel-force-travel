import "./App.css";
import Chat from "./pages/private/chat/chat";
import Explore from "./pages/private/explore/explore";
import Profile from "./pages/private/profile/profile";
import Login from "./pages/public/login/login";
import Onboarding from "./pages/public/onboarding/onboarding";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
