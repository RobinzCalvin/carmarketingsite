import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { CardList } from "../../component/cardList";
import { useNavigate } from "react-router-dom";

// import carList from '../../config/finallydataofcopartandiaai.json';
import axios from "axios";

const Slide = (props) => {
    let setLinkUrl = props.setLinkUrl;
    let linkUrl = props.linkUrl;
    let setSearchString = props.setSearchString;
    let setSearchlinkref = props.setSearchlinkref;
    let searchString = props.searchString;
    const [carList, setCarList] = useState([]);
    const [btnarray, setBtnarray] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        
        axios.get('http://localhost/scrapping/main.php', {mode:'cors'})
              .then(res => {
                setCarList(res.data);
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
        axios.get('http://localhost/scrapping/buttonlist.php', {mode:'cors'})
            .then(res1 => {
                setBtnarray(res1.data);
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }, [])

    function handleSearch(){
        setSearchlinkref('');
        navigate('/searchpage');
    }
    function handleClick(vari) {
        setSearchlinkref(vari);
        navigate('/searchpage');
        // setSearchlinkref(params);
    }
  return (
    <div className="container">
        <div className="searchstring sticky top-0  drop-shadow justify-items-center">
            <input type="text" placeholder="Search By VIN" className="inputstring"  value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <div className=" btnt  ">
                <button className="bg-[#3182CE] hover:bg-[#2B6CB0] rounded text-white text-base text-bold font-['inherit'] p-1 w-24" onClick={handleSearch}>search</button>
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
            <h2>Discover auctions by car brand</h2>
        </div>
        <div className="contentstring">
            <label  className="labelcontent">
                 {btnarray.map((data, index)=>
                    <button key={index} className="btnarr" onClick={()=>handleClick(data.href)}>{data.btnname}</button>
                )}
            </label>
        </div>
        <div className="w-full h-auto  grid grid-cols-4 gap-4">
            {
                carList && carList.map((cardata, index) =>
                    <CardList carinfo = {cardata} key={index} setLinkUrl={setLinkUrl}/>
                )
            }
        </div>
    </div>
  );
};
export default Slide;