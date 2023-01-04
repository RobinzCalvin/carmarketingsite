export function SearchItem(props) {
    const title = props.title;
    const id = props.id;
    const sdata = props.sdatas;
    console.log(sdata.date)
    return (
      <div className="figure h-auto ">
        <figure className=" items-stretch w-full  flex flex-row border border-neutral-300 rounded shadow-md">
          <img
            className=" self-center w-2/5 h-auto rounded"
            src={sdata.imgurl}
            alt="dish"
          />
          <div className="w-3/5 flex flex-row">
            <div className="w-full flex items-center ">
              <div className="chakra-card__body css-1idwstw pl-4 content-center">
                <h2 className="chakra-heading css-18j379d">{title}</h2>
                <p className="chakra-text css-0">VIN: JTMRJREV6JD238474</p>
                <p className="chakra-text css-wt5l11">
                  <strong>Lot</strong>: {id}
                </p>
                <p className="chakra-text css-0">
                  <strong>Sale date</strong>: {sdata.date}
                </p>
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


