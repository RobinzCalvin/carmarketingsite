import React, { useEffect, useState } from "react";
import { SearchItem } from "./searchItem";
export function Lists(props) {
  const list = props.showData;
  let allPage = props.allPage;
  let page = props.pageNum;
  let linkUrl = props.linkUrl;

  let setPrice = props.setPrice;
  let setLinkUrl = props.setLinkUrl;
  const setPageNum = props.setPageNum;
  const [flag, setFlag] = useState(true);
  function handleChange(params, num) {
    if (params) {
      if(num<25000)
      {
      num++;
      setPageNum(num);
      }
    } else {
      if (num>0) {
        num--;
        setPageNum(num);
      }
    }

  }
 
  return (
      <div className="w-full flex flex-col">
      {list && list.map((sdatas, index) =>
        <SearchItem setPrice = {setPrice} sdatas={sdatas} key={index} linkUrl={linkUrl} setLinkUrl = {setLinkUrl}/>
      )}
      <div className="w-full space-x-2 flex flex-row justify-center">
        <div className="w-1/5 flex flex-row">
          <label className="w-1/2 p-1">{page+1}/</label>
          <label className="w-1/2 p-1">{allPage}</label>
        </div>
        <div className="w-4/5 flex flex-row justify-center space-x-2 ">
          <div className="w-1/2 p-1 text-center text-xl justify-items-center font-semibold bg-cyan-600 hover:bg-cyan-900 rounded just text-white cursor-pointer" onClick={() => handleChange(false, page)}>prev</div>
          <div className="w-1/2 p-1 text-center text-xl   font-semibold  bg-cyan-600 hover:bg-cyan-900 rounded text-white  cursor-pointer" onClick={() => handleChange(true, page)} >next</div>
        </div>
        
      </div>
    </div>
  );
}
