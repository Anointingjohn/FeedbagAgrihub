"use client";
import React, { useState } from "react";
import {
  RiEdit2Fill,
  RiShoppingCart2Fill,
  RiDashboardFill,
} from "react-icons/ri";
import { HiCheckBadge } from "react-icons/hi2";
import {
  MdNotifications,
  MdPrivacyTip,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { IoMdSettings, IoIosPerson } from "react-icons/io";
import { usePathname } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import Avatar from "../Common/Avatar/ProfileAvatar";

export default function Sidebar() {
  const pathname = usePathname();
  const [userName, setUserName] = useState("Johsua Akeke");
  const [description, setDiscription] = useState("Crisp Greens Co");

  const sideMenu = [
    {
      icon: <RiDashboardFill className="w-[30px] h-[30px] " />,
      menu: "Dashboard",
      url: "/dashboard",
    },

    {
      icon: <IoIosPerson className="w-[30px] h-[30px] " />,
      menu: "Personal Information",
      url: "/personal-information",
    },
    {
      icon: <RiShoppingCart2Fill className="w-[30px] h-[30px]" />,
      menu: "Orders",
      url: "/orders",
    },
    {
      icon: <MdPrivacyTip className="w-[30px] h-[30px]" />,
      menu: "My Inventory",
      url: "/inventory",
    },
    {
      icon: <MdNotifications className="w-[30px] h-[30px]" />,
      menu: "Notifications",
      url: "/notifications",
    },
    {
      icon: <MdPrivacyTip className="w-[30px] h-[30px]" />,
      menu: "Data and Privacy",
      url: "/data&privacy",
    },
    {
      icon: <IoMdSettings className="w-[30px] h-[30px]" />,
      menu: "Settings",
      url: "/settings",
    },
  ];

  const sidedownMenu = [
    {
      icon: <MdOutlineSupportAgent className="w-[30px] h-[30px] " />,
      menu: "Help and Support",
      url: "/dashboard",
    },

    {
      icon: <IoLogOut className="w-[30px] h-[30px] " />,
      menu: "Log Out",
      url: "/logout",
    },
  ];
  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px #B0B0B01A" }}
      className="min-h-screen flex flex-col lg:bg-[#FFFFFF] bg-transparent w-full lg:w-[388px] rounded-[24px] py-10 space-y-20 lg:space-y-0 lg:justify-between "
    >
      <div className="flex flex-col gap-2 justify-center items-center relative">
        <div className="flex flex-row relative">
          <Avatar imgUrl="/avatartest.svg" />
          <div
            className="absolute bottom-1 right-2 justify-center items-center flex z-0 flex-grow-0 rounded-full"
            style={{
              boxShadow: "0px 1.98px 1.98px 0px #0000000D",
              background: "linear-gradient(180deg, #49C01F 0%, #1FC043 100%)",
              width: "50px",
              height: "50px",
            }}
          >
            <RiEdit2Fill className=" right-10 w-[30px] h-[30px] text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <HiCheckBadge className="w-[32px] h-[32px] text-[#49C01F]" />
            <h1 className="text-black font-pop font-[600] text-[24px] leading-[36px] text-center">
              {userName}
            </h1>
          </div>
          <p className="font-normal font-pop text-[18px] leading-[27px] text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 relative">
        {sideMenu.map((sidemenu, index) => (
          <Link
            key={index}
            href={sidemenu.url}
            className={`${
              pathname === sidemenu.url
                ? "bg-[#F1FCF3] border-l-4 border-[#49C01F]"
                : "lg:bg-white bg-transparent"
            } lg:px-10 px-5`}
          >
            <div>
              <div
                className={`flex flex-row gap-3 items-center ${
                  pathname === sidemenu.url
                    ? "bg-[#F1FCF3] w-full h-[72px]   text-[#49C01F] "
                    : "text-black"
                }`}
              >
                {sidemenu.icon}
                <p className="font-[500] text-[20px] leading-[30px] font-pop">
                  {sidemenu.menu}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-7 relative ">
        {sidedownMenu.map((sidemenu, index) => (
          <Link
            key={index}
            href={sidemenu.url}
            className={`${
              pathname === sidemenu.url
                ? "bg-[#F1FCF3] border-l-4 border-[#49C01F]"
                : "lg:bg-white bg-transparent"
            } lg:px-10 px-5`}
          >
            <div>
              <div
                className={`flex flex-row gap-3 items-center ${
                  pathname === sidemenu.url
                    ? "bg-[#F1FCF3] w-full h-[72px]   text-[#49C01F] "
                    : "text-black"
                }`}
              >
                {sidemenu.icon}
                <p className="font-[500] text-[20px] leading-[30px] font-pop">
                  {sidemenu.menu}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
