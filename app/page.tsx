"use client";
import Button from "@/components/Common/Button/Button";
import UserCategoryCard from "@/components/Common/Card/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface userCategory {
  Farmer: string;
  Aggregator: string;
  Consumer: string;
}

export default function Home() {
  const router = useRouter();

  const Categories = [
    { img: "/farmcategory/farmer.svg", category: "Farmer" },
    { img: "/farmcategory/aggregator.svg", category: "Aggregator" },
    { img: "/farmcategory/consumer.svg", category: "Consumer" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Farmer");
  const [signupMethod, setSignupMethod] = useState<string>("email");

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedMethod = localStorage.getItem("signupMethod");

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
    if (storedMethod) {
      setSignupMethod(storedMethod);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("signupMethod", signupMethod);
  }, [signupMethod]);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleSignupWithEmail = () => {
    setSignupMethod("email");
    router.push("/signup");
  };

  const handleSignupWithPhone = () => {
    setSignupMethod("phone");
    router.push("/signup");
  };

  const handleuserClick = (category: string) => {
    setSelectedCategory(category);

    localStorage.setItem("selectedCategory", category);
  };
  return (
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
      <div className="maincontent rounded-none bg-white md:rounded-tl-[24px] md:rounded-bl-[24px] md:justify-center md:items-center px-[20px] pt-[40px] md:pt-0 md:px-0 flex flex-col">
        <div className="md:max-w-[712px] space-y-7">
          <div className="flex flex-col space-y-3">
            <h1 className="font-pop font-[500] md:text-[32px] text-[20px] leading-[30px] md:leading-[48px] text-center text-[#131313]">
              Create Your Feedbag Agrihub Account
            </h1>
            <p className="font-pop font-normal md:text-[24px] text-[14px] leaing-[21px] md:leading-[36px] text-center text-[#131313]">
              Join our community and start revolutionizing the agricultural
              supply chain today.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="primary-text font-[500] leading-[30px] md:leading-[42px] text-center text-[20px] md:text-[28px] font-pop">
              Sign up as...
            </p>
            <div className="md:flex md:flex-row gap-3 grid grid-rows-3 justify-center items-center">
              {Categories.map((users, index) => (
                <div key={index} className="">
                  <UserCategoryCard
                    userCategory={users.category}
                    usercategoryimg={users.img}
                    isSelected={selectedCategory == users.category}
                    onClick={() => handleuserClick(users.category)}
                  />
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className="flex flex-col space-y-3 justify-center items-center">
            <div className="md:flex md:flex-col md:space-x-0 md:space-y-3 flex flex-row space-x-3 md:justify-center md:items-center">
              <Button variant="primary" onClick={handleSignupWithEmail}>
                Sign Up with email
              </Button>

              <Button variant="secondary" onClick={handleSignupWithPhone}>
                Sign Up with Phone number
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-black font-pop font-normal text-[16px] leading-[24px] text-center">
                If you don’t have an account,{" "}
                <span className="primary-text font-[600] leading-[24px] text-center text-[16px] font-pops ">
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
