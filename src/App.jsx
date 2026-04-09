import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import HomeLiving from "./pages/HomeLiving";
import Beauty from "./pages/Beauty";
import Genz from "./pages/Genz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/homeliving" element={<HomeLiving />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/genz" element={<Genz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
