import { useEffect } from "react"
import useFetch from "../../hook/useFetch"
import { getHotelThunk } from "../../store/states/hotel.pages"
import { useDispatch } from "react-redux"
import './style/CitiesFilter.css'

const CitiesFilter = () => {

  const url = 'https://hotels-api.academlo.tech/cities'
  const [cities, getCities] = useFetch(url)

  useEffect(() => {
    getCities()
  },[])

  const dispatch = useDispatch()

  const handleFilterCities = (id) => {
    let url = 'https://hotels-api.academlo.tech/hotels'
    if(id !== 'all cities') {
       url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
    }
    dispatch(getHotelThunk(url))
  }

  return (
    <div className="CitiesFilter__div">
      <h3 className="CitiesFilter__div__h3">Cities</h3>
      <ul className="CitiesFilter__div__ul">
        <li className="CitiesFilter__div__li" onClick={() => handleFilterCities('all cities')}>All cities</li>
        {
          cities?.map(city => (
            <li className="CitiesFilter__div__cities" onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CitiesFilter