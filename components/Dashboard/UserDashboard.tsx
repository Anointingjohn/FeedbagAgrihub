import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserInformation from "./UserInformation";
import Navbar from "../Navbar/Navbar";

export default function UserDashboard() {
  return (
    <div className="flex flex-row justify-between container mx-auto min-h-screen bg-[#F1F1F1]">
      <Sidebar />
      <UserInformation />
    </div>
  );
}
