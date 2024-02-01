import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelThunk } from "../store/states/hotel.pages"
import ListHotel from "../components/homePage/ListHotel"
import CitiesFilter from "../components/homePage/CitiesFilter"
import NameFilter from "../components/homePage/NameFilter"
import PriceFilter from "../components/homePage/PriceFilter"
import './style/HotelPages.css'


const HotelPages = () => {

  const [nameImput, setnameImput] = useState('')

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelThunk(url))
  }, [])

const hotelFiltered = hotels?.results.filter(hotelInfo => {
  const filterName = hotelInfo.name.toLowerCase().includes(nameImput)

  const priceHotel = +hotelInfo.price
  const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to

  return filterName && filterPrice
})

  return (
    <div >
      <NameFilter 
      setnameImput={setnameImput}
      />
      <div className="HotelPages-div"> 
      <div className="HotelPages__div__filter">
        <PriceFilter
      setFromTo={setFromTo}
      />
      <CitiesFilter/>
      </div>
         
      <ListHotel 
      hotels={hotelFiltered} 
      />
      </div>
     
      
    </div>
  )
}

export default HotelPages