"use client";
import React, { useState } from "react";
import Button from "../Common/Button/Button";
import { RiEdit2Fill } from "react-icons/ri";

export default function UserInformation() {
  const [user, setUser] = useState({
    firstname: "Jushua",
    lastname: "Akeke",
    bio: "Farmer",
    phone: "+1234567890",
    email: "joshuaakeke@example.com",
    country: "Nigeria",
    postalCode: "12345",
    address: "10B Adeola Odeku Street, Victoria Island, Lagos State",
  });

  function call() {}
  return (
    <div className="lg:flex lg:flex-col gap-5 hidden ">
      <div
        style={{ boxShadow: "0px 4px 4px 0px #B0B0B01A" }}
        className="xl:w-[828px] md:w-[628px] h-[449px] rounded-[24px] bg-[#FFFFFF] p-10"
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-black font-pop font-[500] text-[28px] leading-[42px] -tracking-[2%]">
            Personal Information
          </h1>
          <Button variant="tertiary" onClick={call}>
            Edit
            <RiEdit2Fill className=" w-[24px] h-[24px] text-[#49C01F] cursor-pointer" />
          </Button>
        </div>
        <br />
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                First name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.firstname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Last name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.lastname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Bio
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.bio}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Country
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.country}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Email
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.email}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Phone
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.phone}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Postal Code
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.postalCode}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Address
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0px 4px 4px 0px #B0B0B01A" }}
        className="xl:w-[828px] md:w-[628px] h-[449px] rounded-[24px] bg-[#FFFFFF] p-10"
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-black font-pop font-[500] text-[28px] leading-[42px] -tracking-[2%]">
            Personal Information
          </h1>
          <Button variant="tertiary" onClick={call}>
            Edit
            <RiEdit2Fill className=" w-[24px] h-[24px] text-[#49C01F] cursor-pointer" />
          </Button>
        </div>
        <br />
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                First name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.firstname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Last name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.lastname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Bio
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.bio}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Country
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.country}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Email
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.email}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Phone
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.phone}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Postal Code
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.postalCode}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Address
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0px 4px 4px 0px #B0B0B01A" }}
        className="xl:w-[828px] md:w-[628px] h-[449px] rounded-[24px] bg-[#FFFFFF] p-10"
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-black font-pop font-[500] text-[28px] leading-[42px] -tracking-[2%]">
            Personal Information
          </h1>
          <Button variant="tertiary" onClick={call}>
            Edit
            <RiEdit2Fill className=" w-[24px] h-[24px] text-[#49C01F] cursor-pointer" />
          </Button>
        </div>
        <br />
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                First name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.firstname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Last name
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.lastname}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Bio
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.bio}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Country
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.country}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Email
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.email}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Phone
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.phone}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Postal Code
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.postalCode}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#979797] font-[500] font-pop leading-[21px]">
                Address
              </label>
              <p className="text-black font-pop font-[400] text-[20px] leading-[30px]">
                {user.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
