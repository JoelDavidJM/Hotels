import getDaysFromDates from "../../services/getDaysFromDates"
import './style/reserveCard.css'

const ReserveCard = ({reserve, deleteReservation, setReserSelect}) => {

   const reservationDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

   const handleDelete = () => {
    deleteReservation('/bookings', reserve.id)
   }

   const handleReviews = () => {
    setReserSelect(reserve)
   }

   console.log(reserve);

  return (
    <article className="reserveCard__article" >
        <header className="reserveCard__article__header" >
            <img className="reserveCard__article__img"  src={reserve.hotel.images[0].url} alt="" />
        </header>
    <section className="reserveCard__article__section" >
      <div>
         <h3 className="reserveCard__article__h3" >{reserve.hotel.name}</h3>
          <div className="reserveCard__article__div-name" >{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
          <div className="reserveCard__article__div-route" onClick={handleReviews}  >Rate and comment this visit...</div>
      </div>
      <div>
        <div className="reserveCard__article__div-info" ><span className="reserveCard__article__div__span">Reservation days:</span> <span className="reserveCard__article__div__reserve">{reservationDays}</span></div>
          <div className="reserveCard__article__div-info" ><span className="reserveCard__article__div__span">Subtotal Price: </span> <span  className="reserveCard__article__div__price">{Number(reserve.hotel.Price) * reservationDays}</span> </div>
          
      </div>
      <button className="reserveCard__article__btn" onClick={handleDelete}><i className='bx bx-trash'></i></button>
       </section>
        
    </article>
  )
}

export default ReserveCard