import React, { useEffect, useState } from "react";
import Finish from "../components/Finish";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const FinishPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = {
    title: "Woohoo! You did it.",
    message: "Thank you for completing your account setup. Let's go!",
  };

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
        alertStyle="bg-green-100 border border-green-300 text-green-600"
        onCloseAlert={handleCloseAlert}
      />
      <Sidebar />
      <div className="ml-[226px] mt-[100px] flex justify-center items-center w-[1052px] h-[980px]">
        <Finish />
      </div>
    </div>
  );
};

export default FinishPage;
