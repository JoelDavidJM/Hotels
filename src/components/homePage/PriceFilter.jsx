import { useForm } from "react-hook-form"
import './style/priceFilter.css'

const PriceFilter = ({setFromTo}) => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    const obj = {
      from: +data.from,
      to: +data.to === 0 ? Infinity : +data.to
    }
    setFromTo(obj)
    reset({
      from: '',
      to: ''
    })
  }

  return (
    <div className="priceFilter__div">
      <h3 className="priceFilter__div__h3">Price</h3>
      <form className="priceFilter__div__form" onSubmit={handleSubmit(submit)}>
        <label className="priceFilter__div__label" >
          <span className="priceFilter__div__span">From</span>
          <input className="priceFilter__div__input" {...register('from')} type="number" />
        </label>
        <label className="priceFilter__div__label" >
          <span className="priceFilter__div__span">To</span>
          <input className="priceFilter__div__input" {...register('to')} type="number" />
        </label>
        <button className="priceFilter__div__btn">Apply</button>
      </form>
    </div>
  )
}

export default PriceFilter