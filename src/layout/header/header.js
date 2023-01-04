import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleSearch(){
    navigate('/');
  }
  return (
    <div className="header flex justify-between items-center">
        <div className="header-left-part flex items-center space-x-7 float-left ">
          <img className="image  cursor-pointer" src="./logo.png"  onClick={handleSearch} />
          <select className=" langsel w-10 h-auto rounded text-xl m-2 p-2 outline-0	">
              <option value={1}>english</option>
              <option value={1}>russion</option>
              <option value={1}>english</option>
              <option value={1}>english</option>
          </select>
          <a href="/searchpage" className="search text-black">Search</a>
        </div>
        <div className="header-right-part float-right ">
            <a className="headerbtn" target='new' href='https://t.me/vehiclebid' >Telegram</a>
            <a className="headerbtn" target='new'  href="mailto:contact@vehiclebid.info" >Gmail</a>
        </div>
    </div>
  );
}
export default Header;
