"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Button from "@/components/Common/Button/Button";
import Link from "next/link";

interface Category {
  selectedCategory: string;
}

const Farmer: React.FC<Category> = ({ selectedCategory }) => {
  const isValidPhoneNumber = (phone: string) => {
    if (phone.match(/12345/)) {
      return false; // Invalid case
    } else if (phone.match(/1234/)) {
      return false; // Another invalid case
    }
    return true; // Valid
  };
  const [value, setValue] = useState<string | undefined>(undefined);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [signupMethod, setSignupMethod] = useState<string>("");

  useEffect(() => {
    const storedMethod = localStorage.getItem("signupMethod");
    if (storedMethod) {
      setSignupMethod(storedMethod);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    "Agriculture",
    "Retail",
    "Wholesale",
    "Manufacturing",
    "Services",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <div className="body_content ">
        <div
          className="leftbar"
          style={{
            backgroundImage: `url('/green.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <div className="p-[70px] space-y-10 flex flex-col">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
            <h1 className="md:text-[50px] md:leading-[81px] font-[500] font-pop text-white">
              Blockchain In Agriculture
            </h1>
          </div>
        </div>
        <div className="maincontent rounded-none bg-white md:rounded-tl-[24px] md:rounded-bl-[24px] md:justify-center md:items-center flex flex-col px-[20px] pt-[30px] md:pt-0 md:px-0">
          <div className="md:max-w-[712px] space-y-7">
            <div className="flex flex-col space-y-3">
              <h1 className="font-pop font-[500] md:text-[32px] text-[20px] leading-[30px] md:leading-[48px] text-center text-[#131313]">
                Create Your Feedbag Agrihub Account
              </h1>
              <p className="font-pop font-normal md:text-[24px] text-[14px] leaing-[21px] md:leading-[36px] text-center text-[#131313]">
                Ensure that the information provided matches your identity
                Information
              </p>
            </div>
          </div>
          <br />
          {/* Forms */}

          {/* <form> */}
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col gap-2 ">
              <span>Full name</span>
              <input
                className="md:w-[712px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5  focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex md:flex-row flex-col  md:justify-between relative">
              <div className="flex flex-col gap-2 ">
                <span>Business type</span>

                <div className="relative" onClick={toggleDropdown}>
                  <input
                    value={selectedOption || ""}
                    onChange={handleChange}
                    className="md:w-[300px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5 pr-10 focus:outline-none"
                    placeholder="Business type"
                  />
                  <FaChevronDown
                    //   onClick={handleOptionClick}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                  />
                </div>
                {isOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-300 rounded-[16px] w-full max-h-60 overflow-y-auto shadow-lg z-10">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-[#EBFFEE] cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 ">
                <span>Business name</span>

                <input
                  className="md:w-[396px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5  focus:outline-none"
                  placeholder="Enter your business name"
                />
              </div>
            </div>

            {signupMethod === "phone" ? (
              <div className="flex flex-col gap-2">
                <span>Phone number</span>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-2 w-[124px] h-[72px] bg-[#EBFFEE] rounded-[16px] justify-center items-center">
                    <p>+234</p>
                    <FaChevronDown className="pb-1" />
                  </div>
                  <input
                    className="md:w-[584px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5  focus:outline-none"
                    placeholder="Enter your Phone number"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 ">
                <span>Email</span>
                <input
                  className="md:w-[712px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5  focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 ">
              <span>Business Registration Number</span>
              <input
                className="md:w-[712px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5  focus:outline-none"
                placeholder="Enter your business registration number"
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <span>Password</span>
              <input
                type={showPassword ? "text" : "password"}
                className="md:w-[712px] h-[72px] w-full rounded-[16px] bg-[#EBFFEE] pl-5 pr-10 focus:outline-none"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute  right-4 top-1/2 transform -translate-y-1/2 pt-7"
              >
                {showPassword ? (
                  <FaEye
                    style={{
                      background: "#EBFFEE",
                      color: "#49C01F",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    style={{
                      background: "#EBFFEE",
                      color: "#49C01F",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                )}
              </button>
            </div>
            <br />
            <div className="flex flex-col justify-center items-center space-y-4">
              <Button variant="primary" onClick={() => 2 + 2}>
                Continue
              </Button>
              <Link href={"/"}>
                <p className="font-[500] font-pop text-[18px] leading-[27px] text-center">
                  Go back
                </p>
              </Link>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Farmer;
