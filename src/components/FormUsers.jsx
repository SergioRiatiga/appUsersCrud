import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/formUser.css'

const FormUsers = ({createUser, updateInfo, updateUserById, setUpdateInfo, setIsCloseForm}) => {

  const {register, reset, handleSubmit} = useForm()

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])
  

  const submit = (data) => {
    if (updateInfo) {
      updateUserById('/users', data, updateInfo.id)
      setUpdateInfo()
    } else {
      createUser('/users', data)
    }
    
    reset({
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      birthday:'',
    })
    setIsCloseForm(true)
  }

  const handleExit = () => {
    reset({
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      birthday:'',
    })
    setIsCloseForm(true)
    setUpdateInfo()
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h1 className="form__title">{updateInfo?'Edit user':'New user'}</h1>
      <div onClick={handleExit} className="form__x"><i className='bx bx-x'></i></div>
      <div className="form__section">
        <label className="form__label" htmlFor="first_name">First Name</label>
        <input className="form__input" placeholder="E.g. John" {...register('first_name')} id="first_name" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="last_name">Last Name</label>
        <input className="form__input" placeholder="E.g. Doe" {...register('last_name')} id="last_name" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="email">E-mail</label>
        <input className="form__input" placeholder="E.g. example@mail.com" {...register('email')} id="email" type="email" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__input" {...register('password')} id="password" type="password" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__input" {...register('birthday')} id="birthday" type="date" />
      </div>
      <button className="form__btn"> {updateInfo?'Update':'Create'} </button>
    </form>
  );
};

export default FormUsers;
