import React, { useState } from 'react';
import SelectData from './selectData';
import ShowData from './showData';

const Dashboard = () => {
  const [selectedDataset, setSelectedDataset] = useState(null);

  return (
    <div>
      <SelectData onSelect={setSelectedDataset} />
      {selectedDataset && <ShowData dataset={selectedDataset} />}
    </div>
  );
};

export default Dashboard;