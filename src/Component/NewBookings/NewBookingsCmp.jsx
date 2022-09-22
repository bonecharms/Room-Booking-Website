import React from 'react'
import { useState } from 'react'
import InputComponent from '../Addroom/RoomPopUp/InputText/InputComponent'
import Button from '../Button/Button'

const NewBookingsCmp = () => {

  const [guest, setGuest] = useState('')
  const [first, setFirst] = useState('')
  const [chkin, setChkin] = useState('')
  const [chkout, setChkout] = useState('')
  const [adult, setAdult] = useState('')
  const [Child, setChild] = useState('')
  const [Available, setAvailable] = useState(false)
  const [Book, setBook] = useState(false)
  const sentData=(e)=>{
    e.preventDefault()
    console.log(guest,first,chkin,chkout,adult,Child);
  }
  function Availablefn() {
    setAvailable(!Available)
    console.log(Available);
    setBook(false)

    
  }


  return (
    <div className='bookingbox'>
        <div className='bookingtitle'>New Bookings</div>
        <form action="" onSubmit={sentData}>
            <InputComponent type='Text' text='Guest Last Name' setState={setGuest}/>
            <InputComponent type='Text' text='Guest First Name' setState={setFirst}/>
            <InputComponent type='Date' text='Check in Date' setState={setChkin}/>
            <InputComponent type='Date' text='Check in Date' setState={setChkout}/>
            <InputComponent type='Number' text='Number of Adult' setState={setAdult}/>
            <InputComponent type='Number' text='Number of Children' setState={setChild}/>
            <div className='getbttn'>
            <Button className='bttn' text='Get Available Room' func={Availablefn} />
              { Available && 
            <div>
            <Button className='finalbookbtn' text='Book room'  func={()=>{setBook(!Book)}}/>
            <Button className='Cancelbttn' text='Cancel' /> </div>}
           
            </div>
            {Book && <div className='bookbtn'>
            <Button className='finalbtn' text='Check-In'  />
            <Button className='finalbtn' text='Check-Out' />
            <Button className='finalbtn' text='Cancel' />
            

            </div>}
            
            </form>

        


    </div>
  )
}

export default NewBookingsCmp