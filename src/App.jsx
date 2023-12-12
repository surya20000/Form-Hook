import './App.css'
import { useForm} from "react-hook-form"
import { useState } from 'react';

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [Done, ChechDone] = useState(false);

  const submit = (data) => {console.log(data) , ChechDone(true)}

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className='bod'>
        {Done? <span className='success'>Registration Successfull!!</span> : ""}
        <div className='form-body i'>
        <input type="text" placeholder='firstName' {...register('firstName', { required : "Please enter first name"})} className='field i'/>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input type="text" placeholder='lastName' {...register('lastName', { required : "Please enter last name"})} className='field i'/>
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <input type="text" placeholder='email' {...register('email', { required : "Please enter email" , pattern: {value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, message: "Please enter a valid email"}})} className='field i'/>
        {errors.email && <span>{errors.email.message}</span>}
        <input type="password" placeholder='password' {...register('password', { required : "Please enter password"})} className='field i'/>
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App;
