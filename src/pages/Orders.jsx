/* eslint-disable react/button-has-type */
import React from 'react';
import { Header } from '../components';
import Card from '../components/card';

const Orders = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#20232A] rounded-3xl">
    <Header category="Page" title="NFTS" />
    <div className="grid grid-flow-row-dense grid-cols-3">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
export default Orders;
