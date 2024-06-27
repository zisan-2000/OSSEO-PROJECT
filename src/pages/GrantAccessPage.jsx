import React, { useEffect, useState } from "react";
import GrantAccessForm from "../components/GrantAccessForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const GrantAccessPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-blue-100 border border-blue-300 text-blue-600"
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-grow mt-[80px] md:ml-[206px] md:mt-[86px] flex justify-center items-center w-full h-auto md:h-[980px]">
        <GrantAccessForm />
      </div>
    </div>
  );
};

export default GrantAccessPage;
