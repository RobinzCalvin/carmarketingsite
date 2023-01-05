import React from "react";
import ReactDOM from "react-dom/client";
import { CardList } from "../../component/cardList";
import { useNavigate } from "react-router-dom";

const Slide = () => {
    const navigate = useNavigate();
    const btnarray = [
        'ACURA', 'ALFA ROMEO','ASTON MARTIN','AUDI','BMW','BENTLEY','BUGATTI','BUICK','CADILLAC','CHEVROLET','CHRYSLER','CITROEN','DODGE','FERRARI','FIAT','FORD','GMC','HONDA','HUMMER','HYUNDAI','INFINITI','JAGUAR','JEEP','KIA','LAMPORGHINI','LAND','ROVER','LEXXUS','LINCOLN','LOTUS', 'MASERATI', 'MAYBACH', 'MAZDA', 'MCLAREN', 'MERCEDES-BENZ', 'MERCURY', 'MINI', 'MITSUBISHI', 'NISSAN', 'OPEL', 'PEUGEOT', 'PONTIAC', 'PORSCHE', 'RENAULT', 'RAM', 'ROLLS-ROYCE', 'SAAB', 'SCION', 'SMART', 'SUBARU', 'TESLA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO',
    ]
       
    const carlist = [
        {
            title:'Audi',
            id:'232542',
            list:[
                {
                    type: 'Audi A4 2011',
                    date:'2022-12-30',
                    imgurl: 'img/cars/34556255-1.jpeg',
                },
                {
                    type: 'Audi A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/34658453-1.jpeg',
                },
                {
                    type: 'Audi A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/54266212-1.jpeg',
                },
                {
                    type: 'Audi A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/58308712-1.jpeg',
                },
            ]
        },
        {
            title:'Toyota',
            id:'345333',
            list:[
                {
                    type: 'Toyota A4 2011',
                    date:'2022-12-30',
                    imgurl: 'img/cars/64977912-1.jpeg',
                },
                {
                    type: 'Toyota A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/67059162-1.jpeg',
                },
                {
                    type: 'Toyota A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/67126772-1.jpeg',
                },
                {
                    type: 'Toyota A4 2011',
                    date:'2022-12-30',
                    imgurl: './img/cars/67206002-1.jpeg',
                },
            ]
        },
    ]
    function handleSearch(){
        navigate('/searchpage');
    }
  return (
    <div className="row">
        <div className="searchstring sticky top-0  drop-shadow">
            <input type="text" placeholder="Only VIN" className="inputstring" />
        </div>
        <div className="mainstring">
            <label className="labelcontent">
            History of vehichles sold at the biggest auto auctions portals: IAAI
            and Copart
            </label>
        </div>
        <div className="contentstring">
            <label  className="labelcontent">
                Check IAAI and Copart sales history. Get free information about the
                prices of used cars from the USA from the biggest auto auctions.
                Search the car by auction LOT and VIN. Find pictures and final prices.
                The site's easy interface allow you to get to know the history of cars
                from Copart and IAAI auctions
            </label>
        </div>
        <div className="slidesearchbtn">
            <button className="headerbtn1"  onClick={handleSearch}>Search</button>
        </div>
        <div className="contentstring1">
            <label className="labelcontent">
                History of vehichles sold at the biggest auto auctions portals: IAAI
                and Copart
            </label>
        </div>
        <div className="contentstring">
            <label  className="labelcontent">
                 {btnarray.map((data, index)=>
                        // console.log('button-name=>', data)    
                    <button key={index} className="btnarr">{data}</button>
                )}
            </label>
        </div>
        <div className="w-full h-auto  border-spacing-1 border-2 flex flex-col">
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