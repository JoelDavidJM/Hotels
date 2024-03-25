import HotelCard from "./HotelCard"
import './style/ListHotel.css'

const ListHotel = ({hotels}) => {
  console.log(hotels)
  return (
    <div className="card-container">
        {
          !hotels || hotels?.length === 0
          ? (
            <div className="card-container__div">
              <h2 className="card-container__div__h2">There are no hotels with this name</h2>
          <img className="card-container__div__img" src="https://gifdb.com/images/high/sad-disappointed-emoji-fe0odmcpuli6pcbx.gif" alt="" />
            </div>
          )
          : (
             hotels?.map(hotel => (
                <HotelCard
                key={hotel.id}
                hotel={hotel}
                />
            ))
          )
           
        }
    </div>
  )
}

export default ListHotel