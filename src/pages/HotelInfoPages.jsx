import { useParams } from "react-router-dom"
import useFetch from "../hook/useFetch"
import { useEffect } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import OtherHotels from "../components/HotelInfoPage.jsx/OtherHotels"
import ReservationHotel from "../components/HotelInfoPage.jsx/ReservationHotel"
import SliderImag from "../components/HotelInfoPage.jsx/SliderImag"
import './style/HotelInfoPages.css'
import CommentSection from "../components/HotelInfoPage.jsx/CommentSection"

const HotelInfoPages = () => {

    const { id } = useParams()

    const url = `https://booking-hotel-api-gkqe.onrender.com/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])

console.log(hotel)

    return (
        <div className="HotelInfoPages__div">
            
            <header className="HotelInfoPages__div__header">
                <h2 className="HotelInfoPages__div__h2">{hotel?.name}</h2>
                <span className="HotelInfoPages__div__span-estrella">⭐⭐⭐⭐⭐</span>
            </header>
            <div className="HotelInfoPages__div-container">
              <div className="HotelInfoPages__div__h2">
                <SliderImag
                hotel={hotel}
                />
            </div>
            <div className="HotelInfoPages__div__map">
                {
                    hotel && (
                        <Map defaultCenter={[Number(hotel.lat), +hotel.lon]}  height={300} zoom={17} >

                            <ZoomControl />
                            <Marker
                            width={50}
                            height={50}
                            anchor={[Number(hotel.lat), +hotel.lon]} 
                            color="green"
                            />

                        </Map>
                    )
                }

            </div>  
            </div>
            <div className="HotelInfoPages__div__container__countries">
                <div className="HotelInfoPages__div__countries">
                    <span className="HotelInfoPages__div__span">{hotel?.name} </span>
                    <span className="HotelInfoPages__div__span">{hotel?.country}</span>
                </div>
                <div className="HotelInfoPages__div__address">
                    <i className='bx bx-map'></i>
                    <span className="HotelInfoPages__div__address__information">{hotel?.Address}</span>
                </div>
                <p className="HotelInfoPages__div__description">{hotel?.description}</p>
            </div>
                <CommentSection
                hotelId={hotel?.id}
                />
                {
                    localStorage.getItem('token') && (
                        <ReservationHotel
                        hotelId={hotel?.id}
                />
                    )
                }
                

            <OtherHotels 
            cityId={hotel?.id}
            hotelId={hotel?.id}
            />

        </div>
    )
}

export default HotelInfoPages