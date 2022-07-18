import React from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./main/MainPage";
import Settings  from "./settings/Settings";



function App() {

  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default  App;
