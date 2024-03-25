import { useForm } from "react-hook-form"
import useAuth from "../hook/useAuth"
import './style/RegisterPages.css'

const RegisterPages = () => {

  const {handleSubmit, reset, register} = useForm()  
  
  const {createNewUser} = useAuth()
  
  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'other'
    })
  }

  return (
      <div className="registerPage__div" >
       
      <h2 className="registerPage__div__h2">Register</h2>
      <form className="registerPage__div__form" onSubmit={handleSubmit(submit)}>
        <label className="registerPage__div__label" >
          <span className="registerPage__div__span">First Name</span>
          <input className="registerPage__div__input" {...register('firstName')} type="text" />
        </label>
        <label className="registerPage__div__label" >
          <span className="registerPage__div__span">Last Name</span>
          <input className="registerPage__div__input" {...register('lastName')} type="text" />
        </label>
        <label className="registerPage__div__label" >
          <span className="registerPage__div__span">Email</span>
          <input className="registerPage__div__input" {...register('email')} type="email" />
        </label>
        <label className="registerPage__div__label" >
          <span className="registerPage__div__span">Password</span>
          <input className="registerPage__div__input" {...register('password')} type="password" />
        </label>
        <label className="registerPage__div__label">
          <span className="registerPage__div__span">Gender</span>
          <select className="registerPage__div__select" {...register('gender')}>
            <option className="registerPage__div__option" value="OTHER">Prefet not say</option>
            <option className="registerPage__div__option" value="MALE">Male</option>
            <option className="registerPage__div__option" value="FEMALE">Female</option>
          </select>
        </label>
        <button className="registerPage__div__btn" >Submit</button>
      </form>
    </div>
      
        
  )
}

export default RegisterPages