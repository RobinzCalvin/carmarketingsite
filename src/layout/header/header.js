import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleSearch(){
    navigate('/');
  }
  function handleSearch1(){
    navigate('/searchpage');
  }
  return (
    <div className="w-full border-b border-solid border	border-[#CBD5E0] pt-3 pb-3 bg-white block ">
      <div className="container flex justify-between items-center">
          <div className="header-left-part flex items-center space-x-7 float-left ">
            <img className="w-auto h-16 cursor-pointer" src="./logo.png"  onClick={handleSearch} />
            <select className=" langsel w-24 rounded text-base font-medium ml-2.5 outline-0	">
                <option value={1}>English</option>
                <option value={1}>Russion</option>
                {/* <option value={1}>english</option>
                <option value={1}>english</option> */}
            </select>
            <label className=" text-base text-black" onClick={handleSearch1}>Search</label>
            {/* <a href="#" className="search text-black" onClick={handleSearch}>Search</a> */}
          </div>
          <div className="header-right-part float-right ">
              <a className="headerbtn text-base text-bold" target='new' href='https://t.me/vehiclebid' >Telegram</a>
              <a className="headerbtn text-base" target='new'  href="mailto:contact@vehiclebid.info" >Gmail</a>
          </div>
      </div>
    </div>
  );
}
export default Header;
