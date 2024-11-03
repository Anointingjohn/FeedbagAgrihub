import UserDashboard from "@/components/Dashboard/UserDashboard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="bg-[#F1F1F1] pt-10 py-10">
        <UserDashboard />
      </div>
      <div className="bg-[#131313]">
        <Footer />
      </div>
    </div>
  );
}
