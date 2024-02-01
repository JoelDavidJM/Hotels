import { useForm } from "react-hook-form"
import useAuth from "../hook/useAuth"
import './style/LoginPages.css'

const LoginPages = () => {

  const {handleSubmit, reset, register} = useForm()

  const { loginUser } = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  if(localStorage.getItem('token')){
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="LoginPages__div__logout">
        <div className="LoginPages__div__logout__div">
        <h2 className="LoginPages__div__logout__h2">Welcome {firstName + ' ' + lastName}</h2>
        <button className="LoginPages__div__logout__btn" onClick={handleLogout}>Logout</button>
      </div>
      </div>
      
    )
  }

  return (
    <div className="LoginPages__div">
      <form className="LoginPages__div__form" onSubmit={handleSubmit(submit)}>
        <img className="LoginPages__div__img" src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-usuario-icono-de-ilustraci%C3%B3n-vectorial-sobre-fondo-negro.jpg" alt="" />
        <h3 className="LoginPages__div__h3">User</h3>
        <label className="LoginPages__div__label">
          <span className="LoginPages__div__span">Email</span>
          <input className="LoginPages__div__input" {...register('email')} type="email" />
        </label>
        <label className="LoginPages__div__label">
          <span className="LoginPages__div__span">Password</span>
          <input className="LoginPages__div__input" {...register('password')} type="password" />
        </label>
        <button className="LoginPages__div__btn">Submit</button>
      </form>
    </div>
  )
}

export default LoginPages