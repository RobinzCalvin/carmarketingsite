import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchItem(props) {
  const navigate = useNavigate();
  // const [linkUrl, setLinkUrl] = useState('');
    // const title = props.title;
    // const id = props.id;
   let setPrice = props.setPrice;
    const sdata = props.sdatas;
    useEffect(()=>{
      setPrice(sdata.price);
    }, [])
    function handleSearch(){
      let setLinkUrl = props.setLinkUrl;
      setLinkUrl(sdata.href);
      setPrice(sdata.price);
      navigate('/caritemviewpage');
    }    
    return (
      <div className="figure h-auto ">
        <figure className=" items-stretch w-full  flex flex-row border border-neutral-300 rounded shadow-md" >
          <img
            className=" cursor-pointer self-center w-2/5 h-auto rounded hover:brightness-50"
            src={sdata.image}
            alt="dish"  onClick={handleSearch} 
          />
          <div className="w-3/5 flex flex-row">
            <div className="w-full flex items-center ">
              <div className="chakra-card__body css-1idwstw pl-4 content-center">
                <label className="w-full font-bold text-xl font-['arial'] ">{sdata.type}</label>
                <label className="text-xl">{sdata.vin}</label>
                <label className=" w-full pt-2">
                <strong>Lot</strong>:{sdata.lot}
                </label>
                <label className=" w-full">
                  <strong>Sale Date</strong>:{sdata.sale_date}
                </label>
                <p className="chakra-text css-0">
                  <strong>Odometer</strong>:{sdata.odermeter}
                </p>
                <span className="spanbg">Final price: {sdata.price}</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    );
}


