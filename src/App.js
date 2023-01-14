import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './assests/css/container.css';
import './assests/css/header.css';
import  Slide  from "./layout/main/slide";
import Layout from "./layout";
import SearchPage from "./layout/main/searchPage";
import CarItemView from "./layout/main/carItemView";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
function App() {
  const [linkUrl, setLinkUrl] = useState('');
  const [searchlinkfref, setSearchlinkref] = useState('');
  const [price , setPrice] = useState('');
  const [searchString, setSearchString] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Slide  searchString = {searchString}  linkUrl = {linkUrl} setLinkUrl={setLinkUrl} setSearchlinkref = {setSearchlinkref}  setSearchString={setSearchString} />} />  
          <Route path="/searchpage" element={<SearchPage searchString = {searchString} setPrice = {setPrice} setSearchlinkref = {setSearchlinkref}  setSearchString={setSearchString} linkUrl = {linkUrl} setLinkUrl={setLinkUrl} searchlinkfref = {searchlinkfref}  />} />  
          <Route path="/caritemviewpage" element={<CarItemView price = {price}  linkUrl = {linkUrl} setLinkUrl={setLinkUrl} />} />  
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
