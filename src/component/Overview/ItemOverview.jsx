import React from 'react'

import Overview from './Overview'
import overviewData from '../../Modal/overviewData'

const ItemOverview =()=> {

    const overviewDataList = overviewData.map(item=>{
        return(
            <Overview icon={item.icon} title={item.title} desc={item.description} key={item.id}/>
        )
    })
  return (
    <div className="overview">
        <div className="container">
            <div className='Boxes'>
            {overviewDataList}
            </div>
        </div>
  </div>
  )
}

export default ItemOverview