import Image from "next/image";
import React from "react";
import { userCategory } from "@/app/page";

interface CardCategory {
  userCategory: string;
  onClick: () => void;
  isSelected: boolean;
  usercategoryimg: string;
}

const UserCategoryCard: React.FC<CardCategory> = ({
  userCategory,
  onClick,
  usercategoryimg,
  isSelected,
}) => {
  return (
    <div>
      <div
        onClick={onClick}
        className={` ${
          isSelected ? "bg-[#1FC04366]" : "bg-[#EBFFEE]"
        } md:w-[220px] md:h-[170px] w-[173px] h-[135px] rounded-[20px] md:rounded-[24px] justify-center boxwidth cursor-pointer items-center flex flex-col`}
      >
        <Image
          className="rounded-full"
          src={usercategoryimg}
          width={100}
          height={100}
          alt="category"
        />
        <h1 className="font-pop font-normal text-[20px] leading-[30px] text-center  text-[#131313] ">
          {userCategory}
        </h1>
      </div>
    </div>
  );
};

export default UserCategoryCard;
