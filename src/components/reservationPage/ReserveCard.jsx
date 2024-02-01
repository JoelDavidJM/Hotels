import getDaysFromDates from "../../services/getDaysFromDates"
import './style/reserveCard.css'

const ReserveCard = ({reserve, deleteReservation}) => {

   const reservationDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

   const handleDelete = () => {
    deleteReservation('/bookings', reserve.id)
   }

   console.log(reserve);

  return (
    <article className="reserveCard__article">
        <header className="reserveCard__article__header">
            <img className="reserveCard__article__img" src={reserve.hotel.images[0].url} alt="" />
        </header>
    <section className="reserveCard__article__section">
        <h3 className="reserveCard__article__h3">{reserve.hotel.name}</h3>
          <div className="reserveCard__article__div__title">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
          <div className="reserveCard__article__div"><span className="reserveCard__article__div__span">Reservation days:</span> <span>{reservationDays}</span></div>
          <div className="reserveCard__article__div"><span className="reserveCard__article__div__span">Subtotal Price: </span> <span className="reserveCard__article__div__price">{Number(reserve.hotel.price) * reservationDays}</span> </div>
          <button className="reserveCard__article__btn" onClick={handleDelete}>Delete</button>
    </section>
        
    </article>
  )
}

export default ReserveCard