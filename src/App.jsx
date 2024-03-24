import { useState,useRef } from 'react'
import './App.css'
import MapComponent from './components/map'
import { Header } from './components/header'
import Card from './components/card'
import clinicsData from './utils/data'


function App() {

  const [selectedClinic,setSelectedClinic]=useState(clinicsData || []);
  const [imageHovered,setImageHovered]=useState(-1);

  const scrollToDiv = (index) => {
    setImageHovered(index);
    const element = document.getElementById(`dynamicDiv${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
  }

  const scrollOutToDiv=()=>setImageHovered(-1);

  return (
    <>
      <Header />
      <div className='grid grid-cols-12 h-full'>
        <div className='md:col-span-4 col-span-12 overflow-auto'>{clinicsData?.map((clinic,index) => <Card key={clinic.id}  clinic={clinic}  setSelectedClinic={setSelectedClinic}  id={`dynamicDiv${index}`} imageHovered={imageHovered==index}/>)}</div>
        <div className='md:col-span-8 hidden md:inline h-full'>
          <MapComponent  clinics={selectedClinic} setClinics={setSelectedClinic} scrollToDiv={scrollToDiv} scrollOutToDiv={scrollOutToDiv}/>
        </div>
      </div>
    </>
  )
}

export default App
