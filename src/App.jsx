import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrandAssetsPage from "./pages/BrandAssetsPage";
import BusinessDetails from "./pages/BusinessDetails";
import ContactsPage from "./pages/ContactsPage";
import FinishPage from "./pages/FinishPage";
import GrantAccessPage from "./pages/GrantAccessPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="contacts" element={<ContactsPage />} />
        {/* <Route path="/contacts" component={ContactsPage} /> */}
        <Route path="/business-details" element={<BusinessDetails />} />
        <Route path="/brand-assets" element={<BrandAssetsPage />} />
        <Route path="/grant-access" element={<GrantAccessPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/" exact element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
