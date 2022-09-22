import React from 'react'
import { useState } from 'react'

const Amenities = () =>  { 
    const [select,setSelect]=useState([])
    
  return (
    <div>
        
        <h2>Amenities</h2>

        <div className='amenity'>
            <select className='selekt' onChange={(e)=>{
                setSelect([...select,e.target.value])}}>
                    <option disabledvalue="Select">Select</option>
                    <option value="TV">Television</option>
                    <option value="Bed">Bed</option>
                    <option value="WiFi">WiFi</option>
                    <option value="AC">AC</option>



            </select>
        <div className='selectdata'>
            {select.map((data,index)=>{
                return(
                    <div className='roundlabel1'>

                        <div>
                            <label>{data}</label>
                        </div>
                        <div>
                            <svg 
                            style={{cursor:'pointer'}}
                            onClick={()=>{
                                setSelect(
                                    select.filter((item,itemindex)=>{
                                    return itemindex !== index;
                                    })
                                )
                            }}
                            
                            
                            
                            
                            xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' viewBox="0 0 512 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>

    </div>


                    </div>


                )
            })}

        </div>

        </div>
        
    </div>
  )
}

export default Amenities