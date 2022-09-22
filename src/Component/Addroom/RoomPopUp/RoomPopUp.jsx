import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'
import Amenities from './Amenities'
import { useEffect } from 'react'


const RoomPopUp = ({setAddroom,isEditing=false,data=null}) => {

  const [formData,setFormData] = useState({
    roomNumber: "",
    adultCapacity: "",
    childCapacity: "",
    price: ""
  });

  useEffect(()=>{

    if(data)setFormData({roomNumber: data.roomnumber,
    adultCapacity: data.adultcapacity,
    childCapacity: data.childrencapacity,
    price: data.price});

  },[data])

  const {roomNumber,adultCapacity,childCapacity,price} = formData;

  const onChange = (value,key)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }
 
  const sentData=(e)=>{
    e.preventDefault();
    console.log(formData);
    setAddroom(false)
  }
  
  return (
    <div className='roomtablepop'>
      <div className='roomheading'>
    <div className='roomtitle2'>Room {roomNumber}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height='25px' width='25px'onClick={()=>{setAddroom(false)}}><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    
      </div>
    <form method='post' onSubmit={sentData} >
    <InputComponent value={roomNumber} type='Number' text='Room Number'  setState={(value)=>onChange(value,"roomNumber")}/>
    <InputComponent value={adultCapacity} type='Number' text='Adult Capacity' setState={(value)=>onChange(value,"adultCapacity")}/>
    <InputComponent value={childCapacity}  type='Number' text='Children Capacity'setState={(value)=>onChange(value,"childCapacity")}/>
    <InputComponent value={price} type='Number' text='Price' setState={value=>onChange(value,"price")} />
    <div className='pop-bttn'>
    <Button className='bttn' text='Save'/> 
    
   
    </div>
    {isEditing && <Amenities/>}
   
     
    </form>
    


    
    </div>
    

  )
}
export default RoomPopUp;