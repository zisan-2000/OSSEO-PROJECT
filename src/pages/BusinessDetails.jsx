import React, { useState } from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BusinessDetails = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "Great job. Keep going!",
    message: "Just a few more steps before our team can get to work.",
  };

  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-yellow-100 border border-yellow-300 text-yellow-600"
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-grow mt-[80px] md:ml-[206px] md:mt-[86px] flex justify-center items-center w-full h-auto md:h-[980px]">
        <BusinessDetailsForm />
      </div>
    </div>
  );
};

export default BusinessDetails;
