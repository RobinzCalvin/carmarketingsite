import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
export const CardList = (props) => {
  const navigate = useNavigate();
  let carinfo = props.carinfo;
  let carlist = props.carinfo.list;
  // console.log('carinfo==>', carinfo);  
  function handleSearch(){
    navigate('/caritemviewpage');
}                                               
  return (
    <div className="w-full flex flex-col pt-4">
      <div className="title text-2xl float-left pl-2 h-1/10 font-bold">{carinfo.title}</div>
        <div className="w-full flex flex-row">
        {carlist && carlist.map((carinfolist, index) =>
          <div className="w-1/4 flex flex-col cursor-pointer" key={index}>
            {/* <div className="title text-2xl float-left pl-2 h-1/10 font-bold">
                {carinfo.title}
            </div> */}
            <div className="w-full h-7/10 p-2">
                <img src={carinfolist.imgurl} className=" rounded-xl hover:brightness-50"  onClick={handleSearch} />
            </div>
            <div className="w-full h-1/10 text-xl pl-2 ">{carinfolist.type}</div>
            <div className="w-full h-1/10 text-lg pl-2 ">{carinfolist.date}</div>
          </div>
        )}
        </div>
    </div>
  );
};
