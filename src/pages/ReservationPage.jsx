import { useEffect, useState } from 'react'
import iseCrud from '../hook/iseCrud'
import ReserveCard from '../components/reservationPage/ReserveCard'
import './style/reservationPage.css'
import FormReviews from '../components/reservationPage/FormReviews'

const ReservationPage = () => {

    const [reserSelect, setReserSelect] = useState()
    
    const [reservation, getReservation, ,deleteReservation] = iseCrud()

    useEffect(() => {
        getReservation('/bookings')
    }, [])

  return (
    <div>
        <h2 className='Reservation-title'>Reservations</h2>
        {
           reservation?.map(form => (
            <FormReviews
            key={form.id}
            form={form}
            reserSelect={reserSelect}
            setReserSelect={setReserSelect}
            reservation={reservation}
            />
           ))
        }
        <div>
            {
                reservation?.map(reserve => (
                    <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    deleteReservation={deleteReservation}
                    setReserSelect={setReserSelect}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationPage