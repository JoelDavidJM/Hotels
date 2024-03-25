import { useEffect } from "react"
import useFetch from "../../hook/useFetch"
import HotelCard from "../homePage/HotelCard"
import './style/OtherHotels.css'

const OtherHotels = ({cityId, hotelId}) => {

    const url = `https://booking-api-tgb4.onrender.com/hotels?cityId=${cityId}`
    const [ hotels, getHotels ] = useFetch(url)

    useEffect(() => {
        if(cityId) {
          getHotels()  
        }
    },[cityId])

    console.log(hotels);

  return (
    <div>
        <h2 className="OtherHotels__div__h2">Other Hotels in <span>{hotels?.[0].city.name}</span></h2>
        <div className="card-container">
            {
                hotels?.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (
                    <HotelCard
                    key={hotelInfo.id}
                    hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default OtherHotels