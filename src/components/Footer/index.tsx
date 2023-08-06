import React from "react";
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full flex justify-center pt-24 pb-8 mx-10">
      <div className="text-center space-y-4">
        <h2>Chill<span className="text-primary">moi</span></h2>
        <p className="text-gray-400 max-w-xl">Chillmoi không lưu trữ bất kì tệp tin nào trên máy chủ, chúng tôi chỉ liên kết tới những phương tiện truyền thông được lưu trữ bên dịch vụ thứ 3.</p>
        <div className="flex space-x-2 justify-center my-6">
          <AiFillFacebook />
          <BsDiscord />
          <FaTiktok/>
          <AiFillYoutube/>
          <AiOutlineInstagram/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
