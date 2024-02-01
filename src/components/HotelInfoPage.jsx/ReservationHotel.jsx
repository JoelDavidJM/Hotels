import { useForm } from "react-hook-form"
import iseCrud from "../../hook/iseCrud"
import './style/ReservationHotel.css'

const ReservationHotel = ({hotelId}) => {

    const {handleSubmit, register, reset} = useForm()

    const [ , , createReservation ] = iseCrud()

    const submit = data => {
        const obj = {
            ...data,
            hotelId
        }
        createReservation('/bookings', obj)
        reset({
          checkIn: '',
          checkOut: ''
        })
    }

  return (
    <div className="ReservationHotel__div">
        <h3 className="ReservationHotel__div__h3">Reservaiton</h3>
        <form className="ReservationHotel__div__form" onSubmit={handleSubmit(submit)}>
        <label className="ReservationHotel__div__label">
          <span className="ReservationHotel__div__span">Check-in</span>
          <input className="ReservationHotel__div__input" {...register('checkIn')} type="date" />
        </label>
        <label className="ReservationHotel__div__label">
          <span className="ReservationHotel__div__span">Check-out</span>
          <input className="ReservationHotel__div__input" {...register('checkOut')} type="date" />
        </label>
        <button className="ReservationHotel__div__btn">Submit</button>
      </form>
    </div>
  )
}

export default ReservationHotel