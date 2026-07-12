import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MaximalPage } from "./pages/MaximalPage";

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return (
    <BrowserRouter basename={basename === "/" ? undefined : basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/behind-the-facade" element={<MaximalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
