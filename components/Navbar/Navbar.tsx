import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import Avatar from "../Common/Avatar/Avatar";

export default function Navbar() {
  const navMenu = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "CAF Marketplace",
      link: "/caf-marketplace",
    },
    {
      name: "CAF Transport & Logistics",
      link: "/caf-transport-logistics",
    },
    {
      name: "CAF Education",
      link: "/caf-education",
    },
    {
      name: "CAF Finance",
      link: "/caf-finance",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="w-full flex flex-row bg-[#FFFFFF] justify-between items-center container mx-auto h-[106px] px-10 lg:px-0">
      <div>
        <Image src="/logo.svg" width={100} height={100} alt="" />
      </div>
      <div className="lg:flex lg:flex-row lg:gap-7 hidden">
        {navMenu.map((menus, index) => (
          <div key={index}>
            <Link href={menus.link}>
              <p className="font-pop font-normal m lg:text-[16px] leading-[24px] text-[#131313]">
                {menus.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="lg:flex lg:flex-row  hidden lg:gap-2 justify-center items-center">
        <HiShoppingCart className="w-[32px] h-[32px]" />
        <Avatar imgUrl="avatartest.svg" />
      </div>

      <Image
        className="flex lg:hidden"
        src="hamburger.svg"
        width={40}
        height={40}
        alt="burger"
      />
    </div>
  );
}
