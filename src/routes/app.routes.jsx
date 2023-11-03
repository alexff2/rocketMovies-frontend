import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CreateMovies from "../pages/CreateMovies";
import PreviewMovies from "../pages/PreviewMovies";
import Profile from "../pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/add" element={<CreateMovies />} />
      <Route path="/movies/preview/:id" element={<PreviewMovies />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
