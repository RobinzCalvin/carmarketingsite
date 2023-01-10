import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
export const CardList = (props) => {
  // const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  let carinfo = props.carinfo.name;
  let carlist = props.carinfo;
  let setLinkUrl = props.setLinkUrl;
  let url = props.carinfo.href;
  function handleSearch(vari){
    setLinkUrl(vari);
    navigate('/caritemviewpage');
}                                               
  return (
    
    <div className="w-full pt-4 flex flex-col">
      <div className="text-xl  pl-2 h-1/10 font-bold">{carlist.name}</div>
      <div className="w-full ">
        <div className="w-full  cursor-pointer flex flex-col">
          <div className="title text-2xl float-left pl-2 h-1/10 font-bold">
                {carinfo.title}
          </div>
          <div className="w-full h-7/10 p-2">
              <img src={carlist.image_url} className="w-full h-48 rounded-xl hover:brightness-50"  onClick={()=>handleSearch(url)} />
          </div>
          <div className="w-full font-semibold text	 pl-2 ">{carlist.type}</div>
          <div className="w-full text-lg  pl-2 ">{carlist.date}</div>
        </div>
      </div>
  </div> 

  );
};

         