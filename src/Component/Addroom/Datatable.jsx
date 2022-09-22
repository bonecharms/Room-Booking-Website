import React from 'react'
import Button from '../Button/Button'
import './Roomtable.css'
import { useState } from 'react'
import RoomPopUp from './RoomPopUp/RoomPopUp'

const Datatable = ({data}) => {
  const [addroom,setAddroom]=useState(false);
    function Popuproom() {
      setAddroom(true);
      
    }
  return (
    <div className='valuetableroom'>
    <div className='orange'>{data.roomnumber}</div>
    <div>{data.adultcapacity}</div>
    <div>{data.childrencapacity}</div>
    <div className='red'>{data.price}</div>
    <Button text='Edit' className='editbutton' func={Popuproom} />
    
   
        
      <div className={addroom?"Popuproom":""}  >
      {addroom && <RoomPopUp setAddroom={setAddroom}/>}
      </div>
    </div>

  )
}

export default Datatable