import React from "react";
import { SearchItem } from "./searchItem";

export function Lists(props) {
  const list = props.showData;
  // console.log("==========>>>>>>>>>>>>>>>>>>>>",props);
  return (
    
      <div className="w-full">
      {list &&
        list.map(
            (sdata, index) =>
                sdata.list && sdata.list.map((sdatas, ids) => (
                <SearchItem key={index+ids} sdatas={sdatas} title={sdatas.type} id={sdatas.date} />
            ))
        )}
    </div>
  );
}
