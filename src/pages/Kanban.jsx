import React from 'react';
import { Header } from '../components';
import CollectionCard from '../components/collectioncard';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-10 p-2 md:p-10 bg-[#20232A] rounded-3xl">
    <Header category="App" title="Explore" />
    <div className="grid grid-flow-row-dense grid-cols-3">
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </div>
  </div>
);

export default Kanban;
