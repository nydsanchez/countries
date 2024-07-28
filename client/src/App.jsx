import { Route, Routes } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import CountryDetailpage from "./pages/CountryDetailpage";
import Activitypage from "./pages/Activitypage";
import PageNotFound from "./pages/PageNotFound";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/inicio" element={<Homepage />} />
      <Route path="/country/:id" element={<CountryDetailpage />} />
      <Route path="/actividad" element={<Activitypage />} />
      <Route path="/acerca" element={<Aboutpage />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
