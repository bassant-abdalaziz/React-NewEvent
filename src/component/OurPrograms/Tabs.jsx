import React, { useState } from 'react';
import OurPrograms from './OurPrograms'
import programData from '../../Modal/programData'


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('first');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = programData.filter((item) => {
    if (activeTab === 'first') {
      return item.id <= 3;
    } else if (activeTab === 'second') {
      return item.id > 3 && item.id <= 6;
    } else if (activeTab === 'third') {
      return item.id > 6;
    }
    return false;
  });

  return (
    <div className='tabs'>
      <div className='program-list'>
        <p
          className={`program-item ${activeTab === 'first' ? 'activeTab' : ''}`}
          onClick={() => handleClick('first')}
        >
          First day
        </p>
        <p
          className={`program-item ${activeTab === 'second' ? 'activeTab' : ''}`}
          onClick={() => handleClick('second')}
        >
          Second day
        </p>
        <p
          className={`program-item ${activeTab === 'third' ? 'activeTab' : ''}`}
          onClick={() => handleClick('third')}
        >
          Third day
        </p>
      </div>
      <hr />
      
        { filteredData.map((item) =>{
            return (
                    <OurPrograms 
                        img={item.img}
                        alt={item.alt}
                        time={item.time}
                        roomNum={item.roomNum}
                        title={item.title} 
                        name={item.name} 
                        desc={item.description}
                        key={item.id}/>)
        })}
    </div>
  );
};

export default Tabs;
