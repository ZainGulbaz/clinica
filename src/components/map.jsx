import { useRef } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import clinicsData from '../utils/data'
import { FaStar } from "react-icons/fa6";
import {Icon} from 'leaflet';
const position = clinicsData?.[0]?.coordinates;


export default function MapComponent({ clinics,scrollToDiv,scrollOutToDiv }) {

    const markerRef = useRef(null);


    const housingIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/25/25613.png',
        iconSize: [40,40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    })

    return (
        <>   <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", position: "sticky", top: 0, right: 0 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                clinics?.map((clinic,index) => <div><Marker position={clinic?.coordinates} icon={housingIcon}  ref={markerRef} eventHandlers={{ mouseover: ()=>scrollToDiv(index),mouseout:()=>scrollOutToDiv()}}>
                    {/* <Tooltip>
                        <span style={{ fontWeight: "bold", color: "#54B4D3", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>{clinic?.name}</span>
                        <div className='flex gap-1'>{Array.from({ length: clinic?.ratings })?.map(() => <FaStar color='#DAA520'/>)}</div>
                    </Tooltip> */}
                    
            {(clinics?.length == 1) && <style>
                {
                    `.leaflet-marker-icon {
                width:${"60px"} !important;
                height:${"60px"} !important;
              }`
                }

            </style>
            }
                </Marker></div>) 

            }

        </MapContainer>
        </>
    )
}