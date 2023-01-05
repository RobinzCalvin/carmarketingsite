import React from "react";
import { Filters } from "./filters";
import { Lists } from "./lists";
function SearchPage() {
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
  return (
    <div className='w-full flex flex-col space-x-5'>
        <div className="searchstring sticky top-0  drop-shadow">
            <input type="text" placeholder="Only VIN" className="inputstring w-full" />
        </div>
        <p className="pl-4 text-4xl font-bold text-black decoration-8 decoration-dashed decoration-white">
            Check history of cars sold at Copart and IAAI auctions
        </p>
        <p className="pl-4 text-black decoration-8 decoration-dashed decoration-white">
        Our website provides you with information about bidding history and statistics of vehicles sales from Copart and IAAI. The website’s user-friendly interface allows you to quick and efficient search for a vehicle's history by a VIN and LOT number. You can also use a handy filter by make, model, year, and price.
        </p>
      <div className='w-full flex flex-row '>
        <div className='w-1/4 pr-4'>
            <Filters />
        </div>
        <div className="w-3/4 pl-4 flex flex-col">
            <Lists showData={carlist}/>
        </div>
                          
      </div>            
    </div>
  );
}
export default SearchPage;
