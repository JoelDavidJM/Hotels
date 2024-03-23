import { useForm } from "react-hook-form"
import iseCrud from "../../hook/iseCrud";
import './style/formReviews.css'
import getDaysFromDates from "../../services/getDaysFromDates";

const FormReviews = ({reserSelect, setReserSelect}) => {

    const formReserve = getDaysFromDates(reserSelect?.checkIn, reserSelect?.checkOut)

    const {handleSubmit, register, reset} = useForm()

    const [ ,,createReviwes ] = iseCrud()

    const submit = data => {
        
        const obj = {
            ...data, 
            hotelId: reserSelect?.hotelId,
            rating: +data.rating
        }
        createReviwes('/reviews', obj)
        reset({
            rating: '5',
            comment: ''
        })
        setReserSelect()
    }

    const handleExit = () => {
        reset({
            rating: '',
            comment: ''
        })
        setReserSelect()
       }

       console.log(reserSelect);

  return (
    <div className={`form__container ${reserSelect || 'form__close'}`}>
        <div className="FormReviews__div__container">
           <h2 className="FormReviews__div__h2">Reviews</h2>
           <div>
            <img className="FormReviews__div__img" src={reserSelect?.hotel.images[0].url} alt="" />
           </div>
           <section>
            <h2 className="FormReviews__div__h2-name">{reserSelect?.hotel.name}</h2>
            <h4 className="FormReviews__div__h4">{reserSelect?.hotel.city.name}, {reserSelect?.hotel.city.country}</h4>
           </section>
        <div>
        <div className="FormReviews__div__container-info" ><span className="FormReviews__div__container__span">Reservation days:</span> <span className="FormReviews__div__container__reserve">{formReserve || ''}</span></div>
          <div className="FormReviews__div__container-info" ><span className="FormReviews__div__container__span">Subtotal Price: </span> <span  className="FormReviews__div__container__price">{(Number(reserSelect?.hotel.price) * formReserve) || ''}</span> </div>
        </div>
        <form className="FormReviews__div__form" onSubmit={handleSubmit(submit)} >
        <div className="form__X" onClick={handleExit}>X</div>
            <label className="FormReviews__div__label">
                <span className="FormReviews__div__span">Rating</span>
                <select {...register('rating')}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label className="FormReviews__div__label-comment" >
                <span className="FormReviews__div__span-title">Comments</span>
                <textarea className="FormReviews__div__text" {...register('comment')}/>
            </label>
            <button className="FormReviews__div__btn">Submit</button>
        </form> 
        </div>
        
    </div>
  )
}

export default FormReviews