import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { CardList } from "../../component/cardList";
import { useNavigate } from "react-router-dom";
import carList from '../../config/finallydataofcopartandiaai.json';

const Slide = () => {
    const [carlist, setCarlist] = useState([]);
    useEffect(()=>{
        setCarlist(carList);
    }, [])
    
    const navigate = useNavigate();
    
    console.log('carlist================', carlist);
    // const axios = require('axios')
    // axios
    //     .get('https://www.iaai.com/Search?url=mcftnRTQcTl5opeck3dHMrio79mDbIcIlabytJXvEwY%3d')
    const btnarray = [
        'ACURA', 'ALFA ROMEO','ASTON MARTIN','AUDI','BMW','BENTLEY','BUGATTI','BUICK','CADILLAC','CHEVROLET','CHRYSLER','CITROEN','DODGE','FERRARI','FIAT','FORD','GMC','HONDA','HUMMER','HYUNDAI','INFINITI','JAGUAR','JEEP','KIA','LAMPORGHINI','LAND','ROVER','LEXXUS','LINCOLN','LOTUS', 'MASERATI', 'MAYBACH', 'MAZDA', 'MCLAREN', 'MERCEDES-BENZ', 'MERCURY', 'MINI', 'MITSUBISHI', 'NISSAN', 'OPEL', 'PEUGEOT', 'PONTIAC', 'PORSCHE', 'RENAULT', 'RAM', 'ROLLS-ROYCE', 'SAAB', 'SCION', 'SMART', 'SUBARU', 'TESLA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO',
    ]
    function handleSearch(){
        navigate('/searchpage');
    }
  return (
    <div className="container">
        {
            // console.log('length',carlist.length())
        }
        <div className="searchstring sticky top-0  drop-shadow justify-items-center">
            <input type="text" placeholder="Search By VIN" className="inputstring" />
            <div className=" btnt  ">
                <button className="bg-[#3182CE] hover:bg-[#2B6CB0] rounded text-white text-base text-bold font-['inherit'] p-1 w-24">search</button>
            </div>
        </div>
        <div className="mainstring">
            <label className="labelcontent pt-24">
                History of vehichles sold at the 
                biggest auto auctions portals: IAAI
            and Copart
            </label>
        </div>
        <div className="contentstring pt-5">
            <label  className="labelcontent">
                Check IAAI and Copart sales history. Get free information about the
                prices of used cars from the USA from the biggest auto auctions.
                Search the car by auction LOT and VIN. Find pictures and final prices.
                The site's easy interface allow you to get to know the history of cars
                from Copart and IAAI auctions
            </label>
        </div>
        <div className="slidesearchbtn flex justify-center">
            <button className="headerbtn1"  onClick={handleSearch}>Search</button>
        </div>
        <div className="contentstring1">
            <h2>Discover auctions by car brand
</h2>
                
            {/* </label> */}
        </div>
        <div className="contentstring">
            <label  className="labelcontent">
                 {btnarray.map((data, index)=>
                        // console.log('button-name=>', data)    
                    <button key={index} className="btnarr">{data}</button>
                )}
            </label>
        </div>
        <div className="w-full h-auto  grid grid-cols-4 gap-4">
            {
                carlist && carlist.map((cardata, index) =>
                    <CardList carinfo = {cardata} key={index}/>
                )
            }
        </div>
    </div>
  );
};
export default Slide;