import axios from "axios";
import React, { useEffect, useState } from "react";
import { Filters } from "./filters";
import { Lists } from "./lists";
import { useNavigate } from "react-router-dom";

function SearchPage(props) {
    const [searchCarList, setSearchCarList] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [allPage, setAllPage] = useState(0);
    const navigate = useNavigate();
    let btnarray = props.btnarray;
    let linkUrl = props.linkUrl;
    let setLinkUrl = props.setLinkUrl;
    let searchlinkfref = props.searchlinkfref;
    let setPrice = props.setPrice;
    let searchString = props.searchString;
    let setSearchString = props.setSearchString;
    let setSearchlinkref = props.setSearchlinkref;
    console.log('vinnuber', searchString);
    useEffect(()=>{
        let searchurl = '';
        if (searchString !=='') {
            searchurl = 'http://localhost/scrapping/vinsearch.php?searchstring=' + searchString;
        } else {
            if (searchlinkfref !== '') {
                searchurl = 'http://localhost/scrapping/pagenation.php?page=' + pageNum + '&make=' + searchlinkfref;    
            }
            else{
                searchurl = 'http://localhost/scrapping/qqq.php?page=' + pageNum;
            }
        }
        
        axios.get(searchurl)
            .then(res => {
                    setAllPage(res.data[0].count);
                    setSearchCarList(res.data);
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }, [searchString, pageNum])  
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
    <div className='container w-full flex flex-col space-x-5'>
        <div className="searchstring sticky top-0  drop-shadow justify-items-center">
            <input type="text" placeholder="Search By VIN" className="inputstring"  value={searchString} onChange={(e) => setSearchString(e.target.value)} />
                <div className=" btnt  ">
                    <button className="bg-[#3182CE] hover:bg-[#2B6CB0] rounded text-white text-base text-bold font-['inherit'] p-1 w-24" onClick={handleSearch}>search</button>
            </div>
        </div>
        <p className="pl-4 text-4xl font-bold text-black decoration-8 decoration-dashed decoration-white pt-10">
            Check history of cars sold at Copart and IAAI auctions
        </p>
        <p className="pl-4 text-black decoration-8 decoration-dashed decoration-white">
            Our website provides you with information about bidding history and statistics of vehicles sales from Copart and IAAI. The website’s user-friendly interface allows you to quick and efficient search for a vehicle's history by a VIN and LOT number. You can also use a handy filter by make, model, year, and price.
        </p>
        <div className='w-full flex flex-row '>
            <div className='w-1/4 pr-4'>
                <Filters btnarray={btnarray} />
            </div>
            <div className="w-3/4 pl-4 flex flex-col">
                <Lists setPrice = {setPrice} showData={searchCarList} pageNum = {pageNum} allPage={allPage} setPageNum = {setPageNum}   linkUrl = {linkUrl} setLinkUrl={setLinkUrl} />
            </div>            
      </div>            
    </div>
  );
}
export default SearchPage;
