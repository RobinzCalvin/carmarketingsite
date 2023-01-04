import React from 'react';
import ReactDOM from 'react-dom/client';
export const Footer = () => {
    return(
        <div className='row'>
            <div className="footercss flex justify-center flex-col">
                <div className='w-24 h-24 pt-5 '>
                    <img src="./logo.png" className="image"/>
                </div>
                    
                <div className="space-x-5 text-black  pt-5">
                    <a className="chakra-link css-spn4bz  text-black" href="/">Home</a>
                    <a className="chakra-link css-spn4bz  text-black" href="/search">Auctions history</a>
                    {/* <a className="chakra-link css-spn4bz" href="/blog">Blog</a> */}
                </div>
                <div className="chakra-stack css-1amf41o space-x-5 pt-2">
                    <a target="_blank" className="chakra-link css-spn4bz text-black" href="https://t.me/vehiclebid">https://t.me/vehiclebid</a>
                    <a className="chakra-link css-spn4bz  text-black" href="mailto:contact@vehiclebid.info">contact@vehiclebid.info</a>
                </div>
            </div>
        </div>
    )
}