import React, { useEffect, useState } from "react";
import GrantAccessForm from "../components/GrantAccessForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const GrantAccessPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const alertMessage = {
    title: "Important Final Step!",
    message: "Please get this done now so our team can get to work",
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
        alertStyle="bg-blue-100 border border-blue-300 text-blue-600"
        onCloseAlert={handleCloseAlert}
      />
      <Sidebar />
      <div className="ml-[206px] mt-[86px] flex justify-center items-center w-[1052px] h-[980px]">
        <GrantAccessForm />
      </div>
    </div>
  );
};

export default GrantAccessPage;
