import React from "react";
import Appstore from "../images/Appstore.png";
import playstore from "../images/playstore.png"
const Footer = () => {
  return (
    <footer className="mt-40 p-8 bg-gray-900 text-white flex items-center">
      <div className="w-1/5 flex flex-col items-center">
        <h4 className="font-roboto text-[1vw]">DOWNLOAD OUR APP</h4>
        <p className="text-center text-[1.2vw] font-sans">
          Download App for Android and IOS mobile phone
        </p>
        <img
          src={Appstore}
          alt="playstore"
          className="w-40 my-4 cursor-pointer"
        />
        <img
          src={playstore}
          alt="Appstore"
          className="w-40 my-4 cursor-pointer"
        />
      </div>

      <div className="w-3/5 text-center">
        <h1 className="text-[4vw] font-roboto text-red-500">Shop Mobile</h1>
        <p className="max-w-[60%] mx-auto my-4 font-sans">
          Địa chỉ: 61 lê văn tách phường An Bình Dĩ An
        </p>
        <p className="max-w-[60%] mx-auto my-4 font-sans">SDT:0382520045</p>
        <p className="max-w-[60%] mx-auto my-4 font-sans">
          Email: daiphu094@gmail.com
        </p>
      </div>

      <div className="w-1/5 flex flex-col items-center">
        <h4 className="font-roboto text-[1.4vw] underline">Follow Us</h4>
        <a
          href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ"
          className="no-underline text-[1.3vw] font-sans text-white transition-all duration-500 my-2 hover:text-red-500"
        >
          Instagram
        </a>
        <a
          href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ"
          className="no-underline text-[1.3vw] font-sans text-white transition-all duration-500 my-2 hover:text-red-500"
        >
          Youtube
        </a>
        <a
          href="https://studio.youtube.com/channel/UCvY_g_NxZc4tEq2DElQv_ZQ"
          className="no-underline text-[1.3vw] font-sans text-white transition-all duration-500 my-2 hover:text-red-500"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
