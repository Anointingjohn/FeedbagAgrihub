import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  { img: "/twitter.svg", link: "https://twitter.com/yourprofile" },
  { img: "/youtube.svg", link: "https://youtube.com/yourchannel" },
  { img: "/facebook.svg", link: "https://facebook.com/yourprofile" },
  { img: "/instagram.svg", link: "https://instagram.com/yourprofile" },
];

const details = [
  {
    img: "/email.svg",
    description: "info@feedbagagrihub.com",
    link: "https://twitter.com/yourprofile",
  },
  {
    img: "/phone.svg",
    description: "+2348064191000",
    link: "https://twitter.com/yourprofile",
  },
  {
    img: "/location.svg",
    description: "Farm estate, Aiyetoro, Ipokia Lga, Ogun state.",
    link: "https://twitter.com/yourprofile",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col justify-between mx-auto container md:min-h-[464px]  min-h-screen bg-[#131313] pt-10 px-10 lg:px-0 w-full">
      <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between lg:item-center  gap-[90px] w-full">
        <div className="flex flex-col gap-3 max-w-[454px]">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
          <p className="font-pop font-[300] text-[16px] leading-[24px] text-[#FFFFFF] grow-0">
            Connecting African Farmers to the Global Market and Cultivating
            change beyond soil
          </p>
          <div className="flex flex-row gap-2">
            {socials.map((social, index) => (
              <div key={index}>
                <Image src={social.img} alt="socials" width={40} height={40} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-white font-[500] text-[18px] leading-[20px]">
            Contact/Support
          </h1>
          <div className="flex flex-col gap-2">
            {details.map((detail, index) => (
              <div key={index}>
                <div className="flex flex-row gap-2">
                  <Image
                    src={detail.img}
                    alt="details"
                    width={22}
                    height={22}
                  />
                  <Link
                    href={detail.link}
                    className="font-pop font-[300] text-[16px] leading-[24px] text-[#FFFFFF] underline"
                  >
                    {detail.description}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <h1 className="text-white font-[500] text-[18px] leading-[20px]">
            Download On
          </h1>
          <div className="flex flex-col gap-2">
            <Image src="/playstore.svg" width={250} height={250} alt="logo" />
            <Image src="/appstore.svg" width={250} height={250} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="lg:flex lg:flex-row justify-between items-center hidden">
          <Link href="/terms" className="text-[#FFFFFF]">
            Terms of Service
          </Link>
          <Link href="/terms" className="text-[#FFFFFF]">
            Privacy Policy
          </Link>
        </div>
        <br />
        <div className="bg-[#757575] h-[1.5px]  " />
        <br />
        <p className="text-[#FFFFFF] text-center">
          Copyright @ 2024. Classic African Farmer and CAF Token are registered
          trademark of Feedbag Agrihub Limited. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
