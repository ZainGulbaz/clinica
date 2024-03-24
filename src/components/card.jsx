import React from 'react';
import { FaStar } from "react-icons/fa6";
import clinicsData from '../utils/data';

const Card = ({clinic,setSelectedClinic,id,imageHovered}) => {
  return (
  <div className='flex flex-col gap-4 mb-4' id={id}>
<img className={`max-h-md max-w-full duration-300 rounded-lg cursor-pointer filter ${imageHovered?"": "grayscale"} hover:grayscale-0 transition-transform transform hover:scale-110`} src={clinic?.image} onMouseEnter={()=>{setSelectedClinic([clinic])}} onMouseLeave={()=>setSelectedClinic(clinicsData)} />

<div className='px-4 flex flex-col gap-1'>
    <h4 className='font-bold '>{clinic?.name}</h4>
    <div className='flex items-center'>{Array.from({ length:clinic?.ratings })?.map(()=><FaStar/>)}</div>
    <p className='font-light mb-2'>DHA Phase 1, Lahore.</p>
    <hr/>
</div>

<div className='flex justify-between px-4'>
<div>
    <h6 className='font-bold'>Permanent Tatoos</h6>
    <p className='font-light'>40min- 6 hours</p>
</div>    
<div>
    from PKR 5000
</div>
</div>
<div className='flex justify-between px-4'>
<div>
    <h6 className='font-bold'>Permanent Tatoos</h6>
    <p className='font-light'>40min- 6 hours</p>
</div>    
<div>
    from PKR 5000
</div>
</div>
<div className='flex justify-between px-4'>
<div>
    <h6 className='font-bold'>Permanent Tatoos</h6>
    <p className='font-light'>40min- 6 hours</p>
</div>    
<div>
    from PKR 5000
</div>
</div>


  </div>
  )
}

export default Card;