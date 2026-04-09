import React from "react";
import AppImg from "../assets/AppImgs/AppImg.png";
import AppImg2 from "../assets/AppImgs/AppImg2.png";
import face1 from "../assets/AppImgs/face1.png";
import insta from "../assets/AppImgs/insta.png";
import twitter from "../assets/AppImgs/twitter.png";
import youtube from "../assets/AppImgs/youtube.png";
import original from "../assets/AppImgs/original.png";
import Img14 from "../assets/AppImgs/14Img.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#FAFBFC] px-5 md:px-10 lg:px-[60px] py-10">
      
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* ONLINE SHOPPING + USEFUL LINKS */}
        <div>
          <h1 className="font-bold text-sm">ONLINE SHOPPING</h1>
          <div className="flex flex-col text-[#6c757d] text-sm mt-4">
            <Link to="/men">Men</Link>
            <Link to="/women" className="mt-1">Women</Link>
            <Link to="/kids" className="mt-1">Kids</Link>
            <Link to="/homeliving" className="mt-1">Home & Living</Link>
            <Link to="/beauty" className="mt-1">Beauty</Link>
            <Link to="/genz" className="mt-1">Genz</Link>
          </div>

          <h1 className="font-bold text-sm mt-8">USEFUL LINKS</h1>
          <div className="flex flex-col text-[#6c757d] text-sm mt-4">
            <span>Blog</span>
            <span className="mt-1">Careers</span>
            <span className="mt-1">Site Map</span>
            <span className="mt-1">Corporate Information</span>
            <span className="mt-1">Whitehat</span>
            <span className="mt-1">Cleartrip</span>
            <span className="mt-1">Myntra Global</span>
          </div>
        </div>

        {/* CUSTOMER POLICIES */}
        <div>
          <h1 className="font-bold text-sm">CUSTOMER POLICIES</h1>
          <div className="flex flex-col text-[#6c757d] text-sm mt-4">
            <span>Contact Us</span>
            <span className="mt-1">FAQ</span>
            <span className="mt-1">T&C</span>
            <span className="mt-1">Terms of Use</span>
            <span className="mt-1">Track Orders</span>
            <span className="mt-1">Cancellation</span>
            <span className="mt-1">Returns</span>
            <span className="mt-1">Privacy Policy</span>
          </div>
        </div>

        {/* APP + SOCIAL */}
        <div>
          <h1 className="font-bold text-sm">
            EXPERIENCE MYNTRA APP ON MOBILE
          </h1>

          <div className="flex gap-3 mt-4">
            <img src={AppImg} alt="app1" className="w-[110px]" />
            <img src={AppImg2} alt="app2" className="w-[110px]" />
          </div>

          <h1 className="font-bold text-sm mt-6">KEEP IN TOUCH</h1>

          <div className="flex gap-4 mt-3">
            <img src={face1} alt="facebook" className="w-5 cursor-pointer" />
            <img src={twitter} alt="twitter" className="w-5 cursor-pointer" />
            <img src={youtube} alt="youtube" className="w-5 cursor-pointer" />
            <img src={insta} alt="instagram" className="w-5 cursor-pointer" />
          </div>
        </div>

        {/* PROMISES */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <img src={original} alt="original" className="w-10 h-10" />
            <p className="text-sm">
              <strong>100% ORIGINAL </strong>
              guarantee for all products at myntra.com
            </p>
          </div>

          <div className="flex items-start gap-3">
            <img src={Img14} alt="return" className="w-10 h-10" />
            <p className="text-sm">
              <strong>Return within 14 days </strong>
              of receiving your order
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
        © 2026 Myntra Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;