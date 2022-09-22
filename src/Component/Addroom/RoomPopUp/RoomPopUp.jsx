import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'
import Amenities from './Amenities'


const RoomPopUp = ({setAddroom}) => {
  const [Room , setRoom]=useState('')
  const [adult , setAdult]=useState('')
  const [child , setChild]=useState('')
  const [price, setPrice]=useState('')
 
  const sentData=(e)=>{
    e.preventDefault()
    console.log(Room,adult,child,price);
    
    setAddroom(false)
  }
  
  return (
    <div className='roomtablepop'>
      <div className='roomheading'>
    <div className='roomtitle2'>Room {Room}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height='25px' width='25px'onClick={()=>{setAddroom(false)}}><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    
      </div>
    <form method='post' onSubmit={sentData} >
    <InputComponent type='Number' text='Room Number'  setState={setRoom}/>
    <InputComponent type='Number' text='Adult Capacity' setState={setAdult}/>
    <InputComponent type='Number' text='Children Capacity'setState={setChild}/>
    <InputComponent type='Number' text='Price'setState={setPrice}/>
    <div className='pop-bttn'>
    <Button className='bttn' text='Save'/> 
    
   
    </div>
    <Amenities/>
   
     
    </form>
    


    
    </div>
    

  )
}
export default RoomPopUp;