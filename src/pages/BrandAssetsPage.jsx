import React, { useEffect, useState } from "react";
import BrandAssetsForm from "../components/BrandAssetsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BrandAssetsPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = {
    title: "You're half way there!",
    message: "Moving right along. Making awesome progress.",
  };

  // Show alert when the component is mounted
  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-blue-100 border border-blue-300 text-blue-600"
        onCloseAlert={handleCloseAlert}
      />
      <Sidebar />
      <div className="ml-[206px] mt-[86px] flex justify-center items-center w-[1052px] h-[980px]">
        <BrandAssetsForm />
      </div>
    </div>
  );
};

export default BrandAssetsPage;
