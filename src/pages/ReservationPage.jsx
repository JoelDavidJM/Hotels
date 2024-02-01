import { useEffect } from 'react'
import iseCrud from '../hook/iseCrud'
import ReserveCard from '../components/reservationPage/ReserveCard'
import './style/reservationPage.css'

const ReservationPage = () => {
    
    const [reservation, getReservation, ,deleteReservation] = iseCrud()

    useEffect(() => {
        getReservation('/bookings')
    }, [])

  return (
    <div>
        <h2 className='Reservation-title'>Reservation</h2>
        <div>
            {
                reservation?.map(reserve => (
                    <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    deleteReservation={deleteReservation}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationPage