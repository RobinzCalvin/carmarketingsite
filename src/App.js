import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assests/css/container.css';
import './assests/css/header.css';
import  Slide  from "./layout/main/slide";
import Layout from "./layout";
import SearchPage from "./layout/main/searchPage";
import CarItemView from "./layout/main/carItemView";
import "swiper/css/bundle";
// import rp from "request-promise";

import { useEffect, useState } from "react";
// import "./styles.css";
function App() {
  // const rp = require('request-promise');
  // const [list, setList] = useState({});
  // useEffect(() =>{
  //   rp("https://pokedex.org/")
  //   .then(html=>console.log(html))
  // })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Slide />} />  
          <Route path="/searchpage" element={<SearchPage />} />  
          <Route path="/caritemviewpage" element={<CarItemView />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import './App.css';
// import './assests/css/container.css';
// import './assests/css/header.css';
// import ContainerLayout from './container/containerLayout';

// function App() {
//   return (
//     <div className="main">
//       <ContainerLayout/>
//     </div>
//   );
// }

// export default App;
