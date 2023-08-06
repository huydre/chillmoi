import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex justify-center pt-12 pb-8 lg:px-10 border-t-1 mt-12 border-gray-900">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Image src={"/logo3.png"} alt="logo" width={50} height={50} />
        </div>

        <p className="text-gray-400 max-w-xl text-sm">
          Chillmoi không lưu trữ bất kì tệp tin nào trên máy chủ, chúng tôi chỉ
          liên kết tới những phương tiện truyền thông được lưu trữ bên dịch vụ
          thứ 3.
        </p>
        <div className="flex space-x-2 justify-center my-6">
          <AiFillFacebook />
          <BsDiscord />
          <FaTiktok />
          <AiFillYoutube />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
