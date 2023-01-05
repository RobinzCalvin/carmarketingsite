import React from "react";
import { Filters } from "./filters";
import DemoCarousel from "../../component/carousel";
import { Lists } from "./lists";
function CarItemView() {
  return (
    <div className="w-full flex flex-col items-center space-x-5  ">
        <div className="searchstring sticky top-0  drop-shadow">
            <input type="text" placeholder="Only VIN" className="inputstring" />
        </div>
        <div className="w-4/5 h-96">
            <DemoCarousel />
        </div>
        <div className="w-full flex flex-row">
            <div className="w-1/2 flex flex-col">
                <h2 className="text-4xl text-bold float-left">Toyota RAV4 2018 </h2>
                <h6 className="float-left">VIN: JTMRJREV6JD238474</h6>
            </div>
            <div className="w-1/2 flex flex-row justify-end pr-10">
                <h2 className="float-right text-[#3182CE]">FINAL BID: </h2>
                <h2  className="float-right text-[#3182CE]">4100$</h2>
            </div>
        </div>
        <div className="w-full flex flex-row">
            <div className="w-1/2 flex flex-col">
                <div className="w-full flex flex-row space-x-5 p-2">
                    <svg viewBox="0 0 1200 1200" focusable="false" className="chakra-icon css-1u3shmi text-[#3182CE] w-12 h-12"><g fill="currentColor"><path d="m443.96 612.9 134.71-134.7 171.52-171.52-168.72-168.73-306.21 306.25z"></path><path d="m402.72 699.99-214.82-214.82 50.883-50.883 214.82 214.82z"></path><path d="m622.01 51.762 214.82 214.82-50.895 50.895-214.82-214.82z"></path><path d="m1011.9 817.46-373-373.01-57.188 57.188 373.01 373z"></path><path d="m311.93 910.77h291.98v111.8h-291.98z"></path><path d="m264.34 1041.3v111.79h387.16v-111.79z"></path></g></svg>
                    <h3>Auction information</h3>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Auction</h3>
                    <label className="text-lg pr-24">Copart</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Lot</h3>
                    <label className="text-lg pr-24">70586422</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Sale date</h3>
                    <label className="text-lg pr-24">2023-01-02</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Status</h3>
                    <label className="text-lg pr-24">SOLD</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Documents</h3>
                    <label className="text-lg pr-24">WA - BILL OF SALE</label>
                </div>
            </div>
            <div className="w-1/2 flex flex-col">
            <div className="w-full flex flex-row space-x-5 p-2">
                    <svg viewBox="0 0 1200 1200" focusable="false" className="chakra-icon css-1u3shmi text-[#3182CE]  w-12 h-12"><g fill="currentColor"><path d="m100 660h80v-120h-80c-21.438 0-41.242 11.438-51.961 30s-10.719 41.438 0 60 30.523 30 51.961 30z"></path><path d="m1149.1 632.92c-7.4844-8.1406-18.004-12.816-29.059-12.922h-280c-10.609 0-20.781-4.2148-28.285-11.715-7.5-7.5039-11.715-17.676-11.715-28.285v-80c-0.27734-10.945-5.0703-21.289-13.238-28.578-7.3477-7.0977-17.09-11.172-27.301-11.422h-2.3984-0.003906c-10.449 1.3672-20.02 6.5586-26.863 14.57-6.8438 8.0117-10.477 18.277-10.195 28.809v76.621c0.03125 31.816 12.684 62.32 35.184 84.816 22.496 22.5 53 35.152 84.816 35.184h276.62c10.531 0.28125 20.793-3.3477 28.805-10.188s13.203-16.406 14.574-26.852c0.66797-11.098-3.293-21.973-10.941-30.039z"></path><path d="m1140 940c5.3047 0 10.391-2.1055 14.141-5.8594 3.7539-3.75 5.8594-8.8359 5.8594-14.141v-80c0-5.3047-2.1055-10.391-5.8594-14.141-3.75-3.7539-8.8359-5.8594-14.141-5.8594h-120v120z"></path><path d="m60 1e3c0 7.1445 3.8125 13.746 10 17.32 6.1875 3.5742 13.812 3.5742 20 0 6.1875-3.5742 10-10.176 10-17.32v-300c-7.3242-0.046875-14.621-0.89844-21.762-2.5391-11.66 11.074-18.254 26.457-18.238 42.539z"></path><path d="m386.88 470.82c-7.9531-7.625-18.773-11.508-29.758-10.68-10.453 1.3203-20.039 6.4805-26.898 14.473-6.8594 7.9961-10.504 18.258-10.223 28.785v76.602c0.03125 31.816 12.684 62.32 35.184 84.816 22.496 22.5 53 35.152 84.816 35.184h94.52c-24.055-21.137-41.215-49.004-49.258-80h-45.262c-10.609 0-20.781-4.2148-28.285-11.715-7.5-7.5039-11.715-17.676-11.715-28.285v-80c-0.13672-11.125-4.8906-21.691-13.121-29.18z"></path><path d="m980 580v-220h-760v500c0 10.609 4.2148 20.781 11.715 28.285 7.5039 7.5 17.676 11.715 28.285 11.715h160c21.219 0 41.566 8.4297 56.57 23.43 15 15.004 23.43 35.352 23.43 56.57 0 10.609 4.2148 20.781 11.715 28.285 7.5039 7.5 17.676 11.715 28.285 11.715h400c10.609 0 20.781-4.2148 28.285-11.715 7.5-7.5039 11.715-17.676 11.715-28.285v-240h-540c-42.422-0.046875-83.09-16.922-113.09-46.914-29.992-29.996-46.867-70.664-46.914-113.09v-76.602c-0.38672-20.664 7.0508-40.715 20.816-56.133 13.766-15.422 32.848-25.074 53.422-27.027 22.109-1.3984 43.816 6.3516 60.035 21.438 16.223 15.082 25.523 36.176 25.727 58.324v80h40v-76.602c-0.38672-20.664 7.0508-40.715 20.816-56.133 13.766-15.422 32.848-25.074 53.422-27.027 22.098-1.3594 43.785 6.4062 59.992 21.484 16.211 15.074 25.527 36.141 25.77 58.277v80h40v-76.621c-0.35938-20.645 7.0742-40.668 20.816-56.082 13.746-15.41 32.789-25.078 53.344-27.078 22.031-1.0664 43.562 6.7969 59.719 21.812 16.16 15.02 25.574 35.918 26.121 57.969v80z"></path><path d="m620 180h-40c-10.609 0-20.781 4.2148-28.285 11.715-7.5 7.5039-11.715 17.676-11.715 28.285h120c0-10.609-4.2148-20.781-11.715-28.285-7.5039-7.5-17.676-11.715-28.285-11.715z"></path><path d="m100 500v-300c0-7.1445-3.8125-13.746-10-17.32-6.1875-3.5742-13.812-3.5742-20 0-6.1875 3.5742-10 10.176-10 17.32v260c-0.015625 16.082 6.5781 31.465 18.238 42.539 7.1406-1.6406 14.438-2.4922 21.762-2.5391z"></path><path d="m640 700h94.52c-24.055-21.137-41.215-49.004-49.258-80h-45.262c-10.609 0-20.781-4.2148-28.285-11.715-7.5-7.5039-11.715-17.676-11.715-28.285v-80c-0.15234-11.113-4.918-21.664-13.16-29.121-7.9141-7.6797-18.746-11.59-29.738-10.738-10.449 1.3242-20.031 6.4844-26.887 14.48-6.8555 7.9961-10.496 18.25-10.215 28.777v76.602c0.03125 31.816 12.684 62.32 35.184 84.816 22.496 22.5 53 35.152 84.816 35.184z"></path><path d="m980 300c0-10.609-4.2148-20.781-11.715-28.285-7.5039-7.5-17.676-11.715-28.285-11.715h-680c-10.609 0-20.781 4.2148-28.285 11.715-7.5 7.5039-11.715 17.676-11.715 28.285v20h760z"></path><path d="m420 220c0-10.609-4.2148-20.781-11.715-28.285-7.5039-7.5-17.676-11.715-28.285-11.715h-40c-10.609 0-20.781 4.2148-28.285 11.715-7.5 7.5039-11.715 17.676-11.715 28.285z"></path><path d="m860 180h-40c-10.609 0-20.781 4.2148-28.285 11.715-7.5 7.5039-11.715 17.676-11.715 28.285h120c0-10.609-4.2148-20.781-11.715-28.285-7.5039-7.5-17.676-11.715-28.285-11.715z"></path></g></svg>
                    <h3>Auction information</h3>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Auction</h3>
                    <label className="text-lg pr-24">Copart</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Lot</h3>
                    <label className="text-lg pr-24">70586422</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Sale date</h3>
                    <label className="text-lg pr-24">2023-01-02</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Status</h3>
                    <label className="text-lg pr-24">SOLD</label>
                </div>
                <div className="w-full flex justify-between p-2">
                    <h3 className="text-lg text-bold">Documents</h3>
                    <label className="text-lg pr-24">WA - BILL OF SALE</label>
                </div>
            </div>
        </div>
        <div className="w-full">
            <p>Vehiclebid.info provides you with detailed informations about cars sold at Copart.com and Iaai.com. You have access to historical prices, photos and previous sales of the car.Main informations about the Vechicle:</p>
        </div>
        <ul className="w-full">
            <li>
                Make: Toyota
            </li>
            <li>
                Make: Toyota
            </li>
            <li>
            Make: Toyota
            </li>
            <li>
            Make: Toyota
            </li>
            <li>
            Make: Toyota
            </li>
        </ul>
        <div className="full">
            <p>This vehicle was sold at Copart auto auction in the USA. The final bid of the car JTMRJREV6JD238474 was 4100$. The car was sold 2023-01-02 Find more information and sales history of the vehicle on our website. Our tool provides you the reliable data about the cars. You also have the opportunity to check cars by vin and get the history completyly for free. Our resource vehiclebid.info gives you reliable sales history and statistics of cars from the USA and Canada. We provide the information from IAAI and Copart auto auctions.</p>
        </div>
    </div>
  );
}
export default CarItemView;
        {/* <div className="searchstring sticky top-0  drop-shadow">
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
                          
      </div>             */}
    

