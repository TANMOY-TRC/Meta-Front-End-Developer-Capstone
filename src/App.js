import React from "react";
import { Routes, Route } from "react-router-dom";
import pages from "./utils/pages"
import Layout from "./layout";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import UnderConstruction from "./pages/UnderConstruction";
import PageNotFound from "./pages/PageNotFound";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("about").path} element={<UnderConstruction />} />
          <Route path={pages.get("menu").path} element={<UnderConstruction />} />
          <Route path={pages.get("reservations").path} element={<Reservations />} />
          <Route path={pages.get("order").path} element={<UnderConstruction />} />
          <Route path={pages.get("login").path} element={<UnderConstruction />} />
          <Route path={pages.get("confirmedBooking").path} element={<ConfirmedBooking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
