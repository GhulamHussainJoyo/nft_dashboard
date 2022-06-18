/* eslint-disable react/button-has-type */
import React from 'react';
import nfts from '../images/image-equilibrium.jpg';
import eth from '../images/icon-ethereum.svg';
import avtar from '../images/image-avatar.png';

const collectioncard = () => (

  <div className="w-[228px] h-[350px] bg-[#33373E] mt-1 rounded-xl">
    <div className="flex">
      <img src={avtar} className="w-[35px] h-[35px] border-solid border-2 border-white rounded-full ml-2 mt-[10px]" />

    </div>
    <img src={nfts} className="w-[200px] h-[200px] ml-[13px] absolute mt-[10px] rounded-xl" />
    <div>
      <p className="text-white font-bold ml-5 text-[15px] pt-[220px]">MintDaqNFT </p>
      <p className="text-gray-400 text-[10px] ml-5">Our NFT collectios promotes Balance and Calm </p>
      <div className="flex justify-between mr-5">
        <div className="flex">
          <img src={eth} className="w-[10px] h-[15px] ml-[20px] mt-[5px]" />
          <p className="text-white font-bold mt-[5px] ml-2 text-[12px] ">0.01 ETH</p>
        </div>
      </div>

    </div>
  </div>

);

export default collectioncard;
