import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
