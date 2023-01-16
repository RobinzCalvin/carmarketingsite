import { Input, Radio, RadioGroup } from '@mui/material';
import BaseComponent from 'bootstrap/js/dist/base-component';
import React,{ useState} from 'react';
import BasicDateRangePicker from '../../component/BasicDateRangePicker';
import RangeSlider from '../../component/minimumDistanceSlider';
// import MinimumDistanceSlider from '../../component/minimumDistanceSlider';

export function Filters(props) {
  const [sLists,setSList]=useState([]);
  const [oList,setOList]=useState([]);
  const minDistance = 10;

  let btnarray = props.btnarray;

  let natLists=["Olive oil","Oregano","tomato","olives"];
  let natdetails={
      title:"Nutrition details",
      detail:natLists,
  };
 
  
  const handleApply =() => {///////Include ingredient condition
    // let s="";
    // sLists.map((sdata, index) => s=s+sdata+',');
    // setSList(s.slice(0,s.length-1));
    // s="";
    // oList.map((sdata, index) => s=s+sdata+',');
    // setOList(s.slice(0,s.length-1));
  }
  return (
    
      <div className='flex justify-center  border border-neutral-300  shadow-md'>
        <div className='  w-5/6 float-left'>
          <div className="box-border h-auto w-full  border-1 rounded-lg">
            <p className='pt-5 font-bold text-xl  '>Filters</p>            
            <p className='font-semibold mb-0 mt-2	'>Sort by</p>
            <select className="langsel2" placeholder='Select...'>
              <option value={1}>Auction Date</option>
              <option value={2}>Price</option>
              
            </select>
            <p className='font-semibold mb-0 mt-2	'>Sort direction</p>
            <select className="langsel2"  placeholder='Select...'>
              <option value={1}>Ascedding</option>
              <option value={1}>Descedding</option>
            </select>
            <p className='font-semibold mb-0 mt-2	'>Make</p>
            <select className="langsel2" >
              
              {
                btnarray && btnarray.map((item, index)=>
                <option value={index+1} >{item.btnname}</option>
                )
              }
            </select>
            <p className='font-semibold mb-0 mt-2	'>Model</p>     
            <select className="langsel2" placeholder='Select...'>
              <option value={1}>Copart</option>
              <option value={2}>IAAI</option>
              
            </select>  
            <div className='w-full pt-2'>
              <RangeSlider />
            </div>
            <div className='w-full flex flex-row pt-2'>
              <Input className='w-auto m-1' type='text' value={'1960'}/>
              <Input className='w-auto m-1' type='text' value={'2022'}/>
            </div>
            <div className='w-full pt-2'>
              <BasicDateRangePicker/>
            </div>
            </div>          
          <button className='rounded-md w-full h-10 bg-[#F29F05] text-2xl text-white hover:bg-[#d3c84d] mt-4 mb-4' onClick={() => handleApply()}>Search</button>
        </div>
        
      </div>
      
  );
}