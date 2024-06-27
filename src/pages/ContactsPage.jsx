import React, { useState } from "react";
import AccountForm from "../components/AccountForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContactsPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "Let's Create Your Account!",
    message: "Please follow the prompts below to complete account setup.",
  };

  // Show alert when the component is mounted
  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-pink-100 border border-pink-300 text-pink-600"
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-grow mt-[80px] md:ml-[226px] md:mt-[100px] flex justify-center items-center w-full h-auto md:h-[980px]">
        <AccountForm />
      </div>
    </div>
  );
};

export default ContactsPage;
