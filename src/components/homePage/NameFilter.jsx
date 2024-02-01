import { useRef } from "react"
import './style/NameFilter.css'

const NameFilter = ({setnameImput}) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setnameImput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''
  }

  return (
    <form className="NameFilter__form" onSubmit={handleSubmit}>
      <input className="NameFilter__form__input" ref={inputSearch} type="text" />
      <button className="NameFilter__form__btn">Search</button>
    </form>
  )
}

export default NameFilter