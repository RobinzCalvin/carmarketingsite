import { useNavigate } from "react-router-dom";

export function SearchItem(props) {
  const navigate = useNavigate();
    const title = props.title;
    const id = props.id;
    const sdata = props.sdatas;
    function handleSearch(){
      navigate('/caritemviewpage');
    }    
    console.log(sdata.date)
    return (
      <div className="figure h-auto ">
        <figure className=" items-stretch w-full  flex flex-row border border-neutral-300 rounded shadow-md" >
          <img
            className=" self-center w-2/5 h-auto rounded hover:brightness-50"
            src={sdata.imgurl}
            alt="dish"  onClick={handleSearch} 
          />
          <div className="w-3/5 flex flex-row">
            <div className="w-full flex items-center ">
              <div className="chakra-card__body css-1idwstw pl-4 content-center">
                <label className="w-full font-bold text-xl font-['arial'] ">{title}</label>
                <label className="text-xl">VIN: JTMRJREV6JD238474</label>
                <label className=" w-full pt-2">
                  <strong>Lot</strong>: {id}
                </label>
                <label className=" w-full">
                  <strong>Sale Date</strong>: {sdata.date}
                </label>
                <p className="chakra-text css-0">
                  <strong>Odometer</strong>: 0 mil
                </p>
                <span className="spanbg">Final price: 4100$</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    );
}


